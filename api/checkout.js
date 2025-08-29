// api/checkout.js
export default async function handler(req, res) {
  try {
    // Construit l'URL de ton autre fonction
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://green-therapy-cbd.vercel.app";

    const url = `${baseUrl}/api/create-invoice${req.url.replace("/api/checkout", "")}`;

    // Propage la requête
    const r = await fetch(url, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
      body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
    });

    const data = await r.json();
    res.status(r.status).json(data);

  } catch (e) {
    res.status(500).json({ error: "checkout_proxy_failed", detail: String(e) });
  }
}
