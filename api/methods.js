// api/methods.js
export default function handler(req, res) {
  // --- CORS ---
  res.setHeader("Access-Control-Allow-Origin", "https://green-therapy.pt");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  // Domaine backend Vercel
  const base = "https://green-therapy-cbd.vercel.app";

  // On expose juste la méthode crypto
  res.status(200).json([
    {
      id: "crypto",
      name: "Payer en Crypto (NOWPayments)",
      checkoutUrl: `${base}/api/create-invoice`, // ✅ corrigé (plus de /api/checkout)
    },
  ]);
}
