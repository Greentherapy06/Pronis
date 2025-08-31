// /api/create-invoice.js
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { amount, currency = "EUR", orderId, description } = req.body || {};
    if (!process.env.NOWPAYMENTS_API_KEY) {
      return res.status(500).json({ error: 'NOWPAYMENTS_API_KEY manquante' });
    }
    if (!amount) return res.status(400).json({ error: "amount requis" });

    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NOWPAYMENTS_API_KEY,
      },
      body: JSON.stringify({
        price_amount: Number(amount),
        price_currency: currency,
        order_id: orderId || `order_${Date.now()}`,
        order_description: description || "Paiement boutique",
        success_url: "https://green-therapy-cbd.vercel.app/success",
        cancel_url: "https://green-therapy-cbd.vercel.app/cancel",
        ipn_callback_url: "https://green-therapy-cbd.vercel.app/api/nowpayments-ipn",
        is_fixed_rate: true,
        is_fee_paid_by_user: true
      }),
    });

    const data = await r.json();
    if (!r.ok) return res.status(400).json(data);
    return res.status(200).json({ invoice_url: data.invoice_url, id: data.id });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
