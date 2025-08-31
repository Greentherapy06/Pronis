// /api/create-invoice.js
export default async function handler(req, res) {
  // 1) Méthode
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 2) Clé API
  const API_KEY = process.env.NOWPAYMENTS_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({
      error: "NOWPAYMENTS_API_KEY manquante",
      hint: "Ajoute la variable d'environnement en Production ET Preview dans Vercel."
    });
  }

  try {
    // 3) Lecture & validation du corps
    const { amount, currency = "EUR", orderId, description } = req.body || {};
    const price = Number(amount);

    if (!amount || !isFinite(price) || price <= 0) {
      return res.status(400).json({
        error: "Paramètre 'amount' invalide",
        hint: "Envoie un nombre > 0 (ex: 9.90)."
      });
    }

    const payload = {
      price_amount: price,
      price_currency: String(currency || "EUR").toUpperCase(),
      order_id: orderId || `order_${Date.now()}`,
      order_description: description || "Pagamento loja",
      success_url: "https://green-therapy-cbd.vercel.app/success",
      cancel_url:  "https://green-therapy-cbd.vercel.app/cancel",
      ipn_callback_url: "https://green-therapy-cbd.vercel.app/api/nowpayments-ipn",
      is_fixed_rate: true,
      is_fee_paid_by_user: true
    };

    // 4) Appel NOWPayments
    const r = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify(payload)
    });

    // 5) Tentative parse JSON (ou texte brut si non-JSON)
    const text = await r.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    // 6) Gestion des erreurs explicites
    if (!r.ok) {
      // Exemple d'erreurs fréquentes :
      // 401 -> Invalid API key
      // 400 -> mauvais paramètre (currency non supportée, montant, etc.)
      console.error("NOWPayments error:", r.status, data);
      return res.status(r.status).json({
        error: data?.message || data?.error || "NOWPayments error",
        details: data
      });
    }

    // 7) OK -> renvoyer l'URL de facture
    const invoiceUrl = data?.invoice_url;
    if (!invoiceUrl) {
      console.error("Réponse NOWPayments sans invoice_url:", data);
      return res.status(502).json({
        error: "Réponse NOWPayments invalide (pas d'invoice_url)",
        details: data
      });
    }

    return res.status(200).json({
      invoice_url: invoiceUrl,
      id: data?.id || null
    });
  } catch (e) {
    console.error("create-invoice exception:", e);
    return res.status(500).json({ error: "Server error", details: e?.message || String(e) });
  }
}
