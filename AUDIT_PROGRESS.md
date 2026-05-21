# 📋 AUDIT PROGRESS - Les Jardins Enchantés

**Dernière mise à jour:** 21/05/2026  
**Statut:** ✅ Canonicals + og:url + sitemap + robots.txt terminés

---

## ✅ COMPLETÉ

### Prix harmonisés
- Magnum Opus : **149,90 €** partout
- - Le Flateur : **29,99 €** partout
 
  - ### Balises canonical : 24/24 ✅
  - Toutes les fiches produit ont une `<link rel="canonical">` valide pointant vers le bon fichier `.html`.
 
  - Canonicals cassées corrigées :
  - - `lubrifiant_eau_tube_barbe_a_papa.html` (pointait vers /tube_gel_barbe_a_papa_orgie)
    - - `lubrifiant_eau_lube_tube_chocolat_orgie.html` (pointait vers /tube_gel_chocolat_orgie)
      - - `lubrifiant_eau_lube_tube_fraise_orgie.html` (pointait vers /tube_gel_fraise_orgie)
        - - `gel_cannabis_orgie.html` (manquait .html)
         
          - ### Balises og:url : 24/24 ✅
          - Toutes les fiches produit ont une `<meta property="og:url">` cohérente avec la canonical.
         
          - ### Sitemap.xml : complet ✅
          - 26 URLs (home + 24 produits + cgv).
         
          - ### robots.txt : corrigé ✅
          - Domaine harmonisé sur `lesjardinsenchantes.vercel.app`.
         
          - ---

          ## 📌 TÂCHES D'AUDIT RESTANTES

          ### 1. Titres SEO trop longs (>65 caractères) - 8 pages
          - `hemp-intense-orgasm.html` (95)
          - - `index.html` (86)
            - - `orgie-pinacolada.html` (83)
              - - `le-flateur.html` (80)
                - - `pink-star-choco-fraise.html` (78)
                  - - `dual-vibe-sex-on-the-beach.html` (71)
                    - - `pink-star.html` (70)
                      - - `pink_star_sucette_cerise.html` (69)
                       
                        - ### 2. Meta descriptions trop longues (>160 caractères) - 16 pages
                        - Jusqu'à 238 caractères pour `gel_cannabis_orgie.html`. Google tronque au-delà de 160.
                       
                        - ### 3. Pages techniques sans meta description
                        - - `success.html`
                          - - `cancel.html`
                            - - `erreur.html`
                             
                              - Non critique (bloquées dans robots.txt), mais à corriger pour la propreté.
                             
                              - ### 4. Image orpheline
                              - `orgie_gel_excitation_pina_colada_1.jpg` présente dans le repo mais non référencée.
                             
                              - ### 5. vercel.json - stratégie de cache
                              - Images en `immutable` 1 an. Risque si une image casse pendant un déploiement → 404 caché 1 an côté navigateurs.
                             
                              - ### 6. Cohérence des noms d'images
                              - Certains fichiers ont des espaces/accents :
                              - - `Déguisement Bunny.jpg`
                                - - `Vibro rechargeable Indiana1.jpg`
                                 
                                  - À renommer en kebab-case sans accents (optionnel).
                                 
                                  - ---

                                  ## 🔑 RAPPELS
                                  - Repo : `JLShop06/Les-Jardins-Enchantes`
                                  - - URL prod : https://lesjardinsenchantes.vercel.app/
                                    - - **NE PAS toucher** aux `price_id` Stripe
                                      - - ⚠️ L112-1-1 : le prix affiché doit être = prix Stripe encaissé
                                        - 
