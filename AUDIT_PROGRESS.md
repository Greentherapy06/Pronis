# AUDIT_PROGRESS - Les Jardins Enchantés

**Dernière mise à jour :** 23/05/2026
**Statut global :** Conformité légale OK - Audit Lighthouse OK - Google Merchant Center EN COURS

---

## PR #1 : Nettoyage repo (MERGED)
- Pages success.html, cancel.html, erreur.html : meta description déjà présentes
- Image orpheline orgie_gel_excitation_pina_colada_1.jpg : supprimée
- vercel.json : stratégie cache immutable 1 an déjà en place
- AUDIT_PROGRESS.md : mis à jour

## PR #2 : Conformité RGPD + Age Gate 18+ (MERGED)

### Fichier créé
- compliance.js (~9.2 ko, 194 lignes) : modal 18+ + bandeau cookies + chargement différé GA

### Fonctionnalités
**Vérification d'âge 18+ obligatoire** (art. 227-24 Code pénal)
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

---

## PR #3 : Google Merchant Center (EN COURS - 23/05/2026)

### feed.xml créé et déployé
- Fichier : feed.xml (369 lignes, format RSS 2.0 Google Base)
- URL publique : https://jlshop06.github.io/Les-Jardins-Enchantes/feed.xml
- 24 produits inclus avec g:adult=yes, g:condition=new, g:availability=in_stock
- Frais de port : 4.99 EUR FR pour tous les produits

### Catégories utilisées (Google Product Category)
- 5255 : Stimulateurs, Vibromasseurs, Plugs, Cockrings, Masturbateurs
- 2673 : Gels Lubrifiants et Excitants
- 2271 : Déguisements Adulte

### Configuration Merchant Center (compte 147190726)
- **Livraison configurée** : "Livraison France Standard" - France - 2 à 6 jours ouvrés - Tarif fixe 4,99€
- **Source de données ajoutée** : PRODUCTS SOURCE 3 (Fichier URL)
  - URL : https://jlshop06.github.io/Les-Jardins-Enchantes/feed.xml
  - Pays : France
  - Langue : Français
  - Synchronisation : automatique toutes les 24h à 00:00
  - Statut fichier : "Aucun problème trouvé" ✅
  - Produits traités : en attente de validation Google (peut prendre 24-72h)

### À surveiller
- Revenir dans Merchant Center dans 24-48h pour voir :
  - Combien de produits ont été approuvés
  - Lesquels ont été refusés et pourquoi
  - Corriger les erreurs éventuelles (GTIN manquant, images refusées, etc.)

---

## TODO restant avant commercialisation

### Prioritaire
- [ ] Attendre validation Google Merchant Center (24-72h)
- [ ] Vérifier les produits approuvés/refusés dans Merchant Center > Produits
- [ ] Corriger les refus si nécessaire (ajouter GTIN si demandé)
- [ ] Test complet du tunnel de commande Stripe (test mode)
- [ ] Test responsive sur mobile réel
- [ ] Vérification finale RGPD : aucune requête vers google-analytics.com avant clic "Accepter"

### Optionnel
- [ ] Renommer les images avec espaces/accents (impact SEO mineur)
- [ ] Activer Vercel Speed Insights (gratuit)
- [ ] Activer Vercel Web Analytics (gratuit)
- [ ] Ajouter GTIN aux produits si Google le demande

---

## Notes techniques importantes

### NE JAMAIS TOUCHER
- price_id Stripe dans les boutons "AJOUTER" (L112-1-1 : prix affiché = prix facturé)
- STRIPE_SECRET_KEY (variable d'environnement Vercel)

### Clés localStorage
- lje_age_verified : 30 jours
- lje_cookie_consent : 180 jours

### Pour re-tester le modal 18+ après validation
- Mode navigation privée (Ctrl+Shift+N) OU
- Console DevTools : localStorage.clear(); location.reload();

---

## Liens
- **Repo** : https://github.com/JLShop06/Les-Jardins-Enchantes
- **Prod (GitHub Pages)** : https://jlshop06.github.io/Les-Jardins-Enchantes/
- **Feed XML** : https://jlshop06.github.io/Les-Jardins-Enchantes/feed.xml
- **Merchant Center** : https://merchants.google.com/mc/overview?a=147190726
- **Branche par défaut** : main
