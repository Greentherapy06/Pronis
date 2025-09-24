const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

// Endpoint appelé par Snipcart pour les paiements
app.post("/payment", async (req, res) => {
  console.log("Requête reçue sur /payment :", req.body);

  try {
    const { amount, currency } = req.body;

    // Test : on simule une commande Viva Wallet
    const orderCode = "TEST-" + Date.now();

    console.log("Order créé :", orderCode);

    res.json({
      success: true,
      transactionId: orderCode
    });
  } catch (err) {
    console.error("Erreur :", err);
    res.status(500).json({ success: false, error: "Erreur paiement Viva" });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Gateway Viva Wallet pour Snipcart OK ✅");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
