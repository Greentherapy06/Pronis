export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Logique pour traiter le paiement crypto ici
    res.status(200).json({ message: "Paiement reçu" });
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
