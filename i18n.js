// i18n.js — Traduction automatique selon la langue du navigateur
// Les Jardins Enchantés — 5 langues : fr (défaut), pt, it, es, de
const TRANSLATIONS = {
  fr: {
    banner_livraison: "✦ LIVRAISON GRATUITE EN FRANCE ET EN EUROPE ✦",
    prod_add: "AJOUTER AU PANIER", prod_desc: "Description", prod_feat: "Caractéristiques",
    menu_tous: "TOUS", menu_gels_bio: "GELS LUBRIFIANTS BIO", menu_modes: "MODES",
    menu_gels: "GELS LUBRIFIANTS", menu_sextoys: "SEXTOYS",
    menu_deguisements: "DÉGUISEMENTS", menu_cockrings: "COCKRINGS", panier: "PANIER",
    cart_title: "VOTRE PANIER",
    footer_livraison: "Livraison gratuite en France et en Europe",
    footer_cgv: "CGV",
    footer_confid: "Confidentialité",
    footer_cookies: "Cookies",
    footer_mentions: "Mentions légales",
    hero_sous_titre: "— Maison Française · Sextoys · Gel Lubrifiant Bio · Huile de Massage —",
    hero_titre: "La boutique intime la plus raffinée de France & d'Europe.",
    cta_decouvrir: "Découvrir Sextoys, Gels & Huiles de Massage",
    arg_livraison: "✦ Livraison Gratuite en France & Europe",
    arg_paiement: "✦ Paiement 100% Sécurisé",
    arg_yuka: "✦ Gel Lubrifiant Bio Yuka 100/100",
    arg_premium: "✦ Sextoys & Huiles de Massage Premium",
    cart_total: "TOTAL", cart_pay: "PAYER", cart_empty: "Votre panier est vide",
    cart_clear: "VIDER LE PANIER", cart_loading: "CHARGEMENT...",
    marryme_title: "Wooomy – Cockring Vibrant Marry Me",
    marryme_subtitle: "Cockring vibrant rechargeable USB – 10 modes de vibrations – silicone premium – étanche IPX7.",
    marryme_desc1: "Le Cockring Vibrant Marry Me de Wooomy est un sextoy homme élégant et puissant conçu pour intensifier le plaisir des deux partenaires. Grâce à son anneau extensible en silicone premium, il améliore la qualité et la durée de l'érection tout en procurant une stimulation intense.",
    marryme_desc2: "Son moteur puissant propose 10 modes de vibrations afin d'explorer différentes sensations pendant la masturbation ou les rapports intimes. Son design ergonomique offre également une excellente stimulation clitoridienne pour le plaisir du couple.",
    marryme_desc3: "Rechargeable par USB et totalement étanche IPX7, ce sexetoy haut de gamme est idéal pour une utilisation sous la douche ou dans le bain. Compatible avec un gel lubrifiant intime ou un gel lubrifiant à base d'eau pour des sensations encore plus agréables.",
    marryme_desc4: "Chez Les Jardins Enchantés, découvrez une sélection premium de sextoys, stimulateurs clitoridiens, masturbateurs homme, accessoires de masturbation femme et déguisements sexy.",
    marryme_li1: "Cockring vibrant rechargeable",
    marryme_li2: "Stimule les sensations des deux partenaires",
    marryme_li3: "Améliore la durée et la qualité de l'érection",
    marryme_li4: "1 moteur puissant",
    marryme_li5: "10 modes de vibrations",
    marryme_li6: "Matière : silicone + ABS",
    marryme_li7: "Diamètre intérieur extensible : 3 cm",
    marryme_li8: "Hauteur : 9,3 cm",
    marryme_li9: "Étanche IPX7",
    marryme_li10: "Rechargeable USB (câble fourni)",
    marryme_li11: "Sans danger pour le corps",
    marryme_li12: "Marque : Wooomy",
    bunny_title: "J Lingerie – Déguisement Bunny Girl Sexy",
    bunny_subtitle: "Costume sexy 5 pièces avec body glamour, oreilles de lapin et accessoires Bunny Girl.",
    bunny_desc1: "Le déguisement Bunny Girl sexy J Lingerie est une tenue glamour et séduisante parfaite pour vos soirées déguisées, jeux de rôle ou événements festifs. Inspiré du célèbre look de lapine sexy, ce costume met en valeur la silhouette avec élégance.",
    bunny_desc2: "Ce costume Bunny Girl complet comprend 5 pièces : un serre-tête avec oreilles de lapin, un collier noeud papillon ras du cou, un body sexy, un pompon queue de lapin ainsi qu'une paire de manchettes fantaisie pour un style chic et irrésistible.",
    bunny_desc3: "Sa matière extensible composée de polyuréthane, polyester et élasthanne offre confort et maintien tout en sublimant les courbes. Ce déguisement sexy femme est idéal pour Halloween, cosplay, soirées glamour ou moments romantiques.",
    bunny_desc4: "Chez Les Jardins Enchantés, retrouvez une sélection premium de déguisements sexy femme, lingerie glamour, sextoys, stimulateurs clitoridiens et accessoires intimes.",
    bunny_li1: "Déguisement sexy Bunny Girl",
    bunny_li2: "Costume complet 5 pièces",
    bunny_li3: "Inclus : body, serre-tête oreilles, noeud papillon, pompon queue et manchettes",
    bunny_li4: "Style glamour inspiré Bunny Girl / lapine sexy",
    bunny_li5: "Matière extensible confortable",
    bunny_li6: "Composition : 20% polyuréthane, 76% polyester, 4% élasthanne",
    bunny_li7: "Taille unique",
    bunny_li8: "Coupe ajustée et sexy",
    bunny_li9: "Idéal pour soirées déguisées et Halloween",
    bunny_li10: "Marque : J Lingerie",
    magnum_title: "Toy Joy – Magnum Opus",
    magnum_subtitle: "Vibromasseur va-et-vient premium – 2 moteurs puissants – 4 modes de vibration – 3 intensités – USB rechargeable.",
    magnum_desc1: "Découvrez le Toy Joy Magnum Opus, un vibromasseur haut de gamme conçu pour reproduire des sensations réalistes grâce à sa fonction innovante de va-et-vient.",
    magnum_desc2: "Doté de 2 moteurs puissants, ce sextoy combine plusieurs modes de vibrations et mouvements afin d'offrir une expérience intense et personnalisée.",
    magnum_desc3: "Son revêtement en silicone ultra doux procure un confort exceptionnel tandis que sa taille généreuse permet des sensations profondes et immersives.",
    magnum_desc4: "Rechargeable par USB et conçu avec des matériaux hypoallergéniques sans phtalate, le Magnum Opus de Toy Joy allie luxe, puissance et élégance.",
    magnum_li1: "Fonction va-et-vient réaliste",
    magnum_li2: "Utilisation vaginale et anale",
    magnum_li3: "2 moteurs ultra puissants",
    magnum_li4: "4 modes de vibration",
    magnum_li5: "3 intensités de vibration",
    magnum_li6: "3 modes de va-et-vient",
    magnum_li7: "Silicone ultra doux + ABS premium",
    magnum_li8: "Rechargeable USB",
    magnum_li9: "Résistant aux éclaboussures",
    magnum_li10: "Sans phtalate et hypoallergénique",
    magnum_li11: "Dimensions : 31 cm dont 17 cm insérables",
    magnum_li12: "Diamètre : 3,5 cm",
    magnum_li13: "Marque : Toy Joy",
    rosygold_title: "Plug Anal Rosy Gold",
    rosygold_subtitle: "Accessoire intime premium à finition Rosy Gold — élégant, raffiné & conçu pour un plaisir contrôlé.",
    rosygold_desc1: "Le Plug Anal Rosy Gold est un accessoire intime premium conçu pour allier esthétique et confort. Sa finition dorée rosée lui donne un aspect élégant, parfait pour une expérience raffinée.",
    rosygold_desc2: "Forme ergonomique, matière lisse et base sécurisée pour une utilisation agréable, même pour débutants.",
    rosygold_li1: "Design Rosy Gold premium",
    rosygold_li2: "Matière lisse & douce",
    rosygold_li3: "Forme ergonomique",
    rosygold_li4: "Base large sécurisée",
    rosygold_li5: "Convient débutants & confirmés",
    rosygold_li6: "Nettoyage facile"
  },
  pt: {
    banner_livraison: "✦ ENTREGA GRATUITA EM FRANÇA E NA EUROPA ✦",
    prod_add: "ADICIONAR AO CARRINHO", prod_desc: "Descrição", prod_feat: "Características",
    menu_tous: "TODOS", menu_gels_bio: "GÉIS LUBRIFICANTES BIO", menu_modes: "MODA",
    menu_gels: "GÉIS LUBRIFICANTES", menu_sextoys: "BRINQUEDOS SEXUAIS",
    menu_deguisements: "FANTASIAS", menu_cockrings: "ANÉIS PENIANOS", panier: "CARRINHO",
    cart_title: "O SEU CARRINHO",
    footer_livraison: "Entrega gratuita em França e na Europa",
    footer_cgv: "CGV",
    footer_confid: "Confidencialidade",
    footer_cookies: "Cookies",
    footer_mentions: "Avisos legais",
    hero_sous_titre: "— Marca Francesa · Brinquedos Sexuais · Gel Lubrificante Bio · Óleo de Massagem —",
    hero_titre: "A boutique íntima mais refinada de França e da Europa.",
    cta_decouvrir: "Descobrir Brinquedos, Géis e Óleos de Massagem",
    arg_livraison: "✦ Entrega Gratuita em França e na Europa",
    arg_paiement: "✦ Pagamento 100% Seguro",
    arg_yuka: "✦ Gel Lubrificante Bio Yuka 100/100",
    arg_premium: "✦ Brinquedos Sexuais e Óleos de Massagem Premium",
    cart_total: "TOTAL", cart_pay: "PAGAR", cart_empty: "O seu carrinho está vazio",
    cart_clear: "ESVAZIAR O CARRINHO", cart_loading: "A CARREGAR...",
    marryme_title: "Wooomy – Anel Peniano Vibratório Marry Me",
    marryme_subtitle: "Anel peniano vibratório recarregável por USB – 10 modos de vibração – silicone premium – à prova de água IPX7.",
    marryme_desc1: "O Anel Peniano Vibratório Marry Me da Wooomy é um brinquedo sexual masculino elegante e potente, concebido para intensificar o prazer de ambos os parceiros. Graças ao seu anel extensível em silicone premium, melhora a qualidade e a duração da ereção, proporcionando ao mesmo tempo uma estimulação intensa.",
    marryme_desc2: "O seu motor potente oferece 10 modos de vibração para explorar diferentes sensações durante a masturbação ou as relações íntimas. O seu design ergonómico proporciona também uma excelente estimulação do clítoris para o prazer do casal.",
    marryme_desc3: "Recarregável por USB e totalmente à prova de água IPX7, este brinquedo sexual de alta qualidade é ideal para utilizar no duche ou na banheira. Compatível com um gel lubrificante íntimo ou um gel lubrificante à base de água para sensações ainda mais agradáveis.",
    marryme_desc4: "Nos Jardins Encantados, descubra uma seleção premium de brinquedos sexuais, estimuladores do clítoris, masturbadores masculinos, acessórios de masturbação feminina e fantasias sensuais.",
    marryme_li1: "Anel peniano vibratório recarregável",
    marryme_li2: "Estimula as sensações de ambos os parceiros",
    marryme_li3: "Melhora a duração e a qualidade da ereção",
    marryme_li4: "1 motor potente",
    marryme_li5: "10 modos de vibração",
    marryme_li6: "Material: silicone + ABS",
    marryme_li7: "Diâmetro interior extensível: 3 cm",
    marryme_li8: "Altura: 9,3 cm",
    marryme_li9: "À prova de água IPX7",
    marryme_li10: "Recarregável por USB (cabo incluído)",
    marryme_li11: "Seguro para o corpo",
    marryme_li12: "Marca: Wooomy",
    bunny_title: "J Lingerie – Fantasia Coelhinha Sexy",
    bunny_subtitle: "Fantasia sensual de 5 peças com body glamoroso, orelhas de coelho e acessórios de coelhinha.",
    bunny_desc1: "A fantasia de coelhinha sexy J Lingerie é um traje glamoroso e sedutor, perfeito para as suas festas a fantasia, jogos de papéis ou eventos festivos. Inspirada no famoso visual de coelhinha sensual, esta fantasia valoriza a silhueta com elegância.",
    bunny_desc2: "Esta fantasia de coelhinha completa inclui 5 peças: uma bandolete com orelhas de coelho, uma gargantilha com laço, um body sensual, um pompom de cauda de coelho e ainda um par de punhos decorativos para um estilo chique e irresistível.",
    bunny_desc3: "O seu tecido elástico, composto por poliuretano, poliéster e elastano, oferece conforto e sustentação ao mesmo tempo que realça as curvas. Esta fantasia sensual feminina é ideal para o Halloween, cosplay, festas glamorosas ou momentos românticos.",
    bunny_desc4: "Nos Jardins Encantados, encontre uma seleção premium de fantasias sensuais femininas, lingerie glamorosa, brinquedos sexuais, estimuladores do clítoris e acessórios íntimos.",
    bunny_li1: "Fantasia sensual de coelhinha",
    bunny_li2: "Traje completo de 5 peças",
    bunny_li3: "Inclui: body, bandolete com orelhas, laço, pompom de cauda e punhos",
    bunny_li4: "Estilo glamoroso inspirado na coelhinha sensual",
    bunny_li5: "Tecido elástico e confortável",
    bunny_li6: "Composição: 20% poliuretano, 76% poliéster, 4% elastano",
    bunny_li7: "Tamanho único",
    bunny_li8: "Corte ajustado e sensual",
    bunny_li9: "Ideal para festas a fantasia e Halloween",
    bunny_li10: "Marca: J Lingerie",
    magnum_title: "Toy Joy – Magnum Opus",
    magnum_subtitle: "Vibrador premium com movimento de vaivém – 2 motores potentes – 4 modos de vibração – 3 intensidades – recarregável por USB.",
    magnum_desc1: "Descubra o Toy Joy Magnum Opus, um vibrador de alta qualidade concebido para reproduzir sensações realistas graças à sua função inovadora de vaivém.",
    magnum_desc2: "Equipado com 2 motores potentes, este brinquedo sexual combina vários modos de vibração e movimento para oferecer uma experiência intensa e personalizada.",
    magnum_desc3: "O seu revestimento em silicone ultra suave proporciona um conforto excecional, enquanto o seu tamanho generoso permite sensações profundas e imersivas.",
    magnum_desc4: "Recarregável por USB e concebido com materiais hipoalergénicos sem ftalatos, o Magnum Opus da Toy Joy alia luxo, potência e elegância.",
    magnum_li1: "Função de vaivém realista",
    magnum_li2: "Utilização vaginal e anal",
    magnum_li3: "2 motores ultra potentes",
    magnum_li4: "4 modos de vibração",
    magnum_li5: "3 intensidades de vibração",
    magnum_li6: "3 modos de vaivém",
    magnum_li7: "Silicone ultra suave + ABS premium",
    magnum_li8: "Recarregável por USB",
    magnum_li9: "Resistente a salpicos",
    magnum_li10: "Sem ftalatos e hipoalergénico",
    magnum_li11: "Dimensões: 31 cm, dos quais 17 cm inseríveis",
    magnum_li12: "Diâmetro: 3,5 cm",
    magnum_li13: "Marca: Toy Joy",
    rosygold_title: "Plug Anal Rosy Gold",
    rosygold_subtitle: "Acessório íntimo premium com acabamento Rosy Gold — elegante, refinado e concebido para um prazer controlado.",
    rosygold_desc1: "O Plug Anal Rosy Gold é um acessório íntimo premium concebido para aliar estética e conforto. O seu acabamento dourado rosado dá-lhe um aspeto elegante, perfeito para uma experiência refinada.",
    rosygold_desc2: "Forma ergonómica, material liso e base segura para uma utilização agradável, mesmo para iniciantes.",
    rosygold_li1: "Design Rosy Gold premium",
    rosygold_li2: "Material liso e suave",
    rosygold_li3: "Forma ergonómica",
    rosygold_li4: "Base larga e segura",
    rosygold_li5: "Adequado a iniciantes e experientes",
    rosygold_li6: "Limpeza fácil"
  },
  it: {
    banner_livraison: "✦ SPEDIZIONE GRATUITA IN FRANCIA E IN EUROPA ✦",
    prod_add: "AGGIUNGI AL CARRELLO", prod_desc: "Descrizione", prod_feat: "Caratteristiche",
    menu_tous: "TUTTI", menu_gels_bio: "GEL LUBRIFICANTI BIO", menu_modes: "MODA",
    menu_gels: "GEL LUBRIFICANTI", menu_sextoys: "GIOCATTOLI EROTICI",
    menu_deguisements: "COSTUMI", menu_cockrings: "ANELLI FALLICI", panier: "CARRELLO",
    cart_title: "IL TUO CARRELLO",
    footer_livraison: "Spedizione gratuita in Francia e in Europa",
    footer_cgv: "Condizioni di vendita",
    footer_confid: "Riservatezza",
    footer_cookies: "Cookie",
    footer_mentions: "Note legali",
    hero_sous_titre: "— Marchio Francese · Giocattoli Erotici · Gel Lubrificante Bio · Olio da Massaggio —",
    hero_titre: "La boutique intima più raffinata di Francia ed Europa.",
    cta_decouvrir: "Scopri Giocattoli, Gel e Oli da Massaggio",
    arg_livraison: "✦ Spedizione Gratuita in Francia e in Europa",
    arg_paiement: "✦ Pagamento 100% Sicuro",
    arg_yuka: "✦ Gel Lubrificante Bio Yuka 100/100",
    arg_premium: "✦ Giocattoli Erotici e Oli da Massaggio Premium",
    cart_total: "TOTALE", cart_pay: "PAGA", cart_empty: "Il tuo carrello è vuoto",
    cart_clear: "SVUOTA IL CARRELLO", cart_loading: "CARICAMENTO...",
    marryme_title: "Wooomy – Anello Fallico Vibrante Marry Me",
    marryme_subtitle: "Anello fallico vibrante ricaricabile via USB – 10 modalità di vibrazione – silicone premium – impermeabile IPX7.",
    marryme_desc1: "L'Anello Fallico Vibrante Marry Me di Wooomy è un giocattolo erotico maschile elegante e potente, progettato per intensificare il piacere di entrambi i partner. Grazie al suo anello estensibile in silicone premium, migliora la qualità e la durata dell'erezione offrendo al contempo una stimolazione intensa.",
    marryme_desc2: "Il suo potente motore propone 10 modalità di vibrazione per esplorare diverse sensazioni durante la masturbazione o i rapporti intimi. Il suo design ergonomico offre inoltre un'eccellente stimolazione clitoridea per il piacere della coppia.",
    marryme_desc3: "Ricaricabile via USB e completamente impermeabile IPX7, questo giocattolo erotico di alta gamma è ideale per l'uso sotto la doccia o nella vasca da bagno. Compatibile con un gel lubrificante intimo o un gel lubrificante a base d'acqua per sensazioni ancora più piacevoli.",
    marryme_desc4: "Da Les Jardins Enchantés, scoprite una selezione premium di giocattoli erotici, stimolatori clitoridei, masturbatori maschili, accessori per la masturbazione femminile e costumi sensuali.",
    marryme_li1: "Anello fallico vibrante ricaricabile",
    marryme_li2: "Stimola le sensazioni di entrambi i partner",
    marryme_li3: "Migliora la durata e la qualità dell'erezione",
    marryme_li4: "1 motore potente",
    marryme_li5: "10 modalità di vibrazione",
    marryme_li6: "Materiale: silicone + ABS",
    marryme_li7: "Diametro interno estensibile: 3 cm",
    marryme_li8: "Altezza: 9,3 cm",
    marryme_li9: "Impermeabile IPX7",
    marryme_li10: "Ricaricabile via USB (cavo incluso)",
    marryme_li11: "Sicuro per il corpo",
    marryme_li12: "Marca: Wooomy",
    bunny_title: "J Lingerie – Costume da Coniglietta Sexy",
    bunny_subtitle: "Costume sexy in 5 pezzi con body glamour, orecchie da coniglio e accessori da coniglietta.",
    bunny_desc1: "Il costume da coniglietta sexy J Lingerie è un completo glamour e seducente, perfetto per le vostre feste in maschera, giochi di ruolo o eventi festivi. Ispirato al celebre look della coniglietta sexy, questo costume valorizza la silhouette con eleganza.",
    bunny_desc2: "Questo costume da coniglietta completo comprende 5 pezzi: un cerchietto con orecchie da coniglio, un girocollo con fiocco, un body sexy, un pompon a forma di coda di coniglio e un paio di polsini fantasia per uno stile chic e irresistibile.",
    bunny_desc3: "Il suo tessuto elasticizzato, composto da poliuretano, poliestere ed elastan, offre comfort e sostegno esaltando al contempo le curve. Questo costume sexy da donna è ideale per Halloween, cosplay, serate glamour o momenti romantici.",
    bunny_desc4: "Da Les Jardins Enchantés, scoprite una selezione premium di costumi sexy da donna, lingerie glamour, giocattoli erotici, stimolatori clitoridei e accessori intimi.",
    bunny_li1: "Costume sexy da coniglietta",
    bunny_li2: "Costume completo in 5 pezzi",
    bunny_li3: "Include: body, cerchietto con orecchie, fiocco, pompon coda e polsini",
    bunny_li4: "Stile glamour ispirato alla coniglietta sexy",
    bunny_li5: "Tessuto elasticizzato e confortevole",
    bunny_li6: "Composizione: 20% poliuretano, 76% poliestere, 4% elastan",
    bunny_li7: "Taglia unica",
    bunny_li8: "Taglio aderente e sexy",
    bunny_li9: "Ideale per feste in maschera e Halloween",
    bunny_li10: "Marca: J Lingerie",
    magnum_title: "Toy Joy – Magnum Opus",
    magnum_subtitle: "Vibratore premium con movimento avanti-indietro – 2 motori potenti – 4 modalità di vibrazione – 3 intensità – ricaricabile via USB.",
    magnum_desc1: "Scopri il Toy Joy Magnum Opus, un vibratore di alta gamma progettato per riprodurre sensazioni realistiche grazie alla sua innovativa funzione avanti-indietro.",
    magnum_desc2: "Dotato di 2 motori potenti, questo sextoy combina diverse modalità di vibrazione e movimento per offrire un'esperienza intensa e personalizzata.",
    magnum_desc3: "Il suo rivestimento in silicone ultra morbido garantisce un comfort eccezionale, mentre le sue dimensioni generose permettono sensazioni profonde e avvolgenti.",
    magnum_desc4: "Ricaricabile via USB e realizzato con materiali ipoallergenici senza ftalati, il Magnum Opus di Toy Joy unisce lusso, potenza ed eleganza.",
    magnum_li1: "Funzione avanti-indietro realistica",
    magnum_li2: "Uso vaginale e anale",
    magnum_li3: "2 motori ultra potenti",
    magnum_li4: "4 modalità di vibrazione",
    magnum_li5: "3 intensità di vibrazione",
    magnum_li6: "3 modalità avanti-indietro",
    magnum_li7: "Silicone ultra morbido + ABS premium",
    magnum_li8: "Ricaricabile via USB",
    magnum_li9: "Resistente agli schizzi",
    magnum_li10: "Senza ftalati e ipoallergenico",
    magnum_li11: "Dimensioni: 31 cm di cui 17 cm inseribili",
    magnum_li12: "Diametro: 3,5 cm",
    magnum_li13: "Marca: Toy Joy",
    rosygold_title: "Plug Anal Rosy Gold",
    rosygold_subtitle: "Accessorio intimo premium con finitura Rosy Gold — elegante, raffinato e pensato per un piacere controllato.",
    rosygold_desc1: "Il Plug Anal Rosy Gold è un accessorio intimo premium pensato per unire estetica e comfort. La sua finitura dorata rosata gli conferisce un aspetto elegante, perfetto per un'esperienza raffinata.",
    rosygold_desc2: "Forma ergonomica, materiale liscio e base sicura per un utilizzo piacevole, anche per principianti.",
    rosygold_li1: "Design Rosy Gold premium",
    rosygold_li2: "Materiale liscio e morbido",
    rosygold_li3: "Forma ergonomica",
    rosygold_li4: "Base larga e sicura",
    rosygold_li5: "Adatto a principianti ed esperti",
    rosygold_li6: "Pulizia facile"
  },
  es: {
    banner_livraison: "✦ ENVÍO GRATUITO EN FRANCIA Y EN EUROPA ✦",
    prod_add: "AÑADIR A LA CESTA", prod_desc: "Descripción", prod_feat: "Características",
    menu_tous: "TODOS", menu_gels_bio: "GELES LUBRICANTES BIO", menu_modes: "MODA",
    menu_gels: "GELES LUBRICANTES", menu_sextoys: "JUGUETES SEXUALES",
    menu_deguisements: "DISFRACES", menu_cockrings: "ANILLOS PENEANOS", panier: "CESTA",
    cart_title: "TU CESTA",
    footer_livraison: "Envío gratuito en Francia y en Europa",
    footer_cgv: "Condiciones de venta",
    footer_confid: "Confidencialidad",
    footer_cookies: "Cookies",
    footer_mentions: "Aviso legal",
    hero_sous_titre: "— Marca Francesa · Juguetes Sexuales · Gel Lubricante Bio · Aceite de Masaje —",
    hero_titre: "La boutique íntima más refinada de Francia y de Europa.",
    cta_decouvrir: "Descubrir Juguetes, Geles y Aceites de Masaje",
    arg_livraison: "✦ Envío Gratuito en Francia y en Europa",
    arg_paiement: "✦ Pago 100% Seguro",
    arg_yuka: "✦ Gel Lubricante Bio Yuka 100/100",
    arg_premium: "✦ Juguetes Sexuales y Aceites de Masaje Premium",
    cart_total: "TOTAL", cart_pay: "PAGAR", cart_empty: "Tu cesta está vacía",
    cart_clear: "VACIAR LA CESTA", cart_loading: "CARGANDO...",
    marryme_title: "Wooomy – Anillo Peneano Vibrador Marry Me",
    marryme_subtitle: "Anillo peneano vibrador recargable por USB – 10 modos de vibración – silicona premium – impermeable IPX7.",
    marryme_desc1: "El Anillo Peneano Vibrador Marry Me de Wooomy es un juguete sexual masculino elegante y potente, diseñado para intensificar el placer de ambos miembros de la pareja. Gracias a su anillo extensible de silicona premium, mejora la calidad y la duración de la erección al tiempo que proporciona una estimulación intensa.",
    marryme_desc2: "Su potente motor ofrece 10 modos de vibración para explorar diferentes sensaciones durante la masturbación o las relaciones íntimas. Su diseño ergonómico ofrece además una excelente estimulación del clítoris para el placer de la pareja.",
    marryme_desc3: "Recargable por USB y totalmente impermeable IPX7, este juguete sexual de alta gama es ideal para usar en la ducha o en la bañera. Compatible con un gel lubricante íntimo o un gel lubricante a base de agua para sensaciones aún más placenteras.",
    marryme_desc4: "En Les Jardins Enchantés, descubre una selección premium de juguetes sexuales, estimuladores del clítoris, masturbadores masculinos, accesorios de masturbación femenina y disfraces sensuales.",
    marryme_li1: "Anillo peneano vibrador recargable",
    marryme_li2: "Estimula las sensaciones de ambos miembros de la pareja",
    marryme_li3: "Mejora la duración y la calidad de la erección",
    marryme_li4: "1 motor potente",
    marryme_li5: "10 modos de vibración",
    marryme_li6: "Material: silicona + ABS",
    marryme_li7: "Diámetro interior extensible: 3 cm",
    marryme_li8: "Altura: 9,3 cm",
    marryme_li9: "Impermeable IPX7",
    marryme_li10: "Recargable por USB (cable incluido)",
    marryme_li11: "Seguro para el cuerpo",
    marryme_li12: "Marca: Wooomy",
    bunny_title: "J Lingerie – Disfraz de Conejita Sexy",
    bunny_subtitle: "Disfraz sexy de 5 piezas con body glamuroso, orejas de conejo y accesorios de conejita.",
    bunny_desc1: "El disfraz de conejita sexy J Lingerie es un conjunto glamuroso y seductor, perfecto para tus fiestas de disfraces, juegos de rol o eventos festivos. Inspirado en el famoso look de conejita sexy, este disfraz realza la silueta con elegancia.",
    bunny_desc2: "Este disfraz de conejita completo incluye 5 piezas: una diadema con orejas de conejo, una gargantilla con lazo, un body sexy, un pompón de cola de conejo y un par de puños de fantasía para un estilo chic e irresistible.",
    bunny_desc3: "Su tejido elástico, compuesto de poliuretano, poliéster y elastano, ofrece comodidad y sujeción al tiempo que realza las curvas. Este disfraz sexy de mujer es ideal para Halloween, cosplay, fiestas glamurosas o momentos románticos.",
    bunny_desc4: "En Les Jardins Enchantés, descubre una selección premium de disfraces sexy de mujer, lencería glamurosa, juguetes sexuales, estimuladores del clítoris y accesorios íntimos.",
    bunny_li1: "Disfraz sexy de conejita",
    bunny_li2: "Conjunto completo de 5 piezas",
    bunny_li3: "Incluye: body, diadema con orejas, lazo, pompón de cola y puños",
    bunny_li4: "Estilo glamuroso inspirado en la conejita sexy",
    bunny_li5: "Tejido elástico y cómodo",
    bunny_li6: "Composición: 20% poliuretano, 76% poliéster, 4% elastano",
    bunny_li7: "Talla única",
    bunny_li8: "Corte ajustado y sexy",
    bunny_li9: "Ideal para fiestas de disfraces y Halloween",
    bunny_li10: "Marca: J Lingerie",
    magnum_title: "Toy Joy – Magnum Opus",
    magnum_subtitle: "Vibrador premium con movimiento de vaivén – 2 motores potentes – 4 modos de vibración – 3 intensidades – recargable por USB.",
    magnum_desc1: "Descubre el Toy Joy Magnum Opus, un vibrador de alta gama diseñado para reproducir sensaciones realistas gracias a su innovadora función de vaivén.",
    magnum_desc2: "Equipado con 2 motores potentes, este juguete sexual combina varios modos de vibración y movimiento para ofrecer una experiencia intensa y personalizada.",
    magnum_desc3: "Su revestimiento de silicona ultra suave proporciona un confort excepcional, mientras que su tamaño generoso permite sensaciones profundas e inmersivas.",
    magnum_desc4: "Recargable por USB y fabricado con materiales hipoalergénicos sin ftalatos, el Magnum Opus de Toy Joy combina lujo, potencia y elegancia.",
    magnum_li1: "Función de vaivén realista",
    magnum_li2: "Uso vaginal y anal",
    magnum_li3: "2 motores ultra potentes",
    magnum_li4: "4 modos de vibración",
    magnum_li5: "3 intensidades de vibración",
    magnum_li6: "3 modos de vaivén",
    magnum_li7: "Silicona ultra suave + ABS premium",
    magnum_li8: "Recargable por USB",
    magnum_li9: "Resistente a salpicaduras",
    magnum_li10: "Sin ftalatos e hipoalergénico",
    magnum_li11: "Dimensiones: 31 cm, de los cuales 17 cm insertables",
    magnum_li12: "Diámetro: 3,5 cm",
    magnum_li13: "Marca: Toy Joy",
    rosygold_title: "Plug Anal Rosy Gold",
    rosygold_subtitle: "Accesorio íntimo premium con acabado Rosy Gold — elegante, refinado y diseñado para un placer controlado.",
    rosygold_desc1: "El Plug Anal Rosy Gold es un accesorio íntimo premium diseñado para combinar estética y confort. Su acabado dorado rosado le da un aspecto elegante, perfecto para una experiencia refinada.",
    rosygold_desc2: "Forma ergonómica, material liso y base segura para un uso agradable, incluso para principiantes.",
    rosygold_li1: "Diseño Rosy Gold premium",
    rosygold_li2: "Material liso y suave",
    rosygold_li3: "Forma ergonómica",
    rosygold_li4: "Base ancha y segura",
    rosygold_li5: "Apto para principiantes y expertos",
    rosygold_li6: "Limpieza fácil"
  },
  de: {
    banner_livraison: "✦ KOSTENLOSER VERSAND IN FRANKREICH UND EUROPA ✦",
    prod_add: "IN DEN WARENKORB", prod_desc: "Beschreibung", prod_feat: "Merkmale",
    menu_tous: "ALLE", menu_gels_bio: "BIO-GLEITGELE", menu_modes: "MODE",
    menu_gels: "GLEITGELE", menu_sextoys: "SEXSPIELZEUG",
    menu_deguisements: "KOSTÜME", menu_cockrings: "PENISRINGE", panier: "WARENKORB",
    cart_title: "IHR WARENKORB",
    footer_livraison: "Kostenloser Versand in Frankreich und Europa",
    footer_cgv: "AGB",
    footer_confid: "Datenschutz",
    footer_cookies: "Cookies",
    footer_mentions: "Impressum",
    hero_sous_titre: "— Französische Marke · Sexspielzeug · Bio-Gleitgel · Massageöl —",
    hero_titre: "Die edelste Intim-Boutique Frankreichs und Europas.",
    cta_decouvrir: "Sexspielzeug, Gele & Massageöle entdecken",
    arg_livraison: "✦ Kostenloser Versand in Frankreich & Europa",
    arg_paiement: "✦ 100% Sichere Zahlung",
    arg_yuka: "✦ Bio-Gleitgel Yuka 100/100",
    arg_premium: "✦ Premium-Sexspielzeug & Massageöle",
    cart_total: "SUMME", cart_pay: "BEZAHLEN", cart_empty: "Ihr Warenkorb ist leer",
    cart_clear: "WARENKORB LEEREN", cart_loading: "LÄDT...",
    marryme_title: "Wooomy – Vibrierender Penisring Marry Me",
    marryme_subtitle: "Vibrierender Penisring, per USB aufladbar – 10 Vibrationsmodi – Premium-Silikon – wasserdicht IPX7.",
    marryme_desc1: "Der vibrierende Penisring Marry Me von Wooomy ist ein elegantes und kraftvolles Sexspielzeug für Männer, das entwickelt wurde, um das Vergnügen beider Partner zu steigern. Dank seines dehnbaren Rings aus Premium-Silikon verbessert er die Qualität und Dauer der Erektion und sorgt zugleich für eine intensive Stimulation.",
    marryme_desc2: "Sein kraftvoller Motor bietet 10 Vibrationsmodi, um beim Masturbieren oder beim intimen Verkehr verschiedene Empfindungen zu entdecken. Sein ergonomisches Design sorgt außerdem für eine hervorragende Klitorisstimulation zum Vergnügen des Paares.",
    marryme_desc3: "Per USB aufladbar und vollständig wasserdicht nach IPX7, ist dieses hochwertige Sexspielzeug ideal für die Verwendung unter der Dusche oder in der Badewanne. Kompatibel mit einem intimen Gleitgel oder einem Gleitgel auf Wasserbasis für noch angenehmere Empfindungen.",
    marryme_desc4: "Bei Les Jardins Enchantés entdecken Sie eine erstklassige Auswahl an Sexspielzeug, Klitorisstimulatoren, Masturbatoren für Männer, Zubehör für die weibliche Masturbation und sinnlichen Kostümen.",
    marryme_li1: "Vibrierender Penisring, aufladbar",
    marryme_li2: "Stimuliert die Empfindungen beider Partner",
    marryme_li3: "Verbessert Dauer und Qualität der Erektion",
    marryme_li4: "1 kraftvoller Motor",
    marryme_li5: "10 Vibrationsmodi",
    marryme_li6: "Material: Silikon + ABS",
    marryme_li7: "Dehnbarer Innendurchmesser: 3 cm",
    marryme_li8: "Höhe: 9,3 cm",
    marryme_li9: "Wasserdicht IPX7",
    marryme_li10: "Per USB aufladbar (Kabel im Lieferumfang)",
    marryme_li11: "Körperverträglich",
    marryme_li12: "Marke: Wooomy",
    bunny_title: "J Lingerie – Sexy Bunny-Girl-Kostüm",
    bunny_subtitle: "Sexy 5-teiliges Kostüm mit glamourösem Body, Hasenohren und Bunny-Girl-Accessoires.",
    bunny_desc1: "Das sexy Bunny-Girl-Kostüm von J Lingerie ist ein glamouröses und verführerisches Outfit, perfekt für Ihre Kostümpartys, Rollenspiele oder festliche Anlässe. Inspiriert vom berühmten Look des sexy Häschens, bringt dieses Kostüm die Silhouette elegant zur Geltung.",
    bunny_desc2: "Dieses komplette Bunny-Girl-Kostüm umfasst 5 Teile: ein Haarreif mit Hasenohren, ein Halsband mit Schleife, einen sexy Body, einen Pompon als Hasenschwanz sowie ein Paar dekorative Manschetten für einen schicken und unwiderstehlichen Stil.",
    bunny_desc3: "Sein dehnbares Material aus Polyurethan, Polyester und Elasthan bietet Komfort und Halt und betont zugleich die Kurven. Dieses sexy Damenkostüm ist ideal für Halloween, Cosplay, glamouröse Abende oder romantische Momente.",
    bunny_desc4: "Bei Les Jardins Enchantés finden Sie eine erstklassige Auswahl an sexy Damenkostümen, glamouröser Dessous, Sexspielzeug, Klitorisstimulatoren und intimen Accessoires.",
    bunny_li1: "Sexy Bunny-Girl-Kostüm",
    bunny_li2: "Komplettes 5-teiliges Kostüm",
    bunny_li3: "Enthält: Body, Haarreif mit Ohren, Schleife, Schwanz-Pompon und Manschetten",
    bunny_li4: "Glamouröser Stil im Bunny-Girl-Look",
    bunny_li5: "Dehnbares, bequemes Material",
    bunny_li6: "Zusammensetzung: 20% Polyurethan, 76% Polyester, 4% Elasthan",
    bunny_li7: "Einheitsgröße",
    bunny_li8: "Figurbetonter und sexy Schnitt",
    bunny_li9: "Ideal für Kostümpartys und Halloween",
    bunny_li10: "Marke: J Lingerie",
    magnum_title: "Toy Joy – Magnum Opus",
    magnum_subtitle: "Premium-Vibrator mit Stoßfunktion – 2 starke Motoren – 4 Vibrationsmodi – 3 Intensitäten – USB-aufladbar.",
    magnum_desc1: "Entdecken Sie den Toy Joy Magnum Opus, einen hochwertigen Vibrator, der dank seiner innovativen Stoßfunktion realistische Empfindungen nachbildet.",
    magnum_desc2: "Ausgestattet mit 2 starken Motoren kombiniert dieses Sextoy mehrere Vibrations- und Bewegungsmodi für ein intensives und individuelles Erlebnis.",
    magnum_desc3: "Seine ultraweiche Silikonbeschichtung bietet außergewöhnlichen Komfort, während seine großzügige Größe tiefe und immersive Empfindungen ermöglicht.",
    magnum_desc4: "USB-aufladbar und aus hypoallergenen, phthalatfreien Materialien gefertigt, vereint der Magnum Opus von Toy Joy Luxus, Kraft und Eleganz.",
    magnum_li1: "Realistische Stoßfunktion",
    magnum_li2: "Vaginale und anale Anwendung",
    magnum_li3: "2 ultrastarke Motoren",
    magnum_li4: "4 Vibrationsmodi",
    magnum_li5: "3 Vibrationsintensitäten",
    magnum_li6: "3 Stoßmodi",
    magnum_li7: "Ultraweiches Silikon + ABS Premium",
    magnum_li8: "USB-aufladbar",
    magnum_li9: "Spritzwassergeschützt",
    magnum_li10: "Phthalatfrei und hypoallergen",
    magnum_li11: "Maße: 31 cm, davon 17 cm einführbar",
    magnum_li12: "Durchmesser: 3,5 cm",
    magnum_li13: "Marke: Toy Joy",
    rosygold_title: "Plug Anal Rosy Gold",
    rosygold_subtitle: "Premium-Intimaccessoire mit Rosy-Gold-Finish — elegant, raffiniert und für kontrolliertes Vergnügen konzipiert.",
    rosygold_desc1: "Der Plug Anal Rosy Gold ist ein Premium-Intimaccessoire, das Ästhetik und Komfort vereint. Sein rosé-goldenes Finish verleiht ihm ein elegantes Aussehen, perfekt für ein raffiniertes Erlebnis.",
    rosygold_desc2: "Ergonomische Form, glattes Material und sichere Basis für eine angenehme Anwendung, auch für Anfänger.",
    rosygold_li1: "Premium-Design in Rosy Gold",
    rosygold_li2: "Glattes und weiches Material",
    rosygold_li3: "Ergonomische Form",
    rosygold_li4: "Breite, sichere Basis",
    rosygold_li5: "Für Anfänger und Fortgeschrittene geeignet",
    rosygold_li6: "Einfache Reinigung"
  }
};

function getLang() {
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "fr").slice(0, 2).toLowerCase();
  return saved || (TRANSLATIONS[browser] ? browser : "fr");
}

function applyTranslations() {
  const lang = getLang();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

function translateProduct() {
  const lang = getLang();
  if (lang === "fr") return;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  const fr = TRANSLATIONS.fr;
  // bouton AJOUTER AU PANIER
  document.querySelectorAll(".add-to-cart").forEach(b => {
    if (b.textContent.trim() === fr.prod_add && dict.prod_add) b.textContent = dict.prod_add;
  });
  // titres de section Description / Caractéristiques
  document.querySelectorAll(".section-title").forEach(h => {
    const t = h.textContent.trim();
    if (t === fr.prod_desc && dict.prod_desc) h.textContent = dict.prod_desc;
    else if (t === fr.prod_feat && dict.prod_feat) h.textContent = dict.prod_feat;
  });
}

function translateCart() {
  const lang = getLang();
  if (lang === "fr") return;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  const fr = TRANSLATIONS.fr;
  const pairs = [
    ["cart_total", fr.cart_total], ["cart_pay", fr.cart_pay],
    ["cart_empty", fr.cart_empty], ["cart_clear", fr.cart_clear],
    ["cart_loading", fr.cart_loading]
  ];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    const txt = n.textContent.trim();
    for (const [key, frVal] of pairs) {
      if (txt === frVal && dict[key]) { n.textContent = n.textContent.replace(frVal, dict[key]); }
    }
  }
}

function initI18n() {
  applyTranslations();
  translateProduct();
  const obs = new MutationObserver(() => { translateCart(); translateProduct(); });
  obs.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}


/* === Selecteur de langue (additif, ne casse pas l'existant) === */
(function(){
  var SUPPORTED = ['fr','pt','es','it','de'];
  var LABELS = { fr:'FR', pt:'PT', es:'ES', it:'IT', de:'DE' };
  window.setLang = function(lang){
    if (SUPPORTED.indexOf(lang) === -1) lang = 'fr';
    try { localStorage.setItem('lang', lang); } catch(e){}
    document.documentElement.lang = lang;
    if (typeof initI18n === 'function') initI18n();
    document.querySelectorAll('.lang-switch__btn').forEach(function(b){
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
  };
  window.renderLangSwitcher = function(){
    document.querySelectorAll('.lang-switch').forEach(function(box){
      if (box.dataset.ready) return;
      box.dataset.ready = '1';
      var cur = (typeof getLang === 'function') ? getLang() : 'fr';
      SUPPORTED.forEach(function(l){
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'lang-switch__btn' + (l === cur ? ' is-active' : '');
        b.setAttribute('data-lang', l);
        b.textContent = LABELS[l];
        b.addEventListener('click', function(){ window.setLang(l); });
        box.appendChild(b);
      });
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.renderLangSwitcher);
  } else {
    window.renderLangSwitcher();
  }
})();
