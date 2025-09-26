const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

// Middleware pour lire le corps des requêtes
app.use(bodyParser.json());

// Servir les fichiers statiques depuis la racine
app.use(express.static(path.join(__dirname)));

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Ta clé API VivaWallet
const vivaWalletApiKey = "9uK3FAqsq7W6PrQreRUjXX4uV0tqwR";

// Route pour créer le paiement VivaWallet
app.post("/create-payment", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const response = await axios.post(
      "https://demo.vivapayments.com/api/orders", // Vérifie si tu veux sandbox ou prod
      {
        amount: amount, // en cents, ex: 1000 = 10,00€
        currencyCode: currency, 
        sourceCode: "Default", // ton sourceCode VivaWallet
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(vivaWalletApiKey).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Impossible de créer le paiement" });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
