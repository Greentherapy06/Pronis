# -*- coding: utf-8 -*-
import json, time
from datetime import datetime
from urllib.parse import urlparse
import argparse
import requests
from xml.etree import ElementTree as ET

UA = "CompetitorFeedBot/1.0 (+contact: you@example.com)"
HDRS = {"User-Agent": UA, "Accept": "*/*"}
TIMEOUT = 20

SITEMAP_CANDIDATES = [
    "/sitemap.xml",
    "/sitemap_index.xml",
    "/asd_seositemap-1.xml",
    "/asd_seositemap-2.xml",
    "/asd_seositemap-3.xml",
    "/asd_seositemap-10.xml",
    "/asd_seositemap-15.xml",
]

KEYWORDS = [
    # ajoute / adapte au besoin :
    "fleur", "fleurs", "fleurs-cbd", "fleur-cbd",
    "résine", "resine", "hash", "huile", "gélule", "gelule", "infusion",
    "/product", "/products", "/produit", "/boutique", "/shop", "/s/",
]

def fetch(url):
    try:
        r = requests.get(url, headers=HDRS, timeout=TIMEOUT)
        if r.status_code == 200:
            return r.text
        return None
    except requests.RequestException:
        return None

def parse_xml(txt):
    try:
        return ET.fromstring(txt)
    except ET.ParseError:
        return None

def expand_index(txt):
    root = parse_xml(txt)
    if root is None:
        return []
    return [n.text.strip() for n in root.findall(".//{*}sitemap/{*}loc") if n.text]

def is_interesting(url):
    u = url.lower()
    return any(k in u for k in KEYWORDS)

def gather_from_urllist(root):
    items = []
    for n in root.findall(".//{*}url"):
        loc = n.find("{*}loc")
        if loc is None or not loc.text:
            continue
        link = loc.text.strip()
        if not is_interesting(link):
            continue
        last = n.find("{*}lastmod")
        lastmod = last.text.strip() if last is not None and last.text else None
        items.append({"url": link, "lastmod": lastmod})
    return items

def harvest(domain):
    base = domain if domain.startswith("http") else "https://" + domain
    parsed = urlparse(base)
    root = f"{parsed.scheme}://{parsed.netloc}"
    items = []
    seen = set()

    # découvrir des sitemaps
    to_probe = []
    for p in SITEMAP_CANDIDATES:
        to_probe.append(root + p)

    # sitemap racine si dispo
    home = fetch(root)
    # (optionnel: on pourrait extraire des pistes depuis l'HTML)

    # explore
    for sm in to_probe:
        txt = fetch(sm)
        if not txt:
            continue
        # si index → développer
        if "<sitemapindex" in txt[:2000].lower():
            for loc in expand_index(txt):
                subt = fetch(loc)
                if not subt:
                    continue
                r = parse_xml(subt)
                if r is None:
                    continue
                for it in gather_from_urllist(r):
                    u = it["url"]
                    if u not in seen:
                        seen.add(u)
                        items.append(it)
        else:
            r = parse_xml(txt)
            if r is None:
                continue
            for it in gather_from_urllist(r):
                u = it["url"]
                if u not in seen:
                    seen.add(u)
                    items.append(it)

    return items

def write_json(path, items):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

def write_rss(path, items, domain):
    now = time.gmtime()
    now_rfc822 = time.strftime("%a, %d %b %Y %H:%M:%S +0000", now)
    title = f"Flux concurrent – {urlparse(domain).netloc}"
    desc = "Flux discret généré depuis les sitemaps concurrents"
    link = domain if domain.startswith("http") else "https://" + domain

    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0"><channel>',
        f"<title>{title}</title>",
        f"<link>{link}</link>",
        f"<description>{desc}</description>",
        f"<lastBuildDate>{now_rfc822}</lastBuildDate>",
    ]
    for it in items:
        u = it["url"]
        lines += [
            "<item>",
            f"<title><![CDATA[{u}]]></title>",
            f"<link>{u}</link>",
            "<pubDate></pubDate>",
            "</item>",
        ]
    lines.append("</channel></rss>")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--domain", required=True)
    ap.add_argument("--out-json", required=True)
    ap.add_argument("--out-rss", required=True)
    args = ap.parse_args()

    items = harvest(args.domain)
    # crée le dossier cible si besoin
    import os
    os.makedirs(os.path.dirname(args.out_json), exist_ok=True)
    os.makedirs(os.path.dirname(args.out_rss), exist_ok=True)

    write_json(args.out_json, items)
    write_rss(args.out_rss, items, args.domain)
    print(f"WROTE {len(items)} items → {args.out_json} & {args.out_rss}")
