// /api/checkout.js
export default async function handler(req, res) {
  try {
    // 1) Récupérer le montant (€) depuis Snipcart
    // Snipcart n’envoie pas toujours le body en GET.
    // On accepte GET et POST :
    let amount;
    if (req.method === 'POST') {
      amount = Number(req.body?.amount);
    } else {
      // Tentative en GET via ?amount= ou ?total=
      amount = Number(req.query.amount || req.query.total);
    }
    if (!amount || isNaN(amount) || amount <= 0) {
      return res
        .status(200)
        .send(`<html><body style="font:16px sans-serif;padding:24px">
          Montant introuvable. Retournez au paiement et réessayez.
        </body></html>`);
    }

    // 2) Créer la facture NOWPayments
    const r = await fetch('https://api.nowpayments.io/v1/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NOWPAY_API_KEY
      },
      body: JSON.stringify({
        price_amount: amount,
        price_currency: 'EUR',
        pay_currency: 'USDT',
        order_id: 'GT-' + Date.now(),
        success_url: process.env.SITE_BASE_URL + '/?crypto=success',
        cancel_url: process.env.SITE_BASE_URL + '/?crypto=cancel'
      })
    });

    const data = await r.json();
    const url = data.invoice_url || data.url;

    // 3) En GET, on redirige le navigateur ; en POST on renvoie du JSON
    if (req.method === 'GET') {
      if (url) {
        res.writeHead(302, { Location: url });
        return res.end();
      }
      return res
        .status(200)
        .send(`<html><body style="font:16px sans-serif;padding:24px">
          Paiement crypto indisponible. Réessayez plus tard.
        </body></html>`);
    } else {
      return res.status(200).json({ url });
    }
  } catch (e) {
    return res.status(200).send(
      `<html><body style="font:16px sans-serif;padding:24px">
        Erreur paiement crypto. Réessayez plus tard.
      </body></html>`
    );
  }
}
