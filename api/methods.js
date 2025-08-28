export default function handler(req, res) {
  res.status(200).json([
    { id: 'crypto', name: 'Payer en crypto (NOWPayments)', checkoutUrl: 'https://green-therapy-cbd.vercel.app/api/checkout' }
  ]);
}
