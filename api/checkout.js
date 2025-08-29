// api/checkout.js
export default async function handler(req, res) {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://green-therapy-cbd.vercel.app";

  const url = `${baseUrl}/api/create-invoice${req.url.replace("/api/checkout", "")}`;

  const r = await fetch(url, {
    method: req.method,
    headers: { "Content-Type": "application/json" },
  });

  const data = await r.json();
  res.status(r.status).json(data);
}
