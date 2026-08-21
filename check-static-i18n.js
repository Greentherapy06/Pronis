#!/usr/bin/env node
/**
 * check-static-i18n.js — CONTROLE QUALITE du prerendu multilingue.
 *
 * Verifie, sur le HTML tel que Googlebot le recoit (sans executer de
 * JavaScript), que chaque page traduite est correcte :
 *   1. <html lang> = langue du dossier
 *   2. <title> et <meta description> presents, non vides, longueur raisonnable
 *   3. <link rel=canonical> auto-referent
 *   4. hreflang complet et RECIPROQUE (la page FR pointe vers la traduction
 *      et la traduction pointe vers la FR)
 *   5. aucun chemin relatif casse : chaque href/src local existe sur le disque
 *   6. le contenu n'est pas reste francais (comparaison avec la page FR)
 *
 * Sortie : liste des anomalies, code de sortie 1 si au moins une est bloquante.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const ROOT = path.join(__dirname, "..");
const BASE = "https://les-jardins-enchantes.com";
const LANGS = ["pt", "it", "es", "de"];

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* Un chemin absolu du site correspond-il a un fichier reel ? */
function resolves(urlPath) {
  let p = decodeURI(urlPath.split(/[?#]/)[0]);
  if (p.endsWith("/")) p += "index.html";
  const abs = path.join(ROOT, p);
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return true;
  if (fs.existsSync(abs + ".html")) return true; // cleanUrls
  return false;
}

function checkPage(file, lang) {
  const rel = path.join(lang, file);
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) { err(`${rel} : fichier manquant`); return; }
  const html = fs.readFileSync(abs, "utf8");
  const $ = cheerio.load(html);

  /* 1. lang */
  const htmlLang = $("html").attr("lang");
  if (htmlLang !== lang) err(`${rel} : <html lang="${htmlLang}"> au lieu de "${lang}"`);

  /* 2. title / description */
  const title = ($("title").first().text() || "").trim();
  const desc = ($('meta[name="description"]').attr("content") || "").trim();
  if (!title) err(`${rel} : <title> vide`);
  else if (title.length > 70) warn(`${rel} : titre de ${title.length} caracteres (tronque par Google)`);
  if (!desc) err(`${rel} : meta description vide`);
  else if (desc.length > 165) warn(`${rel} : description de ${desc.length} caracteres`);
  else if (desc.length < 70) warn(`${rel} : description courte (${desc.length} caracteres)`);

  /* 3. canonical auto-referent */
  const slug = file === "index.html" ? "" : file.replace(/\.html$/, "");
  const expected = slug ? `${BASE}/${lang}/${encodeURI(slug)}` : `${BASE}/${lang}/`;
  const canonical = $('link[rel="canonical"]').attr("href");
  if (canonical !== expected) err(`${rel} : canonical "${canonical}" au lieu de "${expected}"`);

  /* 4. hreflang */
  const alts = {};
  $('link[rel="alternate"][hreflang]').each((i, el) => {
    alts[$(el).attr("hreflang")] = $(el).attr("href");
  });
  if (!alts.fr) err(`${rel} : hreflang "fr" manquant`);
  if (!alts["x-default"]) err(`${rel} : hreflang "x-default" manquant`);
  if (alts[lang] !== expected) err(`${rel} : hreflang "${lang}" pointe sur "${alts[lang]}" au lieu de lui-meme`);

  /* reciprocite : la page FR doit pointer vers cette traduction */
  const frHtml = fs.readFileSync(path.join(ROOT, file), "utf8");
  const $fr = cheerio.load(frHtml);
  const frAlt = $fr(`link[rel="alternate"][hreflang="${lang}"]`).attr("href");
  if (frAlt !== expected) err(`${file} (FR) : hreflang "${lang}" pointe sur "${frAlt}" au lieu de "${expected}"`);

  /* 5. chemins */
  const seen = new Set();
  $("[href], [src]").each((i, el) => {
    const $el = $(el);
    for (const attr of ["href", "src"]) {
      const v = $el.attr(attr);
      if (!v) continue;
      if (/^[a-z][a-z0-9+.-]*:/i.test(v) || v.startsWith("//") || v.startsWith("#")) continue;
      if (!v.startsWith("/")) { err(`${rel} : chemin relatif non reecrit "${v}"`); continue; }
      const key = v.split(/[?#]/)[0];
      if (seen.has(key)) continue;
      seen.add(key);
      if (!resolves(key)) err(`${rel} : lien casse "${v}"`);
    }
  });

  /* 6. contenu reellement traduit */
  const text = $("body").text().replace(/\s+/g, " ");
  const frText = $fr("body").text().replace(/\s+/g, " ");
  const sample = text.slice(0, 4000);
  const frSample = frText.slice(0, 4000);
  if (sample === frSample) err(`${rel} : contenu identique au francais`);
}

function main() {
  const files = fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".html"))
    .sort();

  let checked = 0;
  for (const lang of LANGS) {
    if (!fs.existsSync(path.join(ROOT, lang))) { err(`dossier /${lang} manquant`); continue; }
    for (const file of fs.readdirSync(path.join(ROOT, lang)).filter((f) => f.endsWith(".html"))) {
      checkPage(file, lang);
      checked++;
    }
  }

  /* sitemap : chaque URL doit correspondre a un fichier existant */
  const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    const p = loc.replace(BASE, "");
    if (!resolves(p)) err(`sitemap : URL sans fichier "${loc}"`);
  }
  if (/\?lang=/.test(sitemap)) err("sitemap : contient encore des URL ?lang=");

  console.log("");
  console.log(`Controle du prerendu multilingue : ${checked} pages traduites, ${locs.length} URL au sitemap.`);
  console.log("-------------------------------------------------------------");
  if (!errors.length) console.log("Aucune anomalie bloquante.");
  else {
    console.log(`ANOMALIES BLOQUANTES (${errors.length}) :`);
    errors.slice(0, 60).forEach((e) => console.log("  x " + e));
    if (errors.length > 60) console.log(`  ... et ${errors.length - 60} autres`);
  }
  if (warnings.length) {
    console.log("");
    console.log(`Avertissements (${warnings.length}) :`);
    warnings.slice(0, 30).forEach((w) => console.log("  ! " + w));
    if (warnings.length > 30) console.log(`  ... et ${warnings.length - 30} autres`);
  }
  console.log("");
  process.exit(errors.length ? 1 : 0);
}

main();
