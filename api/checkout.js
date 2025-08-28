// api/checkout.js
export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "https://green-therapy.pt");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const amount = Number(req.body?.amount);
    if (!amount || isNaN(amount)) {
      return res
        .status(400)
        .json({ error: "Montant introuvable. Retournez au paiement et réessayez." });
    }

    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NOWPAY_API_KEY,
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: "EUR",
        pay_currency: "USDT",
        order_id: "GT-" + Date.now(),
        success_url: process.env.SITE_BASE_URL + "/?crypto=success",
        cancel_url: process.env.SITE_BASE_URL + "/?crypto=cancel",
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({ error: "NOWPayments erreur", details: t });
    }

    const j = await r.json();
    // on renvoie l'URL de facture à ouvrir côté client
    return res.status(200).json({ url: j.invoice_url || j.url });
  } catch (e) {
    return res.status(500).json({ error: "Impossible de créer la facture crypto" });
  }
}
