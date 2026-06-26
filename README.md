# Les Jardins Enchantés — Suivi i18n (FR/PT/IT/ES/DE)

> FR = langue par défaut. Réutiliser i18n.js existant. NE PAS créer de nouveau système.
> Ordre des langues dans i18n.js : **fr, pt, it, es, de** (ATTENTION : pas fr/pt/es/it/de — sinon inversion ES/IT).
> RÔLES : Claude fait TOUT (fetch, traduction, insertion, validation, collage dans l'éditeur, ouverture du dialogue de commit + message). L'utilisateur (JLShop06) clique uniquement sur "Commit changes".

## ÉTAPES 1 à 4 — TERMINÉES & déployées
- Étape 1 : moteur i18n vérifié, FR par défaut.
- Étape 2 : sélecteur de langue visible dans le header (FR, PT, ES, IT, DE).
- Étape 3 : header unifié sur 36 pages.
- Étape 4 : footer multilingue sur 34 pages + panier.

## ÉTAPE 5 — Traduction du CONTENU des fiches produits — EN COURS (22/33 committées)

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

## FICHES FAITES (i18n.js + HTML committés)

1. Cockring-vibrant-Marry-Me-Wooomy — `marryme_` — OK testé
2. Déguisement-Bunny — `bunny_` — OK testé
3. Magnum-Opus-vibro — `magnum_` — OK testé
4. Plug-Anal-Rosy-Gold — `rosygold_` — OK testé
5. anneau_vibrant_telecommande — `loveconn_` — OK testé
6. black-empire-my-duchess — `duchess_` — OK testé
7. cockring-vibrant-saturn-hueman — `saturn_` — committé ✅, test visuel live À REVÉRIFIER (cache edge Vercel)
8. deguisement-enseignante — `ens_` — committé ✅, test visuel live à faire
9. deguisement-etudiante — `etud_` — committé ✅ (i18n.js + HTML)
10. deguisement-infirmière-sexy — `infirmiere_` — committé ✅ (i18n.js + HTML)
11. dual-vibe-sex-on-the-beach — `dualvibe_` — committé ✅ (i18n.js + HTML)
12. gel_cannabis_orgie — `cannabis_` — committé ✅ (desc3 = INCI identique 5 langues)
13. gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases — `caramel_` — committé ✅ (8 desc, 11 li)
14. gel_lubrifiant_bio_neutre_divine_xtases — `neutre_` — committé ✅ (4 desc, 10 li)
15. gel_lubrifiant_bio_neutre_framboise_divine_xtases — `framboise_` — committé ✅ (8 desc, 11 li)
16. gel_lubrifiant_bio_neutre_monoi_divine_xtases — `monoi_` — committé ✅ (8 desc, 11 li)
17. gel_lubrifiant_bio_neutre_vanille_divine_xtases — `vanille_` — committé ✅ (8 desc, 11 li)
18. hemp-intense-orgasm — `hemp_` — committé ✅ (i18n.js + HTML, 9 clés : title/subtitle/desc1/li1-6)
19. le-flateur — `flateur_` — committé ✅ (i18n.js + HTML, 10 clés : title/subtitle/desc1/li1-7)
20. lubrifiant_eau_lube_tube_chocolat_orgie — `choco_` — committé ✅ (i18n.js + HTML, 23 clés : title/subtitle/desc1-10/li1-11, desc8=INCI identique)
21. lubrifiant_eau_lube_tube_fraise_orgie — `fraise_` — committé ✅ (i18n.js + HTML, 23 clés : title/subtitle/desc1-10/li1-11, desc8=INCI identique)
22. lubrifiant_eau_tube_barbe_a_papa — `barbe_` — committé ✅ (i18n.js + HTML, 23 clés : title/subtitle/desc1-10/li1-11, desc8=INCI identique)

**Total committées : 22/33.** Gamme bio Divine Xtases (5 parfums) entièrement faite + hemp-intense-orgasm + le-flateur + choco/fraise/barbe Orgie + chocolat-orgie + fraise-orgie.
Dernière ancre i18n.js = `barbe_li11` (×5, ordre fr/pt/it/es/de). i18n.js ≈ 241 195 chars, accolades 33/33.

## FICHES RESTANTES (ordre todo) — REPRENDRE À mini-robe-noire

mini-robe-noire (PAS de footer mais contenu à traduire), monster-pussy-strocker, orgie-pinacolada, pink-star-choco-fraise, pink-star, pink_star_sucette_cerise, red-dolls-energy-pleasure, robe-longue-noire-argentee (PAS de footer mais contenu à traduire), sucette-cerise, vibro-rechargeable-Indiana, vibromasseur-rabbit-rose.

(11 fiches restantes)

## RÉCAP — POUR TERMINER LA TRADUCTION (au 22/33)

### Étape 5 — 11 fiches produits restantes (ordre todo)
Pour CHAQUE fiche, méthode = fetch HTML via API GitHub → extraire FR (title/subtitle/desc/li) + compter → traduire 5 langues (préfixe de clé unique) → insérer dans i18n.js APRÈS la dernière ancre (ordre fr/pt/it/es/de) → valider (clés = N×5, accolades 33/33, ordre OK) → commit i18n.js → câbler HTML (data-i18n, séquentiel pour desc/li multiples) → VÉRIFIER fin de fichier après paste (pas de doublon) → commit HTML.
1. mini-robe-noire (PROCHAINE — PAS de footer mais contenu à traduire)
2. monster-pussy-strocker
3. orgie-pinacolada
4. pink-star-choco-fraise
5. pink-star
6. pink_star_sucette_cerise
7. red-dolls-energy-pleasure
8. robe-longue-noire-argentee (PAS de footer mais contenu à traduire)
9. sucette-cerise
10. vibro-rechargeable-Indiana
11. vibromasseur-rabbit-rose

Astuce : les fiches "gel eau Orgie" (barbe_a_papa) sont quasi identiques à choco/fraise (juste le parfum change) → réutiliser les traductions en adaptant le parfum.

### Après l'étape 5 (autres tâches)
- Modal 18+ "Accès Réservé" (compliance.js).
- Traduire le contenu des pages légales : cgv, confidentialite, cookies, mentions-legales, retractation.
- Optionnel : étendre applyTranslations() à title/placeholder/alt.

### Test live final (Vercel, 5 langues)
- À revérifier : fiches 7 (saturn) et 8 (enseignante), + vérif rapide des fiches 9→21.
- Vercel : déploiement non instantané + cache edge parfois obstiné. Vérifier le fichier déployé avant test visuel.

## AUTRES TÂCHES (après étape 5)
- Modal 18+ "Accès Réservé" (compliance.js).
- Contenu pages légales : cgv, confidentialite, cookies, mentions-legales, retractation.
- Optionnel : étendre applyTranslations() à title/placeholder/alt.

## À REVÉRIFIER VISUELLEMENT (test live 5 langues sur Vercel)
Fiches 7 (saturn) et 8 (enseignante), + vérif rapide des fiches 9→21 nouvellement faites.
