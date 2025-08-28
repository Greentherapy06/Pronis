// /api/checkout.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { amount } = req.body; // <-- on lit bien amount depuis le body

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: "Montant introuvable" });
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
        pay_currency: "USDT", // ou BTC/ETH
        order_id: "GT-" + Date.now(),
        success_url: process.env.SITE_BASE_URL + "/?crypto=success",
        cancel_url: process.env.SITE_BASE_URL + "/?crypto=cancel",
      }),
    });

    const data = await r.json();

    if (!r.ok) {
      throw new Error(data.message || "Erreur NowPayments");
    }

    return res.status(200).json({ url: data.invoice_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible de créer la facture crypto" });
  }
}
