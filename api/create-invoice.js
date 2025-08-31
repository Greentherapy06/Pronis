// /api/create-invoice.js
export default async function handler(req, res) {
  try {
    const { amount, currency = "EUR", orderId, description } = req.body || {};
    if (!amount) return res.status(400).json({ error: "amount requis" });

    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NOWPAYMENTS_API_KEY,
      },
      body: JSON.stringify({
        price_amount: Number(amount),
        price_currency: currency,     // EUR, USD, etc.
        order_id: orderId || `order_${Date.now()}`,
        order_description: description || "Paiement boutique",
        success_url: "https://ton-domaine/success",
        cancel_url: "https://ton-domaine/cancel",
        ipn_callback_url: "https://ton-domaine/api/nowpayments-ipn",
        is_fixed_rate: true,
        is_fee_paid_by_user: true
      }),
    });

    const data = await r.json();
    if (!r.ok) return res.status(400).json(data);
    // data.invoice_url = URL de paiement, data.id = id invoice
    return res.status(200).json({ invoice_url: data.invoice_url, id: data.id });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
