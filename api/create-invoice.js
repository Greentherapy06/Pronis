// /api/create-invoice.js
export default async function handler(req, res) {
  // Autoriser uniquement ton domaine + Vercel
  const ORIGINS = [
    "https://green-therapy.pt",
    "https://green-therapy-cbd.vercel.app"
  ];
  const origin = req.headers.origin || "";
  res.setHeader("Access-Control-Allow-Origin", ORIGINS.includes(origin) ? origin : ORIGINS[0]);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const q = req.method === "GET" ? req.query : (req.body || {});
    const rawAmount = q.amount !== undefined ? q.amount : null;
    const amount = rawAmount ? parseFloat(String(rawAmount).replace(",", ".")) : 0;
    const currency = String(q.currency || "EUR").toUpperCase();

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Montant requis" });
    }

    const orderId = `GT-${Date.now()}`;

    // Appel NowPayments
    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "x-api-key": process.env.NOWPAY_API_KEY || "", // ta clé API dans Vercel
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: currency,
        order_id: orderId,
        order_description: "Commande Green-Therapy",
        is_fee_paid_by_user: true,
        success_url: "https://green-therapy.pt/#/checkout",
        cancel_url: "https://green-therapy.pt/#/checkout",
      }),
    });

    const data = await r.json();
    if (!r.ok || !data.invoice_url) {
      return res.status(r.status || 400).json({
        error: "nowpayments_error",
        detail: data,
      });
    }

    return res.status(200).json({ invoice_url: data.invoice_url });
  } catch (e) {
    return res.status(500).json({ error: "server_error", detail: String(e) });
  }
}
