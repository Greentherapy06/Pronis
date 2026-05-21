# 📋 AUDIT PROGRESS - Les Jardins Enchantés

**Dernière mise à jour:** 21/05/2026
**Statut:** En cours - Option A (manuel)

---

## ✅ DÉJÀ FAIT

### Commits réalisés
- `5707b4a` - Fix image Saturn Cockring sur index
- - `0e4d4d2` - Prix Magnum Opus corrigé (89.90 → 149.90 €)
  - - `cac6650` - Prix Le Flateur index (29.99 → 49.90) [ANNULÉ]
    - - `e7689eb` - Rollback Le Flateur fiche (49.90 → 29.99 €)
      - - `df30f65` - Rollback Le Flateur index (49.90 → 29.99 €)
        - - `6eb89bc` - Canonical ajouté sur Magnum-Opus-vibro.html
         
          - ### Prix finaux confirmés
          - - **Magnum Opus : 149,90 €**
            - - **Le Flateur : 29,99 €**
             
              - ---

              ## 🔄 EN COURS - Ajout des balises canonical

              **Progression : 1/20 fiches produit**

              ### Pattern à appliquer
              Ajouter dans le `<head>` après `<meta name="description">` :
              ```html
              <link rel="canonical" href="https://lesjardinsenchantes.vercel.app/NOMFICHIER.html">
              ```

              ### Workflow par fichier
              1. Aller sur `https://github.com/JLShop06/Les-Jardins-Enchantes/edit/main/NOMFICHIER.html`
              2. 2. Cliquer dans l'éditeur, trouver la ligne `<meta name="description"`
                 3. 3. Fin de ligne → Entrée → taper le canonical
                    4. 4. Onglet Preview pour vérifier (une seule ligne ajoutée)
                       5. 5. Commit changes... → message : `SEO: ajoute canonical sur NOMFICHIER`
                         
                          6. ### ⚠️ NOTE TECHNIQUE
                          7. - CodeMirror Find/Replace ne supporte PAS les retours à la ligne dans le champ Replace
                             - - Toujours faire manuellement : End → Enter → type
                              
                               - ---

                               ## ⏳ FICHIERS RESTANTS - Canonicals (19)

                               - [ ] cockring-vibrant-saturn-hueman.html
                               - [ ] - [ ] le-flateur.html
                               - [ ] - [ ] monster-pussy-strocker.html
                               - [ ] - [ ] anneau_vibrant_telecommande.html
                               - [ ] - [ ] pink-star.html
                               - [ ] - [ ] dual-vibe-sex-on-the-beach.html
                               - [ ] - [ ] Plug-Anal-Rosy-Gold.html
                               - [ ] - [ ] deguisement-infirmière-sexy.html
                               - [ ] - [ ] orgie-pinacolada.html
                               - [ ] - [ ] Déguisement-Bunny.html
                               - [ ] - [ ] black-empire-my-duchess.html
                               - [ ] - [ ] pink-star-choco-fraise.html
                               - [ ] - [ ] Cockring-vibrant-Marry-Me-Wooomy.html
                               - [ ] - [ ] red-dolls-energy-pleasure.html
                               - [ ] - [ ] vibro-rechargeable-Indiana.html
                               - [ ] - [ ] deguisement-etudiante.html
                               - [ ] - [ ] hemp-intense-orgasm.html
                               - [ ] - [ ] pink_star_sucette_cerise.html
                               - [ ] - [ ] deguisement-enseignante.html
                              
                               - [ ] ---
                              
                               - [ ] ## 📌 AUTRES TÂCHES D'AUDIT À FAIRE APRÈS
                              
                               - [ ] ### 1. Open Graph URL (og:url) - 24 fiches
                               - [ ] Ajouter sur chaque fiche dans le `<head>` :
                               - [ ] ```html
                               - [ ] <meta property="og:url" content="https://lesjardinsenchantes.vercel.app/NOMFICHIER.html">
                               ```

                               ### 2. Sitemap.xml incomplet
                               9 produits manquants dans `sitemap.xml`. À compléter avec toutes les URLs des fiches.

                               ### 3. robots.txt - mauvais domaine
                               Le fichier `robots.txt` référence encore `jl-shop-06.vercel.app`.
                               Remplacer par : `https://lesjardinsenchantes.vercel.app/sitemap.xml`

                               ### 4. Titres trop longs (>60 caractères) - 8 pages
                               À raccourcir pour le SEO Google.

                               ### 5. Meta descriptions trop longues (>160 caractères) - 16 pages
                               À raccourcir pour le SEO Google.

                               ### 6. Pages sans meta description
                               - success.html
                               - cancel.html
                               - erreur.html

                               ### 7. Image orpheline
                               `orgie_gel_excitation_pina_colada_1.jpg` présente mais non référencée. Vérifier si à utiliser ou à supprimer.

                               ### 8. vercel.json - stratégie de cache
                               Actuellement les images sont en `immutable` 1 an. Problématique si une image doit être remplacée (besoin de renommer le fichier). À reconsidérer.

                               ---

                               ## 🔑 RAPPELS IMPORTANTS

                               - **Repo :** JLShop06/Les-Jardins-Enchantes
                               - **URL prod :** https://lesjardinsenchantes.vercel.app/
                               - **NE PAS toucher aux `price_id` Stripe** (configurés côté Stripe Dashboard)
                               - **⚠️ Loi française L112-1-1 :** le prix affiché doit être égal au prix Stripe encaissé
                               
