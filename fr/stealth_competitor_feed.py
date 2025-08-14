#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os, json, time, argparse
from datetime import datetime
from urllib.parse import urlparse
import requests
from xml.etree import ElementTree as ET

UA   = "CompetitorFeedBot/1.0 (+contact: you@example.com)"
HDRS = {"User-Agent": UA, "Accept": "*/*"}
TIMEOUT = 20

# Sitemaps probables
SITEMAP_CANDIDATES = [
    "/sitemap.xml",
    "/sitemap_index.xml",
    "/sitemap-index.xml",
    "/sitemap1.xml",
    "/product-sitemap.xml",
    "/page-sitemap.xml",
    "/category-sitemap.xml",
    "/as4_seositemap-1.xml",
    "/as4_seositemap-2.xml",
    "/as4_seositemap-3.xml",
    "/as4_seositemap-10.xml",
    "/as4_seositemap-15.xml",
]

# Mots/chemins à garder (FR principalement)
KEYWORDS = [
    "78fleurs-de-cbd","fleur","fleurs","fleur-cbd","fleurs-cbd",
    "84huiles-de-cbd","huile","huiles","huile-cbd","huiles-cbd",
    "resine","résine","hash","gelule","gélule","infusion","tisanes",
    "/product","/products/","/produit","/boutique","/shop","/s/"
]

def fetch(url):
    try:
        r = requests.get(url, headers=HDRS, timeout=TIMEOUT)
        if r.status_code == 200 and r.text:
            return r.text
    except requests.RequestException:
        pass
    return None

def parse_xml(txt):
    try:
        return ET.fromstring(txt)
    except ET.ParseError:
        return None

def expand_index(txt):
    root = parse_xml(txt)
    if root is None: return []
    return [n.text.strip() for n in root.findall(".//{*}sitemap/{*}loc") if n.text]

def is_interesting(url):
    u = (url or "").lower()
    return any(k in u for k in KEYWORDS)

def gather_from_urlset(root):
    items=[]
    for u in root.findall(".//{*}url"):
        loc = u.find("{*}loc")
        if loc is None or not loc.text: continue
        link = loc.text.strip()
        if not is_interesting(link): continue
        last = u.find("{*}lastmod")
        lastmod = (last.text.strip() if last is not None and last.text else None)
        items.append({"url": link, "lastmod": lastmod})
    return items

def harvest(domain):
    base = domain if domain.startswith("http") else "https://" + domain
    parsed = urlparse(base)
    root = f"{parsed.scheme}://{parsed.netloc}"
    items=[]; seen=set()

    # découvrir les sitemaps
    to_probe=set()
    for p in SITEMAP_CANDIDATES:
        url = root + p
        txt = fetch(url)
        if not txt: continue
        to_probe.add(url)
        for child in expand_index(txt):
            to_probe.add(child)
        time.sleep(0.4)

    # récolter
    for sm in sorted(to_probe):
        txt = fetch(sm)
        if not txt: continue
        r = parse_xml(txt)
        if r is None: continue
        if r.tag.lower().endswith("urlset"):
            for it in gather_from_urlset(r):
                if it["url"] in seen: continue
                seen.add(it["url"])
                items.append(it)
        time.sleep(0.3)

    # trier par date si dispo
    items.sort(key=lambda x: x["lastmod"] or "", reverse=True)
    return items

def write_rss(items, path, title, link):
    now = datetime.utcnow().strftime("%a, %d %b %Y %H:%M:%S +0000")
    parts=[
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0"><channel>',
        f"<title>{title}</title>",
        f"<link>{link}</link>",
        "<description>Flux discret généré depuis les sitemaps concurrents</description>",
        f"<lastBuildDate>{now}</lastBuildDate>",
    ]
    for it in items[:300]:
        parts += [
            "<item>",
            f"<title><![CDATA[{it['url']}]]></title>",
            f"<link>{it['url']}</link>",
            f"<pubDate>{(it['lastmod'] or '')}</pubDate>",
            "</item>"
        ]
    parts.append("</channel></rss>")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path,"w",encoding="utf-8") as f: f.write("\n".join(parts))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--domain", required=True, help="Domaine concurrent, ex: https://www.cbd.fr")
    ap.add_argument("--out-json", required=True, help="Chemin de sortie JSON")
    ap.add_argument("--out-rss",  required=True, help="Chemin de sortie RSS")
    args = ap.parse_args()

    items = harvest(args.domain)

    os.makedirs(os.path.dirname(args.out_json), exist_ok=True)
    with open(args.out_json,"w",encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

    write_rss(items, args.out_rss, f"Flux concurrent — {args.domain}", args.domain)
    print(f"Écrit {len(items)} items → {args.out_json} & {args.out_rss}")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        # fallback doux : crée des fichiers vides si erreur
        import traceback
        print("Harvester FR error:", e)
        os.makedirs("fr/data/_errors", exist_ok=True)
        with open("fr/data/_errors/last_error.txt","w",encoding="utf-8") as f:
            f.write(str(e))
        traceback.print_exc()
