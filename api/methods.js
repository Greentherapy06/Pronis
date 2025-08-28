// /api/methods.js
export default function handler(req, res) {
  res.status(200).json([
    {
      id: "crypto",
      name: "Payer en Crypto (NOWPayments)",
      // Snipcart fera un GET sur cette URL (dans un iframe)
      checkoutUrl: "https://green-therapy-cbd.vercel.app/api/checkout"
      // si ton domaine prod est autre, remplace par ton vrai domaine Vercel
    }
  ]);
}
