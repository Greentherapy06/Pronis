/**
 * compliance.js - Les Jardins Enchantés
 * ----------------------------------------
 * Gestion conformité légale :
 *  1. Vérification d'âge 18+ (modal bloquant)
 *  2. Bandeau cookies RGPD/CNIL avec gestion du consentement Google Analytics
 *
 * Le script s'auto-exécute. Inclure en début de <body>, AVANT le chargement de gtag.
 * GA est bloqué tant que le consentement n'est pas explicitement donné.
 */
(function () {
  'use strict';

  // ============================================================
  // CONFIG
  // ============================================================
  var AGE_STORAGE_KEY = 'lje_age_verified';
  var AGE_STORAGE_DAYS = 30;
  var COOKIE_STORAGE_KEY = 'lje_cookie_consent';
  var COOKIE_STORAGE_DAYS = 180; // CNIL : 6 mois max
  var GA_ID = 'G-15REBJRSHP';
  var REDIRECT_IF_MINOR = 'https://www.google.com';

  // ============================================================
  // UTILS
  // ============================================================
  function setStored(key, value, days) {
    try {
      var payload = { v: value, exp: Date.now() + days * 86400000 };
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (e) {}
  }
  function getStored(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      var p = JSON.parse(raw);
      if (!p || !p.exp || Date.now() > p.exp) {
        localStorage.removeItem(key);
        return null;
      }
      return p.v;
    } catch (e) { return null; }
  }

  // ============================================================
  // GOOGLE ANALYTICS - chargement différé après consentement
  // ============================================================
  function loadGoogleAnalytics() {
    if (window.__lje_ga_loaded) return;
    window.__lje_ga_loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  // ============================================================
  // STYLES (inline pour ne pas dépendre du CSS principal)
  // ============================================================
  function injectStyles() {
    if (document.getElementById('lje-compliance-styles')) return;
    var css = ''
      + '.lje-overlay{position:fixed;inset:0;background:rgba(15,10,5,0.95);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"Cormorant Garamond",Georgia,serif;animation:lje-fade-in 0.4s ease}'
      + '@keyframes lje-fade-in{from{opacity:0}to{opacity:1}}'
      + '.lje-modal{background:#1a1208;border:1px solid #a8884d;color:#e8d9b0;max-width:480px;width:100%;padding:48px 32px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5)}'
      + '.lje-modal h2{font-size:28px;font-weight:300;letter-spacing:3px;margin:0 0 8px;color:#d4af6a;text-transform:uppercase}'
      + '.lje-modal .lje-sub{font-size:12px;letter-spacing:4px;color:#a8884d;text-transform:uppercase;margin-bottom:24px}'
      + '.lje-modal .lje-divider{width:60px;height:1px;background:#a8884d;opacity:0.5;margin:0 auto 24px}'
      + '.lje-modal p{font-size:15px;line-height:1.7;margin:0 0 28px;color:#c9b896;font-family:Inter,Arial,sans-serif;font-weight:300}'
      + '.lje-btn-row{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}'
      + '.lje-btn{flex:1 1 140px;padding:14px 24px;font-size:11px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;border:1px solid #a8884d;background:transparent;color:#d4af6a;transition:all 0.3s;font-family:Inter,Arial,sans-serif;font-weight:400}'
      + '.lje-btn:hover{background:#a8884d;color:#1a1208}'
      + '.lje-btn-primary{background:#a8884d;color:#1a1208}'
      + '.lje-btn-primary:hover{background:#d4af6a;border-color:#d4af6a}'
      + '.lje-legal{font-size:10px;color:#8a7560;margin-top:24px;letter-spacing:1px;font-family:Inter,Arial,sans-serif}'
      + '.lje-cookie-bar{position:fixed;bottom:0;left:0;right:0;background:#1a1208;border-top:1px solid #a8884d;color:#e8d9b0;padding:20px 24px;z-index:99998;font-family:Inter,Arial,sans-serif;animation:lje-slide-up 0.5s ease;box-shadow:0 -10px 30px rgba(0,0,0,0.4)}'
      + '@keyframes lje-slide-up{from{transform:translateY(100%)}to{transform:translateY(0)}}'
      + '.lje-cookie-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:space-between}'
      + '.lje-cookie-text{flex:1 1 320px;font-size:13px;line-height:1.6;color:#c9b896;font-weight:300}'
      + '.lje-cookie-text a{color:#d4af6a;text-decoration:underline}'
      + '.lje-cookie-btns{display:flex;gap:10px;flex-wrap:wrap}'
      + '.lje-cookie-btns .lje-btn{flex:0 0 auto;padding:10px 18px;font-size:10px}'
      + '@media(max-width:600px){.lje-modal{padding:32px 20px}.lje-modal h2{font-size:22px}.lje-cookie-inner{flex-direction:column;align-items:stretch}.lje-cookie-btns{justify-content:stretch}.lje-cookie-btns .lje-btn{flex:1 1 0}}';
    var s = document.createElement('style');
    s.id = 'lje-compliance-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  // ============================================================
  // AGE GATE
  // ============================================================
  function showAgeGate(onAccept) {
    document.body.style.overflow = 'hidden';
    var overlay = document.createElement('div');
    overlay.className = 'lje-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'lje-age-title');
    overlay.innerHTML = ''
      + '<div class="lje-modal">'
      + '  <div class="lje-sub">Les Jardins Enchantés</div>'
      + '  <h2 id="lje-age-title" data-i18n="age_title">Accès Réservé</h2>'
      + '  <div class="lje-divider"></div>'
      + '  <p data-i18n="age_body">Ce site présente des produits réservés à un public adulte.<br>Vous devez avoir au moins <strong>18 ans</strong> pour y accéder.</p>'
      + '  <div class="lje-btn-row">'
      + '    <button type="button" class="lje-btn lje-btn-primary" id="lje-age-yes" data-i18n="age_yes">J\'ai 18 ans ou plus</button>'
      + '    <button type="button" class="lje-btn" id="lje-age-no" data-i18n="age_no">Je suis mineur</button>'
      + '  </div>'
      + '  <div class="lje-legal" data-i18n="age_legal">Conformément à l\'article 227-24 du Code pénal.</div>'
      + '</div>';
    document.body.appendChild(overlay);
    try { if (typeof window.applyTranslations === "function") window.applyTranslations(); } catch (e) {}

    document.getElementById('lje-age-yes').addEventListener('click', function () {
      setStored(AGE_STORAGE_KEY, true, AGE_STORAGE_DAYS);
      document.body.style.overflow = '';
      overlay.remove();
      if (typeof onAccept === 'function') onAccept();
    });
    document.getElementById('lje-age-no').addEventListener('click', function () {
      window.location.replace(REDIRECT_IF_MINOR);
    });
  }

  // ============================================================
  // COOKIE BANNER
  // ============================================================
  function showCookieBanner() {
    var bar = document.createElement('div');
    bar.className = 'lje-cookie-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Bandeau de consentement aux cookies');
    bar.innerHTML = ''
      + '<div class="lje-cookie-inner">'
      + '  <div class="lje-cookie-text">'
      + '    Nous utilisons des cookies de mesure d\'audience (Google Analytics) pour améliorer votre expérience. '
      + '    Vous pouvez accepter ou refuser librement. '
      + '    <a href="cookies.html">En savoir plus</a>'
      + '  </div>'
      + '  <div class="lje-cookie-btns">'
      + '    <button type="button" class="lje-btn" id="lje-cookie-refuse">Tout refuser</button>'
      + '    <button type="button" class="lje-btn lje-btn-primary" id="lje-cookie-accept">Tout accepter</button>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(bar);

    document.getElementById('lje-cookie-accept').addEventListener('click', function () {
      setStored(COOKIE_STORAGE_KEY, 'accepted', COOKIE_STORAGE_DAYS);
      bar.remove();
      loadGoogleAnalytics();
    });
    document.getElementById('lje-cookie-refuse').addEventListener('click', function () {
      setStored(COOKIE_STORAGE_KEY, 'refused', COOKIE_STORAGE_DAYS);
      bar.remove();
    });
  }

  // ============================================================
  // ORCHESTRATION
  // ============================================================
  function start() {
    injectStyles();
    var ageOK = getStored(AGE_STORAGE_KEY) === true;
    var cookieChoice = getStored(COOKIE_STORAGE_KEY);

    function afterAgeOK() {
      if (cookieChoice === 'accepted') {
        loadGoogleAnalytics();
      } else if (cookieChoice === null) {
        showCookieBanner();
      }
      // si 'refused', on ne fait rien jusqu'à expiration
    }

    if (!ageOK) {
      showAgeGate(afterAgeOK);
    } else {
      afterAgeOK();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();


/* ============================================================
 * RETRACTATION EN LIGNE (conformite loi du 19 juin 2026)
 * Injecte le lien "Renoncer au contrat" dans le footer de TOUTES
 * les pages. Le footer etant code en dur dans chaque page (pas de
 * composant global), on ajoute le lien ici, dans le seul script
 * deja charge partout. Idempotent + lisible (aucun dark pattern).
 * ============================================================ */
(function () {
  'use strict';
  function injectRetractationLink() {
    var footer = document.querySelector('footer.footer') || document.querySelector('footer');
    if (!footer) return;
    if (footer.querySelector('a[href="retractation.html"], a[href="/retractation"]')) return;
    var a = document.createElement('a');
    a.href = 'retractation.html';
    a.textContent = 'Renoncer au contrat';
    footer.appendChild(document.createTextNode(' '));
    footer.appendChild(a);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectRetractationLink);
  } else {
    injectRetractationLink();
  }
})();
