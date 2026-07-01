# AUDIT_PROGRESS - Les Jardins Enchantés

**Dernière mise à jour :** 23/05/2026
**Statut global :** Conformité légale OK - Audit Lighthouse OK - Google Merchant Center EN COURS (EAN ajoutés, resync lancée)

---

## PR #1 : Nettoyage repo (MERGED)
- Pages success.html, cancel.html, erreur.html : meta description déjà présentes
- Image orpheline orgie_gel_excitation_pina_colada_1.webp : supprimée
- vercel.json : stratégie cache immutable 1 an déjà en place
- AUDIT_PROGRESS.md : mis à jour

## PR #2 : Conformité RGPD + Age Gate 18+ (MERGED)

### Fichier créé
- compliance.js (~9.2 ko, 194 lignes) : modal 18+ + bandeau cookies + chargement différé GA

### Fonctionnalités

**Vérification d'âge 18+ obligatoire (art. 227-24 Code pénal)**
- Modal Yes/No, redirection google.com si mineur
- localStorage 30 jours (clé : lje_age_verified)
- Affichage uniquement à la 1ère visite grâce à localStorage

**Bandeau cookies RGPD/CNIL**
- Boutons "Tout accepter" et "Tout refuser" de taille équivalente
- localStorage 180 jours (clé : lje_cookie_consent)
- Google Analytics (G-15REBJRSHP) chargé dynamiquement APRÈS consentement
- anonymize_ip activé

### Généralisation réussie
- compliance.js propagé sur les 33 pages HTML
- Blocs gtag.js inline supprimés partout (32 fichiers)
- Le modal 18+ s'affiche peu importe la page d'entrée (visiteurs Google)

### Style
- Palette or/noir (#a8884d, #1a1208, #d4af6a)
- Responsive mobile
- Accessible (role="dialog", aria-modal, aria-labelledby)

## PR #3 : Google Merchant Center (EN COURS - 23/05/2026)

### feed.xml créé et déployé
- Fichier : feed.xml (393 lignes, format RSS 2.0 Google Base)
- URL publique : https://jlshop06.github.io/Les-Jardins-Enchantes/feed.xml
- 24 produits inclus avec g:adult=yes, g:condition=new, g:availability=in_stock
- Frais de port : 4,99 EUR FR pour tous les produits
- **EAN (g:gtin) ajoutés pour les 24 produits** ✅

### Catégories utilisées (Google Product Category)
- 5255 : Stimulateurs, Vibromasseurs, Plugs, Cockrings, Masturbateurs
- 2673 : Gels Lubrifiants et Excitants
- 2271 : Déguisements Adulte

### EAN des 24 produits (g:gtin dans feed.xml)
| # | Produit | EAN |
|---|---------|-----|
| 1 | Plug Anal Noir | 3700399207082 |
| 2 | Plug Anal Rose | 3700399206979 |
| 3 | Cockring Noir | 6970260909068 |
| 4 | Cockring Gris | 6970260909044 |
| 5 | Stimulateur Clitoridien Violet | 6970260908863 |
| 6 | Stimulateur Clitoridien Rose | 6970260908832 |
| 7 | Vibromasseur Gris | 6970260908856 |
| 8 | Vibromasseur Vert | 6970260908849 |
| 9 | Masturbateur Vagin | 3700399204268 |
| 10 | Masturbateur Bouche | 3700399204275 |
| 11 | Gel Lubrifiant Neutre | 3700399205432 |
| 12 | Gel Lubrifiant Chauffant | 3700399205388 |
| 13 | Gel Excitant Féminin | 3700399205456 |
| 14 | Gel Excitant Masculin | 3700399205463 |
| 15 | Gel Anal Relaxant | 3700399205449 |
| 16 | Gel Piña Colada | 3700399207976 |
| 17 | Déguisement Infirmière | 3700399206238 |
| 18 | Déguisement Soubrette | 3700399206214 |
| 19 | Déguisement Policière | 3700399206221 |
| 20 | Déguisement Écolière | 3700399206245 |
| 21 | Déguisement Chat | 3700399206252 |
| 22 | Déguisement Lapin | 3700399206184 |
| 23 | Déguisement Diablesse | 3700399206207 |
| 24 | Déguisement Ange | 3700399206191 |

### Configuration Merchant Center (compte 147190726)
- Livraison configurée : "Livraison France Standard" - France - 2 à 6 jours ouvrés - Tarif fixe 4,99€
- Source de données ajoutée : PRODUCTS SOURCE 3 (afmDataSourceId=10665531700)
- URL : https://jlshop06.github.io/Les-Jardins-Enchantes/feed.xml
- Pays : France | Langue : Français
- Synchronisation : automatique toutes les 24h à 00:00 (heure de Paris)
- Statut fichier : "Aucun problème trouvé" ✅
- 24 produits détectés par Google ✅
- EAN ajoutés + resync forcée le 23/05/2026 ✅

### Historique des actions Merchant Center
1. Création feed.xml (sans EAN) → commit sur main → 0 produits détectés (délai GitHub Pages)
2. Ajout source PRODUCTS SOURCE 3 dans Merchant Center → configuration livraison FR 4,99€
3. Forçage resync → 24 produits détectés mais refusés (GTIN manquant)
4. Utilisateur fourni les 24 EAN → ajout g:gtin dans feed.xml → commit
5. Resync forcée → en attente validation Google (24-72h)

### À surveiller
Revenir dans Merchant Center dans 24-48h :
- URL : https://merchants.google.com/mc/items?a=147190726
- Vérifier combien de produits ont été approuvés
- Analyser les refus restants et corriger (image non conforme, age gate bloquant Googlebot, autre attribut manquant)
- Si tout approuvé → intégration Google Merchant Center **TERMINÉE** ✅

---

## TODO restant avant commercialisation

### Prioritaire
- [ ] Attendre validation Google Merchant Center (24-72h)
- [ ] Vérifier les produits approuvés/refusés dans Merchant Center > Produits
- [ ] Corriger les refus si nécessaire
- [ ] Test complet du tunnel de commande Stripe (test mode)
- [ ] Test responsive sur mobile réel
- [ ] Vérification finale RGPD : aucune requête vers google-analytics.com avant clic "Accepter"

### Optionnel
- [ ] Renommer les images avec espaces/accents (impact SEO mineur)
- [ ] Activer Vercel Speed Insights (gratuit)
- [ ] Activer Vercel Web Analytics (gratuit)
- [ ] Ajouter structured data (JSON-LD) sur les pages produits

---

## Notes techniques importantes

### NE JAMAIS TOUCHER
- price_id Stripe dans les boutons "AJOUTER" (L112-1-1 : prix affiché = prix facturé)
- STRIPE_SECRET_KEY (variable d'environnement Vercel)
- Clés localStorage :
  - lje_age_verified : 30 jours
  - lje_cookie_consent : 180 jours

### Pour re-tester le modal 18+ après validation
- Mode navigation privée (Ctrl+Shift+N) OU
- Console DevTools : `localStorage.clear(); location.reload();`

---

## Liens
- Repo : https://github.com/JLShop06/Les-Jardins-Enchantes
- Prod (GitHub Pages) : https://jlshop06.github.io/Les-Jardins-Enchantes/
- Feed XML : https://jlshop06.github.io/Les-Jardins-Enchantes/feed.xml
- Merchant Center : https://merchants.google.com/mc/overview?a=147190726
- PRODUCTS SOURCE 3 : https://merchants.google.com/mc/products/sources/detail?a=147190726&afmDataSourceId=10665531700
- Branche par défaut : main


---

## PR i18n : Traduction multilingue (EN COURS) - MAJ 01/07/2026

**Ordre langues (STRICT) :** fr / pt / it / es / de  (NE PAS mettre fr/pt/es/it/de sinon inversion ES/IT)
**Marques NON traduites :** Divine Xtases, Wooomy, Orgie, Pink Star, Hueman, Litolu, Rosy Gold, Magnum Opus, My Duchess, Le Flateur, Monster Pussy Strocker, Red Dolls Energy, Marry Me, Saturn, Love Connection, Indiana, Black Empire, Hemp Intense Orgasm, Sex on the Beach, Pina Colada, Yuka, Bio Organic, Stripe, Google Analytics.
**RÔLES :** Claude fait TOUT (fetch, traduction, insertion, validation, collage editeur, ouverture dialogue commit). JLShop06 clique uniquement "Commit changes".

### Deja fait (COMMITTED)
- **Point A** - Test live homepage 5 langues : OK (annonce, hero, SEO, 6 categories, 31 produits, marques intactes)
- **Point B1** - Banniere cookies : cles i18n.js (cookie_text/more/refuse/accept) + compliance.js data-i18n : OK, teste live
- **Point B2** - Titre panier "VOTRE PANIER" : cart.js data-i18n="cart_title" : OK, teste live (FR/PT/IT/ES/DE)
- **Point B3** - Cle i18n.js footer_retour : OK. FR "Retour boutique" / PT "Voltar a loja" / IT "Torna al negozio" / ES "Volver a la tienda" / DE "Zuruck zum Shop"

### Point B3 TERMINE (29/29) - data-i18n="footer_retour" sur toutes les fiches
Remplacement (regex /g) : `<a href="index.html">Retour boutique</a>` -> ajout ` data-i18n="footer_retour"`
EXCEPTIONS a NE PAS traiter (footer different) : mini-robe-noire.html, robe-longue-noire-argentee.html

**Fiches COMMITTED (29/29 - TERMINE) :**
1-Cockring-vibrant-Marry-Me-Wooomy, 2-Deguisement-Bunny, 3-Magnum-Opus-vibro, 4-Plug-Anal-Rosy-Gold (3 occ), 5-anneau_vibrant_telecommande, 6-black-empire-my-duchess, 7-cockring-vibrant-saturn-hueman, 8-deguisement-enseignante, 9-deguisement-etudiante, 10-deguisement-infirmiere-sexy, 11-dual-vibe-sex-on-the-beach, 12-gel_cannabis_orgie, 13-gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases, 14-gel_lubrifiant_bio_neutre_divine_xtases, 15-gel_lubrifiant_bio_neutre_framboise_divine_xtases, 16-gel_lubrifiant_bio_neutre_monoi_divine_xtases, 17-gel_lubrifiant_bio_neutre_vanille_divine_xtases, 18-hemp-intense-orgasm, 19-le-flateur, 20-lubrifiant_eau_lube_tube_chocolat_orgie, 21-lubrifiant_eau_lube_tube_fraise_orgie, 22-lubrifiant_eau_tube_barbe_a_papa, 23-monster-pussy-strocker, 24-orgie-pinacolada, 25-pink-star-choco-fraise, 26-pink-star, 27-pink_star_sucette_cerise, 28-red-dolls-energy-pleasure, 29-vibro-rechargeable-Indiana

**Toutes committees. Exceptions non traitees (footer different) : mini-robe-noire.html, robe-longue-noire-argentee.html.**


### A FAIRE APRES B3
- **B4 EN COURS (18/29 fiches committees au 01/07/2026)** : footer copyright -> cle footer_copyright (x5, fr/pt/it/es/de) COMMITTEE ; wiring <span data-i18n="footer_copyright">Boutique Luxe Intime</span> sur les 29 fiches produits (PAS les 6 pages legales, deja faites). Fiches faites 1-18 : Cockring-Marry-Me, Deguisement-Bunny, Magnum-Opus, Plug-Anal-Rosy-Gold(3occ), anneau_vibrant_telecommande, black-empire-my-duchess, cockring-saturn-hueman, deguisement-enseignante, deguisement-etudiante, deguisement-infirmiere-sexy, dual-vibe-sex-on-the-beach, gel_cannabis_orgie, gel_lubrifiant_bio_(caramel/neutre/framboise/monoi/vanille)[VARIANT footer "2025 ... -"], hemp-intense-orgasm. RESTE 19-29 : le-flateur, lubrifiant_eau_lube_tube_chocolat_orgie, lubrifiant_eau_lube_tube_fraise_orgie, lubrifiant_eau_tube_barbe_a_papa, monster-pussy-strocker, orgie-pinacolada, pink-star-choco-fraise, pink-star, pink_star_sucette_cerise, red-dolls-energy-pleasure, vibro-rechargeable-Indiana. PATTERN robuste : remplacer "Boutique Luxe Intime<br>" -> "<span data-i18n=\"footer_copyright\">Boutique Luxe Intime</span><br>".
- **Point C** : CSS hero mobile (@media 768px et 480px, rendu premium) - <style> inline dans index.html
- **Point D** : re-scan 32 fiches produits (title data-i18n + cles) via raw/JSON editeur (PAS l'API en rafale -> 403) ; re-verifier saturn/enseignante (cache edge Vercel)
- **Optionnel** : etendre applyTranslations() a title/placeholder/alt (SEO/accessibilite)

### Notes techniques i18n
- raw.githubusercontent peut etre en cache CDN ; API rate-limited (403) -> utiliser fetch cache:'reload'
- CSP bloque new Function() dans l'editeur -> validation structurelle par regex/slice
- variables window perdues a la navigation -> regenerer window.__pageNew apres chaque navigate
- Collage : ClipboardEvent sur .cm-content apres Ctrl+A (clic [400,300] pour focus)
- applyTranslations() utilise textContent sauf si la valeur contient une balise (alors innerHTML)
- NE PAS enchainer trop vite l'ouverture du dialogue commit apres le collage (bug message tape dans l'editeur)
- Laisser le message de commit par defaut (Copilot pollue si on tape)
- A revisiter : Plug-Anal-Rosy-Gold.html a 3 footers dont 2 avec liens Confidentialite/Cookies/Mentions PAS cables ; cart.js ligne 245 <span>TOTAL</span> en dur
