// /api/nowpayments-ipn.js
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  try {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const raw = Buffer.concat(chunks).toString('utf8');
    const payload = JSON.parse(raw || '{}');

    console.log('NOWPayments IPN reçu:', payload);

    // Exemple de traitement : vérifier le statut
    // if (payload.payment_status === 'finished' || payload.payment_status === 'confirmed') {
    //   // TODO: marquer la commande comme payée dans ta DB
    // }

    res.status(200).end('OK');
  } catch (e) {
    console.error('Erreur IPN:', e);
    res.status(400).end('Bad Request');
  }
}
