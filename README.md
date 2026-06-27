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
1) PAGES LÉGALES — traduire le contenu (5 langues) — EN COURS (3/5 fait) :
    - cgv.html ✅ FAIT (70 éléments cgv_0..69, 2 commits Art.1-9 + Art.10-16 ; testé live FR/PT/DE OK)
   • confidentialite.html ✅ FAIT (53 éléments confid_0..52, RGPD ; i18n.js 265 clés + HTML câblé ; testé live FR/DE/IT OK)
   • cookies.html ✅ FAIT (39 éléments cookies_0..38 ; i18n.js 195 clés + HTML câblé ; testé live FR/DE/ES OK)
    - mentions-legales.html ⬜ À FAIRE
    - retractation.html ⬜ À FAIRE
   Méthode : même process que les fiches (préfixes proposés : cgv_, confid_, cookies_, mentions_, retract_). Attention au volume → découper par page, valider accolades 33/33 à chaque commit. Vérifier les éléments à NE PAS traduire (dates, adresses, n° SIRET, raison sociale).

2) VÉRIFICATION COMPLÈTE LIVE (non faite faute de temps + rate limit API) :
   - Re-scanner les 32 fiches produits (title data-i18n + clés présentes dans i18n.js).
   - Le scan automatique précédent a donné des FAUX POSITIFS "title not wired" à cause du rate limit 403 de l'API. Refaire via raw.githubusercontent ou le JSON embarqué de l'éditeur, pas l'API directe en rafale.
   - Tester le modal 18+ en live dans les 5 langues APRÈS expiration du cache navigateur.
   - Re-vérifier visuellement fiches saturn et enseignante (cache edge Vercel signalé précédemment).

3) OPTIONNEL : étendre applyTranslations() à title/placeholder/alt (SEO + accessibilité).

==================================================
PROCHAINE ACTION RECOMMANDÉE : RESTE 2 PAGES LÉGALES → (1) mentions-legales.html préfixe mentions_  (2) retractation.html préfixe retract_. Process par page : extraire contenu via éditeur GitHub (payload.codeViewEditRoute.editInfo.content) → traduire FR/PT/IT/ES/DE (données fixes NON traduites : SIRET, adresse, email, TVA, articles de loi, dates, montants, noms propres ; HTML inline conservé) → insérer dans i18n.js après dernier ancrage page précédente (ORDRE fr/pt/it/es/de, accolades 36/36) → câbler data-i18n dans HTML (EXCLURE widget « VOTRE PANIER ») → tester live → MAJ README. État i18n.js : cgv 350 + confid 265 + cookies 195 clés.
==================================================
