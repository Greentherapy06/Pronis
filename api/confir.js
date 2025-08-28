// api/confirm.js
export default function handler(req, res) {
  res.status(200).json({ message: "Paiement confirmé" });
}
