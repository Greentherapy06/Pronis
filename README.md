# 🛡️ PLAN CONFIANCE & CONVERSION — 06/08/2026 (par Claude)

> Audit réalisé en tant que **client inconnu et méfiant** sur le site LIVE, puis vérification dans le dépôt.
> ⚠️ RIEN N EST MODIFIÉ (ni site ni code) : ceci est un PLAN. Règle du dépôt inchangée : Claude prépare, **JLShop06 clique "Commit changes"**. — **MISE À JOUR 07/08/2026 : ce plan est désormais EN COURS D EXÉCUTION. Voir la section SESSION 07/08/2026 — CHANTIER n°3 plus bas.**

## 🟥 P0 — Bloquants de confiance (avant tout le reste)

**P0-1. Coordonnées contradictoires selon les pages — LE PLUS GRAVE.**
Constaté en live : /mentions-legales affiche "10 Avenue du Maréchal Foch" + lesjardinsenchantes06@gmail.com, tandis que /cgv et /confidentialite affichent "49 chemin du Vallonet" + jlshop06190@gmail.com. Un visiteur qui compare deux pages conclut "site pas fiable".
CAUSE TROUVÉE : le HTML est BON partout (cgv.html, confidentialite.html, mentions-legales.html contiennent Foch + le bon e-mail). C est le legacy i18n.js (662 Ko) qui ÉCRASE le texte à l affichage : il contient 10 fois "49 chemin du Vallonet", 60 fois "jlshop06190", 0 fois "Foch", 0 fois "lesjardinsenchantes06". i18n-legal.js est à jour, mais i18n.js est encore (a) codé en dur dans index.html et blog.html, (b) utilisé en FALLBACK par le loader de cart.js.
ACTIONS : régénérer i18n.js depuis les 5 fichiers de section (ou corriger les clés fautives) ; retirer le script i18n.js en dur de index.html et blog.html ; revérifier /cgv, /confidentialite et /mentions-legales en navigation privée dans les 5 langues.

**P0-2. Deux adresses Gmail à la place d un e-mail pro.**
lesjardinsenchantes06@gmail.com et jlshop06190@gmail.com coexistent. ACTION : créer contact@les-jardins-enchantes.com, le mettre partout (HTML + i18n + Stripe), et n en garder qu un seul.

**P0-3. Aucune page Contact.** /contact renvoie 404. Pas de téléphone, pas de formulaire, pas de délai de réponse visible (les CGV annoncent 5 jours ouvrés).
ACTION : créer contact.html (e-mail, formulaire, horaires, délai de réponse), la lier dans le header ET le footer, l ajouter au sitemap.

**P0-4. Frais de port invisibles alors que le montant existe dans le code.**
api/stripe/checkout.js définit SHIPPING_FEE_CENTS = 690 (6,90 €) et FREE_SHIPPING_THRESHOLD_CENTS = 7500. Le client ne découvre donc les 6,90 € que sur Stripe, après avoir cliqué PAYER. /livraison et /faq renvoient 404.
ACTION : afficher "Livraison 6,90 € — offerte dès 75 €" dans le panier, sur les fiches produit et dans le bandeau ; créer une page Livraison & Retours (délais 3-7 j FR / 5-14 j UE, Colissimo, colis neutre) + une FAQ.

**P0-5. La remise -10 % n est pas tenue dans le panier.**
Le panier affiche "-10 % appliqués si éligible" et un "Total estimé" identique au sous-total : le client croit à une fausse promesse. Côté serveur c est propre (éligibilité vérifiée sur le Customer Stripe, coupon usage unique), mais le front ne peut pas le savoir.
ACTION : reformuler clairement ("remise appliquée automatiquement à l étape de paiement si c est votre 1re commande, sinon prix affiché") ou afficher le montant exact après saisie de l e-mail. Ne PAS exposer un endpoint qui dirait si un e-mail a déjà commandé (énumération d e-mails).

**P0-6. Pas de vraie page 404.** /404.html renvoie l erreur brute Vercel ("NOT_FOUND" + identifiant + lien vers la doc Vercel). erreur.html existe mais c est une page d erreur de PAIEMENT, pas un 404.
ACTION : créer 404.html (Vercel le sert automatiquement) avec header/footer, message rassurant et liens vers les catégories.

**P0-7. Contradiction sur la zone de livraison.** Les CGV disent "France métropolitaine et Union Européenne" mais checkout.js autorise aussi GB, CH et NO (hors UE), avec le même 6,90 €.
ACTION : soit retirer GB/CH/NO des allowed_countries, soit mettre les CGV à jour et prévoir les frais/douane.

**P0-8. Page interne accessible publiquement.** /veille-concurrents.html (27 Ko de veille concurrentielle) est en ligne, sans noindex et sans Disallow dans robots.txt.
ACTION : ajouter noindex + Disallow (ou sortir la page de la production).

**P0-9. Fichiers fantômes d un autre commerce.** Les fichiers "mentions-legales" et "confidentialite" (SANS extension) contiennent encore l identité "RJ Destock" avec une adresse au Portugal. Ils ne sont pas servis aujourd hui (les .html gagnent avec cleanUrls) mais c est une bombe à retardement juridique.
ACTION (à faire par JLShop06) : supprimer ces 2 fichiers du dépôt après vérification.

## 🟧 P1 — Réassurance et passage à l acte

**P1-10. Zéro avis client sur tout le site.** Aucune note, aucun témoignage, aucun widget. ACTION : relancer le chantier avis (Trustpilot bloqué : tester Avis Vérifiés / Google Business), afficher les avis sur les fiches et l accueil, et ajouter le JSON-LD AggregateRating seulement quand les avis sont réels.

**P1-11. Panier pauvre.** cart.js n a ni gestion de quantité ni suppression par ligne (seulement "Vider le panier"), aucun logo de paiement, aucun rappel du colis neutre, aucune mention CGV avant paiement.
ACTION : quantité +/-, suppression par ligne, logos Visa/Mastercard/Stripe, phrase "colis neutre et discret", mention "en cliquant sur PAYER vous acceptez les CGV" avec lien.

**P1-12. Fiches produit incomplètes.** Ni contenance/taille sur les cartes, ni stock, ni délai, ni garantie, ni politique de retour hygiène, ni guide des tailles pour le textile.
ACTION : bloc standard sous le prix (contenance, dispo, délai, garantie légale, retour hygiène expliqué avec bienveillance) + guide des tailles pour robes/tangas/déguisements.

**P1-13. Incohérences catalogue qui font douter.** "Magnum Opus" est appelé "Stimulateur Clitoridien Va-et-Vient" sur l accueil et "Toy Joy — Magnum Opus" sur sa fiche. "Dual Vibe Sex on the Beach" est un GEL de 15 ml à 32,90 € mais son texte alternatif dit "Stimulateur Clitoridien Vibromasseur", et un gel Orgie de 50 ml est à 12,90 € : sans contenance affichée, les prix paraissent arbitraires.
ACTION : un seul nom par produit (carte = fiche = title = alt), contenance et format sur chaque carte, alt corrigés.

**P1-14. Superlatifs non prouvés.** "la boutique intime la plus raffinée de France & d Europe", "la référence française", "le meilleur stimulateur", "le plus silencieux du marché français".
ACTION : étayer (test, source, avis) ou remplacer par des faits vérifiables (Yuka 100/100 avec lien, fabriqué en France, sans phtalates).

**P1-15. Un seul moyen de paiement.** checkout.js utilise payment_method_types ["card"].
ACTION : passer à automatic_payment_methods pour activer Apple Pay / Google Pay / Link et réduire l abandon mobile.

## 🟨 P2 — UX, lisibilité, technique

**P2-16. Premier écran sans produit** : logo + deux longs paragraphes saturés de mots-clés en gras, texte pâle sur photo claire (contraste insuffisant). ACTION : remonter 3-4 produits et 4 pictos de réassurance au-dessus de la ligne de flottaison, déplacer le texte SEO plus bas.

**P2-17. Contrastes** : options PT/ES/DE/IT du sélecteur de langue quasi invisibles, footer très pâle. ACTION : viser AA (4,5:1).

**P2-18. Traduction incomplète** : "CATÉGORIES", "LANGUE", le bouton du hero, "Vous aimerez aussi" et les textes incrustés dans les images restent en français dans les 4 autres langues. ACTION : câbler ces libellés en i18n, prévoir des visuels neutres ou localisés.

**P2-19. Navigation** : pas de recherche, pas de vraies pages catégories (le menu pointe vers des ancres de l accueil), pas de tri/filtres, pas de fil d Ariane visible. ACTION : au minimum une page par catégorie + un champ de recherche.

**P2-20. hreflang absent** sur les fiches produit ET les pages légales (0 partout, 6 sur accueil/blog). ACTION : bloc hreflang fr/pt/it/es/de + x-default après le canonical de chaque page.

**P2-21. En-têtes de sécurité** : vercel.json ne pose que X-Content-Type-Options. ACTION : ajouter Referrer-Policy, X-Frame-Options (ou frame-ancestors), Permissions-Policy, HSTS, puis CSP en Report-Only avant de la faire respecter.

**P2-22. README de 200 Ko** difficile à maintenir. ACTION : archiver le journal dans docs/journal-archive.md et garder en tête de README l état actuel + les prochaines actions.

## ⏱️ Ordre d exécution proposé

Jour 1 (crédibilité, rapide) : P0-1, P0-2, P0-9, P0-8, P0-6.
Jour 2-3 (transparence) : P0-3, P0-4, P0-5, P0-7.
Semaine 2 (réassurance) : P1-11, P1-12, P1-13, P1-10.
Ensuite : P1-14, P1-15, puis les P2 dans l ordre.

Indicateur de contrôle : sur chaque page, un client doit trouver en moins de 10 secondes qui vend, comment le joindre, combien coûte la livraison et comment renvoyer.

---
# 📓 Historique des chantiers

Le journal détaillé de chaque session (chantiers n°1 à n°17, audit initial, journal de bord 2026) a été déplacé dans [docs/journal-archive.md](docs/journal-archive.md) pour garder ce README lisible. Rien n'a été supprimé, uniquement déplacé (chantier n°18, 12/08/2026).

# 🔻 ÉTAT ACTUEL — mis à jour le 12/08/2026 (après le chantier n°19)

## ▶️ REPRENDRE ICI (faisable seul)
1. **Durcissement du webhook Stripe** : `api/stripe/webhook.js` ne vérifie pas `payment_status`. Version corrigée déjà écrite et testée (syntaxe), envoyée à JLShop06 en téléchargement — pas encore appliquée au dépôt. ⚠️ Fichier de paiement : passe par une validation explicite de JLShop06 avant tout commit (l'éditeur GitHub sur ce fichier est aussi bloqué côté environnement Claude).
2. **P2-18 trous de traduction** : « Vous aimerez aussi » codé en dur en français sur 34 fiches, plus les libellés du panier, `#product-info` et `.product-format`.
3. **P2-19 navigation** : pas de recherche, les catégories ne sont que des ancres.
4. **Content-Security-Policy** : chantier dédié, après inventaire des scripts et styles inline.

## ✅ Déjà fait (résumé, détail dans l'archive)
Chantiers n°1 à n°17 : i18n allégé, coordonnées harmonisées, pages légales/404/contact/livraison/FAQ, panier vivant, blocs d'informations produit + contenance/dimensions (fiches et cartes accueil), nom de produit unifié partout, moyens de paiement dynamiques, en-têtes de sécurité, hreflang 5 langues + sitemap réciproque, resynchronisation `i18n.js`, canonical sur les pages légales, cache-busting des scripts i18n.

**Chantier n°19 (12/08/2026) — générateur `i18n.js` :** `i18n-core.js` + les 5 fichiers de section (`i18n-common/home/blog/legal/product.js`) sont désormais déclarés **source de vérité** (en-têtes mis à jour). `i18n.js` (bundle complet, chargé seulement en fallback par `cart.js` si un fichier de section échoue) est maintenant un **artefact généré** par `tools/build-i18n.js` (`npm run build:i18n`) — plus jamais édité à la main, plus jamais de désync entre les deux. Vérifié sans perte : 1022 clés × 5 langues, 0 clé manquante après régénération ; la régénération a aussi corrigé le fallback qui n'avait PAS les liens Contact/Livraison/FAQ ni le hreflang (ajoutés à `i18n-core.js` après la dernière mise à jour manuelle de `i18n.js`, jamais reportés).

## 🚧 Toujours bloqué côté JLShop06
- **P1-12 reliquat** : 3 contenances manquantes (`Plug-Anal-Rosy-Gold`, `le-flateur`, `red-dolls-energy-pleasure`), les Price ID S/M/L du déguisement infirmière, et le guide des tailles.
- **P1-10 avis clients** : demande un choix de prestataire (Trustpilot bloqué).

## 🛠️ Méthode — à réutiliser (détail complet dans l'archive)
Ctrl+F dans l'éditeur GitHub pour Find & Replace fiable ; toujours Match Case + vérifier l'unicité avant Replace All ; calculer le delta d'octets attendu avant de remplacer ; vérifier qu'un texte ne porte pas déjà une clé i18n avant de le croire figé.

---
# 🌺 Chantier n°20 (17/08/2026) — Catégorie « Huile de Massage Bio » + 1er parfum (monoï)

## Ce qui a été fait
Création d'une **nouvelle catégorie de produits** et de la **1re fiche** de la gamme, en ligne le 17/08/2026 (commits `5578e7b` puis `a0e4544`).

- **Fiche produit** : `huile-massage-monoi-bio-divine-xtases.html` — Huile de Massage Monoï BIO 100 ml Divine Xtases, **19,99 €**, Stripe `price_1U5ONGF9c1lWA0Hy542gI4C7`, SKU `LJE-HUILE-MONOI-100ML`.
- **Images** : `Huile de massage Monoï du Lagon.png` → `huile-massage-monoi-bio-divine-xtases.webp` (1024×1024, WebP q90) + 2e visuel `huile-massage-monoi-bio-divine-xtases-2.webp` (800×1200).
- **Nouvelle catégorie** : section `#huiles-massage-bio` dans `index.html` (placée après la section gels bio, avant `#modes`) + lien de menu `menu_huiles_massage` ajouté dans la `cat-nav` des **51 pages** du site.
- **CSS** : règle `article[data-category="huiles-massage-bio"] img` (cadre carré 1/1) dans `style.css`.
- **i18n 5 langues** : `menu_huiles_massage` dans `i18n-common.js`, `home_cat_7` + `home_prod_35` dans `i18n-home.js`, puis régénération obligatoire de `i18n.js` via `node tools/build-i18n.js`. Le corps de la fiche est en français seul (même convention que `coffret-bien-etre-intime-bio.html`).
- **SEO / GEO** : title, meta description, keywords, canonical, OG + Twitter avec `og:image` ; JSON-LD **Product** + **BreadcrumbList** + **FAQPage** (6 questions/réponses rédigées pour être citées par les IA) ; 5 URLs ajoutées à `sitemap.xml` avec hreflang complet ; nouvelle section « Huiles de massage bio » dans `llms.txt` ; nouvel `<item>` dans `feed.xml`.
- **Contrôles passés** : JSON-LD valides, XML valides, 0 lien mort, 0 erreur console, 0 réponse HTTP ≥ 400, ajout au panier testé (bon priceId, bon prix), traductions vérifiées en DE/ES/IT, rendu identique PC et mobile.

## ♻️ Procédure pour mettre en ligne le parfum suivant
Parfums restants, visuels **déjà présents à la racine du dépôt** : fruit de la passion, noix de coco, pêche blanche, barbe à papa.

**Ce que JLShop06 fournit** (sinon rien ne peut démarrer) :
1. le titre, la description et les 5 puces façon Amazon (seul le parfum change d'une fiche à l'autre) ;
2. le **prix** et la **contenance** ;
3. le **Price ID Stripe** (`price_…`) créé dans le dashboard Stripe — sans lui le bouton panier ne fonctionne pas, le serveur lisant le prix officiel chez Stripe.

**Ce que Claude fait ensuite**, en copiant la fiche monoï :
1. Convertir le visuel : PNG 1254×1254 → WebP **qualité 90-92**, nom `huile-massage-<parfum>-bio-divine-xtases.webp` ; 2e visuel `-2.webp` si dispo.
2. Dupliquer `huile-massage-monoi-bio-divine-xtases.html` → `huile-massage-<parfum>-bio-divine-xtases.html` et remplacer : titre, meta, keywords, canonical, OG/Twitter (dont `og:image`), JSON-LD (name, description, image, SKU, url, prix), Breadcrumb, H1, sous-titre, textes, 5 puces, FAQ, prix, `data-product-id`, `data-product-name`, `data-product-price`, sources d'images, et les « Vous aimerez aussi » (y ajouter les autres huiles).
3. `index.html` : ajouter une `<article data-category="huiles-massage-bio">` dans la section existante — mêmes champs que la carte monoï, avec une nouvelle clé `home_prod_36`, `37`… (⚠️ `data-product-name` doit être **identique** entre la carte et la fiche).
4. i18n : ajouter la clé `home_prod_XX` dans les **5 langues** de `i18n-home.js`, puis **régénérer** `i18n.js` (`node tools/build-i18n.js`). Jamais éditer `i18n.js` à la main.
5. SEO : 5 URLs dans `sitemap.xml` (fr + 4 `?lang=`) avec les 6 `xhtml:link`, 1 ligne dans `llms.txt` (section Huiles de massage bio), 1 `<item>` dans `feed.xml`.
6. Vérifier avant publication : JSON-LD valide, XML valide, images présentes, aucun lien mort, ajout au panier, rendu PC + mobile.

**Mise en ligne** (l'environnement Claude ne peut pas pousser directement sur ce dépôt tant qu'il n'est pas autorisé dans les sources de la session) :
- Voie utilisée le 17/08/2026 : page `github.com/JLShop06/Les-Jardins-Enchantes/upload/main`, dépôt des fichiers **à la racine** puis *Commit changes*. ⚠️ Ne jamais glisser le **dossier** décompressé : GitHub recrée le dossier dans le dépôt et Windows abîme les noms accentués (`Déguisement-Bunny.html`). Glisser le **contenu** du dossier.
- Nettoyage d'un dossier créé par erreur : éditeur `github.dev` (clic droit sur le dossier → *Supprimer définitivement* → *Contrôle de code source* → message → `Ctrl+Entrée`).
- Le plus simple à terme : autoriser `JLShop06/Les-Jardins-Enchantes` dans les sources de la session Claude, qui pousse alors le commit tout seul.

---

## 🥥 Chantier n°21 (19/08/2026) — 2e parfum de la gamme huiles : Noix de Coco

### Ce qui a été fait

Duplication de la fiche monoï vers le parfum **noix de coco**, en suivant la procédure « Parfum suivant » du chantier n°20. Tout a été écrit directement dans l'éditeur GitHub par Claude, JLShop06 n'a eu qu'à valider les commits.

- **Fiche produit** : `huile-massage-noix-de-coco-bio-divine-xtases.html` — Huile de Massage Noix de Coco BIO 100 ml Divine Xtases, **19,99 €**, Stripe `price_1U5ORmF9c1lWA0HyDtpEm8kj`, SKU `LJE-HUILE-COCO-100ML`.
- **Images** : `huile-massage-noix-de-coco-bio-divine-xtases.webp` (1024×1024, WebP q90, convertie depuis `Huile de massage noix de coco naturelle.png`) et `-2.webp` (800×1200). ⚠️ Seuls fichiers binaires : déposés via la page *upload*, impossible de les taper dans l'éditeur.
- **Écarts factuels assumés vs monoï** (lus sur le packaging, rien d'inventé) : actif = **huile de noix de coco BIO** (et non huile d'argan) ; label affiché = **Bio Organic** (le packaging coco ne porte pas la mention Nature et Progrès) ; parfum « gourmand et exotique » au lieu de « solaire et exotique ». Yuka 100/100 confirmé par le 2e visuel.
- **Accueil** : `<article data-category="huiles-massage-bio">` ajouté dans la section `#huiles-massage-bio`, clé `home_prod_36`, `data-product-name` identique entre la carte et la fiche.
- **i18n 5 langues** : `home_prod_36` ajouté dans `i18n-home.js` (source de vérité) **et** dans `i18n.js` (bundle fallback), les deux restant synchronisés. À la prochaine session en local, relancer `node tools/build-i18n.js` pour vérifier qu'aucune désync ne subsiste.
- **Maillage interne** : lien croisé « Vous aimerez aussi » ajouté dans les deux sens (monoï ↔ noix de coco).
- **SEO / GEO** : title, meta description, keywords, canonical, OG + Twitter ; JSON-LD Product + BreadcrumbList + FAQPage (6 Q/R) ; **5 URLs** ajoutées à `sitemap.xml` avec les 6 `xhtml:link` ; 1 ligne dans `llms.txt` ; 1 `<item>` dans `feed.xml` (`LJE-HUILE-COCO`).
- **Contrôles passés** : 3 blocs JSON-LD valides, `sitemap.xml` et `feed.xml` XML valides, 0 lien mort, 0 erreur console, 0 réponse HTTP ≥ 400, ajout au panier testé (bon priceId, bon prix), traductions vérifiées en DE/ES/IT/PT, rendu vérifié en 1440×900 et 390×844.

### Méthode nouvelle — édition directe dans GitHub

Claude peut écrire lui-même dans l'éditeur GitHub via le navigateur (lecture du fichier, remplacement ciblé, réinjection), fichier par fichier. Un commit par fichier. Seuls les **fichiers binaires (images)** doivent encore passer par la page *upload*. Le `git push` direct depuis l'environnement Claude reste bloqué.

### Parfums restants

Fruit de la passion, pêche blanche, barbe à papa — visuels déjà présents à la racine du dépôt. Même procédure ; il ne manque que le **Price ID Stripe** de chaque parfum.

---

## 🍬 Chantier n°22 (19/08/2026) — gamme huiles complète : passion, pêche blanche, barbe à papa

### Ce qui a été fait

Les 3 derniers parfums de la gamme huiles de massage bio, mis en ligne d’un coup. **Claude a tout écrit et commité lui-même dans l’éditeur GitHub** ; JLShop06 n’a fourni que les Price ID Stripe.

| Parfum | Fichier | Price ID | SKU | Actif (lu sur le packaging) |
|---|---|---|---|---|
| Fruit de la passion | `huile-massage-fruit-de-la-passion-bio-divine-xtases.html` | `price_1U5OVdF9c1lWA0HybSuEAEBF` | `LJE-HUILE-PASSION-100ML` | huile de fruit de la passion BIO |
| Pêche blanche | `huile-massage-peche-blanche-bio-divine-xtases.html` | `price_1U5OYLF9c1lWA0HyqieMKV8a` | `LJE-HUILE-PECHE-100ML` | huile de pêche blanche BIO |
| Barbe à papa | `huile-massage-barbe-a-papa-bio-divine-xtases.html` | `price_1U5OXBF9c1lWA0HykjXALY7s` | `LJE-HUILE-BARBEPAPA-100ML` | **cire d’abeille BIO** (pas une huile de fruit) |

- **Prix / contenance** : 19,99 € le flacon pompe 100 ml, comme le monoï et la noix de coco.
- **Images** : visuels de présentation convertis en WebP q90 1024×1024 (`huile-massage-<parfum>-bio-divine-xtases.webp`). 2e visuel : packshot déjà présent au dépôt (`Huile de massage gourmande BIO …webp`, référencé avec `%20`). ⚠️ **Barbe à papa n’a qu’un seul visuel** — le 2e `<img>` a été retiré de sa fiche ; si un packshot arrive un jour, le rajouter.
- **Accueil** : 3 `<article data-category="huiles-massage-bio">` avec les clés `home_prod_37`, `home_prod_38`, `home_prod_39`.
- **i18n 5 langues** : les 3 clés ajoutées dans `i18n-home.js` **et** dans `i18n.js` (bundle fallback), pour garder les deux synchronisés sans passer par `node tools/build-i18n.js`.
- **Maillage interne** : les 5 huiles se pointent mutuellement dans « Vous aimerez aussi ».
- **SEO / GEO** : title, meta, canonical, OG/Twitter, JSON-LD Product + BreadcrumbList + FAQPage sur chaque fiche ; **15 URLs** ajoutées au `sitemap.xml` avec hreflang complet ; 3 lignes dans `llms.txt` ; 3 `<item>` dans `feed.xml`.
- **Contrôles passés** (rendu local avant mise en ligne) : JSON-LD valides, XML valides, 0 lien mort, 0 erreur console, 0 réponse HTTP ≥ 400, ajout au panier testé sur les 3 fiches, traductions vérifiées en DE/ES/IT/PT, rendu PC 1440×900 et mobile 390×844.

### État de la gamme

5 parfums en ligne : monoï, noix de coco, fruit de la passion, pêche blanche, barbe à papa. Plus aucun parfum en attente.

### Rappel méthode

Claude édite directement dans l’éditeur GitHub via le navigateur et valide les commits. Seuls les **fichiers binaires (images)** passent encore par la page *upload* — et si le nom arrive déformé, Claude le renomme ensuite (l’éditeur GitHub accepte de renommer un binaire sans y toucher). Le `git push` direct depuis l’environnement Claude reste bloqué.

---

## 🍷 Chantier n°23 (19/08/2026) — cartes produits accueil : socle bordeaux

### Pourquoi

JLShop06 n’aimait pas les « carrés blancs » des cartes produits (boîte ivoire opaque + ombre) : ça masquait le fond photo doré. 4 maquettes proposées (écrin sans cadre / vitrine plein cadre / double filet or / socle bordeaux), il a choisi le **socle bordeaux**.

### Ce qui a changé

- **`index.html`** : chaque `<article>` de la grille produits a été restructuré — le `<h3>` et le `<p class="product-format">` sont regroupés dans `<div class="infos">`, le `<strong>` (prix) et le `<button class="add-to-cart">` dans `<div class="socle">`. **39 articles** traités. Aucun texte, titre, prix, image, `data-product-id` ou `data-i18n` modifié — uniquement des balises `<div>` ajoutées autour.
- **`theme-clair.css`** : nouveau bloc en fin de fichier, portée limitée à `.product-grid article` (donc **accueil uniquement**, les fiches produits et les « Vous aimerez aussi » ne bougent pas). Photo bord à bord sans marge, panneau ivoire pour titre + contenance, puis socle en dégradé bordeaux `#7b1e2b → #5e1622` portant le prix en or clair `#f2dcae` et un bouton pleine largeur qui s’inverse au survol.
- **Alignement** : `article` en `flex column` + `.socle{margin-top:auto}` — les socles restent alignés en bas même quand les titres n’ont pas le même nombre de lignes.
- **Cache** : `theme-clair.css?v=20260813c` → `?v=20260819c` dans `index.html`.

### Contrôles passés

39 articles / 39 socles / 39 boutons bien à l’intérieur de leur socle, ajout au panier testé en direct sur le site, rendu vérifié en 1280×1000 et 390×844, 0 erreur console, 0 réponse HTTP ≥ 400.

### Si un nouveau produit est ajouté plus tard

Respecter la structure : `<a><img></a>` puis `<div class="infos">` (h3 + product-format) puis `<div class="socle">` (strong + button). Sans ces deux `div`, la carte s’affichera sans socle bordeaux.
