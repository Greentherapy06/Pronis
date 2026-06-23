# Les Jardins Enchantés

> Boutique en ligne premium dédiée à l'univers intime de luxe.
>
> [![Site](https://img.shields.io/badge/site-lesjardinsenchantes.vercel.app-caa86a)](https://lesjardinsenchantes.vercel.app)
> [![Stripe](https://img.shields.io/badge/paiement-Stripe-635bff)](https://stripe.com)
> [![Vercel](https://img.shields.io/badge/deploy-Vercel-000000)](https://vercel.com)
>
> ---
>
> ## Présentation
>
> **Les Jardins Enchantés** (JL Shop 06) est une boutique en ligne proposant une sélection de produits intimes haut de gamme : gels lubrifiants aromatisés, vibromasseurs, masturbateurs et accessoires de luxe. L'univers visuel repose sur une charte sobre et élégante (noir profond et or `#caa86a`).
>
> Site en production : **https://lesjardinsenchantes.vercel.app**
>
> ## Stack technique
>
> - **Frontend** : HTML5, CSS3, JavaScript vanilla
> - - **Paiement** : Stripe Checkout (sessions hébergées)
>   - - **Backend serverless** : Node.js sur Vercel (`api/stripe/checkout.js`)
>     - - **Déploiement** : Vercel
>       - - **Stockage panier** : `localStorage` côté client
>        
>         - ## Structure du projet
>        
>         - ```
>           .
>           ├── index.html                  # Page d'accueil + grille produits
>           ├── style.css                   # Charte graphique globale
>           ├── cart.js                     # Système de panier unifié (localStorage + modal)
>           ├── api/stripe/checkout.js      # Endpoint serverless Stripe Checkout
>           ├── vercel.json                 # Configuration de déploiement Vercel
>           ├── package.json                # Dépendance stripe
>           │
>           ├── *.html                      # Pages produits (1 fichier par produit)
>           ├── success.html / cancel.html  # Retour Stripe
>           ├── erreur.html                 # Page d'erreur générique
>           │
>           ├── cgv.html                    # Conditions générales de vente
>           ├── confidentialite             # Politique de confidentialité (RGPD)
>           ├── cookies.html                # Politique cookies
>           ├── mentions-legales            # Mentions légales
>           ├── SECURITY.md                 # Politique de sécurité
>           │
>           └── *.webp                       # Visuels produits
>           ```
>
> ## Fonctionnement du panier
>
> Chaque bouton « AJOUTER » porte les attributs :
>
> ```html
> <button class=\"add-to-cart\"
>         data-product-id=\"price_xxx\"
>         data-product-name=\"Nom du produit\"
>         data-product-price=\"12.90\">
>   AJOUTER
> </button>
> ```
>
> `cart.js` :
>
> 1. Écoute tous les boutons `.add-to-cart[data-product-id]`
> 2. 2. Stocke l'article (`id`, `name`, `price`, `priceId`) dans `localStorage`
>    3. 3. Met à jour le compteur du header et ouvre une modale stylée
>       4. 4. Le bouton **PAYER** envoie le panier à `/api/stripe/checkout`
>          5. 5. Stripe Checkout redirige vers `success.html` ou `cancel.html`
>            
>             6. ## Variables d'environnement
>            
>             7. À configurer sur Vercel :
>            
>             8. | Variable | Description |
> |---|---|
> | `STRIPE_SECRET_KEY` | Clé secrète Stripe (`sk_live_...` ou `sk_test_...`) |
>
> ## Développement local
>
> ```bash
> # Installer les dépendances
> npm install
>
> # Lancer en local avec Vercel CLI
> npx vercel dev
> ```
>
> Le site est ensuite accessible sur `http://localhost:3000`.
>
> ## Déploiement
>
> Tout push sur la branche `main` déclenche un déploiement Vercel automatique.
>
> ```bash
> git push origin main
> ```
>
> ## Sécurité
>
> Le projet suit une politique de sécurité documentée — voir [SECURITY.md](./SECURITY.md). Toute vulnérabilité doit être signalée de manière responsable.
>
> ## Mentions légales
>
> - **Public visé** : exclusivement adulte (18+).
> - - **CGV** : voir `cgv.html`
>   - - **RGPD** : voir `confidentialite`
>     - - **Mentions légales** : voir `mentions-legales`
>      
>       - ## Licence
>      
>       - © Les Jardins Enchantés – Tous droits réservés.
>       - Le code source est privé et propriétaire ; les visuels produits restent la propriété de leurs ayants droit respectifs.
>       -


---

## 🌍 Traduction multilingue (i18n) — État d'avancement

Système de traduction maison (gratuit, sans dépendance) basé sur le fichier `i18n.js`. Détection automatique de la langue du navigateur (`navigator.language`). 5 langues : Français (défaut), Portugais, Italien, Espagnol, Allemand. Choix manuel via `localStorage.setItem('lang','pt')` (valeurs : `fr`, `pt`, `it`, `es`, `de`).

### Fichiers concernés
- `i18n.js` — dictionnaires de traduction + logique (clés `data-i18n` via `applyTranslations()` + traduction dynamique panier/produits via `translateCart()` / `translateProduct()` et un MutationObserver).
- `cart.js` — chargeur en tête qui injecte `i18n.js` sur toutes les pages et appelle `initI18n()` via `s.onload`.
- `vercel.json` — en-têtes Cache-Control.

### Méthode pour traduire une fiche produit
1. Dans le **HTML de la fiche** : ajouter `data-i18n="<cle>"` sur le `<h1 class="product-title">`, le `<p class="product-subtitle">`, chaque `<p class="product-description">` et chaque `<li>`. **Retirer toutes les balises `<strong>`** (français inclus — décision validée).
2. Dans `i18n.js` : ajouter les clés correspondantes dans les **5 blocs de langue** (fr, pt, it, es, de). Convention de préfixe par produit (ex. `marryme_`, `bunny_`).
3. Commit des 2 fichiers, puis test en prod : `localStorage.setItem('lang','XX')` + **hard reload** (Ctrl+Shift+R) pour contourner le cache navigateur.

### ✅ Fait et déployé
- Éléments communs : menu, bannière livraison, section héro, panier (TOTAL / PAYER / VIDER LE PANIER / vide / chargement), libellés produits (bouton AJOUTER AU PANIER, titres Description / Caractéristiques).
- **Correctif cache (résolu le 2026-06-23)** : dans `vercel.json`, la règle générique `.css|.js` (max-age 86400) écrasait la règle spécifique `(i18n|cart).js` (max-age 0) car elle était placée APRÈS. Sur Vercel, la dernière règle qui matche l'emporte. **Solution : placer la règle générique AVANT la règle spécifique.** Vérifié OK : `i18n.js` et `cart.js` servis en `max-age=0, must-revalidate`.
- **Produit 1 — Cockring Vibrant Marry Me (Wooomy)** : 100% traduit et testé en prod sur les 5 langues. Clés préfixe `marryme_` (titre, sous-titre, desc1-4, li1-12).

### 🔧 En cours — Produit 2 : Déguisement Bunny Girl (`Déguisement-Bunny.html`)
- ✅ Clés `bunny_` ajoutées dans `i18n.js` (5 langues : titre, sous-titre, desc1-4, li1-10 — 80 clés au total). **Commité et déployé.**
- ⬜ **RESTE À FAIRE (reprise) : éditer `Déguisement-Bunny.html`** pour ajouter les 16 `data-i18n="bunny_*"` (1 titre + 1 sous-titre + 4 desc + 10 li) et retirer les 3 `<strong>`. Puis commit + test 5 langues.

### ⏳ Reste à faire (par ordre de priorité)
1. **Terminer le produit 2** (HTML Bunny, voir ci-dessus).
2. **Produits 3 → ~31** : appliquer la même méthode. Liste des fiches restantes (préfixe de clé suggéré) :
   - `Magnum-Opus-vibro.html`, `Plug-Anal-Rosy-Gold.html`, `anneau_vibrant_telecommande.html`, `black-empire-my-duchess.html`, `cockring-vibrant-saturn-hueman.html`, `deguisement-enseignante.html`, `deguisement-etudiante.html`, `deguisement-infirmière-sexy.html`, `dual-vibe-sex-on-the-beach.html`, `gel_cannabis_orgie.html`, `gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html`, `gel_lubrifiant_bio_neutre_divine_xtases.html`, `gel_lubrifiant_bio_neutre_framboise_divine_xtases.html`, `gel_lubrifiant_bio_neutre_monoi_divine_xtases.html`, `gel_lubrifiant_bio_neutre_vanille_divine_xtases.html`, `hemp-intense-orgasm.html`, `le-flateur.html`, `lubrifiant_eau_lube_tube_chocolat_orgie.html`, `lubrifiant_eau_lube_tube_fraise_orgie.html`, `lubrifiant_eau_tube_barbe_a_papa.html`, `mini-robe-noire.html`, `monster-pussy-strocker.html`, `orgie-pinacolada.html`, `pink-star-choco-fraise.html`, `pink-star.html`, `pink_star_sucette_cerise.html`, `red-dolls-energy-pleasure.html`, `robe-longue-noire-argentee.html`, `vibro-rechargeable-Indiana.html`
   - (Non-produit, à ignorer : `google2ea8d2d7cec1a820.html`, `retractation.html`, `veille-concurrents.html`)
3. **Petit reste commun** : libellé "Accès Réservé" du modal de vérification d'âge 18+ (non traduit, à ajouter une clé `data-i18n`).
4. **Pages légales** : `cgv.html`, `confidentialite.html`, `cookies.html`, `mentions-legales.html`.

### Comment tester
`localStorage.setItem('lang','pt')` dans la console puis **Ctrl+Shift+R** (hard reload). `localStorage.removeItem('lang')` revient à la détection auto.

### Règles de collaboration (rappel)
- L'assistant prépare/édite le code dans l'éditeur GitHub ; **le propriétaire clique sur "Commit changes"** (commit direct sur `main`).
- Compte propriétaire pour commiter : **JLShop06** (pas CashScanPro, qui n'a pas les droits d'écriture).
- Vérification systématique de `i18n.js` avant commit (équilibre des accolades, comptage des clés) car il est chargé sur les 42 pages.

_Dernière mise à jour : 2026-06-23._
