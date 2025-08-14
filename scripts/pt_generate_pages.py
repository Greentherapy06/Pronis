#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Génère des pages HTML (PT) à partir des flux concurrents.
- Lit: data/<concurrent>/cbd_competitor.json
- Écrit: pt/novidades/index.html + pt/novidades/<slug>.html
"""

import os, json, html
from datetime import datetime

# Où lire les JSON
DATA_DIR = "data"
# Où écrire les pages
OUT_DIR = os.path.join("pt", "novidades")

# jolis noms pour affichage
NICE_NAME = {
    "cbd-portugal": "CBD-Portugal.pt",
    "cbdsol": "CBDSOL",
    "cbweed": "CBWEED Portugal",
    "doctorcbd": "Doctor CBD",
    "mamakana": "Mama Kana",
}

# maillage interne minimal (liens vers TES pages)
# tu peux adapter ces correspondances quand tu veux
INTERNAL_LINKS = [
    ("Flores de CBD", "/flores-cbd.html"),
    ("Resinas de CBD", "/resinas-cbd.html"),
    ("Óleos de CBD", "/oleos-cbd.html"),
    ("Infusões de CBD", "/infusoes-cbd.html"),
    ("Guia do CBD", "/guia-cbd.html"),
    ("Comprar CBD online", "/comprar-cbd-online.html"),
]

# petit header/footer HTML simples (SEO-friendly)
def page_header(title, description):
    return f"""<!doctype html>
<html lang="pt">
<head>
<meta charset="utf-8">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(description)}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="/pt/novidades/">
<style>
  body {{ font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6; margin: 24px; max-width: 900px; }}
  a {{ text-decoration:none; }}
  .tag {{ display:inline-block; padding:.15rem .5rem; border:1px solid #ddd; border-radius:999px; margin-right:.35rem; font-size:.9rem; }}
  .grid {{ display:grid; gap:14px; }}
  .card {{ padding:14px; border:1px solid #eee; border-radius:14px; }}
  h1 {{ margin-top:0; }}
  footer {{ margin-top:36px; font-size:.9rem; color:#666; }}
</style>
</head>
<body>
"""

def page_footer():
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    return f"""
<footer>Atualizado automaticamente em {now}.</footer>
</body></html>
"""

def internal_nav():
    items = "".join([f'<a class="tag" href="{link}">{html.escape(label)}</a>' for label, link in INTERNAL_LINKS])
    return f"<p>{items}</p>"

def read_competitor(slug):
    path = os.path.join(DATA_DIR, slug, "cbd_competitor.json")
    if not os.path.isfile(path):
        return []
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
            # attendu: liste de {"url": "...", "lastmod": ...}
            items = []
            for it in data:
                url = (it or {}).get("url")
                if url:
                    items.append(url.strip())
            # déduplique & trie pour stabilité
            seen, deduped = set(), []
            for u in items:
                if u not in seen:
                    seen.add(u)
                    deduped.append(u)
            return deduped
    except Exception as e:
        print(f"[WARN] Erro a ler {path}: {e}")
        return []

def build_competitor_page(slug, urls):
    title = f"Novidades do mercado (PT) – {NICE_NAME.get(slug, slug)}"
    desc  = f"Novas páginas encontradas no concorrente {NICE_NAME.get(slug, slug)}. Veja a lista e conheça as nossas alternativas."
    out   = [page_header(title, desc)]
    out.append(f"<h1>{html.escape(title)}</h1>")
    out.append(internal_nav())
    out.append('<div class="grid">')

    if not urls:
        out.append('<div class="card">Sem itens por enquanto.</div>')
    else:
        for u in urls:
            safe = html.escape(u)
            out.append(f'<div class="card"><a href="{safe}" rel="noopener" target="_blank">{safe}</a></div>')

    out.append("</div>")
    out.append(internal_nav())
    out.append(page_footer())

    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, f"{slug}.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    return out_path

def build_index(pages_built):
    title = "Novidades do mercado de CBD em Portugal"
    desc  = "Monitorização automática das principais lojas de CBD em Portugal. Veja as novidades e as nossas alternativas."

    out = [page_header(title, desc)]
    out.append(f"<h1>{html.escape(title)}</h1>")
    out.append(internal_nav())
    out.append("<ul>")
    for slug, nice, path in pages_built:
        out.append(f'<li><a href="/{path}">{html.escape(nice)}</a></li>')
    out.append("</ul>")
    out.append(page_footer())

    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, "index.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    return out_path

def main():
    # liste des concurrents = sous-dossiers de data/
    competitors = []
    if os.path.isdir(DATA_DIR):
        for name in sorted(os.listdir(DATA_DIR)):
            if name.startswith("."):
                continue
            # ne garde que nos 5 dossiers
            if name in {"cbd-portugal", "cbdsol", "cbweed", "doctorcbd", "mamakana"}:
                competitors.append(name)

    pages = []
    for slug in competitors:
        urls = read_competitor(slug)
        path = build_competitor_page(slug, urls)
        pages.append((slug, NICE_NAME.get(slug, slug), path.replace("\\", "/")))

    index_path = build_index(pages)

    print("[OK] Páginas geradas:")
    for _, nice, path in pages:
        print(" -", nice, "=>", path)
    print(" - Índice =>", index_path)

if __name__ == "__main__":
    main()
