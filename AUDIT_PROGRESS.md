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
