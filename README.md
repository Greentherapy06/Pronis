Les Jardins Enchantés — Suivi i18n (FR/PT/IT/ES/DE)

FR = langue par défaut. Réutiliser i18n.js existant. NE PAS créer de nouveau système. Ordre des langues dans i18n.js : fr, pt, it, es, de (ATTENTION : pas fr/pt/es/it/de — sinon inversion ES/IT). RÔLES : Claude fait TOUT (fetch, traduction, insertion, validation, collage dans l'éditeur, ouverture du dialogue de commit + message). L'utilisateur (JLShop06) clique uniquement sur "Commit changes".

==================================================
ÉTAT GLOBAL (mis à jour)
==================================================
Étapes 1 à 4 : TERMINÉES & déployées (moteur i18n, sélecteur de langue header, header unifié 36 pages, footer multilingue 34 pages + panier).
Étape 5 (traduction CONTENU des 33 fiches produits) : TERMINÉE — toutes les fiches produits réelles sont câblées (i18n.js + HTML).
Modal 18+ "Accès Réservé" (compliance.js) : TERMINÉ & multilingue (5 langues).

=== MAJ i18n 01/07/2026 (session Claude) ===
- Titres H1 des 29 fiches produits : data-i18n posés + clés ×5 (fr/pt/it/es/de) — VÉRIFIÉ.
- Footer "Retour boutique" (footer_retour) + Footer "© ... Boutique Luxe Intime" (footer_copyright) : câblés ×29 — TERMINÉ.
- Point E — Labels UI communs des fiches produits : "Description" (prod_desc), "Caractéristiques" (prod_feat), bouton "AJOUTER AU PANIER" (prod_add) câblés sur les 29 fiches vers clés i18n.js EXISTANTES (aucune nouvelle clé). Variantes : fiches standard d1/c1/a1 ; gels/lubes bio d0/c1/a2 (pas de titre "Description", "Caracteristiques" sans accent, 2 boutons) ; Plug-Anal-Rosy-Gold d3/c3/a3. — TERMINÉ 29/29.
- CSS hero mobile (@media 768px + 480px dans index.html) — TERMINÉ.
RESTE À FAIRE : bannière cookies (compliance.js, 3 boutons) ; titre panier "VOTRE PANIER" via window.t('cart_title') dans cart.js ; blocs ingrédients des gels bio (Cire d'abeille, Aloe Vera, Karité, badges CERTIFIÉ BIO / FABRIQUÉ EN FRANCE / Yuka, prix) — NON câblés ; pages légales : ~7 fragments résiduels chacune.
============================================

==================================================
MÉTHODE PAR FICHE (rappel)
==================================================
Pour chaque fiche : fetch HTML (API GitHub ou raw) → extraire FR (title/subtitle/desc/li) + compter → traduire 5 langues (préfixe de clé unique) → insérer dans i18n.js APRÈS la dernière ancre, ordre fr/pt/it/es/de → valider (clés = N×5, accolades 33/33, ordre OK, IT/ES bien placés) → commit i18n.js → câbler HTML (data-i18n sur title/subtitle/desc/li, assignation séquentielle) → VÉRIFIER fin de fichier (pas de doublon) → commit HTML → test live.

NOTES TECHNIQUES IMPORTANTES
- Dernière ancre i18n.js = indiana_li12 (×5, ordre fr/pt/it/es/de). i18n.js ≈ 288 139 chars, accolades 33/33.
- raw.githubusercontent peut être EN RETARD sur le dernier commit (cache CDN). L'API GitHub /contents est fiable MAIS rate-limitée (403 si trop de requêtes anonymes rapides).
- ASTUCE FIABLE : sur la page éditeur GitHub (/edit/...), le contenu HEAD à jour est dispo dans un <script type="application/json"> embarqué → l'en extraire plutôt que via raw/API.
- CSP GitHub bloque new Function() sur l'éditeur → validation structurelle par regex/slice (pas d'eval).
- Variables window perdues à chaque navigation → tout régénérer après navigation.
- Coller via ClipboardEvent sur .cm-content après Ctrl+A (clic [400,350] pour focus).
- applyTranslations() utilise textContent (PAS innerHTML) → NE PAS mettre de HTML (<br>, <strong>) dans les valeurs i18n destinées à des éléments data-i18n, sinon les balises s'affichent en clair.
- Vercel : déploiement non instantané + cache navigateur sur les <script src> (l'ancien JS peut s'exécuter au 1er chargement). Vérifier le fichier déployé (fetch cache:'reload') avant de conclure à un bug.

==================================================
FICHES PRODUITS — TOUTES FAITES (i18n.js + HTML committés)
==================================================
marryme_, bunny_, magnum_, rosygold_, loveconn_, duchess_, saturn_, ens_ (enseignante), etud_ (etudiante), infirmiere_, dualvibe_, cannabis_ (desc3=INCI identique 5 langues), caramel_, neutre_, framboise_, monoi_, vanille_, hemp_, flateur_, choco_, fraise_, barbe_, minirobe_, monster_, pina_, pscf_, pstar_, pscerise_, reddolls_, robelongue_, indiana_.

Total : 32 préfixes de fiches câblés.

SESSION RÉCENTE (terminée) :
- robe-longue-noire-argentee (robelongue_, 10 clés) → HTML câblé (i18n.js était déjà fait).
- vibro-rechargeable-Indiana (indiana_, 18 clés ×5) → i18n.js + HTML.
- gel_cannabis_orgie (cannabis_, 14 clés) → HTML câblé (i18n.js existait déjà ; le README précédent le marquait à tort "fait" alors que le HTML manquait).
- Modal 18+ : age_title/age_body/age_yes/age_no/age_legal (×5) dans i18n.js + data-i18n sur les éléments du modal dans compliance.js + appel applyTranslations() après appendChild(overlay). age_body en TEXTE PLAT (compat textContent). Testé OK en pt (Acesso Reservado, etc.).

ENTRÉES FANTÔMES de l'ancienne todo (n'existent PAS comme fichiers) — à ignorer :
- "sucette-cerise" = en réalité pink_star_sucette_cerise.html (déjà fait).
- "vibromasseur-rabbit-rose" = aucun fichier correspondant dans le dépôt.

==================================================
RESTE À FAIRE
==================================================
1) PAGES LÉGALES — traduire le contenu (5 langues) — TERMINÉ (5/5 fait) :
    - cgv.html ✅ FAIT (70 éléments cgv_0..69, 2 commits Art.1-9 + Art.10-16 ; testé live FR/PT/DE OK)
   • confidentialite.html ✅ FAIT (53 éléments confid_0..52, RGPD ; i18n.js 265 clés + HTML câblé ; testé live FR/DE/IT OK)
   • cookies.html ✅ FAIT (39 éléments cookies_0..38 ; i18n.js 195 clés + HTML câblé ; testé live FR/DE/ES OK)
    - mentions-legales.html ✅ FAIT (43 clés mentions_ ×5 ; spans pour p à HTML inline ; données fixes SIRET/email/Vercel/médiateur NON traduites ; testé live FR/PT/IT/ES/DE OK)
    - retractation.html ✅ FAIT (34 clés retract_ ×5 : 22 statiques data-i18n + 12 dynamiques JS via window.t ; exposé window.TRANSLATIONS + helper window.t() dans i18n.js ; formulaire récap + messages d'erreur traduits ; testé live parcours formulaire DE + erreur ES OK)
   Méthode : même process que les fiches (préfixes proposés : cgv_, confid_, cookies_, mentions_, retract_). Attention au volume → découper par page, valider accolades 33/33 à chaque commit. Vérifier les éléments à NE PAS traduire (dates, adresses, n° SIRET, raison sociale).

2) VÉRIFICATION COMPLÈTE LIVE (non faite faute de temps + rate limit API) :
   - Re-scanner les 32 fiches produits (title data-i18n + clés présentes dans i18n.js).
   - Le scan automatique précédent a donné des FAUX POSITIFS "title not wired" à cause du rate limit 403 de l'API. Refaire via raw.githubusercontent ou le JSON embarqué de l'éditeur, pas l'API directe en rafale.
   - Tester le modal 18+ en live dans les 5 langues APRÈS expiration du cache navigateur.
   - Re-vérifier visuellement fiches saturn et enseignante (cache edge Vercel signalé précédemment).

3) OPTIONNEL : étendre applyTranslations() à title/placeholder/alt (SEO + accessibilité).

==================================================
PROCHAINE ACTION RECOMMANDÉE : Les 5 pages légales sont TERMINÉES (cgv, confidentialite, cookies, mentions-legales, retractation). Reste la VÉRIFICATION COMPLÈTE LIVE des 32 fiches produits (title data-i18n + clés i18n.js) via raw/JSON éditeur (PAS l'API en rafale → faux positifs 403), le test du modal 18+ dans les 5 langues après expiration cache, et la re-vérif visuelle des fiches saturn/enseignante (cache edge Vercel). OPTIONNEL : étendre applyTranslations() à title/placeholder/alt (SEO + accessibilité). NOTE NOUVELLE : pour traduire des chaînes générées par du JS (comme le formulaire de retractation), utiliser le helper global window.t(key) — il lit getLang(), fallback fr, fallback clé ; les valeurs i18n peuvent contenir du HTML (<strong>, <br>) car le JS les injecte via innerHTML. ÉTAT i18n.js : cgv 350 + confid 265 + cookies 195 + mentions 215 + retract 170 clés (≈420 153 chars, accolades 33/33, ordre fr/pt/it/es/de). window.TRANSLATIONS exposé + helper window.t().


==================================================
SESSION AUDIT TRADUCTION INTÉGRALE (accueil + fiches) — EN COURS

OBJECTIF : audit intégral des traductions (accueil + fiches produits) dans les 5 langues. FR = défaut. Corriger les manques + refaire la bannière HERO mobile (rendu haut de gamme/luxe). Règle confirmée par JLShop06 : on TRADUIT les descriptifs produits (gel lubrifiant, etc.) mais on GARDE les noms de marque (Divine Xtases, Wooomy, Orgie, Pink Star, Hueman, Litolu, Rosy Gold, Magnum Opus, My Duchess, Le Flateur, Monster Pussy Strocker, Red Dolls Energy, Marry Me, Saturn, Love Connection, Indiana, Black Empire, Hemp Intense Orgasm, Sex on the Beach, Piña Colada, Yuka, Bio Organic, Stripe).

--- FAIT (committé sur main) ---
[OK] i18n.js : +52 clés home_ ×5 langues (fr/pt/it/es/de) insérées APRÈS indiana_li12, AVANT age_title. Validé : accolades équilibrées, 52 clés/langue, ordre fr/pt/it/es/de OK. i18n.js ≈ 454 757 chars. Clés ajoutées :
  - home_hero_baseline, home_hero_desc (avec <strong> SEO)
  - home_seo_intro_title, home_seo_intro_p1/p2/p3
  - home_seo_grid_t1/p1, t2/p2, t3/p3
  - home_seo_why_title, home_seo_why_text (avec &nbsp; et <strong>)
  - home_cat_1..6 (titres catégories ✦)
  - home_footer_seo
  - home_prod_1..31 (31 noms produits traduits, marques conservées)
  NOTE : home_announce NON créée — la barre d'annonce réutilise la clé EXISTANTE banner_livraison (déjà traduite ×5). De même cart_title (VOTRE PANIER) existe déjà.
[OK] index.html : 52 attributs data-i18n câblés (committé sur main, vérifié via API GitHub : 52 home_ + .announce-bar=banner_livraison). Méthode : remplacement de chaîne sur HTML brut. Validé parse OK / 0 manquant / scripts 5=5 / meta 21=21 / diff +1377 chars. Mapping respecté (hero, 3 sections SEO, 6 cat, footer SEO span, 31 produits).

--- RESTE À FAIRE (priorité) ---
1) index.html — [TERMINÉ ✅ committé] data-i18n posés. Référence du mapping (au cas où) :
   - .announce-bar -> banner_livraison (clé existante)
   - .hero-baseline -> home_hero_baseline ; .hero-desc -> home_hero_desc
   - .seo-intro__title -> home_seo_intro_title ; les 3 .seo-intro__text -> home_seo_intro_p1/p2/p3 (ordre DOM)
   - 3 .seo-col__title -> home_seo_grid_t1/t2/t3 ; 3 .seo-col__text -> home_seo_grid_p1/p2/p3
   - .seo-why__title -> home_seo_why_title ; .seo-why__text -> home_seo_why_text
   - 6 .cat-section__title -> home_cat_1..6 (ordre DOM)
   - 31 <h3 itemprop="name"> -> home_prod_1..31 (ordre DOM)
   - <span> SEO du footer ("Boutique Sextoys & Gel Lubrifiant Intime France & Europe") -> home_footer_seo
   MÉTHODE FIABLE TESTÉE : insertion par remplacement de chaîne sur le HTML brut (PAS DOMParser re-serialize). applyTranslations() bascule en innerHTML SI la valeur contient une balise sinon textContent -> <strong> OK dans les valeurs. ATTENTION : "Boutique Sextoys" apparaît AUSSI dans og:title/twitter -> ne câbler QUE le <span> du footer (dernière occurrence, après "Les Jardins Enchantés –").

2) COMPOSANTS PARTAGÉS (toutes les pages) :
   ✅ FAIT (01/07/2026) : labels UI "Description"/"Caractéristiques"/"AJOUTER AU PANIER" câblés ×29 (prod_desc/prod_feat/prod_add, clés existantes). footer_retour + footer_copyright câblés ×29.
   RESTE non fait :
   - Bannière COOKIES (compliance.js) : texte + 3 boutons "En savoir plus / Tout refuser / Tout accepter" encore en FR. compliance.js utilise déjà window.t + applyTranslations (modal 18+). -> créer clés cookie_banner_text, cookie_more, cookie_refuse_all, cookie_accept_all (×5) + remplacer les chaînes FR codées en dur par window.t().
   - "Retour boutique" (footer <a href=index.html>) présent sur ~31 fiches, NON câblé. -> clé footer_retour (×5). Exceptions sans ce lien : mini-robe-noire.html, robe-longue-noire-argentee.html (footer différent).
   - "VOTRE PANIER" (titre panier généré par cart.js) : clé cart_title existe déjà -> faire utiliser window.t('cart_title') dans cart.js.
   - Footer "© Les Jardins Enchantés – Boutique Luxe Intime" (texte nu) sur ~31 fiches : envisager clé footer_copyright. Sur index.html le footer est différent.

3) BANNIÈRE HERO MOBILE (CSS) — non fait. Actuellement un seul @media (max-width:768px) qui ne touche QUE .hero-logo-img. .hero a padding 200px 24px 140px + min-height 92vh (trop sur mobile). Refaire @media 768px et 480px : rythme vertical réduit, .hero-baseline/.hero-desc tailles mobiles, .hero-badges en colonne aérée, .hero-cta pleine largeur, espacement premium. Tester en vrai viewport mobile (vérifier window.innerWidth ; resize_window ne réduit pas toujours le rendu).

4) VÉRIF LIVE 5 langues : accueil (après câblage index.html) + re-scan fiches (raw, pas API en rafale -> 403 faux positifs).

ASTUCES SESSION :
- Filtre de sortie outil JS bloque fetchs renvoyant URLs avec query string / patterns sensibles -> nettoyer/limiter les retours.
- IIFE async ne renvoient pas toujours leur valeur dans le REPL -> stocker dans window.__x puis lire au call suivant.
- Variables window perdues à la navigation -> reconstruire (les 52 traductions __T ont été redéfinies sur la page éditeur avant de générer i18n.js).
- raw.githubusercontent fetchable depuis github.com (CORS OK). new Function() bloqué par CSP sur l'éditeur -> validation structurelle (slice/regex).
- Coller dans CodeMirror 6 : focus .cm-content -> Ctrl+A (clavier réel) -> dispatch ClipboardEvent('paste') avec DataTransfer text/plain. defaultPrevented:true = CM a intercepté. textContent non fiable (virtualisé) -> vérifier via scrollHeight / scroll + .cm-line.


==================================================
>>> REPRENDRE ICI (prochaine session) <<<

ÉTAT : Page d'accueil = TRADUCTION TERMINÉE (i18n.js + index.html committés sur main). À tester en live dans les 5 langues une fois Vercel redéployé (cache edge possible -> fetch cache:'reload' / vérifier window.innerWidth pour le mobile).

PROCHAINES ACTIONS (dans l'ordre) :

A) TEST LIVE ACCUEIL (rapide) : ouvrir lesjardinsenchantes.vercel.app, changer de langue, vérifier que announce-bar, hero, sections SEO, titres catégories et noms produits se traduisent bien (notamment <strong> rendus correctement, pas en texte brut). Les noms de marque doivent rester intacts.

B) COMPOSANTS PARTAGÉS (présents sur TOUTES les pages -> gros impact) :
   B1) Bannière COOKIES (compliance.js) — encore 100% FR. Textes : "Nous utilisons des cookies de mesure d'audience (Google Analytics) pour améliorer votre expérience. Vous pouvez accepter ou refuser librement." + boutons "En savoir plus", "Tout refuser", "Tout accepter". compliance.js utilise DÉJÀ window.t + applyTranslations (modal 18+ fait). -> créer clés (×5) : cookie_text, cookie_more, cookie_refuse, cookie_accept ; remplacer les chaînes FR codées en dur par window.t('cle') ; appeler applyTranslations()/réappliquer après création de la bannière.
   B2) "VOTRE PANIER" (titre panier, généré par cart.js) — clé cart_title EXISTE déjà (×5). -> faire utiliser window.t('cart_title') dans cart.js là où le titre est écrit.
   B3) "Retour boutique" (footer <a href=index.html>) — non câblé sur ~31 fiches. -> clé footer_retour (×5) dans i18n.js + data-i18n sur le lien. Exceptions au footer différent : mini-robe-noire.html, robe-longue-noire-argentee.html.
   B4) "© Les Jardins Enchantés – Boutique Luxe Intime" (texte nu footer ~31 fiches) — envisager footer_copyright (×5) en enveloppant la partie traduisible dans un <span data-i18n>. Garder "© Les Jardins Enchantés" (marque).

C) BANNIÈRE HERO MOBILE (CSS — demande explicite "haut de gamme/luxe") :
   Actuel : un seul @media (max-width:768px) qui ne touche QUE .hero-logo-img (220px). .hero = padding 200px 24px 140px + min-height 92vh (trop haut/vide sur mobile).
   À faire : @media 768px et 480px -> réduire padding/min-height, calibrer .hero-baseline (clamp ~18-20px) et .hero-desc (~14px, line-height aéré), .hero-badges en colonne ou wrap centré avec gap réduit, .hero-cta pleine largeur (ou large) avec letter-spacing premium, marges régulières. Objectif : rythme vertical élégant, pas de vide, typo équilibrée. Le CSS est inline dans <style> de index.html (et/ou dans les fiches). Tester en VRAI mobile (window.innerWidth ; resize_window ne change pas toujours le rendu interne).

D) RE-SCAN FICHES PRODUITS (vérif finale) : via raw/API (PAS l'API en rafale -> 403). Confirmer title data-i18n + clés présentes. Les fiches sont marquées faites mais re-vérifier saturn/enseignante (cache edge signalé).

RAPPEL CLÉS HOME AJOUTÉES (déjà dans i18n.js, ordre fr/pt/it/es/de) : home_hero_baseline, home_hero_desc, home_seo_intro_title, home_seo_intro_p1..p3, home_seo_grid_t1..t3 + p1..p3, home_seo_why_title, home_seo_why_text, home_cat_1..6, home_footer_seo, home_prod_1..31. (home_announce N'EXISTE PAS : utiliser banner_livraison.)


========================================================================
REPRISE — BUG BOUTON PANIER (data-i18n="panier") — MAJ 02/07/2026
========================================================================

CONTEXTE DU BUG :
Le bouton PANIER du header ("PANIER (0)") n'etait traduit QUE sur l'accueil.
Sur les autres pages il etait ecrit sans le span i18n :
  <button class="lux-cart" onclick="showCart()">PANIER (<span id="cartCount">0</span>)</button>
=> il fallait ajouter <span data-i18n="panier">PANIER</span> pour qu'il devienne
   WARENKORB / CARRINHO / etc. selon la langue.

CORRECTIF APPLIQUE (par page) :
  Regex : PANIER(\s*)\(<span id="cartCount">
  Remplacement : <span data-i18n="panier">PANIER</span>$1(<span id="cartCount">
  (le flag /g gere les pages a plusieurs occurrences)

WORKFLOW PAR PAGE (RÔLES : Claude fait tout SAUF le clic Commit) :
  1. Aller sur github.com/JLShop06/Les-Jardins-Enchantes/edit/main/[FICHIER]
  2. Extraire le HTML depuis le JSON de l'editeur (script[type=application/json],
     chaine contenant 'lux-cart' + '<!DOCTYPE'), appliquer le remplacement,
     stocker dans window.__new. Verifier occ_before / i18n_after / delta(=occ*32).
  3. Coller : click [400,300], Ctrl+A, ClipboardEvent paste sur .cm-content
     (DataTransfer text/plain = window.__new). Verifier defaultPrevented:true.
  4. L'UTILISATEUR (JLShop06) clique "Commit changes...". Laisser le message par defaut.

NOTES TECHNIQUES :
  - CodeMirror virtualise => verif textContent apres collage NON FIABLE.
    Se fier a i18n_after (avant collage) + defaultPrevented:true.
  - Retours JS contenant des URL => filtre "[BLOCKED]". Renvoyer des compteurs/booleens.
  - fetch avec {cache:'reload'} (CDN raw + rate-limit API 403).
  - NE PAS toucher au CSS (style.css a des blocs dupliques, instruction utilisateur).

------------------------------------------------------------------------
AVANCEMENT — 20 pages COMMITTEES (bouton panier corrige) :
------------------------------------------------------------------------
 1. hemp-intense-orgasm.html
 2. dual-vibe-sex-on-the-beach.html (2 occ)
 3. Plug-Anal-Rosy-Gold.html (3 occ)
 4. gel_lubrifiant_bio_neutre_divine_xtases.html
 5. gel_lubrifiant_bio_neutre_vanille_divine_xtases.html
 6. gel_lubrifiant_bio_neutre_framboise_divine_xtases.html
 7. gel_lubrifiant_bio_neutre_monoi_divine_xtases.html
 8. gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html
 9. gel_cannabis_orgie.html
10. lubrifiant_eau_tube_barbe_a_papa.html
11. lubrifiant_eau_lube_tube_chocolat_orgie.html
12. lubrifiant_eau_lube_tube_fraise_orgie.html
13. pink-star.html
14. pink_star_sucette_cerise.html
15. pink-star-choco-fraise.html
16. orgie-pinacolada.html
17. vibro-rechargeable-Indiana.html
18. Magnum-Opus-vibro.html
19. black-empire-my-duchess.html
20. le-flateur.html

------------------------------------------------------------------------
RESTE A FAIRE — 15 pages (scan live du 02/07/2026, cache:reload) :
------------------------------------------------------------------------
Pages produits/autres (10) — bouton panier uniquement (1 occ chacune) :
  - robe-longue-noire-argentee.html
  - mini-robe-noire.html
  - monster-pussy-strocker.html
  - red-dolls-energy-pleasure.html
  - Cockring-vibrant-Marry-Me-Wooomy.html
  - cockring-vibrant-saturn-hueman.html
  - anneau_vibrant_telecommande.html
  - deguisement-etudiante.html
  - deguisement-enseignante.html
  (NB: deguisement-infirmiere-sexy n'apparait PLUS dans le scan live -> ignorer)

Pages legales (5) — bouton panier (1 occ) :
  - cgv.html            (AUSSI cart_title manquant sur <h2>VOTRE PANIER</h2>)
  - cookies.html        (AUSSI cart_title manquant)
  - confidentialite.html(AUSSI cart_title manquant)
  - mentions-legales.html
  - retractation.html

  => Sur cgv/cookies/confidentialite : ajouter EN PLUS data-i18n="cart_title"
     sur le <h2>VOTRE PANIER</h2> (la cle cart_title existe deja dans i18n.js).

------------------------------------------------------------------------
TACHE FINALE (apres les 15 pages) — lien "Renoncer au contrat" :
------------------------------------------------------------------------
Le lien injecte par compliance.js est en dur en francais. Il faut :
  - creer une nouvelle cle i18n (ex: "renoncer_contrat") avec 5 traductions
    fr/pt/it/es/de A FAIRE VALIDER PAR L'UTILISATEUR avant insertion,
  - cabler dans compliance.js.
FR = "Renoncer au contrat" ; PT/IT/ES/DE a proposer et faire valider.

------------------------------------------------------------------------
SCRIPT DE RE-SCAN (a lancer sur l'onglet du site live pour lister le reste) :
------------------------------------------------------------------------
  fetch chaque page avec {cache:'reload'}, tester /data-i18n="panier"/.
  Les pages sans cette chaine restent a corriger.

RAPPEL RÔLES : Claude fait TOUT sauf le clic final "Commit changes" (JLShop06).
Ordre langues STRICT : fr / pt / it / es / de.
Marques NON traduites : Divine Xtases, Wooomy, Orgie, Pink Star, Hueman, Litolu,
Rosy Gold, Magnum Opus, My Duchess, Le Flateur, Monster Pussy Strocker,
Red Dolls Energy, Marry Me, Saturn, Indiana, Black Empire, Hemp Intense Orgasm,
Sex on the Beach, Pina Colada, Yuka, Bio Organic, Stripe, Google Analytics.
========================================================================

================================================== SESSION CLÔTURÉE — MAJ 02/07/2026 (fin de session Claude)

BUG BOUTON PANIER (data-i18n="panier") : TERMINÉ 100%.
Les 14 pages restantes ont été committées (span data-i18n="panier" sur le bouton du header) :
robe-longue-noire-argentee, mini-robe-noire, monster-pussy-strocker, red-dolls-energy-pleasure,
Cockring-vibrant-Marry-Me-Wooomy, cockring-vibrant-saturn-hueman, anneau_vibrant_telecommande,
deguisement-etudiante, deguisement-enseignante, cgv, cookies, confidentialite, mentions-legales, retractation.
Vérifié en live via raw GitHub (cache:reload) : panier=1 partout, plus aucun "PANIER (" brut (left=0).

cart_title ("VOTRE PANIER") : câblé data-i18n="cart_title" sur les 4 pages légales ayant un titre statique :
cgv, cookies, confidentialite ET mentions-legales (cette dernière ajoutée par cohérence, le titre y était présent
et non câblé ; validé par JLShop06). retractation n'a pas de titre panier statique (généré côté JS).

LIEN "Renoncer au contrat" (compliance.js) : TERMINÉ.
- i18n.js : clé renoncer_contrat ajoutée ×5 (ordre fr/pt/it/es/de), insérée après home_prod_31 dans chaque bloc de langue.
  Valeurs (validées par JLShop06) : fr="Renoncer au contrat", pt="Renunciar ao contrato",
  it="Recedere dal contratto", es="Renunciar al contrato", de="Vom Vertrag zurücktreten".
  Validé : 5 clés, accolades équilibrées.
- compliance.js (ligne ~214, ancre 'a' du footer rétractation) : ancien 'a.textContent = "Renoncer au contrat"' remplacé par
  a.setAttribute('data-i18n','renoncer_contrat') + a.textContent = window.t('renoncer_contrat') (fallback FR).
  NB : applyTranslations() est appelé AVANT l'injection de ce footer -> le rendu initial passe donc par window.t(),
  et data-i18n assure la retraduction lors d'un changement de langue ultérieur.

VÉRIF : commits confirmés sur GitHub raw (i18n.js 5 valeurs OK ; compliance.js window.t + data-i18n OK, ancienne ligne supprimée).
Simulation window.t par langue : les 5 traductions renvoyées correctement.
RESTE (auto) : propagation cache edge Vercel non instantanée -> re-tester le lien live dans les 5 langues après expiration du cache.
========================================================================


---

## SUIVI PERFORMANCE & NAVIGATION AGENTIQUE (PageSpeed) — MAJ 2026-07-03

Rapport PageSpeed (mobile) : https://pagespeed.web.dev/analysis/https-les-jardins-enchantes-com/rukr1digid?form_factor=mobile
Scores de depart : Performances 78, Accessibilite 91, Bonnes pratiques 100, SEO 100, Navigation agentique 2/3.

### RÔLES (identiques a l'i18n)
Claude fait TOUT (fetch, calcul dimensions, collage dans l'editeur, verification debut/fin). L'utilisateur (JLShop06) clique UNIQUEMENT sur "Commit changes".

### PLAN
- A. llms.txt avec vrais liens Markdown — ✅ FAIT
- B. Ajouter width/height sur les <img> (reduit le CLS 0.388) — EN COURS
- C. Recompresser/redimensionner les ~13 images les plus lourdes (1.2–1.5 Mo) — A FAIRE
- D. Corriger 69 animations CSS non compositees (utiliser transform/opacity) — A FAIRE

### ETAPE B — width/height : fichiers FAITS (commit confirme via API)
llms.txt, index.html, Plug-Anal-Rosy-Gold.html, le-flateur.html, mini-robe-noire.html, red-dolls-energy-pleasure.html, robe-longue-noire-argentee.html, Cockring-vibrant-Marry-Me-Wooomy.html, Déguisement-Bunny.html, Magnum-Opus-vibro.html, anneau_vibrant_telecommande.html, black-empire-my-duchess.html, cockring-vibrant-saturn-hueman.html, deguisement-enseignante.html, deguisement-etudiante.html, deguisement-infirmière-sexy.html

### ETAPE B — fichiers RESTANTS (img sans width/height)
dual-vibe-sex-on-the-beach.html (4), gel_cannabis_orgie.html (3), gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html (1), gel_lubrifiant_bio_neutre_divine_xtases.html (1), gel_lubrifiant_bio_neutre_framboise_divine_xtases.html (1), gel_lubrifiant_bio_neutre_monoi_divine_xtases.html (1), gel_lubrifiant_bio_neutre_vanille_divine_xtases.html (1), hemp-intense-orgasm.html (3), lubrifiant_eau_lube_tube_chocolat_orgie.html (3), lubrifiant_eau_lube_tube_fraise_orgie.html (3), lubrifiant_eau_tube_barbe_a_papa.html (3), monster-pussy-strocker.html (4), orgie-pinacolada.html (1), pink-star-choco-fraise.html (1), pink-star.html (1), pink_star_sucette_cerise.html (1), vibro-rechargeable-Indiana.html (a verifier)

### PAGES SANS IMAGE (a ignorer)
cancel, cgv, confidentialite, cookies, erreur, mentions-legales, retractation, success, veille-concurrents

### METHODE PAR FICHIER (une a une, via editeur web GitHub)
1. Aller sur https://github.com/JLShop06/Les-Jardins-Enchantes/edit/main/<FICHIER>
2. En JS sur cette page : fetch du raw, extraire les <img>, fetch chaque image (createImageBitmap) pour width/height naturels, regex-remplacer les <img> sans width/height. Stocker dans window.__newFileHtml. (IMPORTANT: recalculer APRES avoir navigue, sinon la variable est "undefined").
3. Clic dans l'editeur, Ctrl+A, Delete (vider completement AVANT de coller).
4. Coller via ClipboardEvent('paste') sur .cm-content.
5. Ctrl+Home puis Ctrl+End : verifier un seul <!DOCTYPE html> au debut et footer propre a la fin.
6. Demander a l'utilisateur de cliquer "Commit changes".
7. Verifier via API : https://api.github.com/repos/JLShop06/Les-Jardins-Enchantes/contents/<FICHIER> (base64 decode, compter width="X" height="Y"). NE PAS se fier a raw.githubusercontent (cache CDN en retard).

### METHODE PLUS RAPIDE (github.dev / VS Code web) — a activer
Ouvrir https://vscode.dev/github/JLShop06/Les-Jardins-Enchantes , autoriser "Visual Studio Code" (Continue en tant que JLShop06). Permet d'editer plusieurs fichiers puis 1 seul commit groupe. L'utilisateur valide la connexion.


---

## REPRISE AVEC VISUAL STUDIO CODE (github.dev) — INSTRUCTIONS DETAILLEES

### Objectif
Editer plusieurs fichiers HTML d'un coup et faire UN SEUL commit groupe, au lieu de la methode fichier-par-fichier (plus lente). Cela sert a finir l'ETAPE B (width/height) sur les 17 fichiers restants, puis a preparer C et D.

### 1. Ouvrir l'editeur
Aller sur : https://vscode.dev/github/JLShop06/Les-Jardins-Enchantes
(ou appuyer sur "." (point) depuis la page GitHub du repo — cela ouvre github.dev.)

### 2. Autoriser la connexion (fait par JLShop06, PAS par Claude)
- Sur l'ecran "Authorize Visual Studio Code", cliquer "Continue" (connecte en tant que JLShop06).
- Si un ecran GitHub OAuth apparait, cliquer "Authorize".
- Attendre que l'arborescence des fichiers s'affiche a gauche (explorer).
- NOTE : la 1ere tentative etait restee bloquee sur "Connexion a github.com...". Si ca rebloque : recharger l'onglet, ou revenir a la methode fichier-par-fichier (voir plus haut) qui marche a 100%.

### 3. Workflow d'edition dans VS Code web
Pour CHAQUE fichier restant (liste "ETAPE B — fichiers RESTANTS" plus haut) :
- Ouvrir le fichier dans l'explorer.
- Claude calcule les dimensions naturelles des images (fetch raw + createImageBitmap) et fournit le contenu corrige (img avec width="W" height="H").
- Remplacer le contenu du fichier par la version corrigee (Ctrl+A, Delete, coller).
- Ne PAS oublier : recalculer les dimensions APRES ouverture (variable JS sinon "undefined").

### 4. Commit groupe (fait par JLShop06)
- Cliquer sur l'icone "Source Control" (branche, colonne de gauche) ou Ctrl+Shift+G.
- Verifier la liste des fichiers modifies (Changes).
- Ecrire un message de commit (ex : "perf: ajout width/height images (CLS) — lot 2").
- Cliquer "Commit & Push" (coche verte / bouton). => C'est JLShop06 qui valide le commit, jamais Claude.

### 5. Verification (Claude)
Apres push, verifier chaque fichier via l'API :
https://api.github.com/repos/JLShop06/Les-Jardins-Enchantes/contents/<FICHIER>?ref=main
avec header Accept: application/vnd.github.raw, puis compter les width="X" height="Y".
NE PAS se fier a raw.githubusercontent.com (cache CDN en retard de plusieurs minutes).

### ETAT AU MOMENT DE LA SAUVEGARDE
- ETAPE A (llms.txt) : FAIT.
- ETAPE B (width/height) : 16 fichiers FAITS. deguisement-infirmière-sexy.html : prepare et colle dans l'editeur GitHub mais COMMIT A CONFIRMER (verifier via API : doit avoir 4 paires width/height, ~277 lignes).
- Prochain fichier a traiter : dual-vibe-sex-on-the-beach.html (4 images).
- Puis suivre la liste "fichiers RESTANTS" dans l'ordre.
- ETAPE C (recompression ~13 images lourdes) et ETAPE D (69 animations CSS non compositees) : PAS COMMENCEES.


==================================================
SESSION PERFORMANCE — MAJ 2026-07-03 (fin de session)

RÔLES : Claude fait tout (compression images via Canvas, calcul dimensions, verif) SAUF le remplacement/commit final des fichiers (JLShop06).

ETAPE B (width/height images) : TERMINEE 100%. Les 4 derniers fichiers committes (par JLShop06) :
- pink-star-choco-fraise.html (img 1024x1536)
- pink-star.html (img 1024x1535)
- pink_star_sucette_cerise.html (img 1023x1537)
- vibro-rechargeable-Indiana.html (3 img : 1024x1536, 800x1200, 800x1200)
Balayage complet API GitHub (cache:reload) sur les 17 fichiers "RESTANTS" : toutes les images ont width/height (allOk, 0 restant). CLS visé reglé.

ETAPE C (compression images lourdes) : FAITE.
- Logo favicon.webp : 1,90 Mo -> ~20 Ko. Redimensionne 1254x1254 -> 400x400, WebP q75 (via Squoosh). Remplace + committe par JLShop06.
- 13 images produit lourdes (>1 Mo) recompressees WebP 800px de large, q75, via Canvas navigateur (createImageBitmap + canvas.toBlob('image/webp',0.75)). Total ~17 Mo -> ~690 Ko (-96%). Fichiers telecharges avec noms exacts, remplaces par lot + committes par JLShop06. Verif : aucun doublon "(1)" dans le depot, 13 noms presents, images en ligne = versions compressees.
  Liste (avant -> apres Ko) : Robe longue argentee 1496->87 ; Mini robe noire 1484->66 ; lubrifiant fraise 1435->72 ; lubrifiant chocolat 1417->63 ; Magnum-Opus 1346->51 ; barbe a papa 1318->48 ; gel-cannabis 1295->52 ; red-dolls 1276->47 ; Cockring Marry-Me 1261->42 ; vibro-elegance 1234->56 ; le-flateur 1214->41 ; cockring-saturn 1199->36 ; plug rosy-gold 1173->29.

METHODE COMPRESSION FIABLE (sans Squoosh, tout auto) : sur un onglet du domaine du site (CORS ok), fetch(url,{cache:'reload'}) -> createImageBitmap -> canvas 800px large (ratio conserve) -> canvas.toBlob('image/webp',0.75) -> download via a[download]=nom_exact. WebP encode nativement par le navigateur.

RESULTATS PAGESPEED MOBILE (avant -> apres) : Score ~73-77 instable -> ~80-81 stable. CLS 0.388 -> 0.026 (vert). TBT 10ms -> 0ms. LCP 6,2s -> 4,3s (encore ameliorable). FCP/SI ~2,9s.
NOTE : le score mobile PageSpeed fluctue de +/-15 pts d'un test a l'autre (serveurs Google). Toujours faire 3 tests et prendre la tendance.

ETAPE D (69 animations CSS non compositees) : NON FAITE (choix JLShop06). Analyse : les @keyframes (starsFloat/fadeIn/fadeInUp) utilisent deja transform/opacity (OK). Seuls 7 "transition: all" restent non-composites. Impact quasi nul sur le score (TBT deja 0ms) + risque sur style.css (blocs dupliques, consigne "ne pas toucher"). Abandonnee sciemment.

RESTE (optionnel) : baisser encore le LCP (element LCP = image haut de page ; pistes : preload de l'image LCP, verifier fetchpriority=high, eviter loading=lazy sur l'image above-the-fold). Recompression restante negligeable (images deja <270 Ko).


============================================================
JOURNAL DES CORRECTIONS - Session 2026-07-05 (Claude)
============================================================

Contexte : correction des fiches produit (32 fiches) et d'une fiche mal etiquetee.

1) IMAGES NON ROGNEES (object-fit)
   - Remplacement de "object-fit:cover" par "object-fit:contain" dans la
     regle CSS ".product-image-frame img" sur toutes les fiches produit.
   - Attention : certaines fiches avaient PLUSIEURS blocs
     ".product-image-frame img" (ex: Plug-Anal-Rosy-Gold = 3 blocs,
     dual-vibe = 2). Toutes les occurrences ont ete traitees, pas seulement
     la premiere.
   - Verifie : 32/32 fiches sans "object-fit:cover".

2) SUPPRESSION DU CADRE BLANC AUTOUR DES PHOTOS
   - Retrait de "background:#ffffff" et "padding:15px" dans la regle
     ".product-image-frame img" sur les 32 fiches produit (22 en avaient
     encore le cadre blanc; les autres etaient deja propres).
   - Verifie : 32/32 fiches sans background blanc ni padding:15px.

3) FICHE MAL ETIQUETEE : gel_lubrifiant_bio_neutre_divine_xtases.html
   - Image principale cassee (404) : "gel lubriant bio miel coco.webp"
     remplacee par "gel-lubrifiant-bio-coco.webp" (fichier existant, deja
     utilise sur la page d'accueil).
   - Ce produit est en realite un PARFUM COCO (et non "neutre").
     Renommage du nom visible : "Gel Lubrifiant Glisse Bio Neutre Divine
     Xtases" -> "... Bio Coco Divine Xtases" (titre, H1, meta, JSON-LD,
     mots-cles, attribut name).
   - Mentions de senteur adaptees : "sans odeur" -> "parfum coco gourmand";
     "Sans odeur et neutre" -> "Parfum coco gourmand"; badge "Sans Parfum"
     retire (produit desormais parfume).
   - NON MODIFIE VOLONTAIREMENT : le nom de fichier / URL canonique
     (gel_lubrifiant_bio_neutre_divine_xtases.html) et les cles i18n
     data-i18n="neutre_*" (pour ne rien casser cote liens et traduction).

METHODE / NOTES TECHNIQUES
   - Toutes les modifs faites via l'editeur GitHub, commit direct sur "main".
   - Verification fiable via la page "blob" GitHub (source fraiche). Le CDN
     "raw.githubusercontent.com" ayant plusieurs minutes de cache, il a donne
     des faux positifs; ne pas s'y fier pour verifier un commit recent.
   - Fausse alerte levee : les fiches deguisement enseignante/etudiante
     semblaient avoir des images 404 mais c'etait un probleme d'encodage
     d'URL (apostrophes/espaces); les images s'affichent correctement.


==================================================
SESSION SEO / GEO — MAJ 2026-07-06 (Claude)
==================================================

RÔLES : Claude fait TOUT (edition, collage editeur) SAUF le clic "Commit changes" (JLShop06).

CONTEXTE : demande basee sur un rapport SEOptimizer ("Utilisez vos mots-cles principaux dans les balises HTML importantes", priorite moyenne) + audit GEO.

--- FAIT (committe sur main) ---

1) H1 SEO (index.html) : le H1 ne contenait QUE le logo (img), sans texte -> probleme SEO.
   Ajout d'un <span class="hero-h1-text" data-i18n="home_h1_seo"> SOUS le logo (h1 en flex-column, centre, style dore Georgia 15px uppercase letter-spacing) avec le texte :
   "Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs".
   Rendu valide visuellement par JLShop06 (version "sous le logo", pas a cote).

2) i18n.js : cle home_h1_seo ajoutee x5 (ordre fr/pt/it/es/de), inseree apres renoncer_contrat dans chaque bloc de langue. Accolades equilibrees. Traductions :
   fr = Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs
   pt = Loja de Sextoys Franca: Geis Lubrificantes Bio, Oleos de Massagem e Estimuladores
   it = Negozio Sextoys Francia: Gel Lubrificanti Bio, Oli da Massaggio e Stimolatori
   es = Tienda de Juguetes Sexuales Francia: Geles Lubricantes Bio, Aceites de Masaje y Estimuladores
   de = Sextoy-Shop Frankreich: Bio-Gleitgele, Massageole & Stimulatoren

3) GEO / SEO multilingue — support ?lang= dans l'URL (i18n.js) :
   AVANT : langue geree UNIQUEMENT via localStorage + navigator.language -> toutes les langues sur la MEME URL -> versions PT/IT/ES/DE NON indexables par Google (bascule en JS que Googlebot n'execute pas).
   PATCH getLang() : lit ?lang=xx en PRIORITE (si supporte -> le stocke en localStorage et le retourne), sinon fallback localStorage, sinon navigator, sinon fr. Logique testee 7/7 cas OK.
   PATCH setLang() : met a jour l'URL sans recharger (history.replaceState). fr = URL propre (pas de param) ; autres langues = ?lang=xx.

4) hreflang (index.html) : ajout de 6 <link rel="alternate"> apres le canonical :
   fr -> https://les-jardins-enchantes.com/
   pt/it/es/de -> https://les-jardins-enchantes.com/?lang=xx
   x-default -> https://les-jardins-enchantes.com/
   (rendus crawlables grace au patch getLang ci-dessus).

5) UNIFORMISATION DES URLs vercel.app -> les-jardins-enchantes.com (incoherence de domaine).
   Deux domaines vercel trouves dans le repo, tous deux remplaces par le .com :
     - lesjardinsenchantes.vercel.app (le plus courant)
     - les-jardins-enchantes-greentherapy06s-projects.vercel.app (URL technique, ex: lien dans cgv.html)
   NOTE : llms.txt utilisait DEJA le .com partout (36x) -> rien a corriger.
   FICHIERS FAITS (committes) : robots.txt (2), sitemap.xml (26), index.html (canonical + og:url + og:image + twitter:image + JSON-LD Store = 5).

--- RESTE A FAIRE (URLs vercel -> .com) ---
Environ 34 fichiers restants contiennent encore lesjardinsenchantes.vercel.app (surtout canonical + og:url, ~2 occ/page) :
  les 32 fiches produit + pages legales (cgv, confidentialite, cookies, mentions-legales, retractation) + eventuels feed.xml / manifest / api.
METHODE : editeur GitHub fichier par fichier (VS Code web / github.dev NE FONCTIONNE PAS -> reste bloque a la connexion, confirme par JLShop06). Remplacer les 2 domaines vercel -> les-jardins-enchantes.com. Verifier via API GitHub (pas raw : cache CDN).
SCAN : API git/trees recursive + fetch raw {cache:'reload'} pour lister les fichiers contenant "vercel.app".

--- PISTES GEO/SEO SUIVANTES (optionnel, non fait) ---
  - JSON-LD Store : pas d'aggregateRating (avis clients) ni sameAs (reseaux sociaux) -> a ajouter si dispo (gros boost visibilite).
  - Score PageSpeed "Navigation agentique" 2/3 -> viser 3/3.
  - H2 "Boutique Sextoys, Gel Lubrifiant Bio..." fait desormais doublon avec le nouveau H1 -> reformuler pour varier les mots-cles (livraison discrete, Yuka 100/100...).


---

## SESSION SEO/GEO 2026-07-06 — Suivi detaille

### FAIT (tout committe)

**1. H1 SEO (demande SEOptimizer : mots-cles dans balises HTML)**
- Le H1 de index.html etait VIDE (juste le logo image, aucun texte).
- Ajoute un span H1 texte riche en mots-cles SOUS le logo (style dore, Georgia, uppercase, discret) : "Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs" (option 3 validee visuellement, version "sous le logo").
- Span avec data-i18n="home_h1_seo".

**2. i18n home_h1_seo x5 (i18n.js)**
- Cle home_h1_seo ajoutee dans les 5 langues, inseree apres renoncer_contrat, ordre fr/pt/it/es/de :
  - FR : Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs
  - PT : Loja de Sextoys Franca: Geis Lubrificantes Bio, Oleos de Massagem e Estimuladores
  - IT : Negozio Sextoys Francia: Gel Lubrificanti Bio, Oli da Massaggio e Stimolatori
  - ES : Tienda de Juguetes Sexuales Francia: Geles Lubricantes Bio, Aceites de Masaje y Estimuladores
  - DE : Sextoy-Shop Frankreich: Bio-Gleitgele, Massageole & Stimulatoren

**3. GEO / SEO multilingue — support ?lang= dans URL (i18n.js)**
- Constat : langues gerees uniquement en localStorage/navigator -> versions PT/IT/ES/DE PAS indexables par Google (une seule URL).
- getLang() lit desormais ?lang=xx en priorite (puis localStorage, puis navigateur). Teste 7/7 cas OK.
- setLang() met a jour l'URL sans recharger (history.replaceState) : FR = URL propre sans param, autres langues = ?lang=xx.

**4. hreflang (index.html)**
- Ajout de 6 balises hreflang apres le canonical : fr, pt, it, es, de + x-default.
- FR et x-default -> https://les-jardins-enchantes.com/ ; autres -> /?lang=xx (crawlables grace au patch getLang).

**5. Uniformisation URLs vercel.app -> les-jardins-enchantes.com**
- 3 variantes de domaine a remplacer (ordre : la plus longue d'abord) :
  1. les-jardins-enchantes-greentherapy06s-projects.vercel.app
  2. les-jardins-enchantes.vercel.app (avec tirets)
  3. lesjardinsenchantes.vercel.app (sans tirets)
- Methode : editeur GitHub fichier par fichier (VS Code web / github.dev ne fonctionne PAS). 1 commit par fichier (JLShop06 clique Commit).
- llms.txt : deja en .com, RAS.
- confidentialite.html : deja propre (0 vercel), non modifie.

**Fichiers uniformises et committes (25) :**
robots.txt, sitemap.xml, index.html, i18n.js, cgv.html, Cockring-vibrant-Marry-Me-Wooomy.html, Deguisement-Bunny.html, Magnum-Opus-vibro.html, anneau_vibrant_telecommande.html, api/retractation/submit.js, black-empire-my-duchess.html, cockring-vibrant-saturn-hueman.html, deguisement-enseignante.html, deguisement-etudiante.html, deguisement-infirmiere-sexy.html, dual-vibe-sex-on-the-beach.html, gel_cannabis_orgie.html, gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html, gel_lubrifiant_bio_neutre_divine_xtases.html, gel_lubrifiant_bio_neutre_framboise_divine_xtases.html, gel_lubrifiant_bio_neutre_monoi_divine_xtases.html, gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases.html, gel_lubrifiant_bio_neutre_vanille_divine_xtases.html, hemp-intense-orgasm.html, le-flateur.html

### A FAIRE — PROCHAINE SESSION

**A. Terminer uniformisation URLs vercel -> .com (13 fichiers restants, 2 occ. chacun, dans canonical + og:url) :**
- Plug-Anal-Rosy-Gold.html
- lubrifiant_eau_lube_tube_chocolat_orgie.html
- lubrifiant_eau_lube_tube_fraise_orgie.html
- lubrifiant_eau_tube_barbe_a_papa.html
- mini-robe-noire.html
- monster-pussy-strocker.html
- orgie-pinacolada.html
- pink-star-choco-fraise.html
- pink-star.html
- pink_star_sucette_cerise.html
- red-dolls-energy-pleasure.html
- robe-longue-noire-argentee.html
- vibro-rechargeable-Indiana.html

**B. BUG PRE-EXISTANT a corriger separement — dual-vibe-sex-on-the-beach.html :**
- Le fichier contient DEUX documents HTML complets colles l'un apres l'autre (2 DOCTYPE, 2 <html>, 2 </html>, 4 <head>) — confirme via API GitHub.
- Cette session : SEULES les URLs vercel ont ete corrigees, le doublon N'A PAS ete touche (decision validee avec JLShop06).
- A traiter : supprimer le 2e document HTML en double (avec verification visuelle avant commit). Bug SEO (contenu duplique / page malformee).

**C. Ameliorations SEO/GEO optionnelles notees precedemment :**
- Enrichir JSON-LD Store : aggregateRating (si avis clients), sameAs (reseaux sociaux).
- Score PageSpeed "Navigation agentique" 2/3 -> viser 3/3.
- H2 "Boutique Sextoys, Gel Lubrifiant Bio..." fait doublon avec le nouveau H1 -> reformuler pour varier les mots-cles (livraison discrete, Yuka 100/100...).

### NOTES METHODE (pour reprendre vite)
- Ordre langues STRICT : fr / pt / it / es / de.
- Verifier via editeur GitHub ou API GitHub (Accept: application/vnd.github.raw), PAS via raw.githubusercontent.com (cache CDN en retard).
- CodeMirror est virtualise : la verification du DOM peut afficher des lignes du milieu, ce n'est pas fiable ; se fier a la validation du contenu avant collage + defaultPrevented=true, ou faire un screenshot.
- Coller : clic dans l'editeur -> Ctrl+A -> Delete (vider) -> paste via ClipboardEvent. Valider AVANT collage : 0 vercel restant, 0 artefact (.com.com), DOCTYPE en tete.
- En cas d'erreur GitHub "erreur lors de l'enregistrement" : re-cliquer Commit, ca repasse.


---

## MISE A JOUR 2026-07-06 (suite/fin de session) — TOUT TERMINE

### Uniformisation URLs vercel -> .com : TERMINEE (100%)
Les 13 fiches produit restantes ont ete traitees et committees :
Plug-Anal-Rosy-Gold.html, lubrifiant_eau_lube_tube_chocolat_orgie.html, lubrifiant_eau_lube_tube_fraise_orgie.html, lubrifiant_eau_tube_barbe_a_papa.html, mini-robe-noire.html, monster-pussy-strocker.html, orgie-pinacolada.html, pink-star-choco-fraise.html, pink-star.html, pink_star_sucette_cerise.html, red-dolls-energy-pleasure.html, robe-longue-noire-argentee.html, vibro-rechargeable-Indiana.html.
=> Plus AUCUNE reference vercel.app dans le repo (tous les canonical/og:url/JSON-LD/robots/sitemap/i18n pointent vers les-jardins-enchantes.com).

### Bug doublon HTML : CORRIGE
- dual-vibe-sex-on-the-beach.html : avait 2 documents HTML complets colles -> nettoye, garde 1 seul document (le plus complet, avec canonical .com). Committe.
- Plug-Anal-Rosy-Gold.html : avait 3 documents HTML complets colles -> nettoye, garde 1 seul document (le 1er, le plus complet : 844 vs 764 chars de texte, CSS image enrichi max-height/object-fit). Committe.
- Scan complet des 38 fichiers HTML du repo (via raw) : 0 fichier avec DOCTYPE multiple restant. Probleme entierement resolu.

### Note technique
- Le scan initial via API GitHub avait ete fausse par le rate limit (60 req/h) qui renvoyait "0 DOCTYPE" (reponse d'erreur JSON de 279 chars). Verifier via l'editeur GitHub ou raw.githubusercontent.com quand l'API est limitee.

### ETAT GLOBAL SEO/GEO — recap
FAIT : H1 SEO (texte mots-cles sous logo, 5 langues via home_h1_seo) ; support ?lang= dans URL (getLang/setLang) ; 6 hreflang (fr/pt/it/es/de + x-default) ; uniformisation URLs vercel->.com (100%) ; suppression doublons HTML (dual-vibe + Plug-Anal-Rosy-Gold).

RESTE (optionnel, prochaine session) :
- Enrichir JSON-LD Store : aggregateRating (si avis clients), sameAs (reseaux sociaux).
- Score PageSpeed "Navigation agentique" 2/3 -> viser 3/3.
- Reformuler le H2 "Boutique Sextoys, Gel Lubrifiant Bio..." qui fait doublon avec le nouveau H1 (varier mots-cles : livraison discrete, Yuka...).
- Verifier en live apres redeploiement Vercel : changement de langue ajoute bien ?lang=xx + traduit ; H1 s'affiche dans les 5 langues.


---

## CORRECTIF 2026-07-06 — Saveur Coco (page gel_lubrifiant_bio_neutre_divine_xtases)

### Probleme
La fiche gel_lubrifiant_bio_neutre_divine_xtases (produit Noix de Coco) affichait "Bio Neutre" et "sans odeur" au lieu de la saveur Coco.
CAUSE : le H1 et la description ont data-i18n (neutre_title, neutre_subtitle, neutre_desc1) -> le texte affiche vient de i18n.js, PAS du HTML statique (qui, lui, contenait deja "Coco"). Corriger le HTML seul ne sert a rien : c'est i18n.js qui pilote l'affichage.

### Fait (i18n.js, committe, 5 langues fr/pt/it/es/de)
- neutre_title + neutre_desc1 : "Bio Neutre/Neutro/Neutral" -> "Bio Coco/Cocco/Kokos".
- neutre_subtitle : "sans odeur / sem odor / inodore / sin olor / geruchlos" -> "delicat parfum noix de coco / delicado aroma de coco / delicato profumo di cocco / delicado aroma de coco / zarter Kokosduft".
- La cle "neutre_" est EXCLUSIVE a la page Coco (les autres saveurs ont leur propre prefixe : framboise_, monoi_, vanille_).
- VIGILANCE : "sans odeur" existe AUSSI dans framboise_subtitle et vanille_subtitle -> le remplacement a ete cible UNIQUEMENT sur neutre_subtitle (valeur complete). Framboise/Vanille laisses intacts (verifie).

### A FAIRE — memes corrections a valider pour Framboise et Vanille
Ces deux fiches ont la MEME incoherence (titre "Bio Neutre X" + subtitle "sans odeur", contradictoire avec une saveur) :
- framboise_title (5 langues) : "Gel Lubrifiant Glisse Bio Neutre Framboise..." / "...Neutro Framboesa..." / "...Neutro Lampone..." / "...Neutro Frambuesa..." / "...Neutral Himbeere...". Le mot "Neutre/Neutro/Neutral" est a retirer ou remplacer.
- framboise_subtitle (5 langues) : contient "sans odeur / sem odor / inodore / sin olor / geruchlos" -> a remplacer par une mention parfum framboise.
- vanille_title (5 langues) : "...Bio Neutre Vanille..." / "...Neutro Baunilha..." / "...Neutro Vaniglia..." / "...Neutro Vainilla..." / "...Neutral Vanille...". Idem retirer "Neutre".
- vanille_subtitle (5 langues) : "sans odeur..." -> mention parfum vanille.
DECISION PRODUIT A VALIDER AVEC JLShop06 : garder "Neutre" ou le retirer du titre ? (pour Coco on a remplace Neutre -> Coco). Meme logique conseillee : framboise_title -> "Bio Framboise", vanille_title -> "Bio Vanille".
METHODE : cibler la VALEUR COMPLETE de chaque cle (framboise_subtitle / vanille_subtitle) car "sans odeur" est partage entre plusieurs produits ; ne PAS faire de remplacement global.

==================================================
SESSION SEO/GEO - MAJ 2026-07-07 (Claude)

CONTEXTE : demande basee sur le rapport SEOptimizer. IMPORTANT : le "C+" vu par l'utilisateur n'etait PAS la note globale mais UNIQUEMENT la categorie GEO. Detail reel du rapport (genere le 7 juillet 10h30 UTC) :
- Referencement sur page (On-Page SEO) : A+
- GEO : C+
- Links : F  <= plus gros point faible
- Utilisabilite : A-
- Performance : A+
Conclusion : le travail precedent a bien porte (On-Page A+, Perf A+). Priorite du jour = corriger le "F" en Links.

DIAGNOSTIC LINKS (fait via fetch + DOMParser sur le live) :
- Accueil : 38 liens internes, 36 vers des fiches produit -> l'accueil est BIEN maille (mais liens sur images = texte d'ancre VIDE).
- Fiches produit : chaque fiche ne pointe QUE vers l'accueil (index.html + ancres #) et les pages legales. AUCUNE fiche ne pointe vers une AUTRE fiche = schema "en etoile" qui plombe le score Links.
- SOLUTION retenue : ajouter un bloc "Vous aimerez aussi" (section.related-products) en bas de chaque fiche, AVANT le <footer>, avec 4 liens internes ANCRES (texte = nom du produit) vers des produits de la meme categorie (completes par affinite si categorie trop petite). Style inline sobre dore/Georgia (bordure #caa86a, boutons arrondis).

--- BLOCAGES DEPLOIEMENT (verifies, RAS) ---
1. Webhook GitHub->Vercel : ACTIF. Projet Vercel "lesjardinsenchantes" (equipe greentherapy06s-projects) connecte a JLShop06/Les-Jardins-Enchantes depuis le 12 mai, events deployment + repository_dispatch ON. Preuve : commit auto-deploye statut "Pret". (La section "Deploy Hooks" est vide mais c'est normal : ce sont des URLs de declenchement manuel OPTIONNELLES, pas le webhook d'auto-deploiement.)
2. Password Protection Vercel : OFF (Authentification Vercel OFF ; Protection par mot de passe indisponible = feature Pro 150$/mois, plan actuel = Hobby). Site public confirme : HTTP 200, pas de mur SSO.
3. llms.txt : DEJA present a la racine (HTTP 200, structure OK : marque, description, categories ##, liens produits). RAS.

--- FAIT (committe sur main) ---

JSON-LD (schema.org) :
- le-flateur.html : ajout JSON-LD Product + BreadcrumbList (dans le <head>, avant </head>). C'est la SEULE fiche avec JSON-LD ajoute cette session (voir "RESTE A FAIRE").
- Etat JSON-LD global constate (scan des 32 URLs sitemap) : accueil = Store (deja present) ; 6 fiches gel bio = Product (deja present : caramel, neutre/coco, framboise, monoi, sans_parfum, vanille) ; le-flateur = Product+Breadcrumb (ajoute aujourd'hui) ; les 23 autres fiches = AUCUN JSON-LD ; AUCUNE page (sauf le-flateur) n'a de BreadcrumbList.

Maillage interne - bloc "Vous aimerez aussi" (LOT TEST 6 fiches, 4 liens ancres chacune) :
- le-flateur.html -> Magnum Opus, Indiana, My Duchess, Cockring Marry Me
- pink-star.html -> Cannabis Orgie, Hemp Intense Orgasm, Sex On The Beach, Chocolat Orgie
- Magnum-Opus-vibro.html -> Indiana, My Duchess, Le Flateur, Cockring Marry Me
- monster-pussy-strocker.html -> Red Dolls Energy, Cannabis Orgie, Hemp, Sex On The Beach
- cockring-vibrant-saturn-hueman.html -> Cockring Marry Me, Anneau Love Connection, Magnum Opus, Indiana
- Deguisement-Bunny.html -> Enseignante, Etudiante, Infirmiere, My Duchess
=> ~24 nouveaux liens internes contextuels crees.

--- A FAIRE - PROCHAINE SESSION ---

A. ATTENDRE / RELANCER LE SCAN SEOptimizer, puis VERIFIER la note "Links" (attendu : F -> C/B grace au maillage). Si l'effet est confirme, derouler le reste. Regarder le DETAIL de la section Links pour distinguer liens internes (on les corrige) vs backlinks externes (ne se corrigent PAS par le code : annuaires, partenaires, reseaux, temps).

B. Bloc "Vous aimerez aussi" sur les 24 fiches RESTANTES (meme methode, meme style) :
   Cockrings/vibros/etc : Cockring-vibrant-Marry-Me-Wooomy, anneau_vibrant_telecommande, vibro-rechargeable-Indiana, black-empire-my-duchess, red-dolls-energy-pleasure, Plug-Anal-Rosy-Gold.
   Deguisements : deguisement-enseignante, deguisement-etudiante, deguisement-infirmiere-sexy.
   Gels : gel_cannabis_orgie, hemp-intense-orgasm, dual-vibe-sex-on-the-beach, lubrifiant_eau_lube_tube_chocolat_orgie, lubrifiant_eau_lube_tube_fraise_orgie, lubrifiant_eau_tube_barbe_a_papa, orgie-pinacolada, pink-star-choco-fraise, pink_star_sucette_cerise.
   Gels bio : gel_lubrifiant_bio_neutre_divine_xtases (Coco), _vanille_, _framboise_, _monoi_, _caramel_beurre_sale_, _sans_parfum_.
   (Note : robe-longue-noire-argentee et mini-robe-noire ont un footer different et ne sont pas dans le sitemap -> a traiter a part si voulu.)

C. JSON-LD Product + BreadcrumbList sur les 23 fiches qui n'en ont pas (donnees deja extraites : nom H1, description meta, prix, image .webp, marque, categorie, canonical). Ajouter aussi BreadcrumbList aux 6 fiches gel bio (qui ont Product mais pas Breadcrumb) et a l'accueil (qui a Store mais pas Breadcrumb). Tout en availability=InStock (a confirmer si rupture).

D. GEO (remonter le C+) : enrichir le JSON-LD Store de l'accueil avec aggregateRating (si avis clients dispo) et sameAs (reseaux sociaux). Reformuler le H2 qui fait doublon avec le nouveau H1.

METHODE FIABLE (validee cette session) :
- Extraire le HTML PROPRE de l'editeur : parcourir l'objet JSON embarque PARSE (script[type=application/json]) et prendre la string qui contient <!DOCTYPE...</html>. NE PAS faire JSON.stringify(objet) + regex : ca reintroduit les echappements \n et \" (bug rencontre au 1er essai, HTML aplati -> il a fallu recharger l'editeur).
- Inserer le bloc AVANT lastIndexOf('<footer'). Valider AVANT collage : related=1, footer=1, doctype=1, </html>=1, pas de \n litteral, fin = </footer></body></html>.
- Coller : clic editeur -> Ctrl+A -> ClipboardEvent('paste') avec DataTransfer text/plain sur .cm-content ; verifier defaultPrevented=true ; Ctrl+End + screenshot pour controle visuel.
- ROLES : Claude fait tout SAUF le clic "Commit changes" (JLShop06).
- Verifier via API GitHub (Accept: application/vnd.github.raw, ?ref=main), PAS via raw.githubusercontent.com (cache CDN en retard).
- NOTE OUTIL : le filtre de sortie JS masque les chaines contenant des URLs/cookies ("[BLOCKED]") -> ne renvoyer que des compteurs/booleens, jamais le HTML brut.

RAPPEL PRIORITE SEO (dit a l'utilisateur) : un score SEOptimizer eleve ne fait pas vendre en soi ; regarder aussi Search Console (trafic reel, positions, conversions). Le "F" Links interne se corrige par le code (en cours) ; les backlinks externes demandent du temps/hors-code.


==================================================
SESSION STRIPE — RÉDUCTION BIENVENUE + FRAIS DE LIVRAISON — MAJ 2026-07-09 (Claude)
==================================================

RÔLES : Claude fait TOUT (édition, collage éditeur, vérifications) SAUF le clic "Commit changes" (JLShop06).

CONTEXTE : demande = réduction de bienvenue 10% (1re commande, une seule fois par client) + frais de livraison 6,90 € (offerts dès 75 € de produits), calculs 100% côté serveur, sans casser l'existant. Architecture conservée : Vercel + GitHub + Stripe (pas de base de données externe).

ÉTAT AVANT SESSION (constaté sur le repo) :
- cart.js (front) : affichait DÉJÀ le récap complet (sous-total, réduction 10% "si éligible", livraison offerte dès 75 € sinon 6,90 €, total estimé) + champ email (#cart-email) validé et envoyé au serveur (body {cart, email}). Mention "le montant exact est confirmé au paiement Stripe".
- api/stripe/webhook.js : existait DÉJÀ. Sur checkout.session.completed, si metadata.welcome_discount_applied === "true", marque le Customer Stripe metadata.welcome_discount_used = "true" (verrouillage après paiement). Signature Stripe vérifiée (constructEvent), bodyParser désactivé.
- api/stripe/checkout.js : RESTÉ À L'ANCIENNE VERSION (87 lignes). Ne faisait NI réduction, NI livraison, NI vérification client. C'était le maillon manquant "commencé mais pas fini".

FAIT (committé sur main) — api/stripe/checkout.js RÉÉCRIT (196 lignes) :
1) SOUS-TOTAL SÉCURISÉ : le serveur récupère chaque prix officiel via stripe.prices.retrieve(priceId) (cache anti-doublon). Le navigateur n'envoie que des priceId : impossible de falsifier le montant.
2) ANTI-ABUS (100% serveur) : stripe.customers.list({ email }) puis lecture metadata.welcome_discount_used === "true". Si déjà utilisé -> pas de remise. En cas d'échec du lookup -> remise NON accordée (fail-safe).
3) RÉDUCTION 10% : si éligible, coupon créé à la volée stripe.coupons.create({ percent_off: 10, duration: "once" }) attaché via discounts:[{coupon}].
4) LIVRAISON : shipping_options calculées serveur. Sous-total >= 7500 centimes (75 €) -> 0 € "Livraison offerte" ; sinon 690 centimes (6,90 €) "Livraison standard". Seuil calculé sur le montant produits AVANT livraison.
5) COHÉRENCE affiché/facturé : remise (coupon) + livraison (shipping_options) gérées par Stripe lui-même -> le montant réel est garanti par Stripe. Le front n'affiche qu'une estimation.
6) VERROUILLAGE : session pose metadata.welcome_discount_applied ("true"/"false") + customer_email. customer_creation:"always" ajouté pour que le webhook retrouve toujours un Customer à marquer.
7) EXISTANT CONSERVÉ : collecte adresse/téléphone/prénom+nom (custom_fields), pays autorisés, success/cancel URLs — inchangés.
Paramètres centralisés en tête de fichier pour maintenance : FREE_SHIPPING_THRESHOLD_CENTS=7500, SHIPPING_FEE_CENTS=690, WELCOME_DISCOUNT_PERCENT=10.

VÉRIFICATIONS (via API GitHub) :
- checkout.js committé : 196 lignes, syntaxe OK, un seul require("stripe"), tous les éléments présents (retrieve, customers.list, welcome_discount_used check, coupon percent_off, shipping_options, seuils 7500/690, metadata, customer_creation, fail-safe).
- Cohérence 3 fichiers OK : front envoie email + champ #cart-email présent ; clé metadata welcome_discount_applied écrite par checkout ET lue par webhook ; webhook pose welcome_discount_used ; checkout lit welcome_discount_used.

RESTE À FAIRE / À TESTER EN LIVE (après redéploiement Vercel) :
- Panier < 75 € -> voir 6,90 € livraison + remise 10% si email neuf.
- Panier >= 75 € -> livraison 0 € "Livraison offerte".
- Même email qu'une commande déjà payée -> plus de remise 10%.
VIGILANCE CONFIG STRIPE (à vérifier par JLShop06, non touché par Claude car sensible) :
- Variable d'env STRIPE_WEBHOOK_SECRET configurée sur Vercel.
- Endpoint webhook (event checkout.session.completed) actif dans le dashboard Stripe.
NOTE ARCHITECTURE : solution la plus robuste sans base de données externe -> l'état "remise déjà utilisée" est stocké dans metadata du Customer Stripe (source de vérité unique), lu avant chaque session et écrit par le webhook après paiement.
Les Jardins Enchantés — Suivi i18n (FR/PT/IT/ES/DE)

FR = langue par défaut. Réutiliser i18n.js existant. NE PAS créer de nouveau système. Ordre des langues dans i18n.js : fr, pt, it, es, de (ATTENTION : pas fr/pt/es/it/de — sinon inversion ES/IT). RÔLES : Claude fait TOUT (fetch, traduction, insertion, validation, collage dans l'éditeur, ouverture du dialogue de commit + message). L'utilisateur (JLShop06) clique uniquement sur "Commit changes".

==================================================
ÉTAT GLOBAL (mis à jour)
==================================================
Étapes 1 à 4 : TERMINÉES & déployées (moteur i18n, sélecteur de langue header, header unifié 36 pages, footer multilingue 34 pages + panier).
Étape 5 (traduction CONTENU des 33 fiches produits) : TERMINÉE — toutes les fiches produits réelles sont câblées (i18n.js + HTML).
Modal 18+ "Accès Réservé" (compliance.js) : TERMINÉ & multilingue (5 langues).

=== MAJ i18n 01/07/2026 (session Claude) ===
- Titres H1 des 29 fiches produits : data-i18n posés + clés ×5 (fr/pt/it/es/de) — VÉRIFIÉ.
- Footer "Retour boutique" (footer_retour) + Footer "© ... Boutique Luxe Intime" (footer_copyright) : câblés ×29 — TERMINÉ.
- Point E — Labels UI communs des fiches produits : "Description" (prod_desc), "Caractéristiques" (prod_feat), bouton "AJOUTER AU PANIER" (prod_add) câblés sur les 29 fiches vers clés i18n.js EXISTANTES (aucune nouvelle clé). Variantes : fiches standard d1/c1/a1 ; gels/lubes bio d0/c1/a2 (pas de titre "Description", "Caracteristiques" sans accent, 2 boutons) ; Plug-Anal-Rosy-Gold d3/c3/a3. — TERMINÉ 29/29.
- CSS hero mobile (@media 768px + 480px dans index.html) — TERMINÉ.
RESTE À FAIRE : bannière cookies (compliance.js, 3 boutons) ; titre panier "VOTRE PANIER" via window.t('cart_title') dans cart.js ; blocs ingrédients des gels bio (Cire d'abeille, Aloe Vera, Karité, badges CERTIFIÉ BIO / FABRIQUÉ EN FRANCE / Yuka, prix) — NON câblés ; pages légales : ~7 fragments résiduels chacune.
============================================

==================================================
MÉTHODE PAR FICHE (rappel)
==================================================
Pour chaque fiche : fetch HTML (API GitHub ou raw) → extraire FR (title/subtitle/desc/li) + compter → traduire 5 langues (préfixe de clé unique) → insérer dans i18n.js APRÈS la dernière ancre, ordre fr/pt/it/es/de → valider (clés = N×5, accolades 33/33, ordre OK, IT/ES bien placés) → commit i18n.js → câbler HTML (data-i18n sur title/subtitle/desc/li, assignation séquentielle) → VÉRIFIER fin de fichier (pas de doublon) → commit HTML → test live.

NOTES TECHNIQUES IMPORTANTES
- Dernière ancre i18n.js = indiana_li12 (×5, ordre fr/pt/it/es/de). i18n.js ≈ 288 139 chars, accolades 33/33.
- raw.githubusercontent peut être EN RETARD sur le dernier commit (cache CDN). L'API GitHub /contents est fiable MAIS rate-limitée (403 si trop de requêtes anonymes rapides).
- ASTUCE FIABLE : sur la page éditeur GitHub (/edit/...), le contenu HEAD à jour est dispo dans un <script type="application/json"> embarqué → l'en extraire plutôt que via raw/API.
- CSP GitHub bloque new Function() sur l'éditeur → validation structurelle par regex/slice (pas d'eval).
- Variables window perdues à chaque navigation → tout régénérer après navigation.
- Coller via ClipboardEvent sur .cm-content après Ctrl+A (clic [400,350] pour focus).
- applyTranslations() utilise textContent (PAS innerHTML) → NE PAS mettre de HTML (<br>, <strong>) dans les valeurs i18n destinées à des éléments data-i18n, sinon les balises s'affichent en clair.
- Vercel : déploiement non instantané + cache navigateur sur les <script src> (l'ancien JS peut s'exécuter au 1er chargement). Vérifier le fichier déployé (fetch cache:'reload') avant de conclure à un bug.

==================================================
FICHES PRODUITS — TOUTES FAITES (i18n.js + HTML committés)
==================================================
marryme_, bunny_, magnum_, rosygold_, loveconn_, duchess_, saturn_, ens_ (enseignante), etud_ (etudiante), infirmiere_, dualvibe_, cannabis_ (desc3=INCI identique 5 langues), caramel_, neutre_, framboise_, monoi_, vanille_, hemp_, flateur_, choco_, fraise_, barbe_, minirobe_, monster_, pina_, pscf_, pstar_, pscerise_, reddolls_, robelongue_, indiana_.

Total : 32 préfixes de fiches câblés.

SESSION RÉCENTE (terminée) :
- robe-longue-noire-argentee (robelongue_, 10 clés) → HTML câblé (i18n.js était déjà fait).
- vibro-rechargeable-Indiana (indiana_, 18 clés ×5) → i18n.js + HTML.
- gel_cannabis_orgie (cannabis_, 14 clés) → HTML câblé (i18n.js existait déjà ; le README précédent le marquait à tort "fait" alors que le HTML manquait).
- Modal 18+ : age_title/age_body/age_yes/age_no/age_legal (×5) dans i18n.js + data-i18n sur les éléments du modal dans compliance.js + appel applyTranslations() après appendChild(overlay). age_body en TEXTE PLAT (compat textContent). Testé OK en pt (Acesso Reservado, etc.).

ENTRÉES FANTÔMES de l'ancienne todo (n'existent PAS comme fichiers) — à ignorer :
- "sucette-cerise" = en réalité pink_star_sucette_cerise.html (déjà fait).
- "vibromasseur-rabbit-rose" = aucun fichier correspondant dans le dépôt.

==================================================
RESTE À FAIRE
==================================================
1) PAGES LÉGALES — traduire le contenu (5 langues) — TERMINÉ (5/5 fait) :
    - cgv.html ✅ FAIT (70 éléments cgv_0..69, 2 commits Art.1-9 + Art.10-16 ; testé live FR/PT/DE OK)
   • confidentialite.html ✅ FAIT (53 éléments confid_0..52, RGPD ; i18n.js 265 clés + HTML câblé ; testé live FR/DE/IT OK)
   • cookies.html ✅ FAIT (39 éléments cookies_0..38 ; i18n.js 195 clés + HTML câblé ; testé live FR/DE/ES OK)
    - mentions-legales.html ✅ FAIT (43 clés mentions_ ×5 ; spans pour p à HTML inline ; données fixes SIRET/email/Vercel/médiateur NON traduites ; testé live FR/PT/IT/ES/DE OK)
    - retractation.html ✅ FAIT (34 clés retract_ ×5 : 22 statiques data-i18n + 12 dynamiques JS via window.t ; exposé window.TRANSLATIONS + helper window.t() dans i18n.js ; formulaire récap + messages d'erreur traduits ; testé live parcours formulaire DE + erreur ES OK)
   Méthode : même process que les fiches (préfixes proposés : cgv_, confid_, cookies_, mentions_, retract_). Attention au volume → découper par page, valider accolades 33/33 à chaque commit. Vérifier les éléments à NE PAS traduire (dates, adresses, n° SIRET, raison sociale).

2) VÉRIFICATION COMPLÈTE LIVE (non faite faute de temps + rate limit API) :
   - Re-scanner les 32 fiches produits (title data-i18n + clés présentes dans i18n.js).
   - Le scan automatique précédent a donné des FAUX POSITIFS "title not wired" à cause du rate limit 403 de l'API. Refaire via raw.githubusercontent ou le JSON embarqué de l'éditeur, pas l'API directe en rafale.
   - Tester le modal 18+ en live dans les 5 langues APRÈS expiration du cache navigateur.
   - Re-vérifier visuellement fiches saturn et enseignante (cache edge Vercel signalé précédemment).

3) OPTIONNEL : étendre applyTranslations() à title/placeholder/alt (SEO + accessibilité).

==================================================
PROCHAINE ACTION RECOMMANDÉE : Les 5 pages légales sont TERMINÉES (cgv, confidentialite, cookies, mentions-legales, retractation). Reste la VÉRIFICATION COMPLÈTE LIVE des 32 fiches produits (title data-i18n + clés i18n.js) via raw/JSON éditeur (PAS l'API en rafale → faux positifs 403), le test du modal 18+ dans les 5 langues après expiration cache, et la re-vérif visuelle des fiches saturn/enseignante (cache edge Vercel). OPTIONNEL : étendre applyTranslations() à title/placeholder/alt (SEO + accessibilité). NOTE NOUVELLE : pour traduire des chaînes générées par du JS (comme le formulaire de retractation), utiliser le helper global window.t(key) — il lit getLang(), fallback fr, fallback clé ; les valeurs i18n peuvent contenir du HTML (<strong>, <br>) car le JS les injecte via innerHTML. ÉTAT i18n.js : cgv 350 + confid 265 + cookies 195 + mentions 215 + retract 170 clés (≈420 153 chars, accolades 33/33, ordre fr/pt/it/es/de). window.TRANSLATIONS exposé + helper window.t().


==================================================
SESSION AUDIT TRADUCTION INTÉGRALE (accueil + fiches) — EN COURS

OBJECTIF : audit intégral des traductions (accueil + fiches produits) dans les 5 langues. FR = défaut. Corriger les manques + refaire la bannière HERO mobile (rendu haut de gamme/luxe). Règle confirmée par JLShop06 : on TRADUIT les descriptifs produits (gel lubrifiant, etc.) mais on GARDE les noms de marque (Divine Xtases, Wooomy, Orgie, Pink Star, Hueman, Litolu, Rosy Gold, Magnum Opus, My Duchess, Le Flateur, Monster Pussy Strocker, Red Dolls Energy, Marry Me, Saturn, Love Connection, Indiana, Black Empire, Hemp Intense Orgasm, Sex on the Beach, Piña Colada, Yuka, Bio Organic, Stripe).

--- FAIT (committé sur main) ---
[OK] i18n.js : +52 clés home_ ×5 langues (fr/pt/it/es/de) insérées APRÈS indiana_li12, AVANT age_title. Validé : accolades équilibrées, 52 clés/langue, ordre fr/pt/it/es/de OK. i18n.js ≈ 454 757 chars. Clés ajoutées :
  - home_hero_baseline, home_hero_desc (avec <strong> SEO)
  - home_seo_intro_title, home_seo_intro_p1/p2/p3
  - home_seo_grid_t1/p1, t2/p2, t3/p3
  - home_seo_why_title, home_seo_why_text (avec &nbsp; et <strong>)
  - home_cat_1..6 (titres catégories ✦)
  - home_footer_seo
  - home_prod_1..31 (31 noms produits traduits, marques conservées)
  NOTE : home_announce NON créée — la barre d'annonce réutilise la clé EXISTANTE banner_livraison (déjà traduite ×5). De même cart_title (VOTRE PANIER) existe déjà.
[OK] index.html : 52 attributs data-i18n câblés (committé sur main, vérifié via API GitHub : 52 home_ + .announce-bar=banner_livraison). Méthode : remplacement de chaîne sur HTML brut. Validé parse OK / 0 manquant / scripts 5=5 / meta 21=21 / diff +1377 chars. Mapping respecté (hero, 3 sections SEO, 6 cat, footer SEO span, 31 produits).

--- RESTE À FAIRE (priorité) ---
1) index.html — [TERMINÉ ✅ committé] data-i18n posés. Référence du mapping (au cas où) :
   - .announce-bar -> banner_livraison (clé existante)
   - .hero-baseline -> home_hero_baseline ; .hero-desc -> home_hero_desc
   - .seo-intro__title -> home_seo_intro_title ; les 3 .seo-intro__text -> home_seo_intro_p1/p2/p3 (ordre DOM)
   - 3 .seo-col__title -> home_seo_grid_t1/t2/t3 ; 3 .seo-col__text -> home_seo_grid_p1/p2/p3
   - .seo-why__title -> home_seo_why_title ; .seo-why__text -> home_seo_why_text
   - 6 .cat-section__title -> home_cat_1..6 (ordre DOM)
   - 31 <h3 itemprop="name"> -> home_prod_1..31 (ordre DOM)
   - <span> SEO du footer ("Boutique Sextoys & Gel Lubrifiant Intime France & Europe") -> home_footer_seo
   MÉTHODE FIABLE TESTÉE : insertion par remplacement de chaîne sur le HTML brut (PAS DOMParser re-serialize). applyTranslations() bascule en innerHTML SI la valeur contient une balise sinon textContent -> <strong> OK dans les valeurs. ATTENTION : "Boutique Sextoys" apparaît AUSSI dans og:title/twitter -> ne câbler QUE le <span> du footer (dernière occurrence, après "Les Jardins Enchantés –").

2) COMPOSANTS PARTAGÉS (toutes les pages) :
   ✅ FAIT (01/07/2026) : labels UI "Description"/"Caractéristiques"/"AJOUTER AU PANIER" câblés ×29 (prod_desc/prod_feat/prod_add, clés existantes). footer_retour + footer_copyright câblés ×29.
   RESTE non fait :
   - Bannière COOKIES (compliance.js) : texte + 3 boutons "En savoir plus / Tout refuser / Tout accepter" encore en FR. compliance.js utilise déjà window.t + applyTranslations (modal 18+). -> créer clés cookie_banner_text, cookie_more, cookie_refuse_all, cookie_accept_all (×5) + remplacer les chaînes FR codées en dur par window.t().
   - "Retour boutique" (footer <a href=index.html>) présent sur ~31 fiches, NON câblé. -> clé footer_retour (×5). Exceptions sans ce lien : mini-robe-noire.html, robe-longue-noire-argentee.html (footer différent).
   - "VOTRE PANIER" (titre panier généré par cart.js) : clé cart_title existe déjà -> faire utiliser window.t('cart_title') dans cart.js.
   - Footer "© Les Jardins Enchantés – Boutique Luxe Intime" (texte nu) sur ~31 fiches : envisager clé footer_copyright. Sur index.html le footer est différent.

3) BANNIÈRE HERO MOBILE (CSS) — non fait. Actuellement un seul @media (max-width:768px) qui ne touche QUE .hero-logo-img. .hero a padding 200px 24px 140px + min-height 92vh (trop sur mobile). Refaire @media 768px et 480px : rythme vertical réduit, .hero-baseline/.hero-desc tailles mobiles, .hero-badges en colonne aérée, .hero-cta pleine largeur, espacement premium. Tester en vrai viewport mobile (vérifier window.innerWidth ; resize_window ne réduit pas toujours le rendu).

4) VÉRIF LIVE 5 langues : accueil (après câblage index.html) + re-scan fiches (raw, pas API en rafale -> 403 faux positifs).

ASTUCES SESSION :
- Filtre de sortie outil JS bloque fetchs renvoyant URLs avec query string / patterns sensibles -> nettoyer/limiter les retours.
- IIFE async ne renvoient pas toujours leur valeur dans le REPL -> stocker dans window.__x puis lire au call suivant.
- Variables window perdues à la navigation -> reconstruire (les 52 traductions __T ont été redéfinies sur la page éditeur avant de générer i18n.js).
- raw.githubusercontent fetchable depuis github.com (CORS OK). new Function() bloqué par CSP sur l'éditeur -> validation structurelle (slice/regex).
- Coller dans CodeMirror 6 : focus .cm-content -> Ctrl+A (clavier réel) -> dispatch ClipboardEvent('paste') avec DataTransfer text/plain. defaultPrevented:true = CM a intercepté. textContent non fiable (virtualisé) -> vérifier via scrollHeight / scroll + .cm-line.


==================================================
>>> REPRENDRE ICI (prochaine session) <<<

ÉTAT : Page d'accueil = TRADUCTION TERMINÉE (i18n.js + index.html committés sur main). À tester en live dans les 5 langues une fois Vercel redéployé (cache edge possible -> fetch cache:'reload' / vérifier window.innerWidth pour le mobile).

PROCHAINES ACTIONS (dans l'ordre) :

A) TEST LIVE ACCUEIL (rapide) : ouvrir lesjardinsenchantes.vercel.app, changer de langue, vérifier que announce-bar, hero, sections SEO, titres catégories et noms produits se traduisent bien (notamment <strong> rendus correctement, pas en texte brut). Les noms de marque doivent rester intacts.

B) COMPOSANTS PARTAGÉS (présents sur TOUTES les pages -> gros impact) :
   B1) Bannière COOKIES (compliance.js) — encore 100% FR. Textes : "Nous utilisons des cookies de mesure d'audience (Google Analytics) pour améliorer votre expérience. Vous pouvez accepter ou refuser librement." + boutons "En savoir plus", "Tout refuser", "Tout accepter". compliance.js utilise DÉJÀ window.t + applyTranslations (modal 18+ fait). -> créer clés (×5) : cookie_text, cookie_more, cookie_refuse, cookie_accept ; remplacer les chaînes FR codées en dur par window.t('cle') ; appeler applyTranslations()/réappliquer après création de la bannière.
   B2) "VOTRE PANIER" (titre panier, généré par cart.js) — clé cart_title EXISTE déjà (×5). -> faire utiliser window.t('cart_title') dans cart.js là où le titre est écrit.
   B3) "Retour boutique" (footer <a href=index.html>) — non câblé sur ~31 fiches. -> clé footer_retour (×5) dans i18n.js + data-i18n sur le lien. Exceptions au footer différent : mini-robe-noire.html, robe-longue-noire-argentee.html.
   B4) "© Les Jardins Enchantés – Boutique Luxe Intime" (texte nu footer ~31 fiches) — envisager footer_copyright (×5) en enveloppant la partie traduisible dans un <span data-i18n>. Garder "© Les Jardins Enchantés" (marque).

C) BANNIÈRE HERO MOBILE (CSS — demande explicite "haut de gamme/luxe") :
   Actuel : un seul @media (max-width:768px) qui ne touche QUE .hero-logo-img (220px). .hero = padding 200px 24px 140px + min-height 92vh (trop haut/vide sur mobile).
   À faire : @media 768px et 480px -> réduire padding/min-height, calibrer .hero-baseline (clamp ~18-20px) et .hero-desc (~14px, line-height aéré), .hero-badges en colonne ou wrap centré avec gap réduit, .hero-cta pleine largeur (ou large) avec letter-spacing premium, marges régulières. Objectif : rythme vertical élégant, pas de vide, typo équilibrée. Le CSS est inline dans <style> de index.html (et/ou dans les fiches). Tester en VRAI mobile (window.innerWidth ; resize_window ne change pas toujours le rendu interne).

D) RE-SCAN FICHES PRODUITS (vérif finale) : via raw/API (PAS l'API en rafale -> 403). Confirmer title data-i18n + clés présentes. Les fiches sont marquées faites mais re-vérifier saturn/enseignante (cache edge signalé).

RAPPEL CLÉS HOME AJOUTÉES (déjà dans i18n.js, ordre fr/pt/it/es/de) : home_hero_baseline, home_hero_desc, home_seo_intro_title, home_seo_intro_p1..p3, home_seo_grid_t1..t3 + p1..p3, home_seo_why_title, home_seo_why_text, home_cat_1..6, home_footer_seo, home_prod_1..31. (home_announce N'EXISTE PAS : utiliser banner_livraison.)


========================================================================
REPRISE — BUG BOUTON PANIER (data-i18n="panier") — MAJ 02/07/2026
========================================================================

CONTEXTE DU BUG :
Le bouton PANIER du header ("PANIER (0)") n'etait traduit QUE sur l'accueil.
Sur les autres pages il etait ecrit sans le span i18n :
  <button class="lux-cart" onclick="showCart()">PANIER (<span id="cartCount">0</span>)</button>
=> il fallait ajouter <span data-i18n="panier">PANIER</span> pour qu'il devienne
   WARENKORB / CARRINHO / etc. selon la langue.

CORRECTIF APPLIQUE (par page) :
  Regex : PANIER(\s*)\(<span id="cartCount">
  Remplacement : <span data-i18n="panier">PANIER</span>$1(<span id="cartCount">
  (le flag /g gere les pages a plusieurs occurrences)

WORKFLOW PAR PAGE (RÔLES : Claude fait tout SAUF le clic Commit) :
  1. Aller sur github.com/JLShop06/Les-Jardins-Enchantes/edit/main/[FICHIER]
  2. Extraire le HTML depuis le JSON de l'editeur (script[type=application/json],
     chaine contenant 'lux-cart' + '<!DOCTYPE'), appliquer le remplacement,
     stocker dans window.__new. Verifier occ_before / i18n_after / delta(=occ*32).
  3. Coller : click [400,300], Ctrl+A, ClipboardEvent paste sur .cm-content
     (DataTransfer text/plain = window.__new). Verifier defaultPrevented:true.
  4. L'UTILISATEUR (JLShop06) clique "Commit changes...". Laisser le message par defaut.

NOTES TECHNIQUES :
  - CodeMirror virtualise => verif textContent apres collage NON FIABLE.
    Se fier a i18n_after (avant collage) + defaultPrevented:true.
  - Retours JS contenant des URL => filtre "[BLOCKED]". Renvoyer des compteurs/booleens.
  - fetch avec {cache:'reload'} (CDN raw + rate-limit API 403).
  - NE PAS toucher au CSS (style.css a des blocs dupliques, instruction utilisateur).

------------------------------------------------------------------------
AVANCEMENT — 20 pages COMMITTEES (bouton panier corrige) :
------------------------------------------------------------------------
 1. hemp-intense-orgasm.html
 2. dual-vibe-sex-on-the-beach.html (2 occ)
 3. Plug-Anal-Rosy-Gold.html (3 occ)
 4. gel_lubrifiant_bio_neutre_divine_xtases.html
 5. gel_lubrifiant_bio_neutre_vanille_divine_xtases.html
 6. gel_lubrifiant_bio_neutre_framboise_divine_xtases.html
 7. gel_lubrifiant_bio_neutre_monoi_divine_xtases.html
 8. gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html
 9. gel_cannabis_orgie.html
10. lubrifiant_eau_tube_barbe_a_papa.html
11. lubrifiant_eau_lube_tube_chocolat_orgie.html
12. lubrifiant_eau_lube_tube_fraise_orgie.html
13. pink-star.html
14. pink_star_sucette_cerise.html
15. pink-star-choco-fraise.html
16. orgie-pinacolada.html
17. vibro-rechargeable-Indiana.html
18. Magnum-Opus-vibro.html
19. black-empire-my-duchess.html
20. le-flateur.html

------------------------------------------------------------------------
RESTE A FAIRE — 15 pages (scan live du 02/07/2026, cache:reload) :
------------------------------------------------------------------------
Pages produits/autres (10) — bouton panier uniquement (1 occ chacune) :
  - robe-longue-noire-argentee.html
  - mini-robe-noire.html
  - monster-pussy-strocker.html
  - red-dolls-energy-pleasure.html
  - Cockring-vibrant-Marry-Me-Wooomy.html
  - cockring-vibrant-saturn-hueman.html
  - anneau_vibrant_telecommande.html
  - deguisement-etudiante.html
  - deguisement-enseignante.html
  (NB: deguisement-infirmiere-sexy n'apparait PLUS dans le scan live -> ignorer)

Pages legales (5) — bouton panier (1 occ) :
  - cgv.html            (AUSSI cart_title manquant sur <h2>VOTRE PANIER</h2>)
  - cookies.html        (AUSSI cart_title manquant)
  - confidentialite.html(AUSSI cart_title manquant)
  - mentions-legales.html
  - retractation.html

  => Sur cgv/cookies/confidentialite : ajouter EN PLUS data-i18n="cart_title"
     sur le <h2>VOTRE PANIER</h2> (la cle cart_title existe deja dans i18n.js).

------------------------------------------------------------------------
TACHE FINALE (apres les 15 pages) — lien "Renoncer au contrat" :
------------------------------------------------------------------------
Le lien injecte par compliance.js est en dur en francais. Il faut :
  - creer une nouvelle cle i18n (ex: "renoncer_contrat") avec 5 traductions
    fr/pt/it/es/de A FAIRE VALIDER PAR L'UTILISATEUR avant insertion,
  - cabler dans compliance.js.
FR = "Renoncer au contrat" ; PT/IT/ES/DE a proposer et faire valider.

------------------------------------------------------------------------
SCRIPT DE RE-SCAN (a lancer sur l'onglet du site live pour lister le reste) :
------------------------------------------------------------------------
  fetch chaque page avec {cache:'reload'}, tester /data-i18n="panier"/.
  Les pages sans cette chaine restent a corriger.

RAPPEL RÔLES : Claude fait TOUT sauf le clic final "Commit changes" (JLShop06).
Ordre langues STRICT : fr / pt / it / es / de.
Marques NON traduites : Divine Xtases, Wooomy, Orgie, Pink Star, Hueman, Litolu,
Rosy Gold, Magnum Opus, My Duchess, Le Flateur, Monster Pussy Strocker,
Red Dolls Energy, Marry Me, Saturn, Indiana, Black Empire, Hemp Intense Orgasm,
Sex on the Beach, Pina Colada, Yuka, Bio Organic, Stripe, Google Analytics.
========================================================================

================================================== SESSION CLÔTURÉE — MAJ 02/07/2026 (fin de session Claude)

BUG BOUTON PANIER (data-i18n="panier") : TERMINÉ 100%.
Les 14 pages restantes ont été committées (span data-i18n="panier" sur le bouton du header) :
robe-longue-noire-argentee, mini-robe-noire, monster-pussy-strocker, red-dolls-energy-pleasure,
Cockring-vibrant-Marry-Me-Wooomy, cockring-vibrant-saturn-hueman, anneau_vibrant_telecommande,
deguisement-etudiante, deguisement-enseignante, cgv, cookies, confidentialite, mentions-legales, retractation.
Vérifié en live via raw GitHub (cache:reload) : panier=1 partout, plus aucun "PANIER (" brut (left=0).

cart_title ("VOTRE PANIER") : câblé data-i18n="cart_title" sur les 4 pages légales ayant un titre statique :
cgv, cookies, confidentialite ET mentions-legales (cette dernière ajoutée par cohérence, le titre y était présent
et non câblé ; validé par JLShop06). retractation n'a pas de titre panier statique (généré côté JS).

LIEN "Renoncer au contrat" (compliance.js) : TERMINÉ.
- i18n.js : clé renoncer_contrat ajoutée ×5 (ordre fr/pt/it/es/de), insérée après home_prod_31 dans chaque bloc de langue.
  Valeurs (validées par JLShop06) : fr="Renoncer au contrat", pt="Renunciar ao contrato",
  it="Recedere dal contratto", es="Renunciar al contrato", de="Vom Vertrag zurücktreten".
  Validé : 5 clés, accolades équilibrées.
- compliance.js (ligne ~214, ancre 'a' du footer rétractation) : ancien 'a.textContent = "Renoncer au contrat"' remplacé par
  a.setAttribute('data-i18n','renoncer_contrat') + a.textContent = window.t('renoncer_contrat') (fallback FR).
  NB : applyTranslations() est appelé AVANT l'injection de ce footer -> le rendu initial passe donc par window.t(),
  et data-i18n assure la retraduction lors d'un changement de langue ultérieur.

VÉRIF : commits confirmés sur GitHub raw (i18n.js 5 valeurs OK ; compliance.js window.t + data-i18n OK, ancienne ligne supprimée).
Simulation window.t par langue : les 5 traductions renvoyées correctement.
RESTE (auto) : propagation cache edge Vercel non instantanée -> re-tester le lien live dans les 5 langues après expiration du cache.
========================================================================


---

## SUIVI PERFORMANCE & NAVIGATION AGENTIQUE (PageSpeed) — MAJ 2026-07-03

Rapport PageSpeed (mobile) : https://pagespeed.web.dev/analysis/https-les-jardins-enchantes-com/rukr1digid?form_factor=mobile
Scores de depart : Performances 78, Accessibilite 91, Bonnes pratiques 100, SEO 100, Navigation agentique 2/3.

### RÔLES (identiques a l'i18n)
Claude fait TOUT (fetch, calcul dimensions, collage dans l'editeur, verification debut/fin). L'utilisateur (JLShop06) clique UNIQUEMENT sur "Commit changes".

### PLAN
- A. llms.txt avec vrais liens Markdown — ✅ FAIT
- B. Ajouter width/height sur les <img> (reduit le CLS 0.388) — EN COURS
- C. Recompresser/redimensionner les ~13 images les plus lourdes (1.2–1.5 Mo) — A FAIRE
- D. Corriger 69 animations CSS non compositees (utiliser transform/opacity) — A FAIRE

### ETAPE B — width/height : fichiers FAITS (commit confirme via API)
llms.txt, index.html, Plug-Anal-Rosy-Gold.html, le-flateur.html, mini-robe-noire.html, red-dolls-energy-pleasure.html, robe-longue-noire-argentee.html, Cockring-vibrant-Marry-Me-Wooomy.html, Déguisement-Bunny.html, Magnum-Opus-vibro.html, anneau_vibrant_telecommande.html, black-empire-my-duchess.html, cockring-vibrant-saturn-hueman.html, deguisement-enseignante.html, deguisement-etudiante.html, deguisement-infirmière-sexy.html

### ETAPE B — fichiers RESTANTS (img sans width/height)
dual-vibe-sex-on-the-beach.html (4), gel_cannabis_orgie.html (3), gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html (1), gel_lubrifiant_bio_neutre_divine_xtases.html (1), gel_lubrifiant_bio_neutre_framboise_divine_xtases.html (1), gel_lubrifiant_bio_neutre_monoi_divine_xtases.html (1), gel_lubrifiant_bio_neutre_vanille_divine_xtases.html (1), hemp-intense-orgasm.html (3), lubrifiant_eau_lube_tube_chocolat_orgie.html (3), lubrifiant_eau_lube_tube_fraise_orgie.html (3), lubrifiant_eau_tube_barbe_a_papa.html (3), monster-pussy-strocker.html (4), orgie-pinacolada.html (1), pink-star-choco-fraise.html (1), pink-star.html (1), pink_star_sucette_cerise.html (1), vibro-rechargeable-Indiana.html (a verifier)

### PAGES SANS IMAGE (a ignorer)
cancel, cgv, confidentialite, cookies, erreur, mentions-legales, retractation, success, veille-concurrents

### METHODE PAR FICHIER (une a une, via editeur web GitHub)
1. Aller sur https://github.com/JLShop06/Les-Jardins-Enchantes/edit/main/<FICHIER>
2. En JS sur cette page : fetch du raw, extraire les <img>, fetch chaque image (createImageBitmap) pour width/height naturels, regex-remplacer les <img> sans width/height. Stocker dans window.__newFileHtml. (IMPORTANT: recalculer APRES avoir navigue, sinon la variable est "undefined").
3. Clic dans l'editeur, Ctrl+A, Delete (vider completement AVANT de coller).
4. Coller via ClipboardEvent('paste') sur .cm-content.
5. Ctrl+Home puis Ctrl+End : verifier un seul <!DOCTYPE html> au debut et footer propre a la fin.
6. Demander a l'utilisateur de cliquer "Commit changes".
7. Verifier via API : https://api.github.com/repos/JLShop06/Les-Jardins-Enchantes/contents/<FICHIER> (base64 decode, compter width="X" height="Y"). NE PAS se fier a raw.githubusercontent (cache CDN en retard).

### METHODE PLUS RAPIDE (github.dev / VS Code web) — a activer
Ouvrir https://vscode.dev/github/JLShop06/Les-Jardins-Enchantes , autoriser "Visual Studio Code" (Continue en tant que JLShop06). Permet d'editer plusieurs fichiers puis 1 seul commit groupe. L'utilisateur valide la connexion.


---

## REPRISE AVEC VISUAL STUDIO CODE (github.dev) — INSTRUCTIONS DETAILLEES

### Objectif
Editer plusieurs fichiers HTML d'un coup et faire UN SEUL commit groupe, au lieu de la methode fichier-par-fichier (plus lente). Cela sert a finir l'ETAPE B (width/height) sur les 17 fichiers restants, puis a preparer C et D.

### 1. Ouvrir l'editeur
Aller sur : https://vscode.dev/github/JLShop06/Les-Jardins-Enchantes
(ou appuyer sur "." (point) depuis la page GitHub du repo — cela ouvre github.dev.)

### 2. Autoriser la connexion (fait par JLShop06, PAS par Claude)
- Sur l'ecran "Authorize Visual Studio Code", cliquer "Continue" (connecte en tant que JLShop06).
- Si un ecran GitHub OAuth apparait, cliquer "Authorize".
- Attendre que l'arborescence des fichiers s'affiche a gauche (explorer).
- NOTE : la 1ere tentative etait restee bloquee sur "Connexion a github.com...". Si ca rebloque : recharger l'onglet, ou revenir a la methode fichier-par-fichier (voir plus haut) qui marche a 100%.

### 3. Workflow d'edition dans VS Code web
Pour CHAQUE fichier restant (liste "ETAPE B — fichiers RESTANTS" plus haut) :
- Ouvrir le fichier dans l'explorer.
- Claude calcule les dimensions naturelles des images (fetch raw + createImageBitmap) et fournit le contenu corrige (img avec width="W" height="H").
- Remplacer le contenu du fichier par la version corrigee (Ctrl+A, Delete, coller).
- Ne PAS oublier : recalculer les dimensions APRES ouverture (variable JS sinon "undefined").

### 4. Commit groupe (fait par JLShop06)
- Cliquer sur l'icone "Source Control" (branche, colonne de gauche) ou Ctrl+Shift+G.
- Verifier la liste des fichiers modifies (Changes).
- Ecrire un message de commit (ex : "perf: ajout width/height images (CLS) — lot 2").
- Cliquer "Commit & Push" (coche verte / bouton). => C'est JLShop06 qui valide le commit, jamais Claude.

### 5. Verification (Claude)
Apres push, verifier chaque fichier via l'API :
https://api.github.com/repos/JLShop06/Les-Jardins-Enchantes/contents/<FICHIER>?ref=main
avec header Accept: application/vnd.github.raw, puis compter les width="X" height="Y".
NE PAS se fier a raw.githubusercontent.com (cache CDN en retard de plusieurs minutes).

### ETAT AU MOMENT DE LA SAUVEGARDE
- ETAPE A (llms.txt) : FAIT.
- ETAPE B (width/height) : 16 fichiers FAITS. deguisement-infirmière-sexy.html : prepare et colle dans l'editeur GitHub mais COMMIT A CONFIRMER (verifier via API : doit avoir 4 paires width/height, ~277 lignes).
- Prochain fichier a traiter : dual-vibe-sex-on-the-beach.html (4 images).
- Puis suivre la liste "fichiers RESTANTS" dans l'ordre.
- ETAPE C (recompression ~13 images lourdes) et ETAPE D (69 animations CSS non compositees) : PAS COMMENCEES.


==================================================
SESSION PERFORMANCE — MAJ 2026-07-03 (fin de session)

RÔLES : Claude fait tout (compression images via Canvas, calcul dimensions, verif) SAUF le remplacement/commit final des fichiers (JLShop06).

ETAPE B (width/height images) : TERMINEE 100%. Les 4 derniers fichiers committes (par JLShop06) :
- pink-star-choco-fraise.html (img 1024x1536)
- pink-star.html (img 1024x1535)
- pink_star_sucette_cerise.html (img 1023x1537)
- vibro-rechargeable-Indiana.html (3 img : 1024x1536, 800x1200, 800x1200)
Balayage complet API GitHub (cache:reload) sur les 17 fichiers "RESTANTS" : toutes les images ont width/height (allOk, 0 restant). CLS visé reglé.

ETAPE C (compression images lourdes) : FAITE.
- Logo favicon.webp : 1,90 Mo -> ~20 Ko. Redimensionne 1254x1254 -> 400x400, WebP q75 (via Squoosh). Remplace + committe par JLShop06.
- 13 images produit lourdes (>1 Mo) recompressees WebP 800px de large, q75, via Canvas navigateur (createImageBitmap + canvas.toBlob('image/webp',0.75)). Total ~17 Mo -> ~690 Ko (-96%). Fichiers telecharges avec noms exacts, remplaces par lot + committes par JLShop06. Verif : aucun doublon "(1)" dans le depot, 13 noms presents, images en ligne = versions compressees.
  Liste (avant -> apres Ko) : Robe longue argentee 1496->87 ; Mini robe noire 1484->66 ; lubrifiant fraise 1435->72 ; lubrifiant chocolat 1417->63 ; Magnum-Opus 1346->51 ; barbe a papa 1318->48 ; gel-cannabis 1295->52 ; red-dolls 1276->47 ; Cockring Marry-Me 1261->42 ; vibro-elegance 1234->56 ; le-flateur 1214->41 ; cockring-saturn 1199->36 ; plug rosy-gold 1173->29.

METHODE COMPRESSION FIABLE (sans Squoosh, tout auto) : sur un onglet du domaine du site (CORS ok), fetch(url,{cache:'reload'}) -> createImageBitmap -> canvas 800px large (ratio conserve) -> canvas.toBlob('image/webp',0.75) -> download via a[download]=nom_exact. WebP encode nativement par le navigateur.

RESULTATS PAGESPEED MOBILE (avant -> apres) : Score ~73-77 instable -> ~80-81 stable. CLS 0.388 -> 0.026 (vert). TBT 10ms -> 0ms. LCP 6,2s -> 4,3s (encore ameliorable). FCP/SI ~2,9s.
NOTE : le score mobile PageSpeed fluctue de +/-15 pts d'un test a l'autre (serveurs Google). Toujours faire 3 tests et prendre la tendance.

ETAPE D (69 animations CSS non compositees) : NON FAITE (choix JLShop06). Analyse : les @keyframes (starsFloat/fadeIn/fadeInUp) utilisent deja transform/opacity (OK). Seuls 7 "transition: all" restent non-composites. Impact quasi nul sur le score (TBT deja 0ms) + risque sur style.css (blocs dupliques, consigne "ne pas toucher"). Abandonnee sciemment.

RESTE (optionnel) : baisser encore le LCP (element LCP = image haut de page ; pistes : preload de l'image LCP, verifier fetchpriority=high, eviter loading=lazy sur l'image above-the-fold). Recompression restante negligeable (images deja <270 Ko).


============================================================
JOURNAL DES CORRECTIONS - Session 2026-07-05 (Claude)
============================================================

Contexte : correction des fiches produit (32 fiches) et d'une fiche mal etiquetee.

1) IMAGES NON ROGNEES (object-fit)
   - Remplacement de "object-fit:cover" par "object-fit:contain" dans la
     regle CSS ".product-image-frame img" sur toutes les fiches produit.
   - Attention : certaines fiches avaient PLUSIEURS blocs
     ".product-image-frame img" (ex: Plug-Anal-Rosy-Gold = 3 blocs,
     dual-vibe = 2). Toutes les occurrences ont ete traitees, pas seulement
     la premiere.
   - Verifie : 32/32 fiches sans "object-fit:cover".

2) SUPPRESSION DU CADRE BLANC AUTOUR DES PHOTOS
   - Retrait de "background:#ffffff" et "padding:15px" dans la regle
     ".product-image-frame img" sur les 32 fiches produit (22 en avaient
     encore le cadre blanc; les autres etaient deja propres).
   - Verifie : 32/32 fiches sans background blanc ni padding:15px.

3) FICHE MAL ETIQUETEE : gel_lubrifiant_bio_neutre_divine_xtases.html
   - Image principale cassee (404) : "gel lubriant bio miel coco.webp"
     remplacee par "gel-lubrifiant-bio-coco.webp" (fichier existant, deja
     utilise sur la page d'accueil).
   - Ce produit est en realite un PARFUM COCO (et non "neutre").
     Renommage du nom visible : "Gel Lubrifiant Glisse Bio Neutre Divine
     Xtases" -> "... Bio Coco Divine Xtases" (titre, H1, meta, JSON-LD,
     mots-cles, attribut name).
   - Mentions de senteur adaptees : "sans odeur" -> "parfum coco gourmand";
     "Sans odeur et neutre" -> "Parfum coco gourmand"; badge "Sans Parfum"
     retire (produit desormais parfume).
   - NON MODIFIE VOLONTAIREMENT : le nom de fichier / URL canonique
     (gel_lubrifiant_bio_neutre_divine_xtases.html) et les cles i18n
     data-i18n="neutre_*" (pour ne rien casser cote liens et traduction).

METHODE / NOTES TECHNIQUES
   - Toutes les modifs faites via l'editeur GitHub, commit direct sur "main".
   - Verification fiable via la page "blob" GitHub (source fraiche). Le CDN
     "raw.githubusercontent.com" ayant plusieurs minutes de cache, il a donne
     des faux positifs; ne pas s'y fier pour verifier un commit recent.
   - Fausse alerte levee : les fiches deguisement enseignante/etudiante
     semblaient avoir des images 404 mais c'etait un probleme d'encodage
     d'URL (apostrophes/espaces); les images s'affichent correctement.


==================================================
SESSION SEO / GEO — MAJ 2026-07-06 (Claude)
==================================================

RÔLES : Claude fait TOUT (edition, collage editeur) SAUF le clic "Commit changes" (JLShop06).

CONTEXTE : demande basee sur un rapport SEOptimizer ("Utilisez vos mots-cles principaux dans les balises HTML importantes", priorite moyenne) + audit GEO.

--- FAIT (committe sur main) ---

1) H1 SEO (index.html) : le H1 ne contenait QUE le logo (img), sans texte -> probleme SEO.
   Ajout d'un <span class="hero-h1-text" data-i18n="home_h1_seo"> SOUS le logo (h1 en flex-column, centre, style dore Georgia 15px uppercase letter-spacing) avec le texte :
   "Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs".
   Rendu valide visuellement par JLShop06 (version "sous le logo", pas a cote).

2) i18n.js : cle home_h1_seo ajoutee x5 (ordre fr/pt/it/es/de), inseree apres renoncer_contrat dans chaque bloc de langue. Accolades equilibrees. Traductions :
   fr = Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs
   pt = Loja de Sextoys Franca: Geis Lubrificantes Bio, Oleos de Massagem e Estimuladores
   it = Negozio Sextoys Francia: Gel Lubrificanti Bio, Oli da Massaggio e Stimolatori
   es = Tienda de Juguetes Sexuales Francia: Geles Lubricantes Bio, Aceites de Masaje y Estimuladores
   de = Sextoy-Shop Frankreich: Bio-Gleitgele, Massageole & Stimulatoren

3) GEO / SEO multilingue — support ?lang= dans l'URL (i18n.js) :
   AVANT : langue geree UNIQUEMENT via localStorage + navigator.language -> toutes les langues sur la MEME URL -> versions PT/IT/ES/DE NON indexables par Google (bascule en JS que Googlebot n'execute pas).
   PATCH getLang() : lit ?lang=xx en PRIORITE (si supporte -> le stocke en localStorage et le retourne), sinon fallback localStorage, sinon navigator, sinon fr. Logique testee 7/7 cas OK.
   PATCH setLang() : met a jour l'URL sans recharger (history.replaceState). fr = URL propre (pas de param) ; autres langues = ?lang=xx.

4) hreflang (index.html) : ajout de 6 <link rel="alternate"> apres le canonical :
   fr -> https://les-jardins-enchantes.com/
   pt/it/es/de -> https://les-jardins-enchantes.com/?lang=xx
   x-default -> https://les-jardins-enchantes.com/
   (rendus crawlables grace au patch getLang ci-dessus).

5) UNIFORMISATION DES URLs vercel.app -> les-jardins-enchantes.com (incoherence de domaine).
   Deux domaines vercel trouves dans le repo, tous deux remplaces par le .com :
     - lesjardinsenchantes.vercel.app (le plus courant)
     - les-jardins-enchantes-greentherapy06s-projects.vercel.app (URL technique, ex: lien dans cgv.html)
   NOTE : llms.txt utilisait DEJA le .com partout (36x) -> rien a corriger.
   FICHIERS FAITS (committes) : robots.txt (2), sitemap.xml (26), index.html (canonical + og:url + og:image + twitter:image + JSON-LD Store = 5).

--- RESTE A FAIRE (URLs vercel -> .com) ---
Environ 34 fichiers restants contiennent encore lesjardinsenchantes.vercel.app (surtout canonical + og:url, ~2 occ/page) :
  les 32 fiches produit + pages legales (cgv, confidentialite, cookies, mentions-legales, retractation) + eventuels feed.xml / manifest / api.
METHODE : editeur GitHub fichier par fichier (VS Code web / github.dev NE FONCTIONNE PAS -> reste bloque a la connexion, confirme par JLShop06). Remplacer les 2 domaines vercel -> les-jardins-enchantes.com. Verifier via API GitHub (pas raw : cache CDN).
SCAN : API git/trees recursive + fetch raw {cache:'reload'} pour lister les fichiers contenant "vercel.app".

--- PISTES GEO/SEO SUIVANTES (optionnel, non fait) ---
  - JSON-LD Store : pas d'aggregateRating (avis clients) ni sameAs (reseaux sociaux) -> a ajouter si dispo (gros boost visibilite).
  - Score PageSpeed "Navigation agentique" 2/3 -> viser 3/3.
  - H2 "Boutique Sextoys, Gel Lubrifiant Bio..." fait desormais doublon avec le nouveau H1 -> reformuler pour varier les mots-cles (livraison discrete, Yuka 100/100...).


---

## SESSION SEO/GEO 2026-07-06 — Suivi detaille

### FAIT (tout committe)

**1. H1 SEO (demande SEOptimizer : mots-cles dans balises HTML)**
- Le H1 de index.html etait VIDE (juste le logo image, aucun texte).
- Ajoute un span H1 texte riche en mots-cles SOUS le logo (style dore, Georgia, uppercase, discret) : "Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs" (option 3 validee visuellement, version "sous le logo").
- Span avec data-i18n="home_h1_seo".

**2. i18n home_h1_seo x5 (i18n.js)**
- Cle home_h1_seo ajoutee dans les 5 langues, inseree apres renoncer_contrat, ordre fr/pt/it/es/de :
  - FR : Boutique Sextoys France : Gels Lubrifiants Bio, Huiles de Massage & Stimulateurs
  - PT : Loja de Sextoys Franca: Geis Lubrificantes Bio, Oleos de Massagem e Estimuladores
  - IT : Negozio Sextoys Francia: Gel Lubrificanti Bio, Oli da Massaggio e Stimolatori
  - ES : Tienda de Juguetes Sexuales Francia: Geles Lubricantes Bio, Aceites de Masaje y Estimuladores
  - DE : Sextoy-Shop Frankreich: Bio-Gleitgele, Massageole & Stimulatoren

**3. GEO / SEO multilingue — support ?lang= dans URL (i18n.js)**
- Constat : langues gerees uniquement en localStorage/navigator -> versions PT/IT/ES/DE PAS indexables par Google (une seule URL).
- getLang() lit desormais ?lang=xx en priorite (puis localStorage, puis navigateur). Teste 7/7 cas OK.
- setLang() met a jour l'URL sans recharger (history.replaceState) : FR = URL propre sans param, autres langues = ?lang=xx.

**4. hreflang (index.html)**
- Ajout de 6 balises hreflang apres le canonical : fr, pt, it, es, de + x-default.
- FR et x-default -> https://les-jardins-enchantes.com/ ; autres -> /?lang=xx (crawlables grace au patch getLang).

**5. Uniformisation URLs vercel.app -> les-jardins-enchantes.com**
- 3 variantes de domaine a remplacer (ordre : la plus longue d'abord) :
  1. les-jardins-enchantes-greentherapy06s-projects.vercel.app
  2. les-jardins-enchantes.vercel.app (avec tirets)
  3. lesjardinsenchantes.vercel.app (sans tirets)
- Methode : editeur GitHub fichier par fichier (VS Code web / github.dev ne fonctionne PAS). 1 commit par fichier (JLShop06 clique Commit).
- llms.txt : deja en .com, RAS.
- confidentialite.html : deja propre (0 vercel), non modifie.

**Fichiers uniformises et committes (25) :**
robots.txt, sitemap.xml, index.html, i18n.js, cgv.html, Cockring-vibrant-Marry-Me-Wooomy.html, Deguisement-Bunny.html, Magnum-Opus-vibro.html, anneau_vibrant_telecommande.html, api/retractation/submit.js, black-empire-my-duchess.html, cockring-vibrant-saturn-hueman.html, deguisement-enseignante.html, deguisement-etudiante.html, deguisement-infirmiere-sexy.html, dual-vibe-sex-on-the-beach.html, gel_cannabis_orgie.html, gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html, gel_lubrifiant_bio_neutre_divine_xtases.html, gel_lubrifiant_bio_neutre_framboise_divine_xtases.html, gel_lubrifiant_bio_neutre_monoi_divine_xtases.html, gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases.html, gel_lubrifiant_bio_neutre_vanille_divine_xtases.html, hemp-intense-orgasm.html, le-flateur.html

### A FAIRE — PROCHAINE SESSION

**A. Terminer uniformisation URLs vercel -> .com (13 fichiers restants, 2 occ. chacun, dans canonical + og:url) :**
- Plug-Anal-Rosy-Gold.html
- lubrifiant_eau_lube_tube_chocolat_orgie.html
- lubrifiant_eau_lube_tube_fraise_orgie.html
- lubrifiant_eau_tube_barbe_a_papa.html
- mini-robe-noire.html
- monster-pussy-strocker.html
- orgie-pinacolada.html
- pink-star-choco-fraise.html
- pink-star.html
- pink_star_sucette_cerise.html
- red-dolls-energy-pleasure.html
- robe-longue-noire-argentee.html
- vibro-rechargeable-Indiana.html

**B. BUG PRE-EXISTANT a corriger separement — dual-vibe-sex-on-the-beach.html :**
- Le fichier contient DEUX documents HTML complets colles l'un apres l'autre (2 DOCTYPE, 2 <html>, 2 </html>, 4 <head>) — confirme via API GitHub.
- Cette session : SEULES les URLs vercel ont ete corrigees, le doublon N'A PAS ete touche (decision validee avec JLShop06).
- A traiter : supprimer le 2e document HTML en double (avec verification visuelle avant commit). Bug SEO (contenu duplique / page malformee).

**C. Ameliorations SEO/GEO optionnelles notees precedemment :**
- Enrichir JSON-LD Store : aggregateRating (si avis clients), sameAs (reseaux sociaux).
- Score PageSpeed "Navigation agentique" 2/3 -> viser 3/3.
- H2 "Boutique Sextoys, Gel Lubrifiant Bio..." fait doublon avec le nouveau H1 -> reformuler pour varier les mots-cles (livraison discrete, Yuka 100/100...).

### NOTES METHODE (pour reprendre vite)
- Ordre langues STRICT : fr / pt / it / es / de.
- Verifier via editeur GitHub ou API GitHub (Accept: application/vnd.github.raw), PAS via raw.githubusercontent.com (cache CDN en retard).
- CodeMirror est virtualise : la verification du DOM peut afficher des lignes du milieu, ce n'est pas fiable ; se fier a la validation du contenu avant collage + defaultPrevented=true, ou faire un screenshot.
- Coller : clic dans l'editeur -> Ctrl+A -> Delete (vider) -> paste via ClipboardEvent. Valider AVANT collage : 0 vercel restant, 0 artefact (.com.com), DOCTYPE en tete.
- En cas d'erreur GitHub "erreur lors de l'enregistrement" : re-cliquer Commit, ca repasse.


---

## MISE A JOUR 2026-07-06 (suite/fin de session) — TOUT TERMINE

### Uniformisation URLs vercel -> .com : TERMINEE (100%)
Les 13 fiches produit restantes ont ete traitees et committees :
Plug-Anal-Rosy-Gold.html, lubrifiant_eau_lube_tube_chocolat_orgie.html, lubrifiant_eau_lube_tube_fraise_orgie.html, lubrifiant_eau_tube_barbe_a_papa.html, mini-robe-noire.html, monster-pussy-strocker.html, orgie-pinacolada.html, pink-star-choco-fraise.html, pink-star.html, pink_star_sucette_cerise.html, red-dolls-energy-pleasure.html, robe-longue-noire-argentee.html, vibro-rechargeable-Indiana.html.
=> Plus AUCUNE reference vercel.app dans le repo (tous les canonical/og:url/JSON-LD/robots/sitemap/i18n pointent vers les-jardins-enchantes.com).

### Bug doublon HTML : CORRIGE
- dual-vibe-sex-on-the-beach.html : avait 2 documents HTML complets colles -> nettoye, garde 1 seul document (le plus complet, avec canonical .com). Committe.
- Plug-Anal-Rosy-Gold.html : avait 3 documents HTML complets colles -> nettoye, garde 1 seul document (le 1er, le plus complet : 844 vs 764 chars de texte, CSS image enrichi max-height/object-fit). Committe.
- Scan complet des 38 fichiers HTML du repo (via raw) : 0 fichier avec DOCTYPE multiple restant. Probleme entierement resolu.

### Note technique
- Le scan initial via API GitHub avait ete fausse par le rate limit (60 req/h) qui renvoyait "0 DOCTYPE" (reponse d'erreur JSON de 279 chars). Verifier via l'editeur GitHub ou raw.githubusercontent.com quand l'API est limitee.

### ETAT GLOBAL SEO/GEO — recap
FAIT : H1 SEO (texte mots-cles sous logo, 5 langues via home_h1_seo) ; support ?lang= dans URL (getLang/setLang) ; 6 hreflang (fr/pt/it/es/de + x-default) ; uniformisation URLs vercel->.com (100%) ; suppression doublons HTML (dual-vibe + Plug-Anal-Rosy-Gold).

RESTE (optionnel, prochaine session) :
- Enrichir JSON-LD Store : aggregateRating (si avis clients), sameAs (reseaux sociaux).
- Score PageSpeed "Navigation agentique" 2/3 -> viser 3/3.
- Reformuler le H2 "Boutique Sextoys, Gel Lubrifiant Bio..." qui fait doublon avec le nouveau H1 (varier mots-cles : livraison discrete, Yuka...).
- Verifier en live apres redeploiement Vercel : changement de langue ajoute bien ?lang=xx + traduit ; H1 s'affiche dans les 5 langues.


---

## CORRECTIF 2026-07-06 — Saveur Coco (page gel_lubrifiant_bio_neutre_divine_xtases)

### Probleme
La fiche gel_lubrifiant_bio_neutre_divine_xtases (produit Noix de Coco) affichait "Bio Neutre" et "sans odeur" au lieu de la saveur Coco.
CAUSE : le H1 et la description ont data-i18n (neutre_title, neutre_subtitle, neutre_desc1) -> le texte affiche vient de i18n.js, PAS du HTML statique (qui, lui, contenait deja "Coco"). Corriger le HTML seul ne sert a rien : c'est i18n.js qui pilote l'affichage.

### Fait (i18n.js, committe, 5 langues fr/pt/it/es/de)
- neutre_title + neutre_desc1 : "Bio Neutre/Neutro/Neutral" -> "Bio Coco/Cocco/Kokos".
- neutre_subtitle : "sans odeur / sem odor / inodore / sin olor / geruchlos" -> "delicat parfum noix de coco / delicado aroma de coco / delicato profumo di cocco / delicado aroma de coco / zarter Kokosduft".
- La cle "neutre_" est EXCLUSIVE a la page Coco (les autres saveurs ont leur propre prefixe : framboise_, monoi_, vanille_).
- VIGILANCE : "sans odeur" existe AUSSI dans framboise_subtitle et vanille_subtitle -> le remplacement a ete cible UNIQUEMENT sur neutre_subtitle (valeur complete). Framboise/Vanille laisses intacts (verifie).

### A FAIRE — memes corrections a valider pour Framboise et Vanille
Ces deux fiches ont la MEME incoherence (titre "Bio Neutre X" + subtitle "sans odeur", contradictoire avec une saveur) :
- framboise_title (5 langues) : "Gel Lubrifiant Glisse Bio Neutre Framboise..." / "...Neutro Framboesa..." / "...Neutro Lampone..." / "...Neutro Frambuesa..." / "...Neutral Himbeere...". Le mot "Neutre/Neutro/Neutral" est a retirer ou remplacer.
- framboise_subtitle (5 langues) : contient "sans odeur / sem odor / inodore / sin olor / geruchlos" -> a remplacer par une mention parfum framboise.
- vanille_title (5 langues) : "...Bio Neutre Vanille..." / "...Neutro Baunilha..." / "...Neutro Vaniglia..." / "...Neutro Vainilla..." / "...Neutral Vanille...". Idem retirer "Neutre".
- vanille_subtitle (5 langues) : "sans odeur..." -> mention parfum vanille.
DECISION PRODUIT A VALIDER AVEC JLShop06 : garder "Neutre" ou le retirer du titre ? (pour Coco on a remplace Neutre -> Coco). Meme logique conseillee : framboise_title -> "Bio Framboise", vanille_title -> "Bio Vanille".
METHODE : cibler la VALEUR COMPLETE de chaque cle (framboise_subtitle / vanille_subtitle) car "sans odeur" est partage entre plusieurs produits ; ne PAS faire de remplacement global.

==================================================
SESSION SEO/GEO - MAJ 2026-07-07 (Claude)

CONTEXTE : demande basee sur le rapport SEOptimizer. IMPORTANT : le "C+" vu par l'utilisateur n'etait PAS la note globale mais UNIQUEMENT la categorie GEO. Detail reel du rapport (genere le 7 juillet 10h30 UTC) :
- Referencement sur page (On-Page SEO) : A+
- GEO : C+
- Links : F  <= plus gros point faible
- Utilisabilite : A-
- Performance : A+
Conclusion : le travail precedent a bien porte (On-Page A+, Perf A+). Priorite du jour = corriger le "F" en Links.

DIAGNOSTIC LINKS (fait via fetch + DOMParser sur le live) :
- Accueil : 38 liens internes, 36 vers des fiches produit -> l'accueil est BIEN maille (mais liens sur images = texte d'ancre VIDE).
- Fiches produit : chaque fiche ne pointe QUE vers l'accueil (index.html + ancres #) et les pages legales. AUCUNE fiche ne pointe vers une AUTRE fiche = schema "en etoile" qui plombe le score Links.
- SOLUTION retenue : ajouter un bloc "Vous aimerez aussi" (section.related-products) en bas de chaque fiche, AVANT le <footer>, avec 4 liens internes ANCRES (texte = nom du produit) vers des produits de la meme categorie (completes par affinite si categorie trop petite). Style inline sobre dore/Georgia (bordure #caa86a, boutons arrondis).

--- BLOCAGES DEPLOIEMENT (verifies, RAS) ---
1. Webhook GitHub->Vercel : ACTIF. Projet Vercel "lesjardinsenchantes" (equipe greentherapy06s-projects) connecte a JLShop06/Les-Jardins-Enchantes depuis le 12 mai, events deployment + repository_dispatch ON. Preuve : commit auto-deploye statut "Pret". (La section "Deploy Hooks" est vide mais c'est normal : ce sont des URLs de declenchement manuel OPTIONNELLES, pas le webhook d'auto-deploiement.)
2. Password Protection Vercel : OFF (Authentification Vercel OFF ; Protection par mot de passe indisponible = feature Pro 150$/mois, plan actuel = Hobby). Site public confirme : HTTP 200, pas de mur SSO.
3. llms.txt : DEJA present a la racine (HTTP 200, structure OK : marque, description, categories ##, liens produits). RAS.

--- FAIT (committe sur main) ---

JSON-LD (schema.org) :
- le-flateur.html : ajout JSON-LD Product + BreadcrumbList (dans le <head>, avant </head>). C'est la SEULE fiche avec JSON-LD ajoute cette session (voir "RESTE A FAIRE").
- Etat JSON-LD global constate (scan des 32 URLs sitemap) : accueil = Store (deja present) ; 6 fiches gel bio = Product (deja present : caramel, neutre/coco, framboise, monoi, sans_parfum, vanille) ; le-flateur = Product+Breadcrumb (ajoute aujourd'hui) ; les 23 autres fiches = AUCUN JSON-LD ; AUCUNE page (sauf le-flateur) n'a de BreadcrumbList.

Maillage interne - bloc "Vous aimerez aussi" (LOT TEST 6 fiches, 4 liens ancres chacune) :
- le-flateur.html -> Magnum Opus, Indiana, My Duchess, Cockring Marry Me
- pink-star.html -> Cannabis Orgie, Hemp Intense Orgasm, Sex On The Beach, Chocolat Orgie
- Magnum-Opus-vibro.html -> Indiana, My Duchess, Le Flateur, Cockring Marry Me
- monster-pussy-strocker.html -> Red Dolls Energy, Cannabis Orgie, Hemp, Sex On The Beach
- cockring-vibrant-saturn-hueman.html -> Cockring Marry Me, Anneau Love Connection, Magnum Opus, Indiana
- Deguisement-Bunny.html -> Enseignante, Etudiante, Infirmiere, My Duchess
=> ~24 nouveaux liens internes contextuels crees.

--- A FAIRE - PROCHAINE SESSION ---

A. ATTENDRE / RELANCER LE SCAN SEOptimizer, puis VERIFIER la note "Links" (attendu : F -> C/B grace au maillage). Si l'effet est confirme, derouler le reste. Regarder le DETAIL de la section Links pour distinguer liens internes (on les corrige) vs backlinks externes (ne se corrigent PAS par le code : annuaires, partenaires, reseaux, temps).

B. Bloc "Vous aimerez aussi" sur les 24 fiches RESTANTES (meme methode, meme style) :
   Cockrings/vibros/etc : Cockring-vibrant-Marry-Me-Wooomy, anneau_vibrant_telecommande, vibro-rechargeable-Indiana, black-empire-my-duchess, red-dolls-energy-pleasure, Plug-Anal-Rosy-Gold.
   Deguisements : deguisement-enseignante, deguisement-etudiante, deguisement-infirmiere-sexy.
   Gels : gel_cannabis_orgie, hemp-intense-orgasm, dual-vibe-sex-on-the-beach, lubrifiant_eau_lube_tube_chocolat_orgie, lubrifiant_eau_lube_tube_fraise_orgie, lubrifiant_eau_tube_barbe_a_papa, orgie-pinacolada, pink-star-choco-fraise, pink_star_sucette_cerise.
   Gels bio : gel_lubrifiant_bio_neutre_divine_xtases (Coco), _vanille_, _framboise_, _monoi_, _caramel_beurre_sale_, _sans_parfum_.
   (Note : robe-longue-noire-argentee et mini-robe-noire ont un footer different et ne sont pas dans le sitemap -> a traiter a part si voulu.)

C. JSON-LD Product + BreadcrumbList sur les 23 fiches qui n'en ont pas (donnees deja extraites : nom H1, description meta, prix, image .webp, marque, categorie, canonical). Ajouter aussi BreadcrumbList aux 6 fiches gel bio (qui ont Product mais pas Breadcrumb) et a l'accueil (qui a Store mais pas Breadcrumb). Tout en availability=InStock (a confirmer si rupture).

D. GEO (remonter le C+) : enrichir le JSON-LD Store de l'accueil avec aggregateRating (si avis clients dispo) et sameAs (reseaux sociaux). Reformuler le H2 qui fait doublon avec le nouveau H1.

METHODE FIABLE (validee cette session) :
- Extraire le HTML PROPRE de l'editeur : parcourir l'objet JSON embarque PARSE (script[type=application/json]) et prendre la string qui contient <!DOCTYPE...</html>. NE PAS faire JSON.stringify(objet) + regex : ca reintroduit les echappements \n et \" (bug rencontre au 1er essai, HTML aplati -> il a fallu recharger l'editeur).
- Inserer le bloc AVANT lastIndexOf('<footer'). Valider AVANT collage : related=1, footer=1, doctype=1, </html>=1, pas de \n litteral, fin = </footer></body></html>.
- Coller : clic editeur -> Ctrl+A -> ClipboardEvent('paste') avec DataTransfer text/plain sur .cm-content ; verifier defaultPrevented=true ; Ctrl+End + screenshot pour controle visuel.
- ROLES : Claude fait tout SAUF le clic "Commit changes" (JLShop06).
- Verifier via API GitHub (Accept: application/vnd.github.raw, ?ref=main), PAS via raw.githubusercontent.com (cache CDN en retard).
- NOTE OUTIL : le filtre de sortie JS masque les chaines contenant des URLs/cookies ("[BLOCKED]") -> ne renvoyer que des compteurs/booleens, jamais le HTML brut.

RAPPEL PRIORITE SEO (dit a l'utilisateur) : un score SEOptimizer eleve ne fait pas vendre en soi ; regarder aussi Search Console (trafic reel, positions, conversions). Le "F" Links interne se corrige par le code (en cours) ; les backlinks externes demandent du temps/hors-code.


==================================================
SESSION STRIPE (SUITE) + BUGS PANIER + BANNIÈRE LIVRAISON — MAJ 2026-07-09 (Claude)
==================================================

RÔLES : Claude fait TOUT (édition, collage éditeur, vérifications API) SAUF le clic "Commit changes" (JLShop06).

--- FAIT (committé sur main) ---

1) CHAMP E-MAIL MANQUANT DANS LE PANIER (cart.js) — CORRIGÉ
Problème : au clic "PAYER", message "veuillez rentrer une adresse valide" et AUCUN champ pour saisir l'e-mail.
Cause : un #cart-modal codé EN DUR dans le HTML des pages (sans champ e-mail ni récap détaillé). ensureCartModal() voyait le modal déjà présent et faisait return -> ne créait jamais la version complète.
Fix : nouvelle fonction injectCartExtras() dans cart.js. Si le modal existe déjà, elle injecte (avant le bouton PAYER) : un conteneur #cart-summary + le champ #cart-email (type email, requis). Appelée aussi au début de showCart(). Testé live : le champ e-mail s'affiche au-dessus de PAYER.

2) BUG AFFICHAGE SOUS-TOTAL = 0,00 € (cart.js) — CORRIGÉ
Problème : le récap affichait "Sous-total 0,00 €" et donc "Livraison 6,90 €" même avec un panier à 229 € (livraison qui aurait dû être offerte).
Cause : le code faisait Number(cartTotal) où cartTotal est l'ÉLÉMENT DOM (pas sa valeur) -> NaN -> 0. Bug présent en DOUBLE (fichier dupliqué, voir point 3).
Fix : remplacé par Number(total) (la variable qui contient la somme des prix). Testé : sous-total 229,85 € -> livraison "Offerts".
NB IMPORTANT : ce bug n'affectait QUE l'affichage. Le montant réellement facturé est calculé côté serveur (checkout.js) avec les vrais prix Stripe -> jamais faux pour le client.

3) FICHIER cart.js ENTIÈREMENT DUPLIQUÉ — CORRIGÉ (crash total)
Problème : plus rien ne marchait (ni "ajouter au panier", ni ouverture du panier).
Cause : cart.js contenait DEUX copies complètes du code (toutes les fonctions + variables écrites 2x) -> SyntaxError "Identifier 'CART_VERSION' has already been declared" (ligne 417) -> tout le fichier plantait.
Fix : suppression de la copie en double. Fichier passé de 746 -> 408 lignes. Vérifié : CART_VERSION 1x, showCart 1x, addToCart 1x, injectCartExtras 1x, syntaxe OK (new Function), accolades 79/79. Les 2 correctifs ci-dessus (points 1 et 2) sont conservés dans la copie gardée.
LEÇON : la duplication préexistait ; toujours vérifier les doublons top-level (const/function) avant de committer cart.js.

4) BANNIÈRE + MESSAGES "LIVRAISON GRATUITE" -> "LIVRAISON OFFERTE DÈS 75 €" — FAIT
Demande : retirer "livraison gratuite/offerte" SANS condition de tout le site, remplacer par "Livraison offerte dès 75 € d'achat".
i18n.js (committé) : 30 remplacements (6 clés x 5 langues fr/pt/it/es/de). Clés modifiées :
  - banner_livraison (bandeau d'annonce, 5 langues) -> ex FR "✦ LIVRAISON OFFERTE DÈS 75 € D'ACHAT ✦"
  - footer_livraison (5 langues)
  - arg_livraison (5 langues)
  - home_seo_intro_p3, home_hero_desc, home_seo_why_text (mentions dans le texte SEO, 5 langues)
  Traductions : PT "a partir de 75 €", IT "da 75 €", ES "a partir de 75 €", DE "ab 75 €".
  Vérifié : 4238 lignes (inchangé), accolades 111/111, 5 bannières "DÈS/AB/DA 75", 0 mention non conditionnelle restante.
index.html (committé) : 7 remplacements des textes STATIQUES (fallback + SEO) : bandeau .announce-bar, span arg_livraison, .seo-intro__text, .hero-desc, .seo-why__text, .footer-shipping ET le JSON-LD schema.org (description Store). Vérifié : 396 lignes, 7x "offerte dès 75", 0 gratuite.
NB : le bandeau (.announce-bar) utilise data-i18n="banner_livraison" -> l'affichage dynamique dans les 5 langues vient de i18n.js ; le texte statique d'index.html sert de fallback/SEO.

--- RESTE À FAIRE ---

A) BANNIÈRE "LIVRAISON OFFERTE DÈS 75 €" SUR LES FICHES PRODUITS + PANIER (demande initiale, point 3) — NON FAIT
Constat (scan live le-flateur / pink-star / Magnum-Opus) : les 32 fiches produits N'ONT PAS de bandeau d'annonce (.announce-bar / banner_livraison). Le message "Livraison offerte dès 75 € d'achat" n'apparaît donc QUE sur l'accueil.
À faire : ajouter la bannière (idéalement le même bloc .announce-bar avec data-i18n="banner_livraison" que sur l'accueil) en haut des 32 fiches produits, + éventuellement dans le panier. Comme la clé banner_livraison est déjà traduite (5 langues), il suffit de câbler le bloc HTML sur chaque fiche. (Bonne nouvelle : les fiches n'ont AUCUNE mention "gratuite" à corriger, 0 hardcodée.)
Rappel demande : NE PAS afficher le tarif 6,90 € dans la bannière/marketing ; le 6,90 € n'apparaît QUE dans le récap du panier quand < 75 €.

B) TESTS LIVE (après redéploiement Vercel — faire Ctrl+Shift+R pour vider le cache) :
  - Panier : ajouter au panier + ouvrir le panier fonctionnent (fix crash cart.js).
  - Champ e-mail visible dans le panier, clic PAYER OK.
  - Panier >= 75 € -> récap "Livraison : Offerts" ; < 75 € -> "6,90 €".
  - Bandeau affiche "Livraison offerte dès 75 €" dans les 5 langues.
  - Parcours Stripe complet : remise 10% 1re commande (e-mail neuf), pas de remise si e-mail déjà utilisé, montant facturé = montant attendu.

C) VIGILANCE CONFIG STRIPE (à vérifier par JLShop06, non touché par Claude car sensible) :
  - Variable d'env STRIPE_WEBHOOK_SECRET configurée sur Vercel.
  - Endpoint webhook (checkout.session.completed) actif dans le dashboard Stripe (verrouille la remise après paiement).

--- NOTES MÉTHODE ---
- Coller dans l'éditeur GitHub : TOUJOURS vider complètement avant (Ctrl+A + Delete, RÉPÉTER 2x et vérifier "Enter file contents here"), sinon le nouveau contenu s'ajoute APRÈS l'ancien (résidu constaté sur i18n.js et cart.js). Vérifier la fin du fichier (Ctrl+End) après collage.
- Vérifier via API GitHub (Accept: application/vnd.github.raw), PAS raw.githubusercontent (cache CDN).
- Remplacements ciblés par valeur COMPLÈTE (pas de remplacement global de "gratuit" seul) pour éviter les effets de bord.
