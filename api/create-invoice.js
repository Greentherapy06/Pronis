// api/create-invoice.js
export default async function handler(req, res) {
  try {
    // --- Autoriser ton site ---
    const ORIGINS = [
      'https://green-therapy.pt',
      'https://green-therapy-cbd.vercel.app'
    ];
    const origin = req.headers.origin || "";
    if (ORIGINS.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();

    // --- Récupération montant + devise ---
    const q = req.method === 'GET' ? req.query : req.body;
    const amount = parseFloat(q.amount || 0);
    const currency = (q.currency || "EUR").toUpperCase();

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Montant invalide" });
    }

    const orderId = `GT-${Date.now()}`;

    // --- Appel NowPayments ---
    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "x-api-key": process.env.NOWPAY_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: currency,
        order_id: orderId,
        order_description: "Commande Green-Therapy",
        success_url: "https://green-therapy.pt/merci.html",
        cancel_url: "https://green-therapy.pt/erreur.html",
        is_fee_paid_by_user: true
      }),
    });

    const data = await r.json();

    if (!r.ok || !data.invoice_url) {
      return res.status(r.status || 400).json({
        error: "Erreur NowPayments",
        detail: data,
      });
    }

    // --- Retourne l’URL de paiement ---
    return res.status(200).json({ invoice_url: data.invoice_url });

  } catch (e) {
    return res.status(500).json({
      error: "server_error",
      detail: String(e),
    });
  }
}
