// api/stripe/webhook.js
// Webhook Stripe : verrouille la réduction de bienvenue APRÈS un paiement réussi.
//
// Rôle : quand une session Checkout est payée (événement checkout.session.completed),
// on marque le Customer avec metadata.welcome_discount_used = "true" SI la remise
// avait été appliquée. Ainsi, la réduction de 10 % ne peut être utilisée qu'UNE
// SEULE FOIS par client (vérification faite dans checkout.js avant chaque session).
//
// SÉCURITÉ :
//  - La signature Stripe est vérifiée (constructEvent) avec le secret du webhook.
//  - Le body doit être lu BRUT (raw) : on désactive donc le bodyParser de Vercel.
//  - Aucune donnée sensible n'est exposée.

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Désactive le parsing automatique du body : Stripe exige le corps brut
// pour vérifier la signature du webhook.
module.exports.config = {
  api: {
    bodyParser: false,
  },
};

// Lit le corps brut de la requête (nécessaire à la vérification de signature).
function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers["stripe-signature"];

  let event;
  try {
    const rawBody = await readRawBody(req);
    // Vérifie l'authenticité de l'événement (protège contre les faux appels)
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("Signature webhook invalide:", err.message);
    return res.status(400).json({ error: "Signature invalide" });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // La remise n'est verrouillée que si elle avait été appliquée à cette session
      const discountApplied =
        session.metadata && session.metadata.welcome_discount_applied === "true";

      // Identifiant du client : soit le Customer rattaché, soit son e-mail
      const customerId = session.customer;
      const email =
        (session.customer_details && session.customer_details.email) ||
        (session.metadata && session.metadata.customer_email);

      if (discountApplied) {
        if (customerId) {
          // On marque le Customer : il ne pourra plus rebénéficier de la remise
          await stripe.customers.update(customerId, {
            metadata: { welcome_discount_used: "true" },
          });
        } else if (email) {
          // Filet de sécurité : retrouver/créer le Customer par e-mail
          const list = await stripe.customers.list({ email: email.toLowerCase(), limit: 1 });
          const cust = list.data[0]
            ? list.data[0]
            : await stripe.customers.create({ email: email.toLowerCase() });
          await stripe.customers.update(cust.id, {
            metadata: { welcome_discount_used: "true" },
          });
        }
      }
    }

    // On répond 200 pour accuser réception à Stripe
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("Erreur traitement webhook:", err);
    // 500 => Stripe réessaiera l'envoi automatiquement
    return res.status(500).json({ error: "Erreur interne" });
  }
};
