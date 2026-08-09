const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * API Checkout Stripe — Les Jardins Enchantés
 *
 * Tout le calcul monétaire (sous-total, réduction, livraison) est effectué
 * ICI, côté serveur, à partir des prix officiels stockés dans Stripe.
 * Le navigateur n'envoie que des identifiants de prix (priceId) et un e-mail :
 * il ne peut donc jamais influencer le montant réellement facturé.
 *
 * Règles métier :
 *  - Réduction de bienvenue : 10 % sur la 1re commande uniquement, une seule
 *    fois par client (identifié par son e-mail). Vérifiée avant la session.
 *  - Livraison : offerte dès 75 € de produits (avant livraison), sinon 6,90 €.
 */

// ── Paramètres métier (centralisés pour faciliter la maintenance) ──
const FREE_SHIPPING_THRESHOLD_CENTS = 7500; // 75,00 € : seuil de livraison offerte
const SHIPPING_FEE_CENTS = 690;             // 6,90 €  : frais de livraison standard
const WELCOME_DISCOUNT_PERCENT = 10;        // 10 %    : réduction 1re commande

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Body : { cart: [{ priceId, quantity }], email }
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const cart = body.cart;
    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ error: "Cart empty or invalid" });
    }

    // E-mail requis : sert d'identifiant unique pour l'anti-abus de la remise.
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      return res.status(400).json({ error: "Valid email required" });
    }

    // On ne garde que les articles ayant un priceId Stripe valide.
    const validItems = cart.filter(
      (item) => item && typeof item.priceId === "string"
    );
    if (validItems.length === 0) {
      return res.status(400).json({ error: "No valid products in cart" });
    }

    // ── 1) line_items + calcul du sous-total (source de vérité = Stripe) ──
    // On récupère le prix officiel de chaque priceId directement dans Stripe.
    // Impossible pour le client de falsifier un montant.
    const line_items = [];
    let subtotalCents = 0;

    // Cache des prix récupérés pour éviter les appels API en double.
    const priceCache = {};

    for (const item of validItems) {
      const quantity =
        Number.isInteger(item.quantity) && item.quantity > 0
          ? item.quantity
          : 1;

      let price = priceCache[item.priceId];
      if (!price) {
        // Récupère le prix officiel depuis Stripe (montant + devise fiables).
        price = await stripe.prices.retrieve(item.priceId);
        priceCache[item.priceId] = price;
      }

      // unit_amount est en centimes ; on refuse tout prix non exploitable.
      if (!price || typeof price.unit_amount !== "number") {
        return res
          .status(400)
          .json({ error: "Invalid price for a cart item" });
      }

      subtotalCents += price.unit_amount * quantity;
      line_items.push({ price: item.priceId, quantity });
    }

    // ── 2) Anti-abus : le client a-t-il déjà eu la remise de bienvenue ? ──
    // Vérification EXCLUSIVEMENT côté serveur, via le Customer Stripe (e-mail).
    // Le webhook (checkout.session.completed) pose metadata.welcome_discount_used
    // = "true" après un paiement où la remise a été appliquée.
    let welcomeDiscountEligible = false;
    try {
      const existing = await stripe.customers.list({ email, limit: 1 });
      const customer = existing.data[0];
      const alreadyUsed =
        customer &&
        customer.metadata &&
        customer.metadata.welcome_discount_used === "true";
      // Éligible seulement si aucun client existant n'a déjà utilisé la remise.
      welcomeDiscountEligible = !alreadyUsed;
    } catch (lookupErr) {
      // En cas d'échec de la vérification, on n'accorde PAS la remise (fail-safe).
      console.error("Customer lookup error:", lookupErr);
      welcomeDiscountEligible = false;
    }

    // ── 3) Réduction : coupon 10 % à usage unique, créé à la volée ──
    let discounts = undefined;
    if (welcomeDiscountEligible) {
      const coupon = await stripe.coupons.create({
        percent_off: WELCOME_DISCOUNT_PERCENT,
        duration: "once",
        name: "Bienvenue -10% (1re commande)",
      });
      discounts = [{ coupon: coupon.id }];
    }

    // ── 4) Frais de livraison (calculés sur le sous-total AVANT livraison) ──
    // Offerte dès 75 € de produits, sinon 6,90 €.
    const shippingIsFree = subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS;
    const shipping_options = [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: shippingIsFree ? 0 : SHIPPING_FEE_CENTS,
            currency: "eur",
          },
          display_name: shippingIsFree
            ? "Livraison offerte"
            : "Livraison standard",
        },
      },
    ];

    // Origine (pour les URLs de retour), sécurisée via les en-têtes.
    const origin =
      req.headers.origin ||
      (req.headers.host ? `https://${req.headers.host}` : null);
    if (!origin) {
      return res.status(400).json({ error: "Missing origin" });
    }

    // ── 5) Création de la session Stripe ──
    // ── 2 bis) Récapitulatif des articles (variante choisie incluse) ──
    // Les Price ID Stripe ne portent PAS la variante choisie par le client
    // (couleur du tanga, taille d'un textile) : elle n'existe que dans le nom
    // envoyé par le panier. On le recopie ici pour qu'il apparaisse sur le
    // paiement dans le tableau de bord Stripe, sinon la commande arrive sans
    // l'information et le colis ne peut pas être préparé correctement.
    // Purement informatif : n'influence AUCUN montant (les prix viennent de Stripe).
    let articlesSummary = "";
    const articlesMetadata = {};
    try {
      const counts = new Map();
      for (const item of validItems) {
        const label = String(item.name || "Article")
          .replace(/[\r\n\t]+/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim()
          .slice(0, 120);
        const qty =
          Number.isInteger(item.quantity) && item.quantity > 0
            ? item.quantity
            : 1;
        counts.set(label, (counts.get(label) || 0) + qty);
      }

      const parts = [];
      counts.forEach(function (qty, label) {
        parts.push(qty + " x " + label);
      });
      articlesSummary = parts.join(" | ").slice(0, 500);

      // Limites Stripe : 500 caractères par valeur de métadonnée.
      let bucket = "";
      let chunk = 0;
      for (const part of parts) {
        if (bucket && bucket.length + 3 + part.length > 500) {
          chunk += 1;
          articlesMetadata["articles_" + chunk] = bucket;
          bucket = "";
          if (chunk >= 10) break;
        }
        bucket = bucket ? bucket + " | " + part : part.slice(0, 500);
      }
      if (bucket && chunk < 10) {
        articlesMetadata["articles_" + (chunk + 1)] = bucket;
      }
    } catch (metaErr) {
      // Un récapitulatif illisible ne doit JAMAIS empêcher un paiement.
      console.error("Articles metadata error:", metaErr);
    }

    const session = await stripe.checkout.sessions.create({
      // ── Moyens de paiement dynamiques (P1-15) ──
      // On n'impose plus payment_method_types: ["card"]. En l'omettant, Stripe
      // affiche automatiquement les moyens activés dans le tableau de bord et
      // compatibles avec le montant, la devise et le pays du client : carte,
      // Apple Pay, Google Pay, Link, et les moyens locaux si tu les actives.
      // Le réglage se fait donc chez Stripe, plus en dur dans le code.
      mode: "payment",
      line_items,
      // Réduction appliquée par Stripe (le montant facturé reste maître).
      discounts,
      // Frais de livraison calculés côté serveur.
      shipping_options,
      // Pré-remplit l'e-mail pour cohérence avec la vérification anti-abus.
      customer_email: email,
      // Crée/associe un Customer afin que le webhook puisse le verrouiller.
      customer_creation: "always",
      // ── Collecte des coordonnées complètes du client ──
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: [
          // France + Monaco + Union européenne uniquement (cf. CGV art. 8).
          "FR", "MC", "BE", "LU", "DE", "ES", "IT", "PT", "NL",
          "AT", "IE", "DK", "SE", "FI",
        ],
      },
      phone_number_collection: { enabled: true },
      // Champs personnalisés : prénom + nom séparés
      custom_fields: [
        {
          key: "prenom",
          label: { type: "custom", custom: "Prénom" },
          type: "text",
          optional: false,
        },
        {
          key: "nom",
          label: { type: "custom", custom: "Nom de famille" },
          type: "text",
          optional: false,
        },
      ],
      // Récapitulatif lisible directement sur le paiement (tableau de bord).
      payment_intent_data: {
        description: articlesSummary || undefined,
        metadata: articlesMetadata,
      },
      // Métadonnées lues par le webhook pour verrouiller la remise APRÈS paiement.
      metadata: Object.assign(
        {
          welcome_discount_applied: welcomeDiscountEligible ? "true" : "false",
          customer_email: email,
        },
        articlesMetadata
      ),
      success_url: `${origin}/success.html`,
      cancel_url: `${origin}/cancel.html`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return res.status(500).json({ error: err.message });
  }
};
