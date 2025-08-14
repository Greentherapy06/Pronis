#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Génère des pages HTML (FR) à partir des flux concurrents.
- Lit les JSON:  fr/data/<slug>/cbd_competitor.json
- Écrit:          fr/nouveautes/index.html + fr/nouveautes/<slug>.html
"""

import os, json, html
from datetime import datetime

# --- Où lire/écrire ---
DATA_DIR = os.path.join("fr", "data")       # <— aligne avec le workflow de collecte
OUT_DIR  = os.path.join("fr", "nouveautes")

# --- Slugs (doivent correspondre au YAML) ---
SLUGS = [
    "cbdf",         # CBD.fr
    "cannaca",      # CannaCA
    "cbdoo",        # CBDOO
    "deli-hemp",    # Deli Hemp
    "greenvertus",  # GreenVertus
    "lelab",        # Le Lab CBD Shop
]

NICE_NAME = {
    "cbdf":        "CBD.fr",
    "cannaca":     "CannaCA",
    "cbdoo":       "CBDOO",
    "deli-hemp":   "Deli Hemp",
    "greenvertus": "GreenVertus",
    "lelab":       "Le Lab CBD Shop",
}

# --- Maillage interne vers TES pages ---
INTERNAL_LINKS = [
    ("Fleurs de CBD", "/fleurs-cbd.html"),
    ("Résines de CBD", "/resines-cbd.html"),
    ("Huiles de CBD", "/oleos-cbd.html"),
    ("Infusions de CBD", "/infusions-cbd.html"),
    ("Guide CBD", "/guia-cbd.html"),
    ("Comparer CBD en ligne", "/comparar-cbd-online.html"),
]

def page_header(title, description=""):
    return f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(description)}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="/fr/nouveautes/">
<style>
  body {{ font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.5; margin:0; padding:20px; }}
  a  {{ text-decoration:none; }}
  .grid {{ display:grid; gap:14px; }}
  .card {{ padding:14px; border:1px solid #e0e0e0; border-radius:14px; }}
  h1 {{ margin:0 0 10px; }}
  footer {{ margin-top:36px; font-size:.9rem; color:#666; }}
  .tags a {{ display:inline-block; padding:.25rem .6rem; border:1px solid #ddd; border-radius:999px; margin:.2rem .3rem .2rem 0; }}
</style>
</head>
<body>
"""

def page_footer():
    y = datetime.utcnow().year
    ts = datetime.utcnow().strftime("%d/%m/%Y %H:%M UTC")
    return f"""
<footer>Dernière génération : {ts} — © {y} Green Therapy</footer>
</body>
</html>"""

def block_internal_links():
    links = " ".join(f'<a href="{html.escape(url)}">{html.escape(txt)}</a>' for txt, url in INTERNAL_LINKS)
    return f'<p class="tags">{links}</p>'

def read_items(slug, limit=60):
    p = os.path.join(DATA_DIR, slug, "cbd_competitor.json")
    if not os.path.isfile(p):
        return []
    try:
        with open(p, "r", encoding="utf-8") as f:
            data = json.load(f)
        res = []
        for it in data[:limit]:
            url = it.get("url") or ""
            last = it.get("lastmod") or ""
            if url:
                res.append({"url": url, "lastmod": last})
        return res
    except Exception:
        return []

def render_list(title, items):
    rows = []
    for it in items:
        u = html.escape(it["url"])
        lm = html.escape(it["lastmod"]) if it["lastmod"] else ""
        rows.append(f'<li><a href="{u}" target="_blank" rel="nofollow noopener">{u}</a> <small>{lm}</small></li>')
    if not rows:
        rows = ['<li><em>Aucun élément trouvé pour le moment.</em></li>']
    return f"<h2>{html.escape(title)}</h2>" + block_internal_links() + "<ul>" + "\n".join(rows) + "</ul>"

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def build_competitor_page(slug):
    title = f"Nouveautés — {NICE_NAME.get(slug, slug)}"
    items = read_items(slug)
    html_content = (
        page_header(title, f"Dernières URLs repérées pour {NICE_NAME.get(slug, slug)}")
        + f"<h1>{html.escape(title)}</h1>"
        + render_list("Nouvelles URLs détectées", items)
        + page_footer()
    )
    out = os.path.join(OUT_DIR, f"{slug}.html")
    write_file(out, html_content)
    return out

def build_index():
    content = page_header("Nouveautés — Concurrents (FR)", "Pages automatiques générées depuis les sitemaps concurrents.")
    content += "<h1>Nouveautés — Concurrents (FR)</h1>"
    content += block_internal_links()
    content += '<div class="grid">'
    for slug in SLUGS:
        items = read_items(slug, limit=12)
        block = (
            f'<div class="card"><h2><a href="/fr/nouveautes/{slug}.html">{html.escape(NICE_NAME.get(slug, slug))}</a></h2>'
            f'<p><a href="/fr/nouveautes/{slug}.html">Voir toutes les nouveautés</a></p>'
            f'<ul>'
            + "".join(
                f'<li><a href="{html.escape(it["url"])}" target="_blank" rel="nofollow noopener">{html.escape(it["url"])}</a></li>'
                for it in items[:8]
            )
            + '</ul></div>'
        )
        content += block
    content += "</div>"
    content += page_footer()
    write_file(os.path.join(OUT_DIR, "index.html"), content)

def main():
    for slug in SLUGS:
        build_competitor_page(slug)
    build_index()
    print(f"Pages générées dans {OUT_DIR}/")

if __name__ == "__main__":
    main()
