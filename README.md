# Les Jardins Enchantés — Suivi i18n (FR/PT/IT/ES/DE)

> FR = langue par défaut. Réutiliser i18n.js existant. NE PAS créer de nouveau système.
> Ordre des langues dans i18n.js : **fr, pt, it, es, de** (ATTENTION : pas fr/pt/es/it/de — sinon inversion ES/IT).
> Commits faits par le propriétaire (JLShop06) ; Claude prépare + colle, l'utilisateur clique "Commit changes".

## ÉTAPES 1 à 4 — TERMINÉES & déployées
- Étape 1 : moteur i18n vérifié, FR par défaut.
- Étape 2 : sélecteur de langue visible dans le header (FR, PT, ES, IT, DE).
- Étape 3 : header unifié sur 36 pages.
- Étape 4 : footer multilingue sur 34 pages + panier.

## ÉTAPE 5 — Traduction du CONTENU des fiches produits — EN COURS (8/33 committées)

### Méthode par fiche
1. Fetch HTML brut, extraire FR (title/subtitle/desc/li) + compter pour détecter duplication.
2. Traduire en 5 langues (FR exact ; PT/IT/ES/DE fidèles). Choisir un préfixe de clé unique.
3. Insérer les blocs dans i18n.js APRÈS les ancres = dernière clé de la fiche précédente, dans chaque bloc langue. Ordre des ancres = fr, pt, it, es, de.
4. Valider (nb clés = N×5, accolades 33/33, ordre OK, IT/ES bien placés) → commit i18n.js.
5. Câbler la page HTML (data-i18n sur title/subtitle/desc/li avec assignation cyclique (i%N)+1 ; SUPPRIMER les <strong>) → valider → commit HTML.
6. Test live 5 langues sur Vercel.

### Notes techniques importantes
- raw.githubusercontent peut être en retard sur le commit → utiliser l'API GitHub : fetch('https://api.github.com/repos/JLShop06/Les-Jardins-Enchantes/contents/<file>?ref=main',{headers:{'Accept':'application/vnd.github.raw'}}) qui renvoie la version fraîche.
- CSP GitHub bloque new Function() sur la page éditeur → validation structurelle par slice (pas d'eval).
- Variables window perdues à chaque navigation → redéfinir __M après navigation.
- Coller via ClipboardEvent sur .cm-content après clic [400,350].
- Vercel : déploiement non instantané + cache edge parfois obstiné sur une page (HIT/age qui monte). Vérifier le fichier déployé avant test visuel.

### FICHES FAITES (committées i18n.js + HTML + testées sauf mention)
1. Cockring-vibrant-Marry-Me-Wooomy — préfixe marryme_ — OK testé
2. Déguisement-Bunny — bunny_ — OK testé
3. Magnum-Opus-vibro — magnum_ — OK testé (avait eu bug inversion ES/IT corrigé)
4. Plug-Anal-Rosy-Gold — rosygold_ — OK testé (3× blocs dupliqués, clés cycliques)
5. anneau_vibrant_telecommande — loveconn_ — OK testé
6. black-empire-my-duchess — duchess_ — OK testé
7. cockring-vibrant-saturn-hueman — saturn_ — i18n.js + HTML COMMITTÉS ✅. Test visuel live NON confirmé (cache edge Vercel obstiné sur la page ; traductions vérifiées correctes dans i18n.js déployé). → À REVÉRIFIER visuellement plus tard.
8. deguisement-enseignante — ens_ — i18n.js + HTML COMMITTÉS ✅. Test visuel live à faire.

### EN COURS — fiche 9 : deguisement-etudiante — préfixe etud_
- i18n.js : 75 clés etud_ construites et COLLÉES dans l'éditeur, **EN ATTENTE DE COMMIT** (ancres ens_li9 lignes 151/300/449/598/747 ; 853→928 lignes ; validé ok:true, IT="Completo sexy con body scollato", ES="Conjunto sexy con body escotado").
- **REPRISE** : si le collage etud_ est perdu, refaire l'insertion i18n.js (préfixe etud_, mêmes textes ci-dessous), commit, puis câbler deguisement-etudiante.html (1 title, 1 sub, 4 desc, 9 li, 2 <strong> à retirer), commit, test live.

### FICHES RESTANTES (ordre todo) — après etudiante
deguisement-infirmière-sexy, dual-vibe-sex-on-the-beach, gel_cannabis_orgie, gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases, gel_lubrifiant_bio_neutre_divine_xtases, gel_lubrifiant_bio_neutre_framboise_divine_xtases, gel_lubrifiant_bio_neutre_monoi_divine_xtases, gel_lubrifiant_bio_neutre_vanille_divine_xtases, hemp-intense-orgasm, le-flateur, lubrifiant_eau_lube_tube_chocolat_orgie, lubrifiant_eau_lube_tube_fraise_orgie, lubrifiant_eau_tube_barbe_a_papa, mini-robe-noire (PAS de footer mais contenu à traduire), monster-pussy-strocker, orgie-pinacolada, pink-star-choco-fraise, pink-star, pink_star_sucette_cerise, red-dolls-energy-pleasure, robe-longue-noire-argentee (PAS de footer mais contenu à traduire), sucette-cerise, vibro-rechargeable-Indiana, vibromasseur-rabbit-rose.

## AUTRES TÂCHES RESTANTES (après étape 5)
- Modal 18+ "Accès Réservé" (compliance.js).
- Contenu des pages légales : cgv, confidentialite, cookies (KK), mentions-legales, retractation.
- Optionnel : étendre applyTranslations() à title/placeholder/alt.

## À REVÉRIFIER VISUELLEMENT
- saturn (fiche 7) : cache edge Vercel — retester quand propagé.
- enseignante (fiche 8) : test live 5 langues.
