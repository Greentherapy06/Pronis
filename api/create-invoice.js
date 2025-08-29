// api/create-invoice.js
export default async function handler(req, res) {
  try {
    // Autoriser ton site et ton domaine Vercel
    const ORIGINS = [
      'https://green-therapy.pt',
      'https://green-therapy-cbd.vercel.app'
    ];
    const origin = req.headers.origin || "";
    if (ORIGINS.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(200).end();

    // Récupération du montant
    const q = req.method === "GET" ? req.query : req.body;
    const amount = parseFloat(q.amount || 0);
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Montant invalide" });
    }

    const orderId = `GT-${Date.now()}`;

    // Appel API NowPayments
    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "x-api-key": process.env.NOWPAY_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: "EUR",
        order_id: orderId,
        order_description: "Commande Green-Therapy",
        is_fee_paid_by_user: true,
        success_url: "https://green-therapy.pt/merci.html",
        cancel_url: "https://green-therapy.pt/erreur.html"
      })
    });

    const data = await r.json();
    if (!r.ok || !data.invoice_url) {
      return res.status(r.status || 400).json({
        error: "Erreur NowPayments",
        detail: data
      });
    }

    // OK → on retourne l’URL de paiement
    return res.status(200).json({ invoice_url: data.invoice_url });

  } catch (e) {
    return res.status(500).json({ error: "server_error", detail: String(e) });
  }
}
