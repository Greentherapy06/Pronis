# 📋 AUDIT PROGRESS - Les Jardins Enchantés

**Dernière mise à jour:** 22/05/2026
**Statut:** ✅ Canonicals + og:url + sitemap + robots.txt + titres SEO + meta descriptions + pages techniques + cache Vercel terminés

---

## ✅ COMPLETÉ

### Prix harmonisés
- Magnum Opus : **149,90 €** partout
- Le Flateur : **29,99 €** partout

### Balises canonical : 24/24 ✅
Toutes les fiches produit ont une `<link rel="canonical">` valide pointant vers le bon fichier `.html`.

Canonicals cassées corrigées :
- `lubrifiant_eau_tube_barbe_a_papa.html` (pointait vers /tube_gel_barbe_a_papa_orgie)
- `lubrifiant_eau_lube_tube_chocolat_orgie.html` (pointait vers /tube_gel_chocolat_orgie)
- `lubrifiant_eau_lube_tube_fraise_orgie.html` (pointait vers /tube_gel_fraise_orgie)
- `gel_cannabis_orgie.html` (manquait `.html`)

### Balises og:url : 24/24 ✅
Toutes les fiches produit ont une `<meta property="og:url">` cohérente avec la canonical.

### Sitemap.xml : complet ✅
26 URLs (home + 24 produits + cgv).

### robots.txt : corrigé ✅
Domaine harmonisé sur `lesjardinsenchantes.vercel.app`.

### Titres SEO raccourcis : 8/8 ✅
Tous les titres > 65 caractères ont été raccourcis :
- `hemp-intense-orgasm.html` : 95 → 65 car.
- `index.html` : 82 → 62 car.
- `orgie-pinacolada.html` : 82 → 56 car.
- `le-flateur.html` : 79 → 60 car.
- `pink-star-choco-fraise.html` : 77 → 65 car.
- `dual-vibe-sex-on-the-beach.html` : 70 → 60 car.
- `pink-star.html` : 69 → 64 car.
- `pink_star_sucette_cerise.html` : 68 → 63 car.

### Pages techniques (meta description + noindex) : 3/3 ✅
- `success.html` ✅
- `cancel.html` ✅
- `erreur.html` ✅

Toutes ont `<meta name="description">` et `<meta name="robots" content="noindex, nofollow">`.

### Image orpheline : supprimée ✅
- `orgie_gel_excitation_pina_colada_1.jpg` supprimée du repo (non référencée dans le code).

### vercel.json - stratégie de cache ✅
- Images : `public, max-age=31536000, immutable` (1 an)
- CSS/JS : `public, max-age=86400, stale-while-revalidate=604800` (1 jour + revalidation 7j)
- HTML : `public, max-age=0, must-revalidate` (toujours frais)
- API veille : `public, s-maxage=82800, stale-while-revalidate=3600`

⚠️ **Convention à respecter** : ne jamais modifier une image sans changer son nom de fichier, sinon les visiteurs récents verront l'ancienne version cachée jusqu'à 1 an. Si besoin de remplacer une image, créer un nouveau nom (ex: ajouter `-v2`).

---

## 📌 TÂCHES D'AUDIT RESTANTES

### 1. Meta descriptions trop longues (>160 caractères)
Jusqu'à 238 caractères pour `gel_cannabis_orgie.html`. Google tronque au-delà de 160.

*Statut : partiellement traité selon les derniers commits ("docs: maj AUDIT_PROGRESS apres 16 meta descriptions raccourcies"). À re-vérifier sur l'ensemble des 24 fiches produit.*

### 2. Cohérence des noms d'images (optionnel)
Certains fichiers ont des espaces/accents, par exemple :
- `Déguisement Bunny.jpg`
- `Vibro rechargeable Indiana1.jpg`

À renommer en kebab-case sans accents. **Attention** : opération à risque, nécessite de mettre à jour toutes les références HTML/CSS/JS en même temps. À traiter en local avec un script bash (`git mv` + `sed`) plutôt que via l'interface GitHub.

---

## 🔑 RAPPELS
- **Repo** : `JLShop06/Les-Jardins-Enchantes`
- **URL prod** : https://lesjardinsenchantes.vercel.app/
- **NE PAS toucher** aux `price_id` Stripe
- ⚠️ **L112-1-1** : le prix affiché doit être = prix Stripe encaissé
