import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body;

    const response = await fetch('https://www.vivapayments.com/api/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${process.env.VIVA_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
