const fetch = require("node-fetch");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { invoiceNumber, total, currency } = req.body;

    const amount = Math.round(parseFloat(total) * 100);
    const orderId = invoiceNumber || `order-${Date.now()}`;
    const currencyCode = currency || "EUR";

    const vivaResponse = await fetch("https://www.vivapayments.com/api/orders", {
      method: "POST",
      headers: {
        "Authorization": "Basic " + Buffer.from(process.env.VIVA_API_KEY + ":").toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Amount: amount,
        CurrencyCode: currencyCode,
        MerchantOrderId: orderId,
        SourceCode: "Default", // Vérifie dans ton compte Viva Wallet
      }),
    });

    const vivaData = await vivaResponse.json();

    if (!vivaResponse.ok) {
      console.error("Erreur Viva Wallet:", vivaData);
      return res.status(500).json({ error: "Impossible de créer le paiement Viva Wallet" });
    }

    const paymentUrl = vivaData?.TransactionId
      ? `https://www.vivapayments.com/web/checkout/${vivaData.TransactionId}`
      : null;

    if (!paymentUrl) {
      return res.status(500).json({ error: "Impossible de récupérer l'URL de paiement" });
    }

    res.status(200).json({ url: paymentUrl });

  } catch (err) {
    console.error("Erreur serveur:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
