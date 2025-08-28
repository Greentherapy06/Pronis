// api/methods.js
export default function handler(req, res) {
  res.status(200).json([
    {
      id: "crypto",
      name: "Payer en Crypto (NOWPayments)",
      checkoutUrl: "/api/checkout"
    }
  ]);
}
