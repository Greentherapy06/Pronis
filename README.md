Les Jardins Enchantés — Suivi i18n (FR/PT/IT/ES/DE)

FR = langue par défaut. Réutiliser i18n.js existant. NE PAS créer de nouveau système. Ordre des langues dans i18n.js : fr, pt, it, es, de (ATTENTION : pas fr/pt/es/it/de — sinon inversion ES/IT). RÔLES : Claude fait TOUT (fetch, traduction, insertion, validation, collage dans l'éditeur, ouverture du dialogue de commit + message). L'utilisateur (JLShop06) clique uniquement sur "Commit changes".

==================================================
ÉTAT GLOBAL (mis à jour)
==================================================
Étapes 1 à 4 : TERMINÉES & déployées (moteur i18n, sélecteur de langue header, header unifié 36 pages, footer multilingue 34 pages + panier).
Étape 5 (traduction CONTENU des 33 fiches produits) : TERMINÉE — toutes les fiches produits réelles sont câblées (i18n.js + HTML).
Modal 18+ "Accès Réservé" (compliance.js) : TERMINÉ & multilingue (5 langues).

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

--- RESTE À FAIRE (priorité) ---
1) index.html — CÂBLER les data-i18n (PAS encore committé). 53 attributs à poser :
   - .announce-bar -> banner_livraison (clé existante)
   - .hero-baseline -> home_hero_baseline ; .hero-desc -> home_hero_desc
   - .seo-intro__title -> home_seo_intro_title ; les 3 .seo-intro__text -> home_seo_intro_p1/p2/p3 (ordre DOM)
   - 3 .seo-col__title -> home_seo_grid_t1/t2/t3 ; 3 .seo-col__text -> home_seo_grid_p1/p2/p3
   - .seo-why__title -> home_seo_why_title ; .seo-why__text -> home_seo_why_text
   - 6 .cat-section__title -> home_cat_1..6 (ordre DOM)
   - 31 <h3 itemprop="name"> -> home_prod_1..31 (ordre DOM)
   - <span> SEO du footer ("Boutique Sextoys & Gel Lubrifiant Intime France & Europe") -> home_footer_seo
   MÉTHODE FIABLE TESTÉE : insertion par remplacement de chaîne sur le HTML brut (PAS DOMParser re-serialize). applyTranslations() bascule en innerHTML SI la valeur contient une balise sinon textContent -> <strong> OK dans les valeurs. ATTENTION : "Boutique Sextoys" apparaît AUSSI dans og:title/twitter -> ne câbler QUE le <span> du footer (dernière occurrence, après "Les Jardins Enchantés –").

2) COMPOSANTS PARTAGÉS (toutes les pages) — non fait :
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
