// api/create-payment.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { items, customer, currency } = req.body;

    // Calcul du montant total en centimes (VivaWallet travaille en cents)
    const amount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const amountInCents = Math.round(amount * 100);

    // Clé API stockée dans Vercel (jamais côté front-end)
    const VIVA_API_KEY = process.env.VIVA_API_KEY;

    // Création de la commande chez VivaWallet
    const vivaResponse = await fetch("https://demo.vivapayments.com/api/orders", { 
      // Remplace demo par prod pour réel
      method: "POST",
      headers: {
        "Authorization": `Bearer ${VIVA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInCents,
        currency: currency || "EUR",
        customer: {
          email: customer.email,
          fullName: customer.name
        },
        // URL de retour après paiement
        redirectUrl: "https://ton-site.com/merci" 
      }),
    });

    const vivaData = await vivaResponse.json();

    // Vérifie si VivaWallet a renvoyé l'URL de paiement
    if (!vivaData.paymentUrl) {
      return res.status(500).json({ error: "Impossible de créer le paiement VivaWallet" });
    }

    // Renvoie à Snipcart l'URL où rediriger le client
    res.status(200).json({
      redirectUrl: vivaData.paymentUrl,
      status: "ok"
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}
