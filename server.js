const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

// Endpoint appelé par Snipcart pour les paiements
app.post("/payment", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Création de la commande sur Viva Wallet
    const vivaResp = await axios.post(
      "https://www.vivapayments.com/api/orders",
      {
        amount: amount * 100, // Viva Wallet prend le montant en centimes
        currencyCode: currency || "EUR",
        sourceCode: process.env.VIVA_SOURCE_CODE
      },
      {
        auth: {
          username: process.env.VIVA_MERCHANT_ID,
          password: process.env.VIVA_API_KEY
        }
      }
    );

    res.json({
      success: true,
      transactionId: vivaResp.data.orderCode
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ success: false, error: "Erreur paiement Viva" });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Gateway Viva Wallet pour Snipcart OK ✅");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
