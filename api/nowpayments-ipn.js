// /api/nowpayments-ipn.js
export const config = { api: { bodyParser: false } }; // si tu veux vérifier la signature brute

export default async function handler(req, res) {
  try {
    // Si besoin, lis la signature dans req.headers['x-nowpayments-sig']
    // Puis parse le JSON :
    const buffers = [];
    for await (const chunk of req) buffers.push(chunk);
    const raw = Buffer.concat(buffers).toString('utf8');
    const payload = JSON.parse(raw);

    // payload.payment_status peut être: finished, confirmed, failed, etc.
    // À la réception de finished/confirmed, marque ta commande “payée”
    // (par ex. via ton backend, Firestore, sheet, etc.)
    console.log('NOWPayments IPN:', payload);

    res.status(200).end('OK');
  } catch (e) {
    res.status(400).end('Bad Request');
  }
}
