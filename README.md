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

Système de traduction maison (gratuit, sans dépendance) basé sur `i18n.js`. Détection auto via `navigator.language`. 5 langues : **Français (défaut), Portugais, Italien, Espagnol, Allemand**. Sélecteur visible dans le header (FR/PT/ES/IT/DE).

> ⚠️ **PIÈGE IMPORTANT — ordre des langues dans `i18n.js`** : l'objet `TRANSLATIONS` est dans l'ordre **`fr, pt, it, es, de`** (PAS fr/pt/es/it/de). Toute insertion de clés par langue doit respecter cet ordre, sinon les blocs ES et IT se retrouvent inversés. Vérifier à l'exécution : sur `TRANSLATIONS`, `.it.<clé>` doit être en italien et `.es.<clé>` en espagnol.

### Architecture i18n
- `i18n.js` : objet `TRANSLATIONS` (483 lignes), `getLang()`, `setLang(lang)`, `applyTranslations()` (gère uniquement `textContent`), `renderLangSwitcher()`.
- Chaque élément traduisible porte un attribut `data-i18n="<clé>"`.
- Footer : `footer_cgv`, `footer_confid`, `footer_cookies`, `footer_mentions`, `footer_livraison` (câblage href-based).
- Panier : `cart_title`, `cart_total`, `cart_pay`, `cart_clear`, `cart_empty`, `cart_loading`.

### ✅ Fait et déployé (commité sur `main`)
- **Étapes 1–3** : moteur i18n, sélecteur de langue dans le header + CSS, header unifié 7 items sur 36 pages.
- **Étape 4** : `cart_title` + 5 `footer_*` (×5 langues) dans `i18n.js` ; `index.html` câblé (panier + footer + livraison) ; **footer câblé sur 34 pages**. Pages SANS footer ignorées : `mini-robe-noire.html`, `robe-longue-noire-argentee.html`. Testé live 5 langues. ✅
- **Étape 5 (contenu fiches) — 3/33 faites** : `Cockring-vibrant-Marry-Me-Wooomy.html` (`marryme_*`), `Déguisement-Bunny.html` (`bunny_*`), `Magnum-Opus-vibro.html` (`magnum_*`, testé live 5 langues ✅).

### 🔁 Méthode reproductible pour traduire une fiche produit
Contenu à câbler : `product-title` (h1), `product-subtitle` (p), les `product-description` (p, 3–4 en général), et les `<li>` de `product-list`. Procédure :
1. Récupérer le HTML brut depuis `raw.githubusercontent.com/.../main/<fichier>`.
2. Extraire le contenu FR (titre, sous-titre, descriptions, items).
3. Traduire en PT, IT, ES, DE.
4. Préfixe de clé unique (ex. `magnum_`). Clés : `_title`, `_subtitle`, `_desc1..N`, `_li1..M`.
5. **i18n.js** : insérer le bloc dans CHAQUE objet langue, ordre `fr, pt, it, es, de`. Ancrage : après la dernière clé de la fiche précédente dans chaque bloc (ajouter la virgule). Valider : `<prefixe>_title` ×5, accolades 33/33 inchangées, `new Function(code)` OK, runtime it=italien/es=espagnol.
6. **Page HTML** : ajouter `data-i18n` sur titre/sous-titre/desc/li ; **retirer les `<strong>`** des descriptions. Valider : nb de clés, tags équilibrés, changement pur-additif.
7. Commit `i18n.js` PUIS la page HTML (propriétaire = « Commit changes »).
8. Tester live avec cache-buster `?v=N` + `setLang(l)` sur les 5 langues.

### ⏳ Reste à faire — 30 fiches produit (contenu)
> `mini-robe-noire.html` et `robe-longue-noire-argentee.html` n'ont pas de footer mais ont du contenu produit à traduire (inclus ci-dessous).

  1. `Plug-Anal-Rosy-Gold.html`
  2. `anneau_vibrant_telecommande.html`
  3. `black-empire-my-duchess.html`
  4. `cockring-vibrant-saturn-hueman.html`
  5. `deguisement-enseignante.html`
  6. `deguisement-etudiante.html`
  7. `deguisement-infirmière-sexy.html`
  8. `dual-vibe-sex-on-the-beach.html`
  9. `gel_cannabis_orgie.html`
  10. `gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html`
  11. `gel_lubrifiant_bio_neutre_divine_xtases.html`
  12. `gel_lubrifiant_bio_neutre_framboise_divine_xtases.html`
  13. `gel_lubrifiant_bio_neutre_monoi_divine_xtases.html`
  14. `gel_lubrifiant_bio_neutre_vanille_divine_xtases.html`
  15. `hemp-intense-orgasm.html`
  16. `le-flateur.html`
  17. `lubrifiant_eau_lube_tube_chocolat_orgie.html`
  18. `lubrifiant_eau_lube_tube_fraise_orgie.html`
  19. `lubrifiant_eau_tube_barbe_a_papa.html`
  20. `mini-robe-noire.html`
  21. `monster-pussy-strocker.html`
  22. `orgie-pinacolada.html`
  23. `pink-star-choco-fraise.html`
  24. `pink-star.html`
  25. `pink_star_sucette_cerise.html`
  26. `red-dolls-energy-pleasure.html`
  27. `robe-longue-noire-argentee.html`
  28. `sucette-cerise.html`
  29. `vibro-rechargeable-Indiana.html`
  30. `vibromasseur-rabbit-rose.html`

### ⏳ Autres tâches restantes
- **Modal 18+ « Accès Réservé »** (injectée par `compliance.js`) : à traduire.
- **Contenu des pages légales** (`cgv`, `confidentialite`, `cookies`, `mentions-legales`, `retractation`) : seuls les liens footer sont traduits, le corps reste en FR.
- **Optionnel** : étendre `applyTranslations()` à `title`/`placeholder`/`alt`.

### Règles de collaboration (rappel)
- L'assistant édite dans l'éditeur GitHub ; **le propriétaire (JLShop06) clique « Commit changes »**.
- Vérifier `i18n.js` avant chaque commit (accolades, comptage de clés, ordre des langues).
- Français = langue par défaut. Réutiliser `i18n.js`, ne pas créer de nouveau système.

_Dernière mise à jour : 2026-06-25 — Étape 5 en cours (3/33 fiches). Reprendre par la 1ʳᵉ fiche de « Reste à faire »._
