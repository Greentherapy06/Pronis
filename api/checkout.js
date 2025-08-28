// /api/checkout.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { amount } = req.body;              // <- montant attendu
    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ error: "Montant manquant" });
    }

    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NOWPAY_API_KEY,   // clé NowPayments dans Vercel
      },
      body: JSON.stringify({
        price_amount: Number(amount),
        price_currency: "EUR",
        pay_currency: "USDT",
        order_id: "GT-" + Date.now(),
        success_url: "https://green-therapy.pt/?crypto=success",
        cancel_url: "https://green-therapy.pt/?crypto=cancel",
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return res.status(502).json({ error: "NOWPayments: " + err });
    }

    const data = await r.json();
    return res.status(200).json({ invoice_url: data.invoice_url || data.url });
  } catch (e) {
    return res.status(500).json({ error: "Impossible de créer la facture" });
  }
}
