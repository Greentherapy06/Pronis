// api/methods.js
export default function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "https://green-therapy.pt");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  const base = "https://green-therapy-cbd.vercel.app"; // ton domaine Vercel
  res.status(200).json([
    {
      id: "crypto",
      name: "Payer en Crypto (NOWPayments)",
      checkoutUrl: `${base}/api/checkout`,
    },
  ]);
}
