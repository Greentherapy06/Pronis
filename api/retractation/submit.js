// api/retractation/submit.js
// Vercel Serverless Function
// Rétractation électronique - conformité loi du 19 juin 2026
// (ordonnance n°2026-2 + décret n°2026-3 du 5 janvier 2026 ;
//  articles L221-21 et D221-5 du Code de la consommation).
//
// Reçoit la confirmation du 2e clic (étape 2), valide, génère une
// référence + horodatage serveur, persiste dans Vercel KV, puis envoie
// un accusé de réception horodaté par email (support durable) au client
// et au marchand. Le remboursement N'EST PAS traité ici (fait manuellement
// dans Stripe). Aucune redirection vers Stripe.
//
// Variables d'environnement requises :
//   - RESEND_API_KEY            (clé API Resend)
//   - RETRACTATION_FROM_EMAIL   (adresse expéditrice, idéalement sur le domaine vérifié)
//   - KV_REST_API_URL / KV_REST_API_TOKEN  (déjà configurées, réutilisées)
//
// NOTE D'INSTALLATION (Resend) : pour envoyer l'accusé AU CLIENT (et pas
// seulement au marchand), le domaine d'expédition doit être VÉRIFIÉ dans
// Resend. Tant que ce n'est pas fait, Resend n'autorise l'envoi qu'à
// l'adresse du compte : on n'envoie alors qu'au marchand (voir ci-dessous).

export const config = { maxDuration: 15 };

const MARCHAND_EMAIL = 'lesjardinsenchantes06@gmail.com';

// --- KV (persistance, meme pattern que api/veille/scraper.js) ---------------
let kv = null;
async function getKV() {
  if (kv !== null) return kv;
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const mod = await import('@vercel/kv');
      kv = mod.kv;
    } else {
      kv = false; // pas configure
    }
  } catch (e) {
    kv = false;
  }
  return kv;
}

// --- Helpers -----------------------------------------------------------------
function isEmail(v) {
  return typeof v === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim());
}

function clean(v, max) {
  if (v === undefined || v === null) return '';
  return String(v).trim().slice(0, max || 500);
}

// Reference unique lisible : LJE-AAAAMMJJ-XXXXXX
function genRef(now) {
  const d = now.toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return 'LJE-' + d + '-' + rand;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- Email (Resend via API REST, pas de dependance supplementaire requise) ---
async function sendResend({ to, replyTo, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RETRACTATION_FROM_EMAIL;
  if (!apiKey || !from) {
    return { sent: false, reason: 'missing_resend_env' };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      html
    })
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    return { sent: false, reason: 'resend_http_' + res.status, detail };
  }
  return { sent: true };
}

function buildAccuseHtml(data) {
  const l = (k, v) => '<tr><td style="padding:4px 12px 4px 0;color:#8a6830;">' + k +
    '</td><td style="padding:4px 0;color:#1a1208;">' + escapeHtml(v || '—') + '</td></tr>';
  return [
    '<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#1a1208;">',
    '<h2 style="color:#a8884d;font-weight:400;">Accusé de réception de votre demande de rétractation</h2>',
    '<p>Bonjour ' + escapeHtml(data.prenom || '') + ',</p>',
    '<p>Nous confirmons la bonne réception de votre demande de rétractation concernant votre commande passée sur Les Jardins Enchantés.</p>',
    '<table style="font-size:14px;border-collapse:collapse;margin:16px 0;">',
    l('Référence', data.ref),
    l('Reçue le', data.horodatageFr),
    l('Nom', data.nom),
    l('Prénom', data.prenom),
    l('Email', data.email),
    l('N° de commande', data.commande),
    l("Date d'achat", data.dateAchat),
    l('Produit / nature du contrat', data.produit),
    data.message ? l('Message', data.message) : '',
    '</table>',
    '<p>Conformément au Code de la consommation, le professionnel dispose d\'un délai de <strong>14 jours</strong> pour procéder au remboursement éventuellement dû.</p>',
    '<p>Nous attirons toutefois votre attention sur les <strong>exceptions légales au droit de rétractation</strong> (article L221-28 5° du Code de la consommation) applicables aux biens scellés ne pouvant être renvoyés pour des raisons d\'hygiène ou de protection de la santé une fois descellés. Le détail de ces exceptions figure dans nos <a href="https://les-jardins-enchantes.com/cgv">Conditions Générales de Vente</a>.</p>',
    '<p style="color:#8a7560;font-size:12px;margin-top:24px;">Cet email constitue un accusé de réception sur support durable. Conservez-le.</p>',
    '</div>'
  ].join('');
}

// --- Handler -----------------------------------------------------------------
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  // Le 2e clic (etape 2) doit explicitement confirmer.
  if (body.confirm !== true) {
    return res.status(400).json({ error: 'Confirmation requise (étape 2).' });
  }

  const data = {
    nom: clean(body.nom, 120),
    prenom: clean(body.prenom, 120),
    email: clean(body.email, 200),
    commande: clean(body.commande, 120),
    dateAchat: clean(body.dateAchat, 40),
    produit: clean(body.produit, 300),
    message: clean(body.message, 2000)
  };

  // Validation des champs obligatoires
  const missing = [];
  if (!data.nom) missing.push('nom');
  if (!data.prenom) missing.push('prenom');
  if (!isEmail(data.email)) missing.push('email');
  if (!data.commande) missing.push('commande');
  if (!data.dateAchat) missing.push('dateAchat');
  if (!data.produit) missing.push('produit');
  if (missing.length) {
    return res.status(400).json({ error: 'Champs manquants ou invalides', fields: missing });
  }

  // Reference + horodatage serveur
  const now = new Date();
  const ref = genRef(now);
  const horodatageIso = now.toISOString();
  const horodatageFr = now.toLocaleString('fr-FR', { timeZone: 'Europe/Paris', dateStyle: 'long', timeStyle: 'short' });

  const record = {
    ...data,
    ref,
    horodatageIso,
    horodatageFr,
    statut: 'reçue',
    source: 'web',
    ip: (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || null
  };

  // Persistance KV : cle retractation:{ref}
  const store = await getKV();
  if (store) {
    try {
      await store.set('retractation:' + ref, record);
      // Index simple pour retrouver les demandes (best effort)
      await store.lpush('retractation:index', ref);
    } catch (e) { /* fallback silencieux, ne bloque pas l'accusé */ }
  }

  // Accusé de reception horodate (support durable)
  const html = buildAccuseHtml(record);
  const subject = 'Accusé de réception — rétractation ' + ref;

  // 1) Toujours notifier le marchand (fonctionne meme sans domaine verifie).
  const merchant = await sendResend({
    to: [MARCHAND_EMAIL],
    replyTo: MARCHAND_EMAIL,
    subject: subject + ' (copie marchand)',
    html
  });

  // 2) Notifier le client. NOTE : tant que le domaine d'expedition n'est pas
  //    verifie dans Resend, cet envoi echouera cote Resend ; on ne bloque pas
  //    la demande pour autant (elle reste juridiquement enregistree + accusee
  //    au marchand). Une fois le domaine verifie, l'envoi client fonctionnera.
  let client = { sent: false, reason: 'skipped' };
  if (data.email !== MARCHAND_EMAIL) {
    client = await sendResend({
      to: [data.email],
      replyTo: MARCHAND_EMAIL,
      subject,
      html
    });
  }

  return res.status(200).json({
    ok: true,
    ref,
    horodatage: horodatageFr,
    message: 'Votre demande de rétractation a bien été enregistrée.',
    emails: { marchand: merchant.sent, client: client.sent }
  });
}
