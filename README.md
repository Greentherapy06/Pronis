Les Jardins Enchantés — Suivi i18n (FR/PT/IT/ES/DE)

## SESSION BLOG SEO — 24/07/2026

[MAJ 24/07/2026 – session i18n/hreflang blog] hreflang ajouté aux 3 articles (blog.html l'avait déjà) → les 4 pages blog ont 6 hreflang. menu_blog confirmé présent ×5 dans i18n.js. RESTE optionnel : traduction du CONTENU rédactionnel des articles + og:image dédiée par article + recrawl sitemap Search Console.

[MAJ 24/07/2026 – session NOUVEL ARTICLE aromatisé] 4e ARTICLE DE BLOG créé et committé sur main : blog-gel-lubrifiant-aromatise.html — mot-clé principal "gel lubrifiant aromatisé" (~914 mots ; intro + 5 H2 + bloc précaution + CTA + FAQ 4 questions ; JSON-LD Article + FAQPage + BreadcrumbList ; 6 hreflang fr/pt/it/es/de + x-default ; canonical propre). Construit sur le gabarit blog-gel-lubrifiant-bio.html (head icônes/manifest/CSS .blog-* + header + footer + cart modal verbatim). Vérifié LIVE via API : len 20824, doctype=1, h1=1, ld+json=3, hreflang=6, canonical=1, endsOk. INFOS PRODUIT RÉELLES utilisées (relues sur les fiches, NON inventées) : Pink Star (Sangria/Fraise-Chocolat/Cerise) 14,95€/60ml base eau comestible sans paraben compatible préservatifs + sextoys ; Orgie (Chocolat/Fraise/Barbe à papa) 12,90€/tube 100ml base eau embrassable/sexe oral compatible sextoys ; Orgie Piña Colada 50ml sans paraben. Contraste rappelé correctement : gels bio Divine Xtases = corps gras => PAS compatibles préservatifs (base eau uniquement avec préservatif). CTA pointe vers #gels-aromatises (ancre à vérifier/créer sur l'accueil). Les 3 liens croisés vers les articles existants sont présents DANS ce nouvel article.

>>> RESTE À FAIRE POUR CE 4e ARTICLE (workflow "nouvel article" NON terminé — 3 étapes restantes) :
  1. blog.html : ajouter la CARTE (tag/titre/desc/lien) du 4e article + l'ajouter au JSON-LD ItemList (passer de 3 à 4 items). PAS ENCORE FAIT.
  2. sitemap.xml : ajouter l'URL https://les-jardins-enchantes.com/blog-gel-lubrifiant-aromatise.html (priority 0.7, changefreq monthly, lastmod 2026-07-24) — passera de 38 à 39 URLs. PAS ENCORE FAIT.
  3. LIENS CROISÉS ENTRANTS : ajouter dans les 3 articles existants (blog-gel-lubrifiant-bio, blog-lubrifiant-eau-vs-bio, blog-choisir-premier-sextoy) un lien vers le nouvel article aromatisé (dans leur conclusion). PAS ENCORE FAIT (les liens SORTANTS depuis le nouvel article sont déjà en place).
  OPTIONNEL : vérifier/créer l'ancre #gels-aromatises sur index.html (sinon le CTA retombe en haut de page) ; og:image dédiée.


RÔLES : Claude fait TOUT (fetch gabarit, rédaction, construction fichier, collage éditeur) SAUF le clic "Commit changes" (JLShop06).

### FAIT (tout committé sur main)

- 3 ARTICLES DE BLOG créés (~1000 mots chacun : intro + 4 paragraphes + conclusion + FAQ ; JSON-LD Article + FAQPage + BreadcrumbList sur chaque) :
  1. blog-gel-lubrifiant-bio.html — mot-clé principal "gel lubrifiant bio"
  2. blog-lubrifiant-eau-vs-bio.html — mot-clé "lubrifiant base eau ou bio / eau vs bio"
  3. blog-choisir-premier-sextoy.html — mot-clé "choisir premier sextoy / sextoy débutant"
- MÉTHODE : chaque article réutilise le gabarit du site (head icônes/manifest/viewport + CSS site + header + footer + cart modal verbatim), avec un bloc CSS ".blog-*" ajouté (défini dans blog-gel-lubrifiant-bio.html, réutilisé par les autres). Construction en JS (fetch du gabarit -> remplacement head SEO + injection contenu article) puis collage ClipboardEvent sur .cm-content. Validé : 1 seul DOCTYPE, 1 h1, 3 ld+json, se termine par </html>.
- INFOS PRODUIT RÉELLES (relues sur les fiches, NE PAS réinventer) :
  * Gels bio Divine Xtases (coco, vanille, framboise, monoï, caramel beurre salé, neutre/sans parfum) = 19,90 € / 100 ml pompe. Formule CORPS GRAS : cire d'abeille, huile de graines de tournesol, beurre de karité, aloe vera, tocophérol (vit. E). Certifié Bio Organic, fabriqué en France, Yuka 100/100. **NON compatibles préservatifs** (corps gras fragilisent le latex). Compatibles majorité des sextoys.
  * Lubrifiants base EAU : Pink Star (compatible préservatifs indiqué), Orgie chocolat/fraise/barbe à papa/piña colada (base eau, compatibles sextoys). => avec préservatif : base eau uniquement.
  * Sextoys cités : Indiana (Litolu, vibro USB silicone IPX7), Love Connection (Xocoon, anneau vibrant couple télécommandé), Magnum Opus (Toy Joy), Red Dolls Energy Pleasure (masturbateur).
- PAGE PILIER blog.html créée : liste les 3 articles en cartes (tag/titre/desc/lien) + JSON-LD Blog + ItemList (3 items) + BreadcrumbList.
- MENU : lien "BLOG" (data-i18n="menu_blog") ajouté dans index.html (nav .cat-nav) -> pointe vers blog.html. Présent uniquement sur index.html.
- SITEMAP : les 4 pages ajoutées à sitemap.xml (38 URLs total, priority 0.7, changefreq monthly/weekly, lastmod 2026-07-24).
- MAILLAGE INTERNE CROISÉ : les 3 articles se lient mutuellement (dans conclusions) + CTA vers la boutique (#gel-lubrifiant-bio / #sextoys). blog.html <-> articles <-> boutique.

### RESTE À FAIRE

- i18n : clé menu_blog dans i18n.js (×5 fr/pt/it/es/de) — ✅ FAIT (valeur "Blog" identique dans les 5 langues, volontaire : mot international ; câblée sur le lien BLOG du menu).
- i18n : traduire le CONTENU des 4 pages blog (article×3 + blog.html) dans les 5 langues si souhaité — actuellement FR uniquement (pas de data-i18n sur le contenu blog).
- hreflang : ✅ FAIT (24/07/2026) — les 4 pages blog (blog.html + 3 articles) ont chacune 6 balises hreflang (fr/pt/it/es/de + x-default) insérées après le canonical, sur le modèle d'index.html. Crawlables grâce au patch getLang() qui lit ?lang=xx. Vérifié LIVE via API GitHub (hreflang=6, canonical=1, doctype=1 sur les 4).
- og:image : les 3 articles + blog.html utilisent tous l'image du gel coco par défaut -> créer une image dédiée par article serait mieux pour le partage social.
- Search Console : resoumettre / laisser Google recrawler le sitemap (les 4 URLs blog doivent être indexées).
- Prochains articles suggérés (élargir les mots-clés) : "cockring : à quoi ça sert" (-> #cockrings). [FAIT le 24/07 : "gel lubrifiant aromatisé" = blog-gel-lubrifiant-aromatise.html, mais workflow nouvel article à finir : blog.html + sitemap + liens croisés entrants — voir note en tête.]
- Quand un nouvel article est ajouté : penser à (1) l'ajouter à blog.html (carte + ItemList JSON-LD), (2) l'ajouter au sitemap.xml, (3) créer les liens croisés depuis les articles existants.

==================================================


## SESSION BACKLINKS — TRUSTPILOT (22 juillet)

Objectif du jour : travailler les LIENS (note F sur SEOptimer = manque de backlinks externes ; le maillage interne est deja fait).
Plateforme choisie (la plus simple + rentable) : Trustpilot.

ETAT :
- Compte Trustpilot Business cree par JLShop06 (email de connexion : jlshop06190@gmail.com).
- Verification du domaine : balise meta posee dans le <head> de index.html, commitee et LIVE sur le site.
  ID balise : trustpilot-one-time-domain-verification-id = e101ab76-c3bb-4702-b633-a05c4e7c1368
  Verifie live : fetch renvoie 200, balise presente 1 fois, bon ID.

BLOCAGE (non resolu, cote Trustpilot) :
- Impossible de finaliser la verification : leur interface plante a chaque clic avec "Une erreur technique est survenue".
- Cause identifiee dans la console Trustpilot : bug React de leur cote -> NotFoundError: Failed to execute insertBefore on Node (chunks 961/902).
- Confirme aussi en manuel par JLShop06 : chaque bouton declenche l erreur. Ce n est PAS un souci de notre site ni anti-bot.
- Note : pas d email @les-jardins-enchantes.com dispo (seulement Gmail), donc methode "email du domaine" indisponible.

A REPRENDRE PLUS TARD (quand l interface Trustpilot refonctionnera) :
- Retenter la verification balise meta (le tag est deja live, rien a refaire cote site) ; OU
- Methode DNS (ajouter un TXT dans Vercel) ; OU
- Methode fichier (deposer un fichier de verif a la racine via GitHub).
- Ensuite : completer le profil (logo, description longue/courte, categorie) pour maximiser le backlink.

PROCHAINES PLATEFORMES BACKLINKS (ordre README) : Pages Jaunes, puis annuaires gratuits (Yelp, Cylex, Hoodspot, Tuugo, Justacote), bios sociales, Pinterest, blogs.

---


==================================================
SESSION SITEMAP + GOOGLE BUSINESS — TERMINÉE — MAJ 2026-07-13
==================================================
RÔLES : Claude fait TOUT (fetch éditeur, extraction, construction, collage) SAUF le clic « Commit changes » = JLShop06 seul.

--- ITEM 1 : sitemap.xml corrigé (committé + vérifié via API + live 200) ---
- Passé de 32 à 34 URLs.
- Toutes les dates <lastmod> mises à jour au 2026-07-13.
- 2 fiches produits AJOUTÉES : mini-robe-noire.html et robe-longue-noire-argentee.html.
- Les 6 gels CONSERVÉS en .html (cohérence avec les balises canonical des fiches qui pointent en .html ; option "sans .html" abandonnée pour ne pas devoir aussi éditer tous les canonical).

--- ITEM 2 : sitemap soumis dans Search Console ---
- Propriété de type domaine (sc-domain:les-jardins-enchantes.com) -> soumission avec l'URL COMPLETE obligatoire (sitemap.xml seul = "Adresse de sitemap incorrecte").
- Statut affiché juste après = « Impossible de récupérer le sitemap » : NORMAL/transitoire. Fichier live vérifié OK (200, application/xml, 34 URLs). Doit passer à « Réussite » sous 24-48h. Si rouge après 3-4 jours -> vérifier robots.txt / en-têtes HTTP (Googlebot).

--- ITEM 3 : fiche Google Business vérifiée (RAS, tout bon) ---
- Fiche bien gérée par le compte. Catégorie « Boutique érotique à Roquebrune-Cap-Martin » OK.
- Adresse 49 Chem. du Vallonet, 06190 Roquebrune-Cap-Martin OK. Horaires « Ouvert 24h/24 » OK. Description présente OK.
- Téléphone +351 965 020 889 (portugais) : CONSERVÉ volontairement (décision JLShop06).
- Réseaux sociaux : NON liés à la fiche (comptes pro Facebook ~26k / Instagram ~28k mais nom différent de la boutique -> éviter la confusion client).
- Avis : aucun pour l'instant (normal). Utiliser « Demander des avis » quand premiers clients.

--- À SURVEILLER (prochains jours) ---
- Search Console > Sitemaps : vérifier le passage au vert sous 24-48h.
- Indexation des fiches produits (à contrôler plus tard).
- Horaires jour férié 14 juillet (probablement rien à changer car 24h/24).


==================================================
SESSION JSON-LD (ITEM 3 + ITEM 1) — TERMINÉE — MAJ 2026-07-11
==================================================
OBJECTIF (atteint) : JSON-LD schema.org (Product + BreadcrumbList) dans le <head> de CHAQUE fiche produit (avant </head>) + enrichissement du JSON-LD Store de l'accueil.
RÔLES : Claude fait TOUT (fetch éditeur, extraction données RÉELLES, construction, collage, vérifs). SEUL JLShop06 clique "Commit changes". NE RIEN INVENTER.

--- ITEM 3 : TERMINÉ (14/14 fiches de la liste) ---
Les 3 dernières fiches committées cette session (brand / prix / SKU / catégorie) :
12. red-dolls-energy-pleasure.html (Alive, 19,99€, LJE-REDDOLLS, Masturbateurs)
13. robe-longue-noire-argentee.html (J Lingerie, 79,95€, LJE-ROBELONGUE, Lingerie — footer sans div.cart, OK)
14. vibro-rechargeable-Indiana.html (Litolu, 29,90€, LJE-INDIANA, Vibromasseurs & Stimulateurs)

--- ITEM 1 : TERMINÉ (JSON-LD accueil index.html) ---
Le JSON-LD Store de l'accueil a été enrichi (Store existant conservé intact, name/description/areaServed non modifiés) :
- sameAs ajouté (3 URLs canoniques PROPRES, paramètres de tracking retirés) :
  * Facebook : https://www.facebook.com/Gladiator.Italia06 (résolu depuis le lien /share/ ; page "Gladiator Napoli" — confirmé par JLShop06 comme compte officiel de la boutique)
  * Instagram : https://www.instagram.com/gladiator_italia
  * TikTok : https://www.tiktok.com/@gladiatoritalia
- BreadcrumbList ajouté (Accueil -> /).
- aggregateRating : OMIS volontairement (pas d'avis clients à déclarer — décision JLShop06 ; ne pas inventer de faux avis, risque de pénalité Google).

--- VÉRIF FINALE : FAITE (scan des 32 fiches produits via raw GitHub) ---
Résultat : 31/32 fiches PARFAITES (ld=2, product=1, breadcrumb=1, listitem=3, doctype=1, head=1). 0 doublon DOCTYPE dans tout le dépôt.
1 fiche oubliée détectée et corrigée : pink-star.html ("Pink Star Sangria 60ml", Pink Star, 14,95€, LJE-PINKSTARSANGRIA, Gels aromatisés) — elle n'était PAS dans la liste des 14 (à ne pas confondre avec pink-star-choco-fraise et pink_star_sucette_cerise). JSON-LD Product + BreadcrumbList ajouté et committé.
=> DÉSORMAIS : les 33 fiches produits ont toutes Product + BreadcrumbList. 0 doublon DOCTYPE.

--- VÉRIF LIVE + TEST GOOGLE RICH RESULTS : FAIT (2026-07-11) ---
Site en ligne testé (fetch cache:'reload' + outil Google search.google.com/test/rich-results) :
- ACCUEIL : Store (Commerces et services à proximité) VALIDE, BreadcrumbList (Fils d'Ariane) VALIDE, Organisation VALIDE. sameAs (3 réseaux) + BreadcrumbList bien présents en live.
- FICHES PRODUITS testées (red-dolls, pink-star) : "3 éléments valides détectés" -> Fiches de marchand (Product) VALIDE + Fils d'Ariane VALIDE. Seuls des avertissements NON critiques (champs recommandés optionnels : aggregateRating/shipping) -> n'empêchent PAS l'éligibilité aux extraits enrichis.

--- CORRECTION MICRODATA ACCUEIL : FAIT (2026-07-11) ---
PROBLÈME trouvé par le test Google sur l'accueil : "35 éléments dont certains non valides" -> 32 "Extraits de produits" NON valides (erreur critique : "Il faut indiquer offers, review, ou aggregateRating").
CAUSE (pré-existante, PAS liée au JSON-LD de cette session) : les 32 cartes produits de l'accueil étaient balisées en MICRODATA <article itemscope itemtype="https://schema.org/Product"> avec itemprop name/image/PRICE mais SANS itemprop offers -> un prix sans offers est invalide pour Google.
CORRECTIF appliqué (index.html, committé) : retrait des attributs microdata des 32 cartes (itemscope, itemtype Product, et itemprop name/image/price). Choix = option 2 (retirer le balisage Product partiel du listing plutôt que le compléter), car le vrai balisage Product complet vit déjà, valide, sur chaque fiche produit individuelle.
PRÉSERVÉ (vérifié par compteurs) : les 32 <article> restent (affichage identique), data-category ×32 (filtres), data-i18n ×78 (traductions), et le JSON-LD Store+BreadcrumbList+sameAs de l'accueil INTACT (ldjson=2). Aucun impact visuel. delta ≈ -3136 chars.

--- RESTE À FAIRE (léger / auto) ---
1. RE-TESTER l'accueil sur Google Rich Results APRÈS redéploiement Vercel (cache edge non instantané) pour confirmer que les 32 "Extraits de produits" invalides ont disparu et que la page ne montre plus que du valide (Store + Fils d'Ariane + Organisation).
2. (Optionnel, si un jour il y a de vrais avis clients) ajouter aggregateRating au Store de l'accueil ET/OU aux fiches produits (ne JAMAIS inventer de faux avis).

NOTES MÉTHODE (JSON-LD) — rappel pour toute future fiche :
- Extraire le HTML via le <script type=application/json> de l'éditeur (deepFind clé "content", contient <!DOCTYPE). Ne PAS se fier à raw.githubusercontent pour VÉRIFIER un commit récent (cache CDN en retard).
- Product : name, description, image ABSOLUE (encodeURIComponent), sku LJE-XXX unique, brand{name}, offers{url=canonical, EUR, price "X.XX", priceValidUntil 2026-12-31, availability schema.org/InStock, seller Les Jardins Enchantés}, category. BreadcrumbList : pos1 Accueil /, pos2 catégorie / (le site n'a pas de pages catégorie -> pointer vers /), pos3 name+canonical.
- Valider AVANT collage par COMPTEURS : ld=2, product=1, breadcrumb=1, listitem=3, doctype=1, head=1, delta>0, startsOk, endsOk, pas de \n littéral.
- Anti-doublon DOCTYPE : cliquer DANS une ligne de code, Ctrl+A, VÉRIFIER le surlignage complet par screenshot, coller via ClipboardEvent('paste') sur .cm-content (defaultPrevented=true), puis Ctrl+Home (1 seul DOCTYPE) + Ctrl+End (footer unique).

==================================================

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

A) BANNIÈRE "LIVRAISON OFFERTE DÈS 75 €" SUR LES FICHES PRODUITS — EN COURS (19/32 fait le 2026-07-09)
Objectif : insérer le bloc .announce-bar (self-contained, 226 chars, style INLINE + data-i18n="banner_livraison", identique à l'accueil) juste AVANT <header> sur chacune des 32 fiches produits. Le +229 chars par fichier est normal (bloc 226 + retour ligne + indentation).
Rappel : NE PAS afficher le tarif 6,90 € dans la bannière ; le 6,90 € n'apparaît QUE dans le récap panier quand < 75 €.

MÉTHODE PAR FICHIER (à reprendre telle quelle) :
  1. Naviguer sur /edit/main/[FICHIER] (URL-encoder les accents : é=%C3%A9, è=%C3%A8).
  2. JS : fetch index.html via API (Accept: application/vnd.github.raw, cache:reload) pour régénérer le bloc .announce-bar ; extraire le HTML du fichier depuis le <script type="application/json"> de l'éditeur (parser l'objet, trouver la string contenant <!DOCTYPE et </html>) ; construire nw = f.slice(0,hIdx)+block+"\n  "+f.slice(hIdx) où hIdx=indexOf("<header") ; stocker dans window.__new.
  3. VALIDER avant de coller : announce_after=1, banner_after=1, header_after=1, doctype_after=1, starts="<!DOCTYPE html>", ends="</html>", noLiteralNL=true, alreadyAnnounce=false.
  4. Clic éditeur [600,350] → Ctrl+A+Delete x3 (triple clear obligatoire, sinon duplication DOCTYPE constatée sur red-dolls) → paste via ClipboardEvent sur .cm-content avec window.__new → vérifier defaultPrevented=true.
  5. Ctrl+End (fin propre, un seul </html>, footer intact) + Ctrl+Home (un seul <!DOCTYPE ligne 1) via screenshots.
  6. Dire "Prêt à committer" ; JLShop06 clique "Commit changes" et confirme ; passer au fichier suivant. RÔLE : Claude ne clique JAMAIS Commit.
  NB : le filtre de sortie JS bloque les strings contenant des URLs → ne renvoyer QUE des compteurs/booleans.

FAIT (19/32) — committés par JLShop06 :
  1. le-flateur
  2. pink-star
  3. Magnum-Opus-vibro
  4. monster-pussy-strocker
  5. cockring-vibrant-saturn-hueman
  6. Déguisement-Bunny
  7. Cockring-vibrant-Marry-Me-Wooomy
  8. anneau_vibrant_telecommande
  9. vibro-rechargeable-Indiana
  10. black-empire-my-duchess
  11. red-dolls-energy-pleasure
  12. Plug-Anal-Rosy-Gold
  13. deguisement-enseignante
  14. deguisement-etudiante
  15. deguisement-infirmière-sexy
  16. gel_cannabis_orgie
  17. hemp-intense-orgasm
  18. dual-vibe-sex-on-the-beach
  19. lubrifiant_eau_lube_tube_chocolat_orgie

RESTE (13/32) — à reprendre dans cet ordre :
  20. lubrifiant_eau_lube_tube_fraise_orgie
  21. lubrifiant_eau_tube_barbe_a_papa
  22. orgie-pinacolada
  23. pink-star-choco-fraise
  24. pink_star_sucette_cerise
  25. gel_lubrifiant_bio_neutre_divine_xtases
  26. gel_lubrifiant_bio_neutre_vanille_divine_xtases
  27. gel_lubrifiant_bio_neutre_framboise_divine_xtases
  28. gel_lubrifiant_bio_neutre_monoi_divine_xtases
  29. gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases
  30. gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases
  31. mini-robe-noire
  32. robe-longue-noire-argentee
  NB : mini-robe-noire et robe-longue-noire-argentee ont un footer différent et ne sont pas au sitemap, mais font partie des 32 fiches cibles — vérifier que le point d'insertion <header> existe bien avant de coller.

À FAIRE APRÈS LES 32 : vérif finale via API GitHub (announce-bar=1 et banner_livraison présent sur chacune des 32 fiches), puis Tâches B et C ci-dessous.

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


==================================================
SESSION 2026-07-09 (suite) — TÂCHE A TERMINÉE 32/32
==================================================
Reprise de la Tâche A (bannière .announce-bar "Livraison offerte dès 75 €", data-i18n="banner_livraison", insérée juste avant <header> sur chaque fiche produit).

Départ session : 19/32 fiches faites. Fin session : 32/32 fiches faites. TÂCHE A COMPLÈTE.

Fiches traitées cette session (20 -> 32), toutes committées et vérifiées :
  20. lubrifiant_eau_lube_tube_fraise_orgie.html
  21. lubrifiant_eau_tube_barbe_a_papa.html
  22. orgie-pinacolada.html
  23. pink-star-choco-fraise.html
  24. pink_star_sucette_cerise.html
  25. gel_lubrifiant_bio_neutre_divine_xtases.html (variante Coco)
  26. gel_lubrifiant_bio_neutre_vanille_divine_xtases.html
  27. gel_lubrifiant_bio_neutre_framboise_divine_xtases.html
  28. gel_lubrifiant_bio_neutre_monoi_divine_xtases.html
  29. gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html
  30. gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases.html
  31. mini-robe-noire.html (footer différent - <header> bien présent, OK)
  32. robe-longue-noire-argentee.html (footer différent - <header> bien présent, OK)

VÉRIFICATION FINALE (via fetch raw.githubusercontent, cache no-store) : les 32 fiches ont
announce-bar=1, banner_livraison=1, <!DOCTYPE=1, <header>=1. Aucune duplication de document.

INCIDENTS / MÉTHODE :
  - Fiches 21 et 22 : le 1er collage a créé un doublon (l'éditeur n'avait pas été vidé complètement).
    Détecté via Ctrl+Home, corrigé en re-vidant l'éditeur (Ctrl+A + Delete répété jusqu'au placeholder
    "Enter file contents here") avant de recoller. Confirme la note méthode existante.
  - Procédure appliquée pour chaque fiche : régénérer le bloc depuis index.html, extraire le HTML de la
    fiche, insérer le bloc avant <header>, valider les compteurs, vider complètement l'éditeur, coller,
    vérifier début (Ctrl+Home) + fin (Ctrl+End), puis JLShop06 clique Commit.

PROCHAINES ÉTAPES (REPRENDRE ICI) :
  - TÂCHE B : tests live après redéploiement Vercel (voir section B ci-dessus) — Ctrl+Shift+R pour vider le cache,
    vérifier panier, champ e-mail/PAYER, récap livraison >=75€ vs <75€, bandeau dans les 5 langues, parcours Stripe.
  - TÂCHE C : vérification config webhook Stripe — à faire par JLShop06 (sensible, non touché par Claude).


==================================================
SESSION 2026-07-09 (suite 2) — TÂCHE B : TESTS LIVE TERMINÉS
==================================================
Tests réalisés sur le site en production https://les-jardins-enchantes.com (après redéploiement Vercel).

TEST 1 - Panier : OK. Ajout au panier + ouverture du panneau panier fonctionnent, compteur mis à jour,
  notification affichee. Aucun crash cart.js.

TEST 2 - Champ e-mail + PAYER : OK. Champ "Votre e-mail (pour votre commande)" visible dans le panier,
  bouton PAYER present et fonctionnel.

TEST 3 - Recap livraison : OK.
  - Panier 32,90 € (< 75 €) : Livraison 6,90 € + message "Plus que 42,10 € pour la livraison offerte".
  - Panier 98,70 € (>= 75 €) : Livraison "Offerts". Bascule < / >= 75 € correcte.

TEST 4 - Bandeau 5 langues : OK. Cle banner_livraison traduite dans TRANSLATIONS pour fr/pt/it/es/de :
  fr=LIVRAISON OFFERTE, pt=ENTREGA GRÁTIS, it=SPEDIZIONE GRATUITA, es=ENVÍO GRATIS, de=KOSTENLOSER VERSAND.

TEST 5 - Parcours Stripe : OK (redirection + montant verifies, SANS paiement reel).
  - Clic PAYER -> redirection Stripe Checkout OK.
  - Panier test : 3 x Orgie Piña Colada = 98,70 €.
  - Remise "Bienvenue -10% (1re commande)" appliquee = -9,87 € (10% de 98,70, exact).
  - Livraison Gratuite (>= 75 €).
  - Montant total du cote Stripe = 88,83 € (98,70 - 9,87), = montant attendu. OK.
  - E-mail utilise pour le test : e-mail neuf -> remise 1re commande bien appliquee.
  - NON TESTE (necessite paiement reel, non effectue par Claude) : sous-cas "pas de remise si e-mail
    deja utilise". A valider manuellement par JLShop06 avec un e-mail ayant deja passe une commande.
  - Aucune donnee bancaire saisie, aucun paiement valide. Session Stripe quittee sans finaliser.

ETAT : TÂCHE B terminee (sauf sous-cas "e-mail deja utilise" a valider manuellement).

PROCHAINES ÉTAPES (REPRENDRE ICI) :
  - TÂCHE C : verification config webhook Stripe -> a faire par JLShop06 (sensible, non touche par Claude).
  - Valider manuellement le sous-cas Stripe "e-mail deja utilise = pas de remise".


==================================================
SESSION 2026-07-09 (suite 3) — TÂCHE C : WEBHOOK STRIPE VÉRIFIÉ
==================================================
Verification faite par JLShop06 dans le dashboard Stripe (Workbench > Webhooks), constatee sur capture d'ecran.

Destination d'evenement : "Reduction bienvenue - Les Jardins Enchantes" -> STATUT : Actif.
  - URL d'endpoint : https://les-jardins-enchantes.com/api/stripe/webhook
  - Description : Verrouille la reduction de bienvenue apres paiement.
  - Version de l'API : 2024-06-20.
  - Evenement ecoute : checkout.session.completed (1 evenement).
  - Cle secrete de signature (whsec_...) : bien configuree cote Stripe (valeur NON reproduite ici, sensible).
  - Performance : 0 evenement cette semaine (normal, aucun paiement reel finalise pendant les tests).

ETAT : TÂCHE C terminee. Le webhook qui verrouille la remise de bienvenue apres paiement est actif et
  correctement configure.

==================================================
RÉCAPITULATIF GLOBAL — TOUTES TÂCHES TERMINÉES
==================================================
  - TÂCHE A : banniere "Livraison offerte des 75 €" sur les 32 fiches produits -> TERMINEE (32/32).
  - TÂCHE B : tests live (panier, e-mail/PAYER, recap livraison, bandeau 5 langues, parcours Stripe) -> TERMINEE.
  - TÂCHE C : webhook Stripe checkout.session.completed actif -> TERMINEE.

RESTE A VALIDER MANUELLEMENT (non bloquant, necessite un paiement reel) :
  - Sous-cas Stripe "e-mail deja utilise = pas de remise de bienvenue" (a tester par JLShop06 avec un
    e-mail ayant deja passe une commande complete).


=============================================================
TACHE D (TERMINEE) : bandeau promo "-10% premiere commande" dans le header
==================================================
OBJECTIF : afficher "Les Jardins Enchantes vous offre -10% sur votre premiere commande"
dans la zone centrale du header (entre CATEGORIES et LANGUE), sur la page d'accueil
ET toutes les fiches produits. Traduit dans les 5 langues.

CONTRAINTE : Claude fait TOUT sauf le clic Commit (JLShop06 clique Commit).
             Reutiliser i18n.js existant (data-i18n). NE PAS creer de nouveau systeme.

DIV INSEREE (avant <div class="lang-switch") :
  <div class="header-promo" data-i18n="header_promo">Les Jardins Enchantes vous offre -10% sur votre premiere commande</div>

FICHIERS SOCLE -> TERMINES (commites) :
  - i18n.js  : cle header_promo ajoutee dans les 5 langues (ordre fr, pt, it, es, de).
  - style.css: regle .header-promo (couleur or #caa86a, flex:1, center, uppercase, cachee <1100px).
  - index.html (accueil) : div promo inseree. Rendu live verifie OK.

FICHES PRODUITS -> 32/32 TERMINEES (commites).
  Vague finale (fiches 15 a 32), toutes committees avec delta +123 :
  15 gel_lubrifiant_bio_neutre_framboise_divine_xtases  16 monoi  17 sans_parfum
  18 vanille  19 hemp-intense-orgasm  20 le-flateur  21 chocolat_orgie
  22 fraise_orgie  23 barbe_a_papa  24 mini-robe-noire  25 monster-pussy-strocker
  26 orgie-pinacolada  27 pink-star-choco-fraise  28 pink-star  29 pink_star_sucette_cerise
  30 red-dolls-energy-pleasure  31 robe-longue-noire-argentee  32 vibro-rechargeable-Indiana

VERIFICATION FINALE (via API GitHub branche main, pas le CDN raw) :
  33/33 fichiers cibles (32 fiches produits + index.html) conformes :
  header-promo = 1, data-i18n="header_promo" = 1, <!DOCTYPE = 1 pour chacun.
  Aucun bug de duplication (double DOCTYPE) constate.

=> TACHE D COMPLETE. Bandeau promo present sur toute la boutique, i18n 5 langues (fr/pt/it/es/de).
   Deploiement Vercel automatique depuis main.

==================================================
POINT "NEUTRE" FRAMBOISE / VANILLE -> RESOLU
==================================================
Le mot "Neutre" a DEJA ETE RETIRE des fiches produits (framboise et vanille).
Aucune action supplementaire requise sur ce point.


==================================================
SESSION MAILLAGE INTERNE — Bloc "Vous aimerez aussi" — MAJ 2026-07-10
==================================================
OBJECTIF (item 2 du plan Links) : ajouter une section <section class="related-products">
AVANT le <footer> de CHAQUE fiche produit, avec 4 liens internes ANCRES (texte = nom du produit)
vers des produits de MEME categorie (completes par affinite si categorie < 4).
Style inline sobre dore/Georgia (bordure #caa86a, boutons arrondis 24px). Template IDENTIQUE
a la fiche 1 (Cockring-vibrant-Marry-Me-Wooomy) deja committee.

ROLES : Claude fait TOUT (extraction HTML editeur, construction section, collage CodeMirror).
JLShop06 clique UNIQUEMENT sur "Commit changes". 1 commit par fiche.

ETAT VERIFIE EN LIVE (raw github, cache:reload) : 23 fiches FAITES / 9 RESTANTES.

--- 23 FICHES FAITES (bloc related-products present) ---
Cockring-vibrant-Marry-Me-Wooomy, Magnum-Opus-vibro, cockring-vibrant-saturn-hueman,
Deguisement-Bunny, le-flateur, monster-pussy-strocker, pink-star (= les 7 deja faites avant cette session),
PLUS committees cette session : Plug-Anal-Rosy-Gold, anneau_vibrant_telecommande,
black-empire-my-duchess, deguisement-enseignante, deguisement-etudiante,
deguisement-infirmiere-sexy, dual-vibe-sex-on-the-beach, gel_cannabis_orgie,
gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases, gel_lubrifiant_bio_neutre_divine_xtases (Coco),
gel_lubrifiant_bio_neutre_framboise_divine_xtases, gel_lubrifiant_bio_neutre_monoi_divine_xtases,
gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases, gel_lubrifiant_bio_neutre_vanille_divine_xtases,
hemp-intense-orgasm, lubrifiant_eau_lube_tube_chocolat_orgie.
(NB : chocolat_orgie tout juste committe -> peut apparaitre en retard sur le CDN raw, mais bien fait.)

[TERMINE 2026-07-10 — les 9 fiches restantes sont FAITES, voir bloc de fin de session] --- 9 FICHES (etaient restantes, MAINTENANT FAITES) ---
1. vibro-rechargeable-Indiana.html          (cat toy)          -> 4 liens : Cockring Marry Me, Magnum Opus, Cockring Saturn, Anneau Love Connection
2. red-dolls-energy-pleasure.html           (cat masturbateur) -> Monster Pussy Strocker, Cockring Marry Me, Magnum Opus, Cockring Saturn
3. lubrifiant_eau_lube_tube_fraise_orgie.html   (cat gelarome) -> Cannabis Orgie, Chocolat Orgie, Barbe a Papa Orgie, Pina Colada
4. lubrifiant_eau_tube_barbe_a_papa.html    (cat gelarome)     -> Cannabis Orgie, Chocolat Orgie, Fraise Orgie, Pina Colada
5. orgie-pinacolada.html                    (cat gelarome)     -> Cannabis Orgie, Chocolat Orgie, Fraise Orgie, Barbe a Papa Orgie
6. pink-star-choco-fraise.html              (cat gelarome)     -> Cannabis Orgie, Chocolat Orgie, Fraise Orgie, Barbe a Papa Orgie
7. pink_star_sucette_cerise.html            (cat gelarome)     -> Cannabis Orgie, Chocolat Orgie, Fraise Orgie, Barbe a Papa Orgie
8. mini-robe-noire.html                     (cat lingerie)     -> Bunny, Enseignante, Etudiante, Infirmiere
9. robe-longue-noire-argentee.html          (cat lingerie)     -> Bunny, Enseignante, Etudiante, Infirmiere

--- CATEGORIES (pour reconstruire le mapping) ---
toy(8) : Cockring-vibrant-Marry-Me-Wooomy, Magnum-Opus-vibro, cockring-vibrant-saturn-hueman,
  anneau_vibrant_telecommande, black-empire-my-duchess, le-flateur, vibro-rechargeable-Indiana, Plug-Anal-Rosy-Gold
masturbateur(2) : monster-pussy-strocker, red-dolls-energy-pleasure
gelbio(6) : caramel, neutre_divine(Coco), framboise, monoi, sans_parfum, vanille (tous _divine_xtases)
gelarome(8) : gel_cannabis_orgie, chocolat, fraise, barbe_a_papa, orgie-pinacolada, pink-star, pink-star-choco-fraise, pink_star_sucette_cerise
excitant(2) : hemp-intense-orgasm, dual-vibe-sex-on-the-beach
lingerie(6) : Deguisement-Bunny, deguisement-enseignante, deguisement-etudiante, deguisement-infirmiere-sexy, mini-robe-noire, robe-longue-noire-argentee
Regle : 4 liens meme categorie (hors soi) ; si <4 completer par affinite
(toy->masturbateur->excitant ; masturbateur->toy->excitant ; gelbio->gelarome->excitant ;
 gelarome->gelbio->excitant ; excitant->gelarome->toy ; lingerie n'utilise que lingerie).

--- METHODE PAR FICHE (rappel, marche a 100%) ---
1. Aller sur /edit/main/[FICHIER].
2. En JS : extraire le HTML HEAD depuis <script type="application/json"> de l'editeur
   (deepFind : chaine contenant <!DOCTYPE, length>2000). Verifier related-products ABSENT.
3. Construire la section (template ci-dessus) et l'inserer AVANT la 1ere occurrence de /<footer[\s>]/.
   Verifier : 1 DOCTYPE, 1 footer, 1 seule section related-products, delta ~+1450 a +1560.
4. Coller : clic dans l'editeur [600,350], Ctrl+A, ClipboardEvent('paste') sur .cm-content
   (DataTransfer text/plain = nouveau HTML). Verifier defaultPrevented:true + screenshot Ctrl+End.
5. JLShop06 clique "Commit changes".
6. Verifier via raw {cache:'reload'} (le CDN peut retarder de quelques minutes).

ITEMS RESTANTS DU PLAN LINKS/GEO (non commences, pour memoire) :
- Item 1 : JSON-LD Store aggregateRating + sameAs -> NECESSITE donnees reelles de JLShop06
  (note moyenne + nb avis clients ; URLs reseaux sociaux Instagram/Facebook/TikTok). Ne pas inventer.
- Item 3 : JSON-LD Product + BreadcrumbList sur les 23 fiches sans JSON-LD
  (seules le-flateur + 6 gels bio en ont). ~23 fiches, extraction donnees reelles par fiche.


==================================================
SESSION MAILLAGE INTERNE (fin) — MAJ 2026-07-10 (Claude)

TACHE "Vous aimerez aussi" (bloc related-products sur toutes les fiches produits) : TERMINEE 32/32.

Les 9 dernieres fiches ont ete traitees et committees cette session (bloc related-products insere,
4 liens internes ancres chacune, template identique aux precedentes, style inline dore/Georgia) :
1. vibro-rechargeable-Indiana (toy)        -> Cockring Marry Me, Magnum Opus, Cockring Saturn, Anneau Love Connection
2. red-dolls-energy-pleasure (masturbateur) -> Monster Pussy Strocker, Cockring Marry Me, Magnum Opus, Cockring Saturn
3. lubrifiant_eau_lube_tube_fraise_orgie (gelarome) -> Cannabis, Chocolat, Barbe a Papa, Pina Colada
4. lubrifiant_eau_tube_barbe_a_papa (gelarome)      -> Cannabis, Chocolat, Fraise, Pina Colada
5. orgie-pinacolada (gelarome)             -> Cannabis, Chocolat, Fraise, Barbe a Papa
6. pink-star-choco-fraise (gelarome)       -> Cannabis, Chocolat, Fraise, Barbe a Papa
7. pink_star_sucette_cerise (gelarome)     -> Cannabis, Chocolat, Fraise, Barbe a Papa
8. mini-robe-noire (lingerie)              -> Bunny, Enseignante, Etudiante, Infirmiere
9. robe-longue-noire-argentee (lingerie)   -> Bunny, Enseignante, Etudiante, Infirmiere

NOTE IMPORTANTE (lingerie) : mini-robe-noire ET robe-longue-noire-argentee n'ont PAS de <footer>
(pas de cart.js/i18n, page plus simple). Le bloc a donc ete insere AVANT </body> (apres le dernier
</section>), et non avant <footer>. Rendu propre verifie. Les hrefs lingerie utilisent les noms de
fichiers EXACTS des pages live : Déguisement-Bunny.html (accent + D majuscule),
deguisement-enseignante.html, deguisement-etudiante.html, deguisement-infirmière-sexy.html (accent).

VERIFICATION FINALE (fetch raw, cache:no-store) sur les 9 : related-products=1, liens=4, DOCTYPE=1,
aucune duplication. => TACHE MAILLAGE INTERNE COMPLETE (32/32 fiches).

--------------------------------------------------
[EN COURS 2026-07-10 - voir bloc AVANCEMENT ITEM 3 en fin de fichier]

Il reste 2 items du plan Links/GEO (les DEUX necessitent une extraction de donnees ; item 1 necessite
des donnees que SEUL JLShop06 peut fournir) :

- ITEM 1 : JSON-LD Store (accueil) -> ajouter aggregateRating (note moyenne + nb d'avis clients REELS)
  et sameAs (URLs reseaux sociaux : Instagram / Facebook / TikTok). BLOQUE : demander ces valeurs a
  JLShop06 avant insertion. NE RIEN INVENTER (avis/note fictifs = risque conformite + trompeur).

- ITEM 3 : JSON-LD Product + BreadcrumbList sur les 23 fiches qui n'ont PAS de JSON-LD
  (seules le-flateur + les 6 gels bio en ont). Ajouter AUSSI BreadcrumbList aux 6 gels bio (Product OK,
  Breadcrumb manquant) et a l'accueil (Store OK, Breadcrumb manquant). availability=InStock (a confirmer).
  Donnees a extraire par fiche : nom H1, description meta, prix, image .webp, marque, categorie, canonical.
  Faisable SANS donnees externes -> peut demarrer directement.

RAPPEL METHODE (inchangee) : editeur GitHub fichier par fichier ; extraire le HTML depuis
<script type="application/json"> de l'editeur ; inserer ; VIDER completement l'editeur (Ctrl+A+Delete
x2, verifier placeholder "Enter file contents here") avant de coller ; ClipboardEvent paste sur
.cm-content (verifier defaultPrevented:true) ; Ctrl+Home + Ctrl+End (screenshots) ; JLShop06 clique
Commit. Verifier via API/raw (pas raw en cache). Ordre langues fr/pt/it/es/de. Marques NON traduites.

==================================================
AVANCEMENT ITEM 3 - JSON-LD Product + BreadcrumbList (session 2026-07-10)
==================================================

INVENTAIRE REEL (via API GitHub + raw no-store) : 30 fiches produit a toucher.
  - le-flateur.html : Product + BreadcrumbList DEJA presents = MODELE DE REFERENCE (ne pas toucher).
  - 6 gels bio Divine Xtases : Product present, BreadcrumbList MANQUANT -> ajouter Breadcrumb seul.
  - 24 autres fiches : AUCUN JSON-LD -> ajouter Product + BreadcrumbList.

MODELE (copie de le-flateur, valeurs tirees du contenu propre de chaque fiche, RIEN INVENTE) :
  Product : name, description, image (URL absolue .webp du produit), sku (prefixe LJE-/DIVINE-),
    brand.name, offers{url=canonical, priceCurrency EUR, price, priceValidUntil 2026-12-31,
    availability InStock, seller.name "Les Jardins Enchantes"}, category.
  BreadcrumbList : 3 niveaux -> Accueil (home) / Categorie (lien home, convention du site) /
    Nom produit (lien canonical). Les 2 blocs places dans le <head>.

FAIT (committe + verifie en live : 2 ld+json, 3 ListItem chacun) - 3/30 :
  [x] gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html  (Breadcrumb ajoute)
  [x] gel_lubrifiant_bio_neutre_divine_xtases.html               (Breadcrumb ajoute)
  [x] gel_lubrifiant_bio_neutre_framboise_divine_xtases.html     (Breadcrumb ajoute)

RESTE - GELS BIO (Breadcrumb seul) - 3 :
  [ ] gel_lubrifiant_bio_neutre_monoi_divine_xtases.html
  [ ] gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases.html
  [ ] gel_lubrifiant_bio_neutre_vanille_divine_xtases.html

RESTE - PRODUCT + BREADCRUMB - 24 :
  [ ] Cockring-vibrant-Marry-Me-Wooomy.html
  [ ] Deguisement-Bunny.html
  [ ] Magnum-Opus-vibro.html
  [ ] Plug-Anal-Rosy-Gold.html
  [ ] anneau_vibrant_telecommande.html
  [ ] black-empire-my-duchess.html
  [ ] cockring-vibrant-saturn-hueman.html
  [ ] deguisement-enseignante.html   (verifier nom exact fichier image : espace/apostrophe)
  [ ] deguisement-etudiante.html     (idem image)
  [ ] deguisement-infirmiere-sexy.html
  [ ] dual-vibe-sex-on-the-beach.html   (2 prix : 28.90 / 32.90 -> choisir prix de vente courant)
  [ ] gel_cannabis_orgie.html
  [ ] hemp-intense-orgasm.html
  [ ] lubrifiant_eau_lube_tube_chocolat_orgie.html
  [ ] lubrifiant_eau_lube_tube_fraise_orgie.html
  [ ] lubrifiant_eau_tube_barbe_a_papa.html
  [ ] mini-robe-noire.html
  [ ] monster-pussy-strocker.html
  [ ] orgie-pinacolada.html          (2 prix : 12.90 / 32.90 -> choisir prix de vente courant)
  [ ] pink-star-choco-fraise.html
  [ ] pink_star_sucette_cerise.html
  [ ] red-dolls-energy-pleasure.html
  [ ] robe-longue-noire-argentee.html
  [ ] vibro-rechargeable-Indiana.html

>>> REPRENDRE ICI (prochaine session) <<<  -> prochaine fiche : gel_lubrifiant_bio_neutre_monoi_divine_xtases.html

METHODE PAR FICHE (eprouvee) : ouvrir editeur GitHub ; extraire le HTML via
payload.codeViewEditRoute.editInfo.content (plus fiable que deepFind) ; construire Breadcrumb
(et Product si absent) a partir des donnees de la fiche ; inserer avant </head> (juste apres le
Product existant pour les gels bio) ; VALIDER par compteurs uniquement (filtre bloque URLs) :
ld+json=2, ListItem=3, DOCTYPE=1, </head>=1, delta positif, start/end OK ; vider entierement
l'editeur (Ctrl+A/Delete x2, placeholder "Enter file contents here") ; coller via ClipboardEvent
(defaultPrevented:true) ; Ctrl+Home + Ctrl+End (screenshots) ; JLShop06 clique Commit (jamais Claude).
ITEM 1 reste BLOQUE : demander a JLShop06 note moyenne + nb avis + URLs reseaux sociaux. NE RIEN INVENTER.


==================================================
SESSION 2026-07-12 (Claude) — COORDONNEES DE CONTACT (FOOTER) + ETAT DES LIEUX
==================================================

ROLES : Claude fait TOUT (edition, collage editeur, verifications) SAUF le clic "Commit changes" (JLShop06). NE RIEN INVENTER.

--- FAIT (committe sur main) ---

index.html — FOOTER : ajout/mise a jour des coordonnees de contact (commit initial "Update footer with contact info and address" + correction du jour).
- Mention affichee : "Les Jardins Enchantes — Roquebrune-Cap-Martin, France".
- Numero de telephone : affichage "+351 965 020 889" + lien cliquable tel:+351965020889.
  NB : le footer affichait d'abord "06 27 61 59 98" / tel:+33627615998 ; corrige en +351 965 020 889 sur demande de JLShop06 (numero de contact officiel confirme, indicatif Portugal +351 assume).
- Lien reseau social <link rel="me"> (dans le <head>) : aligne sur le bon compte -> instagram.com/gladiator_italia (remplace l'ancien instagram.com/lesjardinsenchantes, qui etait l'intrus). Coherent avec le JSON-LD sameAs de l'accueil (comptes gladiator_italia = comptes officiels confirmes par JLShop06).
VERIF (API GitHub, ?ref=main, Accept: application/vnd.github.raw) : +351 965 020 889 = 1 ; ancien 06 27 61 59 98 = 0 ; tel:+351965020889 = 1 ; ancien tel:+33 = 0 ; gladiator_italia present ; lesjardinsenchantes = 0 ; 1 seul <!DOCTYPE. OK.

--- ETAT DES LIEUX DU SITE LIVE (scan du 12/07, fetch cache:reload sur les-jardins-enchantes.com) ---

SITEMAP : 32 URLs (accueil + 30 fiches produit + page /cgv). 2 fiches hors sitemap verifiees a part : mini-robe-noire, robe-longue-noire-argentee.

JSON-LD (schema.org) : CONFORME.
- Accueil : Store + BreadcrumbList + sameAs (3 reseaux : facebook Gladiator.Italia06, instagram gladiator_italia, tiktok gladiatoritalia). PAS d'aggregateRating (volontaire, pas de faux avis).
- 32/32 fiches produit : Product + BreadcrumbList presents (les 30 du sitemap + mini-robe + robe-longue). /cgv : aucun JSON-LD (normal, page legale).
- Aucun doublon DOCTYPE, aucune erreur de parsing JSON-LD sur l'ensemble scanne.

MAILLAGE INTERNE : bloc "Vous aimerez aussi" (related-products) present sur les 32 fiches produit. OK.

HREFLANG : fr, pt, it, es, de, x-default presents sur l'accueil. OK.

--- RESTE A FAIRE / POINTS OUVERTS ---

1) FICHE GOOGLE (Google Business Profile) : la fiche "Les Jardins Enchantes" (Roquebrune-Cap-Martin) est bien creee, revendiquee et geree (badge "Vous gerez cette fiche"). Efficacite de la fiche NON complete a 100% (Google suggere d'ajouter photos, reseaux, chat...). Le telephone affiche sur la fiche Google (+351 965 020 889) est desormais COHERENT avec le footer du site.

2) ITEM 1 SEO/GEO (optionnel, toujours en attente) : aggregateRating sur le JSON-LD Store de l'accueil -> BLOQUE tant qu'il n'y a pas de VRAIS avis clients (note moyenne + nombre d'avis). NE RIEN INVENTER (risque conformite + penalite Google).

3) DIVERS (rappels des sessions precedentes, non bloquants) : score PageSpeed "Navigation agentique" 2/3 -> viser 3/3 ; H2 accueil qui fait doublon avec le H1 -> a reformuler ; sous-cas Stripe "e-mail deja utilise = pas de remise" a valider manuellement avec un paiement reel.

--- NOTES METHODE (inchangees) ---
Extraire le HTML via le <script type="application/json"> de l'editeur GitHub. Vider completement l'editeur (Ctrl+A + Delete) avant de coller. Coller via ClipboardEvent('paste') sur .cm-content (verifier defaultPrevented=true). Verifier debut (Ctrl+Home) + fin (Ctrl+End). Verifier via API GitHub (?ref=main), PAS via raw.githubusercontent (cache CDN en retard). JLShop06 clique "Commit changes".


==================================================
SESSION 2026-07-12 (suite) — REFORMULATION H2 ACCUEIL + CLOTURE DES POINTS OUVERTS
==================================================

ROLES : Claude fait TOUT (edition, collage editeur, verifications) SAUF le clic "Commit changes" (JLShop06).

--- FAIT (committe sur main) ---

REFORMULATION DU H2 D'ACCUEIL (doublon avec le H1) — TERMINE.
CONSTAT : le 1er H2 de l'accueil (data-i18n="home_seo_intro_title") repetait quasi mot pour mot le H1 (home_h1_seo) : memes mots-cles "Boutique Sextoys / Gel Lubrifiant Bio / Huile de Massage / France". Les autres H2 (categories home_cat_1..6 + grille home_seo_grid_t1..t3 + home_seo_why_title) sont OK et n'ont pas ete touches.
CORRECTIF : valeur de la cle home_seo_intro_title reformulee dans i18n.js, 5 langues (ordre fr/pt/it/es/de), pour varier les mots-cles (plaisir, bien-etre intime, livraison discrete) :
  FR : Plaisir & Bien-Être Intime : Livraison Discrète en France & Europe
  PT : Prazer & Bem-Estar Íntimo: Entrega Discreta em França e Europa
  IT : Piacere & Benessere Intimo: Spedizione Discreta in Francia ed Europa
  ES : Placer & Bienestar Íntimo: Envío Discreto en Francia y Europa
  DE : Lust & Intimes Wohlbefinden: Diskreter Versand in Frankreich & Europa
NB : le H2 est pilote par i18n.js (data-i18n) -> c'est la VALEUR de la cle qui a ete changee, pas le HTML. Esperluettes stockees en &amp; (coherent avec le fichier). L'ancienne valeur "Boutique Sextoys, Gel Lubrifiant Bio..." est entierement retiree.
VERIF (API GitHub, ?ref=main, Accept: application/vnd.github.raw) : home_seo_intro_title = 5 occurrences ; 5 nouvelles valeurs presentes 1x chacune ; ancienne valeur = 0 ; accolades equilibrees (111/111). OK.

--- CLOTURE DES POINTS OUVERTS (statut confirme par JLShop06) ---

1) FICHE GOOGLE (Google Business Profile) : creee, revendiquee et geree. AVIS : JLShop06 n'en a pas encore -> on ATTEND que les clients en laissent avant d'ajouter quoi que ce soit. Verifie ce jour : aucun avis sur la fiche pour l'instant. RIEN A FAIRE cote code pour le moment.

2) aggregateRating (JSON-LD Store accueil) : reste NON ajoute, volontairement, tant qu'il n'y a pas de VRAIS avis clients. NE RIEN INVENTER. A ajouter plus tard quand des avis reels existeront (note moyenne + nombre).

3) H2 doublon accueil : REGLE ce jour (voir ci-dessus).

4) PageSpeed "Navigation agentique" 2/3 -> 3/3 : DEJA REGLE (confirme par JLShop06). Plus d'action requise.

5) Sous-cas Stripe "e-mail deja utilise = pas de remise de bienvenue" : DEJA TESTE (confirme par JLShop06). Plus d'action requise.

--- ETAT GENERAL ---
A ce stade, tous les points ouverts identifies sont soit TERMINES, soit en attente d'un evenement externe (avis clients reels pour aggregateRating). Aucune tache de code en attente cote SEO/GEO/i18n.

==================================================
SESSION GOOGLE MERCHANT CENTER — MAJ 2026-07-12 (Claude)

RÔLES : Claude fait TOUT (config Merchant Center, generation feed.xml, collage editeur) SAUF le clic "Commit changes" GitHub (JLShop06).

CONTEXTE : mise en place complete de Google Merchant Center pour diffuser les produits (compte "les jardins enchantes", ID 5818210174, feedLabel JARDINS_ENCHANTES).

--- FAIT ---

1. FLUX PRODUITS (feed.xml) : cree et en ligne.
- Methode retenue = flux par fichier (option "lien du fichier" dans Merchant Center), URL : https://les-jardins-enchantes.com/feed.xml (mise a jour auto ~24h).
- 32 produits extraits des fiches (JSON-LD des pages + images), feed RSS 2.0 namespace g: (id, title, description, link, image_link, availability, price, brand, mpn, identifier_exists=no, condition=new, adult=yes).
- NB feedLabel Merchant Center = MAJUSCULES obligatoire (chiffres/tirets/underscores, max 20) -> JARDINS_ENCHANTES (le minuscule/tiret est refuse).
- Ancien feed.xml existant (24 items + domaine github.io errone) REMPLACE par la version 32 items + domaine .com. (edit du fichier existant, PAS creation -> conflit "file already exists").

2. LIVRAISON (Conditions de livraison) : 2/2 conditions configurees.
- France : Colissimo, tarif fixe 6,90 € (virgule decimale obligatoire dans l'UI FR), delai 2-4 jours, fuseau Paris.
- 5 autres pays (Allemagne, Belgique, Espagne, Italie, Portugal) : tarif fixe 8,90 €, delai d'acheminement 5-14 jours ouvres (total ~5-15 j), fuseau Paris. Regle le blocage "Informations de livraison manquantes pour 5 pays".

3. RETOURS (Conditions de retour) : configurees (14 jours ; frais de retour A LA CHARGE DU CLIENT ; produits neufs/scelles uniquement ; PAS d'echanges ; remboursement sous 14 jours). URL politique = retractation.html. Conforme a l'exception d'hygiene (Art. L221-28 5° / Article 9 CGV) : retour refuse une fois l'emballage d'hygiene ouvert.

4. CGV : retrait de la mention brouillon.
- Supprime le paragraphe visible "[BROUILLON – A FAIRE VALIDER PAR UN AVOCAT]" (cgv_47) + le bloc de commentaire HTML "TODO (juridique)... avocat" (lignes ~115-122) dans cgv.html.
- Contenu legal reel conserve intact (div.legal-callout, lien retractation.html, clause hygiene L221-28). Verifie en live : plus aucune mention BROUILLON/AVOCAT sur https://les-jardins-enchantes.com/cgv.

--- ETAT / RESTE (externe, pas de code) ---
- Config Merchant Center : 6/6 taches TERMINEES.
- Produits : 32 importes. Au moment de la config, tous "Refuse / non visibles" car (a) EXAMEN INITIAL Google en cours (jusqu'a 3 jours ouvres) — attendre ; (b) blocage livraison 5 pays — REGLE ce jour.
- POINT DE FOND : politique Google "contenu reserve aux adultes" pour une boutique erotique. Les sextoys risquent le refus ("produits destines a susciter une excitation") ; gels lubrifiants / huiles de massage ont plus de chances de passer. A confirmer apres l'examen initial.

--- NOTES METHODE ---
- feedLabel = MAJUSCULES uniquement. Valeurs monetaires UI FR = virgule (6,90 pas 6.90).
- Variables window perdues a chaque navigation -> regenerer le contenu (feed / README) APRES navigation sur l'onglet cible.
- Collage editeur GitHub : focus .cm-content -> Ctrl+A -> Delete -> ClipboardEvent('paste') DataTransfer text/plain. Verifier via l'onglet Preview (diff) avant que JLShop06 clique Commit.
- Verifier le live via l'onglet du domaine (.com) directement (CORS bloque le fetch cross-origin depuis github.com).


==================================================
SESSION ATTRIBUTS + POSTS + AUTOMATISATION — MAJ 2026-07-13
==================================================
ROLES : Claude fait TOUT sur la fiche Google Business (autorisation explicite du client). Sur GitHub : Claude prepare/colle, JLShop06 seul clique « Commit changes ».

--- FAIT DANS CETTE SESSION ---
1) Banniere mobile (style.css) : padding-top corrige par breakpoints (768=172px, 560=178px, 480=178px, 380=186px). Committe (Fix mobile header spacing for hero section, e900586), deploye Vercel, verifie LIVE (72090 car.). Client confirme : mobile PARFAIT.
2) Fiche Google Business — ameliorations SEO/GEO (toutes EN ATTENTE validation Google ~10 min) :
   - Categories : Boutique erotique (PRINCIPAL) + Boutique de lingerie + Magasin de cosmetiques.
      - Paiements : Visa + Mastercard UNIQUEMENT (toutes autres cartes = Non).
         - Date de creation : juin 2026.
            - Attributs Clientele : Safe place pour les transgenres = OUI ; LGBTQ+ friendly = OUI.
               - Telephone portugais +351 conserve (choix client). Adresse domicile conservee (categorie exige accueil public).
                  - Attributs Accessibilite / Aide d'urgence / Gere par une femme : NON pertinents => ignores.
                  3) Reseaux sociaux : ABANDONNES (comptes perso pro, nom different de la boutique).
                  4) Automatisation : pas d'automatisation 100% autonome possible pour un debutant (API Google Business trop complexe). Mis en place = ROUTINE ASSISTEE hebdo. Rappel enregistre dans la MEMOIRE de Claude.ai (Zone « Les Jardins Enchantes »).

                  --- CONSEIL STRATEGIE CONTENU ---
                  Google Posts AVANT blog. Posts = effet local rapide, simple, sans code (expirent apres 7 j). Blog GitHub = SEO long terme mais technique/chronophage sur site HTML statique => plus tard (3-4 articles piliers).

                  --- A FAIRE / A SURVEILLER ---
                  - [ ] Publier le 1er Google Post (texte premium prepare par Claude ; visuel = logo ou photo produit ; bouton vers le site).
                  - [ ] Routine : 1 Google Post / semaine (calendrier 4 posts du mois a suivre).
                  - [ ] Search Console : sitemap doit passer au VERT sous 24-48h (soumis 2026-07-13).
                  - [ ] Surveiller l'indexation des pages produits.
                  - [ ] Horaires jours feries (ex : 14 juillet) si besoin.
                  - [ ] Plus tard : quelques articles de blog piliers (gel lubrifiant bio, huiles de massage).
                  



==================================================
SESSION ANALYTICS + MERCHANT CENTER + SEARCH CONSOLE — TERMINEE — MAJ 2026-07-14
==================================================
ROLES : Claude fait TOUT sauf les clics de validation sensibles (commit, suppression, association) = JLShop06 seul.

--- FAIT LE 2026-07-14 ---

1) GOOGLE ANALYTICS - TAG CORRIGE
- Ancien tag G-15REBJRSHP remplace par G-ZQXWL9PKEE dans compliance.js (ligne 21, var GA_ID). Commit + deploiement Vercel OK.
- Verifie : compliance.js en production sert bien G-ZQXWL9PKEE. Visite remontee en Temps Reel (test en navigation privee).

2) ANALYTICS - PROPRIETES
- 2 proprietes existaient. Suppression de la propriete inutile 538041349 (en corbeille 35j, recuperable jusqu'a ~2026-08-18).
- Propriete CONSERVEE : Les Jardins Enchantes = 476902259 (compte 344670846).

3) ANALYTICS - FLUX DE DONNEES NETTOYE
- IMPORTANT : l'ID G-ZQXWL9PKEE appartenait en fait a un VIEUX flux eBay "RosalieChic" (boutique fermee).
- Flux renomme "Les Jardins Enchantes - Site Web" + URL corrigee vers https://les-jardins-enchantes.com.
- ID de mesure INCHANGE (G-ZQXWL9PKEE) -> aucune modif du site necessaire. ID de flux : 10235487101.

4) SEARCH CONSOLE - LIAISON ANALYTICS
- Association creee : Analytics (flux Les Jardins Enchantes) <-> Search Console (les-jardins-enchantes.com, type Domaine).
- Rappel : donnees de recherche visibles dans Analytics sous 24-48h.
- Deja OK avant session : propriete domaine validee + sitemap.xml soumis (34 pages, statut OK).

5) MERCHANT CENTER - DIAGNOSTIC
- Flux produits = https://les-jardins-enchantes.com/feed.xml (source "PRODUCTS SOURCE 1", 32 produits, sync auto 24h).
- Avertissement "Contenus reserves aux adultes" avant 21 juil 2026 : concerne UNIQUEMENT le PORTUGAL (fiches gratuites).
- Le flux est deja correct : tous les produits ont <g:adult>yes</g:adult>. Le blocage PT est une regle pays Google, non contournable techniquement.
- DECISION : laisse tel quel. FR + autres pays UE (Italie, Espagne, Allemagne, Belgique...) non affectes.
- Note : le Portugal est un marche cible important -> a traiter avec le support Google Merchant ou via Google Ads payant (regles differentes des fiches gratuites).

--- RESTE A FAIRE / A SURVEILLER ---

- [ ] SUIVI CONVERSIONS E-COMMERCE (PRIORITAIRE) : le site n'envoie QUE des page_view a GA. AUCUN evenement add_to_cart / begin_checkout / purchase.
      Verifie en direct : clic "Ajouter au panier" => aucune requete /collect vers GA.
            -> A coder dans le site (gtag event). Le plus important = purchase (necessite de savoir comment une commande se conclut : page de confirmation ? paiement externe ?). A expliquer a Claude avant de coder.
                  -> add_to_cart et begin_checkout codables cote front sans dependance.
                  - [ ] BLOGS / ARTICLES SEO (recommande) : mettre en place des articles de blog = bon pour le referencement naturel (SEO long terme).
                        Idee : articles piliers (ex : guide gel lubrifiant bio, conseils, etc.). Deja note plus haut dans le README comme "plus tard" -> a lancer.
                        - [ ] Merchant Center : avertissement Portugal restera affiche jusqu'au 21 juil 2026 (choix assume).
                        - [ ] Google Business Profile : fiche OK et geree, mais a COMPLETER (horaires, description, photos, services) pour max visibilite locale.
                        - [ ] Verifier sous 24-48h que les rapports Search Console apparaissent bien dans Analytics.
                        - [ ] Vider le cache navigateur perso (Ctrl+Shift+R) sinon l'ancien compliance.js en cache peut encore envoyer vers G-15REBJRSHP depuis TA machine (n'affecte pas les vrais visiteurs).


==================================================
SESSION SEO/GEO — MAJ 2026-07-15 (Claude)

--- FAIT (committe sur main) ---
1) index.html TITLE + META : ajout du mot-cle "intime".
   - Title = "Les Jardins Enchantes - Sextoys & Gel Lubrifiant Intime Bio" (59 car, longueur optimale ; contient aussi la phrase "lubrifiant intime").
   - Meta description = "Boutique sextoys France premium. Gel lubrifiant intime bio Yuka 100/100, huiles de massage, stimulateurs clitoridiens. Livraison discrete France & Europe." (154 car, optimal).
   NB SEOptimer : mots-cles panier/ajouter + phrases "ajouter au panier" restent ROUGES => VOULU (bruit du bouton "AJOUTER AU PANIER", pas de vrais mots-cles SEO, ne PAS cibler).

2) index.html JSON-LD FAQPage AJOUTE (nouveau bloc, insere avant </head>) : 6 questions/reponses.
   Questions : Ou se met le gel lubrifiant ? / Quel est le role du gel lubrifiant ? / Comment choisir un bon lubrifiant intime bio ? / Quel type de gel facilite les rapports intimes ? / Vos gels lubrifiants sont-ils vraiment bio ? / La livraison est-elle discrete ?
   Inspire du bloc "Autres questions" (People Also Ask) de Google sur "gel lubrifiant". But = booster le GEO (entites citables par les LLM).

3) ADRESSE COMPLETE + NAP coherent :
   - Footer visible : "Les Jardins Enchantes - 49 Chem. du Vallonet, 06190 Roquebrune-Cap-Martin, France".
   - JSON-LD Store : ajout streetAddress "49 Chem. du Vallonet" (code postal/ville/pays existaient deja).
   - Telephone JSON-LD ALIGNE sur le numero public +351965020889 (l'ancien +33627615998 a ete retire => NAP identique partout, important pour le SEO local).
   VERIF GitHub raw OK : faqPresent, 6 questions, streetAddress present, ldCount=3, ancien tel absent.

--- SCORES SEOptimer (audit 2026-07-15) ---
Global B+. Referencement A+, GEO C+, Liens F, Convivialite A-, Performance A+.
Ce qui bloque le passage a A = la categorie LIENS (F) : 0 backlink, force de domaine 0. Priorite ELEVEE. Travail HORS-SITE, lent (semaines/mois).
GEO C+ : Schema identite OK, llms.txt OK ; seul rouge = "Contenu rendu 28%" (priorite FAIBLE, faux positif : le contenu texte est deja dans le HTML brut ; le 28% vient de la modal 18+/banniere cookies/panier injectes par JS. Chantier risque sur compliance.js pour gain nul => NE PAS faire en priorite).

==================================================
>>> A FAIRE PLUS TARD : STRATEGIE BACKLINKS (categorie F) — TOUT GRATUIT <<<
(Note : Claude ne peut PAS creer de comptes ni s'inscrire/publier a la place de l'utilisateur. L'utilisateur cree les comptes ; Claude peut guider champ par champ et a deja redige les textes ci-dessous.)

RAPPEL : un blog SUR son propre site = PAS un backlink (lien interne). Les backlinks = liens venant d'AUTRES sites vers le tien. Eviter les offres "5000 backlinks pas cher" = spam = penalite Google.

ORDRE CONSEILLE :
A) PLATEFORMES D'AVIS (le plus rentable) :
   - Trustpilot (trustpilot.com) : compte entreprise GRATUIT -> profil public (lien) + avis clients (regle aussi le aggregateRating manquant en JSON-LD).
   - Google Business Profile : deja fait, garder a jour.
   - Pages Jaunes (pagesjaunes.fr) : inscription pro gratuite, bien vu par Google en France.
B) ANNUAIRES GENERALISTES GRATUITS (inscription de base gratuite, NE PAS prendre l'option payante) :
   - Yelp (yelp.fr), Cylex (cylex-france.fr), Hoodspot, Tuugo (tuugo.fr), Justacote.
   => Coller le TEXTE DE PRESENTATION ci-dessous + infos NAP IDENTIQUES partout.
C) RESEAUX : ajouter le lien du site dans les bios Facebook (Gladiator.Italia06) + Instagram (gladiator_italia) [souvent oublie]. Creer un Pinterest gratuit (efficace e-commerce).
   NB : incoherence de marque "Gladiator Italia" vs "Les Jardins Enchantes" -> brouille le signal, a garder en tete.
D) BLOGS bien-etre/bio/lifestyle (guest blogging / test produit gratuit) : chercher sur Google "blog bien-etre intime", "blog bio lifestyle", "blog sante feminine" -> page Contact/Partenariats -> envoyer le MAIL TYPE ci-dessous. Viser 5-10 blogs a la fois, TOUJOURS personnaliser.
   Angle fort = gel bio, fabrique en France, Yuka 100/100.

AMAZON : bon pour ventes/notoriete mais PAS de backlink (Amazon interdit les liens vers boutique externe sur les fiches). Utile juste pour la marque -> aligner le nom "Les Jardins Enchantes" partout.

--- INFOS NAP (a mettre A L'IDENTIQUE partout) ---
Nom : Les Jardins Enchantes
Adresse : 49 Chem. du Vallonet, 06190 Roquebrune-Cap-Martin, France
Tel : +351 965 020 889
Site : les-jardins-enchantes.com

--- TEXTE DE PRESENTATION (annuaires + plateformes d'avis) ---
[COURT ~50 mots]
Les Jardins Enchantes est une boutique francaise specialisee dans les gels lubrifiants bio, huiles de massage et accessoires de bien-etre intime. Nos gels sont fabriques en France et notes Yuka 100/100. Livraison discrete en France et en Europe. 49 Chem. du Vallonet, 06190 Roquebrune-Cap-Martin.

[LONG ~120 mots]
Les Jardins Enchantes est une boutique en ligne francaise dediee au bien-etre intime et a la sensualite. Nous proposons une selection de gels lubrifiants bio, huiles de massage, stimulateurs et accessoires choisis pour leur qualite et le respect du corps. Nos gels lubrifiants sont fabriques en France, a base d'ingredients d'origine naturelle, et affichent une note Yuka de 100/100, gage d'une composition saine. Nous attachons une grande importance a la discretion : chaque commande est expediee dans un colis neutre, sans mention du contenu. Livraison offerte des 75 EUR d'achat en France et en Europe. Basee a Roquebrune-Cap-Martin (06), la boutique privilegie le serieux, la confidentialite et des produits de confiance pour une intimite epanouie.

--- MAIL TYPE (blogs bien-etre) ---
Objet : Test produit - gels lubrifiants bio francais notes Yuka 100/100

Bonjour [Prenom / nom du blog],

Je suis [ton prenom], de la boutique francaise Les Jardins Enchantes, specialisee dans le bien-etre intime bio.

Je suis votre blog avec interet, notamment vos articles sur [sujet precis d'un article - A PERSONNALISER]. Le ton bienveillant et l'approche naturelle que vous defendez correspondent tout a fait a nos valeurs.

Nous proposons une gamme de gels lubrifiants bio fabriques en France, notes Yuka 100/100, a la composition courte et naturelle. J'aimerais vous en faire decouvrir quelques-uns gratuitement, sans engagement, si vous souhaitez les tester et, eventuellement, partager votre avis aupres de votre communaute.

Si l'idee vous interesse, je vous envoie avec plaisir une selection. Et bien sur, je reste ouvert a toute autre forme de collaboration qui vous conviendrait.

Merci pour votre temps et votre travail,
[Ton prenom]
Les Jardins Enchantes - les-jardins-enchantes.com

CONSEILS MAIL : personnaliser la ligne "je suis votre blog" (citer un vrai article) sinon = spam. Ne pas envoyer 200 mails d'un coup, viser 5-10 blogs cibles a la fois.
==================================================

==================================================
SESSION SEARCH CONSOLE — shippingDetails + hasMerchantReturnPolicy (Fiches de marchand) — EN COURS — MAJ 2026-07-18

RÔLES : Claude fait TOUT (fetch éditeur, extraction, construction, collage) SAUF le clic « Commit changes » = JLShop06 seul.

CONTEXTE : Search Console signalait 3 problèmes de données structurées.
  1) « Extraits de produits » (aggregateRating + review) -> NE PAS CORRIGER (exigerait de faux avis clients ; aggregateRating OMIS volontairement, risque pénalité Google). Non traité, décision confirmée.
  2) « Fiches de marchand » -> CORRIGÉ : ajout de shippingDetails + hasMerchantReturnPolicy dans le bloc "offers" du JSON-LD Product de CHAQUE fiche produit.
  3) « Indexation » (redirect/canonical) -> considéré normal/intentionnel, non traité.

DONNÉES RÉELLES (confirmées par JLShop06) :
  - Livraison : Colissimo, délai 24/48h. Frais = 6,90 € sous 75 € d'achat, OFFERTE dès 75 €.
  - Retour : fenêtre 14 jours. Droit de rétractation EXCLU une fois l'emballage descellé. Retour par courrier, frais retour à la charge du client.

PAYLOAD JSON-LD inséré (juste après l'accolade fermante de l'objet "seller", dans "offers"), delta ≈ +1092 chars/fiche :
  shippingDetails { OfferShippingDetails, shippingRate 6.90 EUR, shippingDestination FR, deliveryTime : handlingTime 0-1 DAY + transitTime 1-2 DAY }
  hasMerchantReturnPolicy { MerchantReturnPolicy, applicableCountry FR, MerchantReturnFiniteReturnWindow, merchantReturnDays 14, ReturnByMail, ReturnShippingFees }

MÉTHODE PAR FICHE (rappel fiable) :
  - Naviguer sur /edit/main/[FICHIER]. Redéfinir deepFind + __transformOffers (variables window perdues à chaque navigation).
  - Extraire HTML depuis le <script type=application/json> de l'éditeur (deepFind clé contenant "<!DOCTYPE"), stocker window.__origHtml, transformer -> window.__newHtml.
  - Valider AVANT collage : Product parse, shipOk, returnOk, prix préservé, doctype=1, htmlClose=1, expectedLines.
  - Cliquer SUR une ligne de code -> Ctrl+A (touches individuelles, pas batché) -> SCREENSHOT pour vérifier le surlignage bleu -> coller via ClipboardEvent('paste') sur .cm-content (defaultPrevented=true).
  - Ctrl+End -> screenshot : fin propre </html>, aucun DOCTYPE dupliqué en trop.
  - JLShop06 clique « Commit changes ». Puis vérifier via API GitHub (Accept: application/vnd.github.raw, cache:'reload') : doctype=1, htmlClose=1, hasShip=true, hasReturn=true.

--- FAIT (committé + collé, "Commit changes" par JLShop06) — 20/33 fiches ---
  1. red-dolls-energy-pleasure.html
  2. Cockring-vibrant-Marry-Me-Wooomy.html
  3. Déguisement-Bunny.html
  4. Magnum-Opus-vibro.html
  5. Plug-Anal-Rosy-Gold.html
  6. anneau_vibrant_telecommande.html
  7. black-empire-my-duchess.html
  8. cockring-vibrant-saturn-hueman.html
  9. deguisement-enseignante.html
  10. deguisement-etudiante.html
  11. deguisement-infirmière-sexy.html
  12. dual-vibe-sex-on-the-beach.html (vérifié : 1 seul DOCTYPE, l'ancien doublon HTML n'est plus présent)
  13. gel_cannabis_orgie.html
  14. gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html
  15. gel_lubrifiant_bio_neutre_divine_xtases.html
  16. gel_lubrifiant_bio_neutre_framboise_divine_xtases.html
  17. gel_lubrifiant_bio_neutre_monoi_divine_xtases.html
  18. gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases.html
  19. gel_lubrifiant_bio_neutre_vanille_divine_xtases.html
  20. hemp-intense-orgasm.html

--- RESTE À FAIRE — 13/33 fiches (même payload, même méthode) ---
  21. le-flateur.html
  22. lubrifiant_eau_lube_tube_chocolat_orgie.html
  23. lubrifiant_eau_lube_tube_fraise_orgie.html
  24. lubrifiant_eau_tube_barbe_a_papa.html
  25. mini-robe-noire.html
  26. monster-pussy-strocker.html
  27. orgie-pinacolada.html
  28. pink-star-choco-fraise.html
  29. pink-star.html
  30. pink_star_sucette_cerise.html
  31. robe-longue-noire-argentee.html
  32. tanga-taille-haute-dentelle-bleue.html
  33. vibro-rechargeable-Indiana.html

NOTE : incohérence pré-existante repérée sur dual-vibe-sex-on-the-beach.html — la meta description affiche « 28,90 € » alors que le prix JSON-LD est 32,90 €. NON corrigé (hors périmètre offers). À signaler/traiter éventuellement plus tard.

À FAIRE APRÈS LES 33 FICHES : re-tester dans Google Rich Results / Search Console (après redéploiement Vercel, cache edge) pour confirmer que « Fiches de marchand » ne remonte plus d'avertissement shipping/return. Le problème « Extraits de produits » restera (aggregateRating volontairement absent — normal).

--- MAJ 2026-07-18 : TÂCHE shippingDetails + hasMerchantReturnPolicy = TERMINÉE (33/33) ---
Les 33 fiches produits contiennent désormais, dans le bloc "offers" du JSON-LD Product :
  - "shippingDetails" : Colissimo, taux 6,90 EUR, destination FR, handlingTime 0-1 j, transitTime 1-2 j.
  - "hasMerchantReturnPolicy" : FR, fenetre 14 jours (MerchantReturnFiniteReturnWindow), retour par courrier (ReturnByMail), frais de retour a la charge du client (ReturnShippingFees).
Prix JAMAIS modifie, aucune donnee inventee. Deux formats geres : COMPACT (minifie) et INDENTED (multi-lignes) selon la fiche.
13 fiches traitees et committees cette session (fin du lot) : le-flateur, lubrifiant_eau_lube_tube_chocolat_orgie, lubrifiant_eau_lube_tube_fraise_orgie, lubrifiant_eau_tube_barbe_a_papa, mini-robe-noire, monster-pussy-strocker, orgie-pinacolada, pink-star-choco-fraise, pink-star, pink_star_sucette_cerise, robe-longue-noire-argentee, tanga-taille-haute-dentelle-bleue, vibro-rechargeable-Indiana.
RESTE : re-test Google Rich Results / Search Console APRES redeploiement Vercel + purge cache edge. Avertissement "Extraits de produits" (aggregateRating) restera VOLONTAIREMENT (pas de faux avis).
Incoherence dual-vibe-sex-on-the-beach.html (meta 28,90 EUR vs JSON-LD 32,90 EUR) : toujours EN ATTENTE de decision JLShop06.
==================================================

==================================================
SESSION GEO — OBJECTIF SCORE A+ (rendu HTML pour LLM) — MAJ 2026-07-19
==================================================

ROLES : Claude fait TOUT (diagnostic, mesures live, edition, collage editeur) SAUF le clic "Commit changes" (JLShop06).

--- CONTEXTE / POINT DE DEPART ---
Rapport GEO (Optimisation Generative des moteurs) : score global C+.
3 criteres analyses :
  [OK]  Schema d'identite (Organization/Store) -> VALIDE
  [KO]  Contenu rendu (lisibilite LLM) -> ECHEC, "Pourcentage de rendu : 26%"
  [OK]  llms.txt present -> VALIDE
=> Le SEUL critere qui plombe le score = le faible % de contenu present dans le HTML BRUT
   par rapport au DOM final rendu par JavaScript.

--- DIAGNOSTIC (mesures reelles brut vs DOM rendu, en live) ---
Le TEXTE important (descriptions, prix, caracteristiques, noms produits) est DEJA a ~100% dans le HTML brut : bien lu par les LLM.
Ce qui fait chuter le ratio = de la STRUCTURE d'interface injectee par JS au chargement.
Ratios mesures AVANT correction :
  - Accueil (index.html) : ratio brut/rendu = 80% (BON ; les 36 produits + noms + liens sont en dur)
  - Fiches produits : ~49% (pink-star) -> C'EST CE QUI PLOMBE LE SCORE.
Sur une fiche, le JS fait quasiment DOUBLER la taille du DOM (11,7 Ko brut -> 23,9 Ko rendu).
Elements injectes par JS (absents du HTML brut) :
  1. cart-modal (panneau panier, ~2,15 Ko) genere par cart.js.
  2. Selecteur de langue (15 boutons FR/PT/ES/DE/IT, desktop + mobile) -> ABSENT du brut.
  3. Version MOBILE dupliquee du menu (burger). (header brut = 16 enfants -> DOM rendu = 55 enfants)
Note technique cle : cart.js TESTE l'existence de #cart-modal avant de le creer (guard) ->
  mettre le modal EN DUR dans le HTML NE cree PAS de doublon (verifie en live : 1 seul #cart-modal au rendu).

--- FAIT (committe + verifie live) ---
[OK] TEST cart-modal statique sur pink-star.html :
   - #cart-modal complet insere EN DUR juste avant </body> (tous les ids : cart-modal, cart-items,
     cart-total, cart-email, cart-summary, checkout-btn ; onclick closeCart()/checkout()/clearCart();closeCart();).
   - Valide par compteurs : 1 DOCTYPE, 1 html, 1 /body, 1 #cart-modal, delta +2250 chars, debut/fin propres.
   - Commit confirme via API GitHub (13947 octets). Deploiement Vercel confirme live.
   - RESULTAT LIVE : ratio brut/rendu 49% -> 58,1%. 1 seul #cart-modal au rendu (0 doublon). Panier fonctionnel. 0 regression visuelle.

--- METHODE FIABLE (rappel, cart-modal statique) ---
1. Ouvrir github.com/JLShop06/Les-Jardins-Enchantes/edit/main/[FICHIER]
2. Extraire le HTML a jour via le <script type="application/json"> de l'editeur (deepFind cle "content" contenant <!DOCTYPE). NE PAS se fier a raw.githubusercontent (cache CDN).
3. Inserer le bloc #cart-modal (voir template ci-dessous) juste AVANT </body> via string replace.
4. Valider par COMPTEURS avant collage : doctype=1, html=1, /body=1, cart-modal=1, cart-items=1, checkout-btn=1, modalBeforeBody=true, delta>0.
5. Coller : clic dans .cm-content -> Ctrl+A reel -> ClipboardEvent('paste') avec DataTransfer text/plain. Verifier defaultPrevented=true. Ctrl+Home (1 DOCTYPE) + Ctrl+End (modal avant /body).
6. JLShop06 clique "Commit changes".
7. Verifier via API GitHub (Accept: application/vnd.github.raw) : cart-modal=1, doctype=1.
CSP GitHub bloque fetch externe sur l'editeur -> reconstruire le modal en litteral (deja documente). new Function() bloque -> validation par regex/slice.
ATTENTION FILTRE OUTIL JS : le caractere "=" dans les attributs + query strings declenchent "[BLOCKED]" -> pour AFFICHER/transferer du HTML, remplacer temporairement [?=&] et "cookie", ou travailler en compteurs/booleens.

--- AVANCEMENT ETAPE 1 (cart-modal statique) - MAJ en cours ---

FAIT (commit par JLShop06) - 25 fichiers avec cart-modal statique :
  [OK] pink-star.html (test initial : ratio 49% -> 58.1%, pas de doublon, panier OK)
  [OK] Cockring-vibrant-Marry-Me-Wooomy.html
  [OK] Deguisement-Bunny.html
  [OK] Magnum-Opus-vibro.html
  [OK] Plug-Anal-Rosy-Gold.html
  [OK] anneau_vibrant_telecommande.html
  [OK] black-empire-my-duchess.html
  [OK] cockring-vibrant-saturn-hueman.html
  [OK] coffret-bien-etre-intime-bio.html
  [OK] deguisement-enseignante.html
  [OK] deguisement-etudiante.html
  [OK] deguisement-infirmiere-sexy.html
  [OK] dual-vibe-sex-on-the-beach.html
  [OK] gel_cannabis_orgie.html
  [OK] gel_lubrifiant_bio_caramel_beurre_sale_divine_xtases.html
  [OK] gel_lubrifiant_bio_neutre_divine_xtases.html
  [OK] gel_lubrifiant_bio_neutre_framboise_divine_xtases.html
  [OK] gel_lubrifiant_bio_neutre_monoi_divine_xtases.html
  [OK] gel_lubrifiant_bio_neutre_sans_parfum_divine_xtases.html
  [OK] gel_lubrifiant_bio_neutre_vanille_divine_xtases.html
  [OK] hemp-intense-orgasm.html
  [OK] le-flateur.html
  [OK] lubrifiant_eau_lube_tube_chocolat_orgie.html
  [OK] lubrifiant_eau_lube_tube_fraise_orgie.html
  [OK] lubrifiant_eau_tube_barbe_a_papa.html

DEJA OK avant cette campagne (avaient deja le modal) : cgv, confidentialite, cookies, index, mentions-legales.
EXCLUS (pas de panier) : cancel, erreur, google2ea8d2d7cec1a820, success, veille-concurrents.

RESTE A FAIRE - 10 fiches (memes etapes : modal statique avant </body>, 1 commit/fichier) :
  [ ] mini-robe-noire.html
  [ ] monster-pussy-strocker.html
  [ ] orgie-pinacolada.html
  [ ] pink-star-choco-fraise.html
  [ ] pink_star_sucette_cerise.html
  [ ] red-dolls-energy-pleasure.html
  [ ] retractation.html (verifier : charge cart.js -> a traiter comme fiche)
  [ ] robe-longue-noire-argentee.html
  [ ] tanga-taille-haute-dentelle-bleue.html
  [ ] vibro-rechargeable-Indiana.html

APRES ETAPE 1 : verif API groupee (cart-modal=1, doctype=1, pas de doublon sur chaque),
  re-mesurer le ratio live, re-lancer l audit GEO pour confirmer le passage a B+/A+.

--- RESTE A FAIRE POUR VISER A+ (dans l'ordre de priorite) ---

ETAPE 1 — cart-modal statique sur TOUTES les fiches (gain ~ +9 pts/fiche) :
  Propager la correction pink-star aux 32 autres fiches produits (memes que la liste i18n "FICHES PRODUITS").
  + index.html (verifier : l'accueil injecte-t-il aussi le modal via cart.js ? si oui, le figer aussi).
  1 commit par fichier (JLShop06). Verifier API apres chaque : cart-modal=1, pas de doublon DOCTYPE.

ETAPE 2 — Selecteur de langue + menu mobile EN DUR (gros gain, ~ +10-12 pts, vise ~68-70%+) :
  Le header brut n'a PAS les 15 boutons de langue ni le menu mobile duplique -> generes par i18n.js/JS.
  -> Rendre statiques dans le HTML : les boutons de langue (FR/PT/ES/DE/IT) et la nav mobile.
  A tester d'ABORD sur pink-star, re-mesurer le ratio, PUIS propager aux 33 pages.
  ATTENTION : verifier que le JS ne re-duplique pas (guard d'existence comme cart.js) -> sinon adapter le JS
  pour qu'il REUTILISE le markup statique au lieu de le recreer (sinon doublons). Tester en live (1 seul selecteur).

ETAPE 3 — Reduire l'ecart residuel brut/rendu :
  Verifier les autres reecritures DOM (attributs ajoutes au rendu). Viser un ratio > 75-80% partout.
  Cibler surtout les fiches courtes (ex: pink-star : peu de texte -> le ratio y est structurellement bas ;
  enrichir le contenu textuel indexable des fiches les plus maigres aide AUSSI le GEO).

ETAPE 4 — Confirmation A+ :
  Re-lancer l'audit GEO. Verifier "Contenu rendu" repasse au vert et que le score global monte a A+.
  Points DEJA verts a NE PAS casser : Schema d'identite (JSON-LD Store/Organization) + llms.txt.

--- TEMPLATE cart-modal (a inserer avant </body>) — reference exacte (source cart.js) ---
Bloc <div id="cart-modal" style="display:none;..."> ... contenant :
  span[data-i18n=cart_title] "VOTRE PANIER", button[onclick=closeCart()] "x",
  ul#cart-items, span#cart-total, input#cart-email (type email required),
  div#cart-summary, button#checkout-btn[onclick=checkout()] "PAYER",
  button[onclick="clearCart();closeCart();"] "VIDER LE PANIER".
(Le litteral complet a ete utilise sur pink-star ; le recopier depuis pink-star.html committe.)

--- CIBLE CHIFFREE ---
  Depart : 49% (fiches) -> pink-star apres ETAPE test : 58,1%.
  Objectif ETAPE 1+2 : ~68-70%. Objectif A+ : >75-80% sur toutes les pages.
==================================================


---

## PLAN GEO — A FAIRE DEMAIN (objectif : sortir de C+ en GEO)

> Note : le score "GEO" de SEOptimer = Generative Engine Optimization (optimisation pour les IA generatives : ChatGPT, Perplexity, reponses IA de Google), PAS la geolocalisation.

### Contexte
- La modif de l'age-gate (passage du JS au HTML brut dans index.html + compliance.js) a ete committee, mais elle N'A PAS change la note SEOptimer (resultat identique constate). Ne pas re-tenter cette piste.
- Un age-gate en overlay reste vu en premier par l'outil, qu'il soit genere en JS ou ecrit en dur.

### Etapes
1. MESURER LA VRAIE NOTE DE DEPART (avant toute modif). Relancer SEOptimer sur les-jardins-enchantes.com des que le forfait est de nouveau dispo. Noter le score exact par categorie (surtout GEO et Liens) + capture datee = reference "AVANT".
2. OUVRIR LE DETAIL DES RECOMMANDATIONS GEO dans le rapport SEOptimer. Lire exactement ce que l'outil reproche (les 13 recommandations). SEULE source fiable de quoi corriger.
3. CORRIGER LES POINTS GEO listes, un par un. Leviers GEO habituels a verifier :
   - Donnees structurees Schema.org completes et propres (deja : Store + BreadcrumbList ; a enrichir : Product + Offer + avis sur les fiches produits).
   - Contenu texte clair et "citable" (FAQ structuree, questions/reponses).
   - Titres et meta coherents.
   - Fichier llms.txt bien rempli (existe deja dans le repo — a verifier).
4. RE-MESURER APRES CHAQUE CHANGEMENT significatif. Une modif -> un nouveau test SEOptimer -> comparer au "AVANT". Garder seulement ce qui fait bouger le chiffre. Sinon annuler.

### Regles de travail
- Ne toucher a AUCUNE fiche produit tant que le rapport GEO detaille n'a pas ete lu.
- C'est JLShop06 qui commit (ou qui donne accord explicite pour que Claude commit a sa place).
- Objectif vise : GEO A+ (non garanti a l'avance — depend des recommandations reelles de l'outil).

### DIAGNOSTIC (analyse du code faite le 2026-07-20 par Claude — a confirmer avec le rapport SEOptimer detaille)

> Rappel : diagnostic base sur le code, PAS sur le barème exact de SEOptimer. A recouper avec les 13 recommandations du rapport. Le A+ n'est PAS garanti.

DEJA BON (ne pas casser) :
- llms.txt present et bien structure.
- Accueil : JSON-LD Store + BreadcrumbList + FAQPage.
- Fiches produits : JSON-LD Product + Offer valides.
- Chaque page : 1 h1 unique + meta description presente.

4 FAIBLESSES GEO IDENTIFIEES (par ordre d'impact estime) :
1. CONTENU FICHES TROP COURT (impact le + fort). Texte visible tres maigre : ~940 a ~1640 caracteres par fiche (ex. mini-robe-noire ~940). Les moteurs generatifs citent des pages riches et explicatives. -> Enrichir chaque fiche : description detaillee, usage, matiere, entretien, conseils, benefices.
2. AUCUN AVIS STRUCTURE (AggregateRating / Review) sur les fiches. Product + Offer presents mais zero note/avis. Signal de credibilite tres valorise par les IA. -> Ajouter AggregateRating + Review reels en Schema.org.
3. PAS DE FAQ STRUCTUREE SUR LES FICHES. L'accueil a un FAQPage mais aucune fiche produit n'en a. Le format Q/R est le + directement repris par les IA generatives. -> Ajouter un bloc FAQPage par fiche (3-5 questions/reponses reelles).
4. CONTENU CITABLE DE L'ACCUEIL LIMITE. ~7300 caracteres de texte visible dont bcp de noms produits + menu. Peu de texte editorial. -> Ajouter du contenu explicatif citable (guide, "pourquoi bio", etc.).

ORDRE DE TRAVAIL CONSEILLE : commencer par 1 fiche pilote (enrichir texte + FAQ + avis), re-mesurer sur SEOptimer, et ne propager que si le score GEO bouge.

### CONTRAINTE IMPORTANTE : SEULEMENT 2 TESTS SEOptimer / JOUR

- Ne PAS faire "1 modif = 1 test" (ça brulerait les 2 tests sur une seule fiche).
- METHODE ADAPTEE : grouper PLUSIEURS corrections d'un coup sur la fiche pilote (enrichir texte + FAQ + avis structures) PUIS faire 1 SEUL test pour mesurer l'effet cumule. Garder le 2e test du jour en reserve.
- Toujours noter la note AVANT (capture) avant de consommer un test, pour comparer.
- Preparer tous les changements a l'avance (colles, prets a committer) AVANT de lancer un test, pour ne pas gaspiller.


==================================================
SESSION GEO A+ + FIX PORTAIL D'AGE — MAJ 2026-07-21 (Claude)

RÔLES : Claude fait TOUT (fetch editeur, diagnostic, construction, collage) SAUF le clic « Commit changes » (JLShop06 seul).

--- ITEM 1 : RATIO DE RENDU / GEO — VRAIE CAUSE ENFIN CORRIGEE ---

Cause racine du ratio de rendu faible : un bloc CSS (~5 Ko, nav-dd / lang-switch) etait injecte dynamiquement par injectCss() dans i18n.js sur CHAQUE page (jamais traite avant). Ce <style> runtime alourdissait le DOM rendu (mauvais ratio pour les LLM / GEO).

Correctif en 2 commits (ordre important : style.css AVANT i18n.js pour eviter tout instant sans style sur le header/selecteur de langue) :
1. style.css : bloc nav-dd/lang-switch ajoute EN STATIQUE a la fin du fichier (~5099 chars, ajout pur, meme CSS qu'avant). Verifie parse OK, .nav-dd{position:relative} actif.
2. i18n.js (commit 60b34b9) : injectCss() detecte desormais le CSS statique (probe visibility:hidden qui lit getComputedStyle().position SANS position inline — la 1ere version posait position:static en inline, ce qui ecrasait toujours la regle et faussait la detection) et SAUTE l'injection. CSS conserve en FALLBACK si style.css absent.

VERIFIE EN LIVE (chargement frais non-cache) : injectedPresent=false (le <style> n'est plus injecte), nav-dd position=relative (style statique applique), nav rendue correctement.
PIEGE RENCONTRE : cache edge Vercel en retard -> mes 1ers tests montraient encore l'ancien i18n.js (injection presente). Une fois le CDN a jour, le skip fonctionne. TOUJOURS verifier fetch cache:'reload' + attendre la propagation avant de conclure.

RESULTAT SEOptimer : GEO = A+ (objectif depasse : cible C+ visee). Autres scores : Referencement A+, Performance A+, Convivialite A-, Liens F, global B+.
HONNETETE : le levier "ratio de rendu" est traite proprement, mais le barème SEOptimer reste inconnu. Le point bas restant = Liens (F), sujet a part (profil de liens interne/externe, backlinks), sans rapport avec le rendu/CSS.

--- ITEM 2 : BUG BLOQUANT — PORTAIL D'AGE "ACCES RESERVE" (site inaccessible) ---

SYMPTOME : clic sur « J'ai 18 ans ou plus » sans effet -> impossible d'entrer sur le site.

DIAGNOSTIC (cause racine confirmee en live) : ce n'etait PAS lie au fix GEO (compliance.js est independant, ne mentionne ni nav-dd ni injectCss).
- L'overlay du portail est en HTML statique avec l'attribut [hidden] : <div class="lje-overlay" id="lje-age-overlay" ... hidden>.
- La regle .lje-overlay{...display:flex} injectee par injectStyles() (compliance.js) ECRASE le display:none implicite de [hidden] (regle explicite > attribut hidden). L'overlay reste donc visible en permanence.
- Quand l'age est deja valide (localStorage lje_age_verified=true / age_ok=1), start() saute volontairement showAgeGate() -> le bouton n'est JAMAIS binde (__ljeBound absent) -> clic sans effet + overlay jamais masque.

CORRECTIF (compliance.js, injectStyles) : ajout d'UNE ligne CSS dans la chaine css :
  + '.lje-overlay[hidden]{display:none!important}'
Inseree juste apres la regle .lje-overlay. Ajout pur (delta +55 chars, accolades/parentheses equilibrees).
TESTE EN LIVE (avant commit) : etat hidden -> display:none (site accessible) ; showAgeGate retire hidden -> display:flex (portail s'affiche normalement pour un nouveau visiteur). Aucun impact sur style.css / i18n.js / bloc nav-dd -> A+ GEO preserve.

ETAT : modification collee dans l'editeur GitHub (compliance.js). COMMIT A CONFIRMER par JLShop06.
RESTE (auto) : apres redeploiement Vercel, re-verifier live que le site est accessible. Pour tester le cas "nouveau visiteur" : vider lje_age_verified puis cliquer « J'ai 18 ans ou plus » (ce clic = JLShop06, Claude ne valide pas un portail d'age).
