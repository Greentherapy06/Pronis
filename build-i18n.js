#!/usr/bin/env node
/**
 * build-i18n.js — genere i18n.js (bundle complet, fallback legacy) a partir
 * des fichiers de SECTION, qui sont desormais la SOURCE DE VERITE :
 *   i18n-common.js, i18n-home.js, i18n-blog.js, i18n-legal.js, i18n-product.js
 *     -> fusionnes pour produire l objet TRANSLATIONS
 *   i18n-core.js
 *     -> copie verbatim (moteur i18n + menus + liens + hreflang), inchange
 *
 * Pourquoi : cart.js charge normalement i18n-core + i18n-common + la section
 * de la page (voir loader en tete de cart.js). i18n.js n est plus charge que
 * si UN de ces fichiers echoue (fallback reseau). Avant ce script, i18n.js
 * etait mis a jour a la main -> desynchronisations (cf. P0-1 historique).
 * Desormais i18n.js est un ARTEFACT GENERE : ne jamais l editer a la main,
 * editer les fichiers de section puis relancer ce script.
 *
 * Usage : node tools/build-i18n.js
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SECTION_FILES = [
  "i18n-common.js",
  "i18n-home.js",
  "i18n-blog.js",
  "i18n-legal.js",
  "i18n-product.js",
];
const CORE_FILE = "i18n-core.js";
const OUT_FILE = "i18n.js";

// --- 1. Charge chaque fichier de section dans un bac a sable minimal et
//        recupere l objet TRANSLATIONS fusionne (meme logique que le navigateur).
function loadSections() {
  const sandbox = { TRANSLATIONS: {} };
  sandbox.window = sandbox; // "typeof window !== undefined ? window : this" -> sandbox
  const vm = require("vm");
  const ctx = vm.createContext(sandbox);
  for (const file of SECTION_FILES) {
    const code = fs.readFileSync(path.join(ROOT, file), "utf8");
    vm.runInContext(code, ctx, { filename: file });
  }
  return sandbox.TRANSLATIONS;
}

// --- 2. Serialise TRANSLATIONS en JS lisible (garde l ordre des cles tel
//        que rencontre, evite les soucis d echappement JSON.stringify suffit ici
//        car toutes les valeurs sont strings/primitives).
function serializeTranslations(translations) {
  const langs = Object.keys(translations).sort((a, b) => (a === "fr" ? -1 : b === "fr" ? 1 : a.localeCompare(b)));
  const parts = langs.map((lang) => {
    const dict = translations[lang];
    const keys = Object.keys(dict);
    const body = keys
      .map((k) => `    ${JSON.stringify(k)}: ${JSON.stringify(dict[k])}`)
      .join(",\n");
    return `  ${JSON.stringify(lang)}: {\n${body}\n  }`;
  });
  return `const TRANSLATIONS = {\n${parts.join(",\n")}\n};\n`;
}

function main() {
  const translations = loadSections();
  const langCount = Object.keys(translations).length;
  const keyCount = Object.keys(translations.fr || {}).length;

  const header =
    `// i18n.js — Bundle complet auto-genere (fallback legacy) — Les Jardins Enchantes\n` +
    `// NE PAS EDITER A LA MAIN. Genere par tools/build-i18n.js a partir de :\n` +
    `//   ${SECTION_FILES.join(", ")} (traductions) + ${CORE_FILE} (moteur, copie verbatim)\n` +
    `// Regenerer : node tools/build-i18n.js — puis committer i18n.js.\n` +
    `// Genere le ${new Date().toISOString().slice(0, 10)} — ${langCount} langues x ${keyCount} cles (fr).\n\n`;

  const translationsBlock = serializeTranslations(translations);
  const exposeLine = `\ntry { window.TRANSLATIONS = TRANSLATIONS; } catch(e){}\n\n`;

  const coreRaw = fs.readFileSync(path.join(ROOT, CORE_FILE), "utf8");
  // Le moteur d i18n-core.js est deja une IIFE autonome qui fait
  // G.TRANSLATIONS = G.TRANSLATIONS || {} puis expose les fonctions sur
  // window : on le colle tel quel, il retrouvera le TRANSLATIONS ci-dessus
  // via window (deja assigne juste avant).
  const coreLines = coreRaw.split("\n");
  let firstCodeLine = coreLines.findIndex((l) => !l.trim().startsWith("//"));
  if (firstCodeLine < 0) firstCodeLine = 0;
  const coreBody = coreLines.slice(firstCodeLine).join("\n"); // retire l entete commentee, propre a i18n-core.js

  const out = header + translationsBlock + exposeLine + coreBody;
  fs.writeFileSync(path.join(ROOT, OUT_FILE), out, "utf8");
  console.log(`i18n.js regenere : ${langCount} langues, ${keyCount} cles (fr), ${(out.length / 1024).toFixed(0)} Ko.`);
}

main();
