import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, productName } = req.body;

    // 🔑 Ta clé API Viva Wallet
    const API_KEY = "9uK3FAqsq7W6PrQreRUjXX4uV0tqwR";
    const API_URL = "https://demo.vivapayments.com"; // change à production plus tard

    // Création du paiement
    const paymentRes = await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // montant en cents
        currencyCode: "EUR",
        sourceCode: "Default",
        description: productName,
        allowRecurring: false
      })
    });

    const paymentData = await paymentRes.json();

    if (!paymentRes.ok) {
      return res.status(paymentRes.status).json({ error: paymentData });
    }

    // Retourne l’URL de paiement Viva Wallet
    res.status(200).json({ paymentUrl: paymentData.PaymentUrl });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
