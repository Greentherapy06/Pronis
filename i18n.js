// i18n.js — Traduction automatique selon la langue du navigateur
// Les Jardins Enchantés — 5 langues : fr (défaut), pt, it, es, de
const TRANSLATIONS = {
  fr: {
    banner_livraison: "✦ LIVRAISON GRATUITE EN FRANCE ET EN EUROPE ✦",
    menu_tous: "TOUS",
    menu_gels_bio: "GELS LUBRIFIANTS BIO",
    menu_modes: "MODES",
    menu_gels: "GELS LUBRIFIANTS",
    menu_sextoys: "SEXTOYS",
    menu_deguisements: "DÉGUISEMENTS",
    menu_cockrings: "COCKRINGS",
    panier: "PANIER",
    hero_sous_titre: "— Maison Française · Sextoys · Gel Lubrifiant Bio · Huile de Massage —",
    hero_titre: "La boutique intime la plus raffinée de France & d'Europe.",
    cta_decouvrir: "Découvrir Sextoys, Gels & Huiles de Massage",
    arg_livraison: "✦ Livraison Gratuite en France & Europe",
    arg_paiement: "✦ Paiement 100% Sécurisé",
    arg_yuka: "✦ Gel Lubrifiant Bio Yuka 100/100",
    arg_premium: "✦ Sextoys & Huiles de Massage Premium"
  },
  pt: {
    banner_livraison: "✦ ENTREGA GRATUITA EM FRANÇA E NA EUROPA ✦",
    menu_tous: "TODOS",
    menu_gels_bio: "GÉIS LUBRIFICANTES BIO",
    menu_modes: "MODA",
    menu_gels: "GÉIS LUBRIFICANTES",
    menu_sextoys: "BRINQUEDOS SEXUAIS",
    menu_deguisements: "FANTASIAS",
    menu_cockrings: "ANÉIS PENIANOS",
    panier: "CARRINHO",
    hero_sous_titre: "— Marca Francesa · Brinquedos Sexuais · Gel Lubrificante Bio · Óleo de Massagem —",
    hero_titre: "A boutique íntima mais refinada de França e da Europa.",
    cta_decouvrir: "Descobrir Brinquedos, Géis e Óleos de Massagem",
    arg_livraison: "✦ Entrega Gratuita em França e na Europa",
    arg_paiement: "✦ Pagamento 100% Seguro",
    arg_yuka: "✦ Gel Lubrificante Bio Yuka 100/100",
    arg_premium: "✦ Brinquedos Sexuais e Óleos de Massagem Premium"
  },
  it: {
    banner_livraison: "✦ SPEDIZIONE GRATUITA IN FRANCIA E IN EUROPA ✦",
    menu_tous: "TUTTI",
    menu_gels_bio: "GEL LUBRIFICANTI BIO",
    menu_modes: "MODA",
    menu_gels: "GEL LUBRIFICANTI",
    menu_sextoys: "GIOCATTOLI EROTICI",
    menu_deguisements: "COSTUMI",
    menu_cockrings: "ANELLI FALLICI",
    panier: "CARRELLO",
    hero_sous_titre: "— Marchio Francese · Giocattoli Erotici · Gel Lubrificante Bio · Olio da Massaggio —",
    hero_titre: "La boutique intima più raffinata di Francia ed Europa.",
    cta_decouvrir: "Scopri Giocattoli, Gel e Oli da Massaggio",
    arg_livraison: "✦ Spedizione Gratuita in Francia e in Europa",
    arg_paiement: "✦ Pagamento 100% Sicuro",
    arg_yuka: "✦ Gel Lubrificante Bio Yuka 100/100",
    arg_premium: "✦ Giocattoli Erotici e Oli da Massaggio Premium"
  },
  es: {
    banner_livraison: "✦ ENVÍO GRATUITO EN FRANCIA Y EN EUROPA ✦",
    menu_tous: "TODOS",
    menu_gels_bio: "GELES LUBRICANTES BIO",
    menu_modes: "MODA",
    menu_gels: "GELES LUBRICANTES",
    menu_sextoys: "JUGUETES SEXUALES",
    menu_deguisements: "DISFRACES",
    menu_cockrings: "ANILLOS PENEANOS",
    panier: "CESTA",
    hero_sous_titre: "— Marca Francesa · Juguetes Sexuales · Gel Lubricante Bio · Aceite de Masaje —",
    hero_titre: "La boutique íntima más refinada de Francia y de Europa.",
    cta_decouvrir: "Descubrir Juguetes, Geles y Aceites de Masaje",
    arg_livraison: "✦ Envío Gratuito en Francia y en Europa",
    arg_paiement: "✦ Pago 100% Seguro",
    arg_yuka: "✦ Gel Lubricante Bio Yuka 100/100",
    arg_premium: "✦ Juguetes Sexuales y Aceites de Masaje Premium"
  },
  de: {
    banner_livraison: "✦ KOSTENLOSER VERSAND IN FRANKREICH UND EUROPA ✦",
    menu_tous: "ALLE",
    menu_gels_bio: "BIO-GLEITGELE",
    menu_modes: "MODE",
    menu_gels: "GLEITGELE",
    menu_sextoys: "SEXSPIELZEUG",
    menu_deguisements: "KOSTÜME",
    menu_cockrings: "PENISRINGE",
    panier: "WARENKORB",
    hero_sous_titre: "— Französische Marke · Sexspielzeug · Bio-Gleitgel · Massageöl —",
    hero_titre: "Die edelste Intim-Boutique Frankreichs und Europas.",
    cta_decouvrir: "Sexspielzeug, Gele & Massageöle entdecken",
    arg_livraison: "✦ Kostenloser Versand in Frankreich & Europa",
    arg_paiement: "✦ 100% Sichere Zahlung",
    arg_yuka: "✦ Bio-Gleitgel Yuka 100/100",
    arg_premium: "✦ Premium-Sexspielzeug & Massageöle"
  }
};

function applyTranslations() {
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "fr").slice(0, 2).toLowerCase();
  const lang = saved || (TRANSLATIONS[browser] ? browser : "fr");
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

document.addEventListener("DOMContentLoaded", applyTranslations);
