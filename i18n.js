// i18n.js — Traduction automatique selon la langue du navigateur
// Les Jardins Enchantés — 5 langues : fr (défaut), pt, it, es, de
const TRANSLATIONS = {
  fr: {
    banner_livraison: "✦ LIVRAISON GRATUITE EN FRANCE ET EN EUROPE ✦",
    prod_add: "AJOUTER AU PANIER", prod_desc: "Description", prod_feat: "Caractéristiques",
    menu_tous: "TOUS", menu_gels_bio: "GELS LUBRIFIANTS BIO", menu_modes: "MODES",
    menu_gels: "GELS LUBRIFIANTS", menu_sextoys: "SEXTOYS",
    menu_deguisements: "DÉGUISEMENTS", menu_cockrings: "COCKRINGS", panier: "PANIER",
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
    marryme_li12: "Marque : Wooomy"
  },
  pt: {
    banner_livraison: "✦ ENTREGA GRATUITA EM FRANÇA E NA EUROPA ✦",
    prod_add: "ADICIONAR AO CARRINHO", prod_desc: "Descrição", prod_feat: "Características",
    menu_tous: "TODOS", menu_gels_bio: "GÉIS LUBRIFICANTES BIO", menu_modes: "MODA",
    menu_gels: "GÉIS LUBRIFICANTES", menu_sextoys: "BRINQUEDOS SEXUAIS",
    menu_deguisements: "FANTASIAS", menu_cockrings: "ANÉIS PENIANOS", panier: "CARRINHO",
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
    marryme_li12: "Marca: Wooomy"
  },
  it: {
    banner_livraison: "✦ SPEDIZIONE GRATUITA IN FRANCIA E IN EUROPA ✦",
    prod_add: "AGGIUNGI AL CARRELLO", prod_desc: "Descrizione", prod_feat: "Caratteristiche",
    menu_tous: "TUTTI", menu_gels_bio: "GEL LUBRIFICANTI BIO", menu_modes: "MODA",
    menu_gels: "GEL LUBRIFICANTI", menu_sextoys: "GIOCATTOLI EROTICI",
    menu_deguisements: "COSTUMI", menu_cockrings: "ANELLI FALLICI", panier: "CARRELLO",
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
    marryme_li12: "Marca: Wooomy"
  },
  es: {
    banner_livraison: "✦ ENVÍO GRATUITO EN FRANCIA Y EN EUROPA ✦",
    prod_add: "AÑADIR A LA CESTA", prod_desc: "Descripción", prod_feat: "Características",
    menu_tous: "TODOS", menu_gels_bio: "GELES LUBRICANTES BIO", menu_modes: "MODA",
    menu_gels: "GELES LUBRICANTES", menu_sextoys: "JUGUETES SEXUALES",
    menu_deguisements: "DISFRACES", menu_cockrings: "ANILLOS PENEANOS", panier: "CESTA",
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
    marryme_li12: "Marca: Wooomy"
  },
  de: {
    banner_livraison: "✦ KOSTENLOSER VERSAND IN FRANKREICH UND EUROPA ✦",
    prod_add: "IN DEN WARENKORB", prod_desc: "Beschreibung", prod_feat: "Merkmale",
    menu_tous: "ALLE", menu_gels_bio: "BIO-GLEITGELE", menu_modes: "MODE",
    menu_gels: "GLEITGELE", menu_sextoys: "SEXSPIELZEUG",
    menu_deguisements: "KOSTÜME", menu_cockrings: "PENISRINGE", panier: "WARENKORB",
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
    marryme_li12: "Marke: Wooomy"
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
