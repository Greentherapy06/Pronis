export default async function handler(req, res) {
  try {
    // Snipcart envoie des données en POST, on récupère le body
    const body = req.body;
    console.log("Fonction paiement appelée");
    
    // Vérifiez que le publicToken est présent (indique une requête valide Snipcart)
    if (!body || !body.publicToken) {
      return res.status(400).json({ error: "publicToken manquant" });
    }

    // Ici, vous pourriez appeler l’API privée Snipcart pour valider le token
    // (exemple fictif, à adapter avec votre clé API secrète et votre appel réseau)
    // const validation = await fetch('https://app.snipcart.com/api/request/validate', { method: 'POST', ... });

    // Si tout est ok, retournez la méthode de paiement et un message
    return res.status(200).json({
      paymentMethods: ["crypto"],
      message: "Validation réussie, prêt pour paiement crypto"
    });
  } catch (error) {
    // En cas d'erreur, on log et renvoie un message générique
    console.error('Erreur dans la fonction paiement:', error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
