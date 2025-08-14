# -*- coding: utf-8 -*-
#!/usr/bin/env python3

import os
import sys
import json
import time
import argparse
from datetime import datetime, timezone
from urllib.parse import urlparse
from email.utils import format_datetime

import requests
from xml.etree import ElementTree as ET

# -------- Réglages généraux --------
UA = "CompetitorFeedBot/1.0 (+contact: you@example.com)"
HDRS = {"User-Agent": UA, "Accept": "*/*"}
TIMEOUT = 20

# Chemins de sitemaps probables (index + découpés)
SITEMAP_CANDIDATES = [
    "/sitemap.xml",
    "/sitemap_index.xml",
    "/asd_seositemap-1.xml",
    "/asd_seositemap-2.xml",
    "/asd_seositemap-3.xml",
    "/asd_seositemap-10.xml",
    "/asd_seositemap-15.xml",
]

# Mots/segments d’URL qui nous intéressent (FR + PT + variantes)
KEYWORDS = [
    # FR
    "fleur", "fleurs", "fleur-cbd", "fleurs-cbd",
    "resine", "résine", "hash", "huile", "huiles",
    "gelule", "gélule", "infusion",
    # PT
    "flor", "flores", "flor-cbd", "flores-cbd",
    "resina", "óleo", "oleo", "infusão", "infusao",
    # génériques boutique
    "/product", "/products", "/produto", "/produtos",
    "/boutique", "/loja", "/shop", "/s/"
]

# -------- Utils HTTP/XML --------
def fetch(url: str) -> str | None:
    try:
        r = requests.get(url, headers=HDRS, timeout=TIMEOUT)
        if r.status_code == 200 and r.text:
            return r.text
    except requests.RequestException:
        pass
    return None

def parse_xml(txt: str) -> ET.Element | None:
    try:
        return ET.fromstring(txt)
    except ET.ParseError:
        return None

def is_index(root: ET.Element) -> bool:
    # <sitemapindex> = index ; <urlset> = liste d’URLs
    return root.tag.lower().endswith("sitemapindex")

def is_urlset(root: ET.Element) -> bool:
    return root.tag.lower().endswith("urlset")

def text_of(node, tag):
    # récupère le texte d’un tag enfant en ignorant les namespaces
    for child in node:
        if child.tag.lower().endswith(tag):
            return (child.text or "").strip()
    return None

# -------- Parsing de sitemaps --------
def expand_index(root: ET.Element) -> list[str]:
    """Retourne la liste des sous-sitemaps contenus dans un sitemap index."""
    out = []
    for sm in root.findall(".//"):
        # on cherche des <loc> sous <sitemap> (ignore namespaces)
        if sm.tag.lower().endswith("sitemap"):
            loc = text_of(sm, "loc")
            if loc:
                out.append(loc.strip())
    return out

def gather_from_urlset(root: ET.Element) -> list[dict]:
    """Retourne une liste d’items {url,lastmod} depuis un <urlset>."""
    items = []
    for urlnode in root.findall(".//"):
        if not urlnode.tag.lower().endswith("url"):
            continue
        loc = text_of(urlnode, "loc")
        if not loc:
            continue
        lastmod = text_of(urlnode, "lastmod")
        items.append({"url": loc.strip(), "lastmod": (lastmod or None)})
    return items

def is_interesting(u: str) -> bool:
    lu = u.lower()
    return any(k in lu for k in KEYWORDS)

# -------- Moissonnage principal --------
def harvest(domain: str) -> list[dict]:
    base = domain if domain.startswith("http") else "https://" + domain
    parsed = urlparse(base)
    root_base = f"{parsed.scheme}://{parsed.netloc}"

    seen = set()
    results: list[dict] = []

    # 1) Essayer les candidats
    to_probe = [root_base + p for p in SITEMAP_CANDIDATES]

    # 2) Pour chaque sitemap candidat : si index => l’étendre
    expanded = []
    for sm_url in to_probe:
        txt = fetch(sm_url)
        if not txt:
            continue
        root = parse_xml(txt)
        if not root:
            continue
        if is_index(root):
            expanded.extend(expand_index(root))
        elif is_urlset(root):
            # déjà une liste d’URLs
            for it in gather_from_urlset(root):
                u = it["url"]
                if not is_interesting(u): 
                    continue
                if u in seen:
                    continue
                seen.add(u)
                results.append({"url": u, "lastmod": it["lastmod"]})
        # sinon on ignore

    # 3) Récupérer tous les sous-sitemaps d’un index
    for sm in expanded:
        txt = fetch(sm)
        if not txt:
            continue
        root = parse_xml(txt)
        if not root or not is_urlset(root):
            continue
        for it in gather_from_urlset(root):
            u = it["url"]
            if not is_interesting(u):
                continue
            if u in seen:
                continue
            seen.add(u)
            results.append({"url": u, "lastmod": it["lastmod"]})

    return results

# -------- Sorties (JSON + RSS) --------
def write_json(items: list[dict], path: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

def write_rss(items: list[dict], domain: str, path: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)

    # date RFC 2822 avec timezone (pas de utcnow déprécié)
    now = format_datetime(datetime.now(timezone.utc))

    # construire le RSS minimal
    lines = []
    lines.append('<?xml version="1.0" encoding="UTF-8"?>')
    lines.append('<rss version="2.0"><channel>')
    lines.append(f"<title>Flux concurrent – {domain}</title>")
    link = domain if domain.startswith("http") else "https://" + domain
    lines.append(f"<link>{link}</link>")
    lines.append("<description>Flux discret généré depuis les sitemaps concurrents</description>")
    lines.append(f"<lastBuildDate>{now}</lastBuildDate>")

    for it in items:
        url = it["url"]
        title = f"<![CDATA[{url}]]>"
        lines.append("<item>")
        lines.append(f"<title>{title}</title>")
        lines.append(f"<link>{url}</link>")
        # pubDate optionnel ; si on a lastmod (ISO), on laisse vide sinon
        lines.append("<pubDate></pubDate>")
        lines.append("</item>")

    lines.append("</channel></rss>")

    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

# -------- CLI --------
def main():
    parser = argparse.ArgumentParser(description="Harvest competitor URLs from sitemaps and build JSON+RSS.")
    parser.add_argument("--domain", required=True, help="Domaine concurrent (ex: cbd.fr ou https://cbd.fr)")
    parser.add_argument("--out-json", required=True, help="Chemin du fichier JSON de sortie")
    parser.add_argument("--out-rss", required=True, help="Chemin du fichier RSS de sortie")
    args = parser.parse_args()

    items = harvest(args.domain)

    # trier pour stabilité (par URL)
    items.sort(key=lambda x: x["url"])

    write_json(items, args.out_json)
    write_rss(items, args.domain, args.out_rss)

    print(f"Wrote {len(items)} items -> {args.out_json} and {args.out_rss}")

if __name__ == "__main__":
    main()
