/* === Chargeur i18n automatique (ajouté pour la traduction multilingue) === */
(function () {
  function runI18n() {
    try { if (typeof initI18n === 'function') initI18n(); } catch (e) {}
  }
  if (typeof TRANSLATIONS !== 'undefined') { runI18n(); return; }
  if (!document.querySelector('script[src="/i18n.js"], script[src="i18n.js"]')) {
    var s = document.createElement('script');
    s.src = '/i18n.js';
    s.onload = runI18n;
    document.head.appendChild(s);
  }
})();

/* ============================================
cart.js – Système panier unifié
Les Jardins Enchantés
============================================ */

// ── Versioning du panier ──────────────────────
// Incrémente cette valeur à chaque modif de prix/produits Stripe
// pour purger automatiquement les anciens paniers obsolètes
// stockés dans le localStorage des clients.
const CART_VERSION = "v4-2026-05-27";

(function purgeOldCart() {
try {
const storedVersion = localStorage.getItem("cart_version");
if (storedVersion !== CART_VERSION) {
localStorage.removeItem("cart");
localStorage.setItem("cart_version", CART_VERSION);
}
} catch (e) { /* localStorage indispo, on ignore */ }
})();

// ── Lecture / écriture localStorage ──────────
function getCart() {
return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
localStorage.setItem("cart", JSON.stringify(cart));
}

// ── Mise à jour du compteur dans le header ────
function updateCartCount() {
const badge = document.getElementById("cartCount");
if (badge) {
const cart = getCart();
badge.textContent = cart.length;
}
}

// ── Ajout au panier ───────────────────────────
function addToCart(id, name, price, priceId) {
const cart = getCart();
cart.push({ id, name, price, priceId });
saveCart(cart);
updateCartCount();
showToast(name + " ajouté au panier");
}

// ── Ajout au panier avec gestion de la taille ─
// Utilisé par les pages produits ayant un sélecteur .size-options
// Chaque <input name="size"> doit porter un data-price-id correspondant
// au Price ID Stripe de cette taille.
function addToCartWithSize(btn) {
const button = btn || (event && event.currentTarget) || document.querySelector(".add-to-cart");
if (!button) return;

const sizeInput = document.querySelector('input[name="size"]:checked');
if (!sizeInput) {
showToast("Veuillez sélectionner une taille");
return;
}

const priceId = sizeInput.dataset.priceId || button.dataset.productId;
const size = sizeInput.value;
const baseName = button.dataset.productName || "Produit";
const colorInput = document.querySelector('input[name="color"]:checked'); const name = baseName + (colorInput ? " (" + colorInput.value + ")" : "") + " - Taille " + size;
const price = button.dataset.productPrice;

addToCart(priceId, name, price, priceId);
}

// ── Toast notification ────────────────────────
function showToast(message) {
let toast = document.getElementById("lux-toast");
if (!toast) {
toast = document.createElement("div");
toast.id = "lux-toast";
toast.style.cssText = `
position: fixed;
bottom: 32px;
right: 32px;
background: #1a1a1a;
border: 1px solid #caa86a;
color: #caa86a;
padding: 14px 24px;
font-size: 12px;
letter-spacing: 3px;
z-index: 9999;
opacity: 0;
transition: opacity 0.4s ease;
pointer-events: none;
`;
document.body.appendChild(toast);
}
toast.textContent = message;
toast.style.opacity = "1";
clearTimeout(toast._timeout);
toast._timeout = setTimeout(() => { toast.style.opacity = "0"; }, 2500);
}

// ── Affichage du panier (modal) ───────────────
function showCart() {
  injectCartExtras(); // garantit la présence du récap + champ e-mail avant le rendu
const modal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

if (!modal || !cartItems || !cartTotal) return;

const cart = getCart();
cartItems.innerHTML = "";
let total = 0;

if (cart.length === 0) {
cartItems.innerHTML = "<li style='list-style:none;color:#9c9c9c;letter-spacing:2px;font-size:12px;'>Votre panier est vide</li>";
} else {
cart.forEach((p, i) => {
const li = document.createElement("li");
li.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(202,168,106,0.15);list-style:none;";
li.innerHTML = `<span style="font-size:13px;letter-spacing:1px;">${p.name}</span>
<span style="color:#caa86a;font-size:13px;">${Number(p.price).toFixed(2)} €</span>`;
cartItems.appendChild(li);
total += Number(p.price);
});
}

cartTotal.textContent = total.toFixed(2);
  // --- Récapitulatif panier (affichage) : sous-total, livraison, total ---
  // NB : cartTotal correspond au sous-total des produits (en euros).
  // La logique est un MIROIR du calcul serveur (checkout.js) :
  //   livraison offerte dès 75 € de produits, sinon 6,90 €.
  // La réduction de bienvenue -10 % est vérifiée et appliquée CÔTÉ SERVEUR
  // (une seule fois par client) ; on l'indique ici à titre informatif.
  try {
    var _summaryEl = document.getElementById("cart-summary");
    if (_summaryEl) {
      var _subtotal = Number(total) || 0; // FIX: total = somme des prix produits (cartTotal est l'element DOM)
      var FREE_SHIP = 75;
      var SHIP_FEE = 6.90;
      var _shipFree = _subtotal >= FREE_SHIP;
      var _shipping = _shipFree ? 0 : SHIP_FEE;
      var _total = _subtotal + _shipping;
      var _shipLabel = _shipFree
        ? '<span style="color:#2d7a30;">Offerts</span>'
        : SHIP_FEE.toFixed(2).replace('.', ',') + ' €';
      _summaryEl.innerHTML =
        '<div style="display:flex;justify-content:space-between;">' +
          '<span>Sous-total</span><span>' + _subtotal.toFixed(2).replace('.', ',') + ' €</span></div>' +
        '<div style="display:flex;justify-content:space-between;">' +
          '<span>Réduction bienvenue (1re commande)</span>' +
          '<span style="color:#2d7a30;">-10 % appliqués si éligible</span></div>' +
        '<div style="display:flex;justify-content:space-between;">' +
          '<span>Livraison</span><span>' + _shipLabel + '</span></div>' +
        (_shipFree ? '' :
          '<div style="font-size:12px;opacity:.8;">Plus que ' +
          (FREE_SHIP - _subtotal).toFixed(2).replace('.', ',') +
          ' € pour la livraison offerte</div>') +
        '<hr style="border:none;border-top:1px solid #caa86a;margin:8px 0;" />' +
        '<div style="display:flex;justify-content:space-between;font-weight:bold;">' +
          '<span>Total estimé</span><span>' + _total.toFixed(2).replace('.', ',') + ' €</span></div>' +
        '<div style="font-size:11px;opacity:.7;margin-top:6px;">' +
          'Le montant exact (avec réduction éventuelle) est confirmé au paiement sécurisé Stripe.</div>';
    }
  } catch (e) { /* affichage récap non bloquant */ }

modal.style.display = "flex";
document.body.style.overflow = "hidden";
}

function closeCart() {
const modal = document.getElementById("cart-modal");
if (modal) {
modal.style.display = "none";
document.body.style.overflow = "";
}
}

function clearCart() {
saveCart([]);
updateCartCount();
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
if (cartItems) cartItems.innerHTML = "";
if (cartTotal) cartTotal.textContent = "0.00";
}

// ── Checkout Stripe ───────────────────────────
async function checkout() {
  // --- Réduction de bienvenue : on récupère l'e-mail saisi dans le panier ---
  // L'e-mail est requis : le serveur s'en sert pour vérifier si le client a déjà
  // bénéficié de la remise de 10 % (vérification exclusivement côté serveur).
  var emailField = document.getElementById("cart-email");
  var email = emailField ? emailField.value.trim() : "";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    showToast("Merci d'indiquer un e-mail valide pour finaliser la commande.");
    if (emailField) emailField.focus();
    return;
  }

const cart = getCart();
if (cart.length === 0) {
showToast("Votre panier est vide");
return;
}

const btn = document.getElementById("checkout-btn");
if (btn) { btn.textContent = "CHARGEMENT..."; btn.disabled = true; }

try {
const res = await fetch("/api/stripe/checkout", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ cart, email })
});

const data = await res.json();

if (data.url) {
window.location.href = data.url;
} else {
showToast("Erreur paiement : " + (data.error || "Réessayez"));
if (btn) { btn.textContent = "PAYER"; btn.disabled = false; }
}
} catch (err) {
console.error(err);
showToast("Erreur serveur – veuillez réessayer");
if (btn) { btn.textContent = "PAYER"; btn.disabled = false; }
}
}

// ── Initialisation au chargement de la page ───
document.addEventListener("DOMContentLoaded", () => {
updateCartCount();

// Gestion des boutons add-to-cart via data-attributes (pages produits)
document.querySelectorAll(".add-to-cart[data-product-id]").forEach(btn => {
btn.addEventListener("click", (e) => {
// Si la page contient un sélecteur de taille, utiliser addToCartWithSize
const hasSizeSelector = document.querySelector('input[name="size"]');
if (hasSizeSelector) {
e.preventDefault();
addToCartWithSize(btn);
return;
}
addToCart(
btn.dataset.productId,
btn.dataset.productName,
btn.dataset.productPrice,
btn.dataset.productId
);
});
});

// Fermeture modale en cliquant en dehors
const modal = document.getElementById("cart-modal");
if (modal) {
modal.addEventListener("click", (e) => {
if (e.target === modal) closeCart();
});
}
});

// ── Injection automatique de la modal panier ──
// Permet aux pages produits (qui n'ont pas la modal dans le HTML)
// d'avoir un panier fonctionnel via le bouton "PANIER" du header.
// ── Complète un modal panier déjà présent dans le HTML statique ──
// Certaines pages ont un #cart-modal codé en dur SANS le champ e-mail ni le
// récapitulatif détaillé. Cette fonction ajoute ces éléments s'ils manquent,
// juste avant le bouton PAYER, sans casser le markup existant.
function injectCartExtras() {
  var checkoutBtn = document.getElementById('checkout-btn');
  if (!checkoutBtn) return; // rien à faire si pas de bouton payer

  // 1) Récapitulatif détaillé (sous-total / réduction / livraison / total)
  if (!document.getElementById('cart-summary')) {
    var summary = document.createElement('div');
    summary.id = 'cart-summary';
    summary.style.cssText = 'font-family:Georgia,serif;font-size:13px;color:#e8dcc0;margin:14px 0;';
    checkoutBtn.parentNode.insertBefore(summary, checkoutBtn);
  }

  // 2) Champ e-mail requis (identifiant client pour la réduction, vérifiée serveur)
  if (!document.getElementById('cart-email')) {
    var wrap = document.createElement('div');
    wrap.style.cssText = 'margin:10px 0;';
    var label = document.createElement('div');
    label.style.cssText = 'font-family:Georgia,serif;font-size:12px;color:#caa86a;margin-bottom:6px;';
    label.textContent = 'E-mail (pour votre commande)';
    var input = document.createElement('input');
    input.id = 'cart-email';
    input.type = 'email';
    input.required = true;
    input.placeholder = 'Votre e-mail pour votre commande';
    input.style.cssText = 'width:100%;padding:10px 12px;margin:0;border:1px solid #caa86a;border-radius:6px;background:transparent;color:inherit;font-family:Georgia,serif;box-sizing:border-box;';
    wrap.appendChild(label);
    wrap.appendChild(input);
    checkoutBtn.parentNode.insertBefore(wrap, checkoutBtn);
  }

  // Retraduit les nouveaux éléments si le moteur i18n est présent
  if (typeof applyTranslations === 'function') { try { applyTranslations(); } catch(e){} }
}


function ensureCartModal() {
  // Si le modal existe déjà (version codée en dur dans le HTML de la page),
  // on n'en recrée pas un nouveau : on complète juste les éléments manquants
  // (récapitulatif détaillé + champ e-mail requis pour la réduction serveur).
  if (document.getElementById('cart-modal')) { injectCartExtras(); return; }

const modal = document.createElement("div");
modal.id = "cart-modal";
modal.style.cssText = "display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;justify-content:flex-end;align-items:flex-start;";
modal.innerHTML = `
<div style="background:#111;border-left:1px solid rgba(202,168,106,0.3);width:420px;max-width:100vw;height:100vh;padding:48px 36px;display:flex;flex-direction:column;gap:24px;overflow-y:auto;">
<div style="display:flex;justify-content:space-between;align-items:center;">
<span data-i18n="cart_title" style="font-family:'Cormorant Garamond',serif;font-size:22px;color:#caa86a;letter-spacing:3px;">${(typeof window.t==='function')?window.t('cart_title'):'VOTRE PANIER'}</span>
<button onclick="closeCart()" style="background:none;border:none;color:#caa86a;font-size:22px;cursor:pointer;line-height:1;">&times;</button>
</div>
<ul id="cart-items" style="padding:0;margin:0;flex:1;"></ul>
<div style="border-top:1px solid rgba(202,168,106,0.2);padding-top:20px;">
<div style="display:flex;justify-content:space-between;font-family:'Inter',sans-serif;font-size:13px;letter-spacing:2px;color:#caa86a;margin-bottom:24px;">
<span>TOTAL</span>
<span><span id="cart-total">0.00</span> &euro;</span>
</div>
<!-- Champ e-mail requis pour appliquer la réduction de bienvenue (vérifiée côté serveur) -->
<input id="cart-email" type="email" required placeholder="Votre e-mail (pour votre commande)"
 style="width:100%;padding:12px 14px;margin:10px 0;border:1px solid #caa86a;border-radius:8px;background:transparent;color:inherit;font-family:Georgia,serif;box-sizing:border-box;" />
<!-- Récapitulatif détaillé (sous-total / réduction / livraison / total) -->
<div id="cart-summary" style="margin:10px 0;font-size:14px;line-height:1.9;"></div>
<button id="checkout-btn" onclick="checkout()" style="width:100%;background:none;border:1px solid #caa86a;color:#caa86a;font-family:'Inter',sans-serif;font-size:11px;letter-spacing:4px;padding:16px;cursor:pointer;transition:0.3s;">PAYER</button>
<button onclick="clearCart();closeCart();" style="width:100%;background:none;border:none;color:rgba(202,168,106,0.4);font-family:'Inter',sans-serif;font-size:10px;letter-spacing:3px;padding:12px;cursor:pointer;margin-top:8px;">VIDER LE PANIER</button>
</div>
</div>
`;
document.body.appendChild(modal);
    try { if (typeof window.applyTranslations === "function") window.applyTranslations(); } catch (e) {}

// Fermeture en cliquant hors de la fenêtre du panier
modal.addEventListener("click", (e) => {
if (e.target === modal) closeCart();
});
}

// Injection dès que le DOM est prêt (avant tout clic possible sur PANIER)
if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", ensureCartModal);
} else {
ensureCartModal();
}

// ── Optimisations de performance ─────────────
// Applique lazy loading aux images hors-écran et optimise le chargement CSS
// sur les pages produits qui utilisent encore le lien CSS bloquant.
(function initPerfOptimizations() {
// 1. Lazy loading for images below the fold on product pages
function applyLazyLoading() {
const imgs = document.querySelectorAll('img:not([loading]):not([fetchpriority="high"])');
imgs.forEach(function(img, i) {
// Skip first image (hero/product main) - keep eager loading
if (i === 0) {
img.setAttribute('fetchpriority', 'high');
return;
}
img.setAttribute('loading', 'lazy');
});
// Add width/height to logo to prevent CLS
const logoImg = document.querySelector('.header-logo-img');
if (logoImg && !logoImg.getAttribute('width')) {
logoImg.setAttribute('width', '158');
logoImg.setAttribute('height', '80');
}
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', applyLazyLoading);
} else {
applyLazyLoading();
}
})();
/* === Chargeur i18n automatique (ajouté pour la traduction multilingue) === */
(function () {
  function runI18n() {
    try { if (typeof initI18n === 'function') initI18n(); } catch (e) {}
  }
  if (typeof TRANSLATIONS !== 'undefined') { runI18n(); return; }
  if (!document.querySelector('script[src="/i18n.js"], script[src="i18n.js"]')) {
    var s = document.createElement('script');
    s.src = '/i18n.js';
    s.onload = runI18n;
    document.head.appendChild(s);
  }
})();
