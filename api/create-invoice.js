export default async function handler(req, res) {
  try {
    const { amount, currency = 'EUR', orderId = `GT-${Date.now()}` } = req.query;
    if (!amount) return res.status(400).json({ error: 'amount required' });

    const r = await fetch('https://api.nowpayments.io/v1/invoice', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.NOWPAY_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_amount: parseFloat(amount),
        price_currency: currency,
        order_id: orderId,
        order_description: 'Commande Green-Therapy',
        is_fee_paid_by_user: true,
        success_url: 'https://green-therapy-673xifnal-greentherapy06s-projects.vercel.app/',
        cancel_url: 'https://green-therapy-673xifnal-greentherapy06s-projects.vercel.app/',
      }),
    });

    const data = await r.json();
    if (!r.ok || !data.invoice_url) return res.status(400).json(data);
    return res.status(200).json({ invoice_url: data.invoice_url });
  } catch (e) {
    return res.status(500).json({ error: 'server_error', detail: String(e) });
  }
}
