// /api/checkout.js
export default async function handler(req, res) {
  if (req.method === "GET") {
    // Petite page "pont" exécutée dans l'iframe Snipcart
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.send(`<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial">
  <p id="msg">Veuillez patienter…</p>
  <script>
  (async () => {
    try {
      // Récupère le total depuis le store Snipcart présent dans l'iframe
      const st = window.Snipcart?.store?.getState?.();
      const total = (st?.cart?.grandTotal ?? st?.cart?.total ?? 0);
      if (!total || Number(total) <= 0) {
        document.getElementById('msg').textContent =
          "Montant introuvable. Retournez au paiement et réessayez.";
        return;
      }
      const r = await fetch(window.location.pathname, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ amount: Number(total) })
      });
      const j = await r.json();
      if (j?.url) {
        window.location.replace(j.url);
      } else {
        document.getElementById('msg').textContent =
          "Erreur: " + (j?.error || "Impossible de créer la facture crypto.");
      }
    } catch (e) {
      document.getElementById('msg').textContent = "Erreur: " + e.message;
    }
  })();
  </script>
</body></html>`);
  }

  if (req.method === "POST") {
    try {
      const { amount } = req.body || {};
      if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: "Montant invalide" });
      }

      // === NOWPayments ===
      const NOWPAY_API_KEY = process.env.NOWPAY_API_KEY;
      const SITE_BASE_URL = process.env.SITE_BASE_URL || "https://green-therapy.pt";

      const r = await fetch("https://api.nowpayments.io/v1/invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": NOWPAY_API_KEY
        },
        body: JSON.stringify({
          price_amount: Number(amount),
          price_currency: "EUR",
          pay_currency: "USDT",          // change si tu préfères BTC/ETH…
          order_id: "GT-" + Date.now(),
          success_url: SITE_BASE_URL + "/?crypto=success",
          cancel_url:  SITE_BASE_URL + "/?crypto=cancel"
        })
      });

      if (!r.ok) {
        const t = await r.text();
        return res.status(502).json({ error: "NOWPayments a refusé la requête", details: t });
      }
      const j = await r.json();
      const invoiceUrl = j.invoice_url || j.invoiceUrl || j.url;
      if (!invoiceUrl) return res.status(500).json({ error: "Pas d'URL de facture retournée" });

      return res.status(200).json({ url: invoiceUrl });
    } catch (err) {
      return res.status(500).json({ error: "Création facture crypto impossible" });
    }
  }

  // Fallback
  res.status(405).json({ error: "Méthode non autorisée" });
}
