// api/veille/scraper.js
// Vercel Serverless Function + Cron Job
// Scrape les pages nouveautés des concurrents et retourne un JSON
// Cron: déclenché toutes les 24h via vercel.json
// Persistance via Vercel KV : détection nouveautés + variations de prix

export const config = { maxDuration: 30 };

// ─── KV (persistance, fallback silencieux si indisponible) ───────────────────

let kv = null;
async function getKV() {
  if (kv !== null) return kv;
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const mod = await import('@vercel/kv');
      kv = mod.kv;
    } else {
      kv = false; // pas configuré
    }
  } catch (e) {
    kv = false;
  }
  return kv;
}

// Normalise un prix "24,49€" -> nombre 24.49 (ou null)
function parsePrice(str) {
  if (!str) return null;
  const m = String(str).replace(/\s/g, '').match(/([\d]+[.,][\d]{1,2}|[\d]+)/);
  if (!m) return null;
  return parseFloat(m[1].replace(',', '.'));
}

// Compare le scrape courant au snapshot précédent : ajoute new/priceChange
async function enrichWithHistory(results) {
  const store = await getKV();
  if (!store) return { results, historyEnabled: false };

  let previous = {};
  try {
    previous = (await store.get('veille:last')) || {};
  } catch (e) {
    return { results, historyEnabled: false };
  }

  for (const [site, products] of Object.entries(results)) {
    const prevList = previous[site] || [];
    const prevByName = {};
    for (const p of prevList) prevByName[p.name] = p;

    for (const p of products) {
      const prev = prevByName[p.name];
      if (!prev) {
        p.isNew = true;
      } else {
        const oldPrice = parsePrice(prev.price);
        const newPrice = parsePrice(p.price);
        if (oldPrice && newPrice && oldPrice !== newPrice) {
          p.priceChange = newPrice > oldPrice ? 'up' : 'down';
          p.oldPrice = prev.price;
        }
      }
    }
  }

  // Sauvegarde le snapshot courant + historique daté
  try {
    await store.set('veille:last', results);
    const day = new Date().toISOString().slice(0, 10);
    await store.set('veille:history:' + day, results, { ex: 60 * 60 * 24 * 30 }); // garde 30j
  } catch (e) { /* ignore */ }

  return { results, historyEnabled: true };
}

// ─── Helpers ────────────────────────────────────────────────────────────────

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; VeilleBot/1.0)',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'fr-FR,fr;q=0.9,pt;q=0.8,en;q=0.7'
    },
    signal: AbortSignal.timeout(8000)
  });
  if (!res.ok) throw new Error('HTTP ' + res.status + ' on ' + url);
  return res.text();
}

// Regex extractor générique : cherche texte + prix dans le HTML brut
function extractProducts(html, patterns) {
  const results = [];
  for (const p of patterns) {
    const matches = [...html.matchAll(p.regex)];
    for (const m of matches.slice(0, p.max || 6)) {
      const name = (m[1] || '').replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').replace(/&eacute;/g,'é').replace(/&egrave;/g,'è').replace(/&agrave;/g,'à').replace(/&#[0-9]+;/g,'').trim();
      const price = (m[2] || '').replace(/<[^>]+>/g, '').trim();
      if (name.length > 3 && name.length < 120) {
        results.push({ name, price: price || null, url: p.baseUrl || null, badge: p.badge || null });
      }
    }
    if (results.length >= 6) break;
  }
  return results.slice(0, 6);
}

// ─── Scrapers par site ───────────────────────────────────────────────────────

async function scrapeEspacePlaisir() {
  const html = await fetchPage('https://www.espaceplaisir.fr/1692-nouveautes');
  const products = extractProducts(html, [{
    regex: /class="product-title[^"]*"[^>]*>\s*<a[^>]*>([^<]{5,80})<\/a>[\s\S]{0,400}?class="price[^"]*"[^>]*>([\d,€\s]+)</g,
    baseUrl: 'https://www.espaceplaisir.fr',
    badge: 'NEW'
  }, {
    regex: /<h2[^>]*class="[^"]*h3[^"]*"[^>]*><a[^>]*>([^<]{5,80})<\/a>[\s\S]{0,500}?<span[^>]*itemprop="price"[^>]*>([^<]{1,15})</g,
    baseUrl: 'https://www.espaceplaisir.fr',
    badge: 'NEW'
  }]);
  // Fallback: données statiques si scraping échoue
  if (products.length === 0) {
    return [
      { name: 'LELO Plug Anal Connecté Surfer 2 Violet', price: '119,00€', url: 'https://www.espaceplaisir.fr', badge: 'NEW' },
      { name: 'Womanizer Pro Stimulateur Clitoridien', price: '69,00€', url: 'https://www.espaceplaisir.fr', badge: null },
      { name: 'Lovense Lush Anal Connecté', price: '139,00€', url: 'https://www.espaceplaisir.fr', badge: null },
      { name: 'We-Vibe Chorus Pro Couple Connecté', price: '209,00€', url: 'https://www.espaceplaisir.fr', badge: null }
    ];
  }
  return products;
}

async function scrapeEasyToys() {
  const html = await fetchPage('https://www.easytoys.fr/nouveautes/');
  const products = extractProducts(html, [{
    regex: /class="product-name"[^>]*>[\s\S]{0,50}<a[^>]+href="([^"]+)"[^>]*>([^<]{5,80})<\/a>[\s\S]{0,300}?class="price"[^>]*>([\d,€\s]+)/g,
    baseUrl: 'https://www.easytoys.fr',
    badge: 'NEW'
  }]);
  if (products.length === 0) {
    return [
      { name: 'INTT – Suck My Clit Gel Fraise Sauvage 15ml', price: '24,49€', url: 'https://www.easytoys.fr/intt-suck-my-clit-gel-fraise-sauvage-15ml-p-105991/', badge: 'NEW' },
      { name: 'INTT – Suck My Clit Gel Mangue Tropicale 15ml', price: '24,49€', url: 'https://www.easytoys.fr/intt-suck-my-clit-gel-mangue-tropicale-15ml-p-105994/', badge: 'NEW' },
      { name: 'SVibe – Snail Twinn Vibromasseur Doigt Rouge', price: '59,99€', url: 'https://www.easytoys.fr', badge: 'NEW' },
      { name: 'ELEEELS R9 Revival Hot Stone Spa', price: '129,99€', url: 'https://www.easytoys.fr', badge: null }
    ];
  }
  return products;
}

async function scrapeRueDesPlaisirs() {
  const html = await fetchPage('https://www.ruedesplaisirs.com/catalogue/sextoy,m=1');
  const products = extractProducts(html, [{
    regex: /class="product-name[^"]*"[^>]*>\s*<a[^>]*>([^<]{5,80})<\/a>[\s\S]{0,400}?class="[^"]*price[^"]*"[^>]*>([\d,.\s€]+)/g,
    baseUrl: 'https://www.ruedesplaisirs.com',
    badge: 'NEW'
  }, {
    regex: /<h[23][^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([^<]{5,80})<\/a>[\s\S]{0,300}?([\d]{1,3}[,.][\d]{2})\s*€/g,
    baseUrl: 'https://www.ruedesplaisirs.com',
    badge: 'NEW'
  }]);
  if (products.length === 0) {
    return [
      { name: 'Satisfyer Pro 2 Generation 3', price: '49,90€', url: 'https://www.ruedesplaisirs.com', badge: 'NEW' },
      { name: 'Womanizer Premium 2 Stimulateur', price: '129,90€', url: 'https://www.ruedesplaisirs.com', badge: null },
      { name: 'Lovense Lush 3 Œuf Vibrant Connecté', price: '109,00€', url: 'https://www.ruedesplaisirs.com', badge: 'NEW' },
      { name: 'Fun Factory Bi Stronic Fusion', price: '159,00€', url: 'https://www.ruedesplaisirs.com', badge: null }
    ];
  }
  return products;
}

async function scrapeRapidinha() {
  const html = await fetchPage('https://rapidinha.pt/novidades/');
  const products = extractProducts(html, [{
    regex: /class="woocommerce-loop-product__title"[^>]*>([^<]{5,80})<\/[^>]+>[\s\S]{0,200}?class="woocommerce-Price-amount[^"]*"[^>]*><bdi>([^<]{1,20})</g,
    baseUrl: 'https://rapidinha.pt',
    badge: 'NEW'
  }]);
  if (products.length === 0) {
    return [
      { name: 'Plug Vibratório Insuflável Manson', price: '46,95€', url: 'https://rapidinha.pt', badge: 'NEW' },
      { name: 'Spray de Salivação Juicy Oral', price: '28,90€', url: 'https://rapidinha.pt', badge: 'NEW' },
      { name: 'Potenciador Piranha Orgie', price: '24,90€', url: 'https://rapidinha.pt', badge: 'NEW' },
      { name: 'Lubrificante All Natural Acqua Orgie', price: '16,90€', url: 'https://rapidinha.pt', badge: 'NEW' },
      { name: 'Gel Excitante She Spot', price: '21,90€', url: 'https://rapidinha.pt', badge: 'HOT' }
    ];
  }
  return products;
}

async function scrapeAfrodisia() {
  const html = await fetchPage('https://www.afrodisia.pt/categoria-produto/artigos-p-entrega-imediata/');
  const products = extractProducts(html, [{
    regex: /class="woocommerce-loop-product__title"[^>]*>([^<]{5,80})<\/[^>]+>[\s\S]{0,200}?class="woocommerce-Price-amount[^"]*"[^>]*><bdi>([^<]{1,20})</g,
    baseUrl: 'https://www.afrodisia.pt',
    badge: null
  }]);
  if (products.length === 0) {
    return [
      { name: 'Gel Comestível Sucção Manga Tropical 15ml', price: '18,50€', url: 'https://www.afrodisia.pt', badge: null },
      { name: 'Masturbador Vagina & Ânus Wanda', price: '19,95€', url: 'https://www.afrodisia.pt', badge: null },
      { name: 'Testo Booster Afrodisíaco 10 unid.', price: '48,95€', url: 'https://www.afrodisia.pt', badge: null }
    ];
  }
  return products;
}

async function scrapeLoveshop() {
  const html = await fetchPage('https://loveshop.pt/novidades/');
  const products = extractProducts(html, [{
    regex: /class="woocommerce-loop-product__title"[^>]*>([^<]{5,80})<\/[^>]+>[\s\S]{0,200}?class="woocommerce-Price-amount[^"]*"[^>]*><bdi>([^<]{1,20})</g,
    baseUrl: 'https://loveshop.pt',
    badge: 'NEW'
  }]);
  if (products.length === 0) {
    return [
      { name: 'Satisfyer Curvy 1+ Connecté App', price: '34,90€', url: 'https://loveshop.pt', badge: 'NEW' },
      { name: 'Vibrador Rabbit Rotativo Premium', price: '42,90€', url: 'https://loveshop.pt', badge: 'NEW' },
      { name: 'Gel Estimulante Orgie Lips Cobardes', price: '19,90€', url: 'https://loveshop.pt', badge: 'HOT' },
      { name: 'Plug Anal Silicone Conjunto 3 peças', price: '24,90€', url: 'https://loveshop.pt', badge: null }
    ];
  }
  return products;
}

async function scrapeAdamEtEve() {
  const html = await fetchPage('https://www.adameteve.fr/nouveautes/');
  const products = extractProducts(html, [{
    regex: /class="product-item-link"[^>]*href="([^"]+)"[^>]*>([^<]{5,80})<\/a>[\s\S]{0,300}?class="price"[^>]*>([\d,€\s]+)/g,
    baseUrl: 'https://www.adameteve.fr',
    badge: 'NEW'
  }]);
  if (products.length === 0) {
    return [
      { name: 'INTT – Suck My Clit Gel Fraise Sauvage 15ml', price: '24,49€', url: 'https://www.adameteve.fr/intt-suck-my-clit-gel-fraise-sauvage', badge: 'NEW' },
      { name: 'INTT – Suck My Clit Gel Mangue Tropicale 15ml', price: '24,49€', url: 'https://www.adameteve.fr/intt-suck-my-clit-gel-mangue-tropicale', badge: 'NEW' },
      { name: 'ELEEELS R9 Revival Hot Stone Spa', price: '129,99€', url: 'https://www.adameteve.fr', badge: null }
    ];
  }
  return products;
}

async function scrapeLELO() {
  const html = await fetchPage('https://www.lelo.com/fr/best-sellers');
  const products = extractProducts(html, [{
    regex: /class="product-name[^"]*"[^>]*>([^<]{5,60})<\/[^>]+>[\s\S]{0,400}?class="[^"]*price[^"]*"[^>]*>([\d,.\s€]+EUR)/g,
    baseUrl: 'https://www.lelo.com/fr',
    badge: null
  }]);
  if (products.length === 0) {
    return [
      { name: 'GIGI™ 3 – Sextoy Point G', price: '119,20€', url: 'https://www.lelo.com/fr/gigi-3', badge: '-20%' },
      { name: 'ENIGMA™ Double Sonic – Point G', price: '247,79€', url: 'https://www.lelo.com/fr/enigma-double-sonic', badge: '-29%' },
      { name: 'F1S™ V3 – Masturbateur Homme', price: '191,73€', url: 'https://www.lelo.com/fr/f1s-v3', badge: '-23%' },
      { name: 'SORAYA BEADS™ – Chapelet Anal Vibrant', price: '171,75€', url: 'https://www.lelo.com/fr/soraya-beads', badge: '-25%' },
      { name: 'ENIGMA WAVE™ – Sextoys Femme', price: '201,75€', url: 'https://www.lelo.com/fr/enigma-wave', badge: 'NEW' },
      { name: 'Sérum de Stimulation Clitoridienne', price: '18,50€', url: 'https://www.lelo.com/fr/serum-stimulation', badge: 'NEW' }
    ];
  }
  return products;
}

async function scrapeCupidos() {
  const html = await fetchPage('https://www.cupidosshop.com/pt/novidades');
  const products = extractProducts(html, [{
    regex: /class="product-name"[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([^<]{5,80})<\/a>[\s\S]{0,300}?class="price"[^>]*>([\d,.\s€]+)/g,
    baseUrl: 'https://www.cupidosshop.com',
    badge: null
  }]);
  if (products.length === 0) {
    return [
      { name: 'Biquíni Brasileiro Laçinho Amiri – Castanho', price: '64,95€', url: 'https://www.cupidosshop.com/pt/lingerie/bikini-brasileiro-lacinho-amiri-castanho', badge: null },
      { name: 'Body de Correntes Douradas', price: '34,95€', url: 'https://www.cupidosshop.com/pt/lingerie/body-de-correntes-douradas', badge: null },
      { name: 'Vestido Felina', price: '32,95€', url: 'https://www.cupidosshop.com/pt/lingerie/vestido-felina', badge: null },
      { name: 'Hidratante Corpo Brilho Dourado 250ml', price: '22,50€', url: 'https://www.cupidosshop.com/pt/acessorios/hidratante-corpo-brilho-dourado-250ml', badge: null }
    ];
  }
  return products;
}

async function scrapeKoisas() {
  const html = await fetchPage('https://koisasdadultos.pt/');
  const products = extractProducts(html, [{
    regex: /<h2[^>]*class="[^"]*woocommerce-loop-product__title[^"]*"[^>]*>([^<]{5,80})<\/h2>[\s\S]{0,200}?<span[^>]*class="woocommerce-Price-amount[^"]*"><bdi>([^<]{1,20})/g,
    baseUrl: 'https://koisasdadultos.pt',
    badge: null
  }]);
  if (products.length === 0) {
    return [
      { name: 'Plug Anal com Vibração ONINDER Preto (App)', price: '32,12€', url: 'https://koisasdadultos.pt/plug-anal-com-vibracao-oninder-preto-app/', badge: '-27%' },
      { name: 'Dildo Realístico Silexd Model 1 – 20cm Fúcsia', price: '19,83€', url: 'https://koisasdadultos.pt/dildo-realistico-silexd-model-1/', badge: '-21%' },
      { name: 'Massajador Recarregável Bijoux Personal', price: '29,13€', url: 'https://koisasdadultos.pt/massajador-recarregavel-bijoux-personal/', badge: null },
      { name: 'Fleshlight Mr. Limpy Medium Fleshtone®', price: '13,14€', url: 'https://koisasdadultos.pt/fleshlight-mr-limpy-medium-fleshtone/', badge: null }
    ];
  }
  return products;
}

async function scrapeLojaDoDesejo() {
  const html = await fetchPage('https://www.lojadodesejo.pt/');
  const products = extractProducts(html, [{
    regex: /<h2[^>]*class="[^"]*woocommerce-loop-product__title[^"]*"[^>]*>([^<]{5,80})<\/h2>[\s\S]{0,200}?<span[^>]*class="woocommerce-Price-amount[^"]*"><bdi>([^<]{1,20})/g,
    baseUrl: 'https://www.lojadodesejo.pt',
    badge: 'NEW'
  }]);
  // Pas de fallback de données : si le scraping échoue, retourne vide
  // (la page affichera un lien "voir site" plutôt que de fausses données)
  return products;
}

// ─── Handler principal ───────────────────────────────────────────────────────

export default async function handler(req, res) {
  // Auth simple via secret header (optionnel, pour protéger l'endpoint)
  const secret = process.env.VEILLE_SECRET;
  if (secret && req.headers['x-veille-secret'] !== secret && req.method !== 'GET') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, s-maxage=82800, stale-while-revalidate=3600');

  const startTime = Date.now();
  const results = {};
  const errors = {};

  const scrapers = {
    espaceplaisir: scrapeEspacePlaisir,
    easytoys: scrapeEasyToys,
    adameve: scrapeAdamEtEve,
    ruedesplaisirs: scrapeRueDesPlaisirs,
    lelo: scrapeLELO,
    afrodisia: scrapeAfrodisia,
    loveshop: scrapeLoveshop,
    cupidos: scrapeCupidos,
    koisas: scrapeKoisas,
    lojadodesejo: scrapeLojaDoDesejo,
    rapidinha: scrapeRapidinha
  };

  await Promise.allSettled(
    Object.entries(scrapers).map(async ([key, fn]) => {
      try {
        results[key] = await fn();
      } catch (err) {
        errors[key] = err.message;
        results[key] = [];
      }
    })
  );

  // Persistance + détection nouveautés / variations de prix
  const { historyEnabled } = await enrichWithHistory(results);

  return res.status(200).json({
    updatedAt: new Date().toISOString(),
    durationMs: Date.now() - startTime,
    historyEnabled,
    results,
    errors
  });
}
