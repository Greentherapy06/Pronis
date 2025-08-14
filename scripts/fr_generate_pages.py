name: Build competitor pages (FR)

on:
  # se lance automatiquement quand le feed FR termine
  workflow_run:
    workflows: ["Build competitor feed (FR)"]
    types: [completed]
  # et aussi à la main
  workflow_dispatch: {}

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.x"

      - name: Install deps
        run: |
          python -m pip install --upgrade pip
          pip install requests

      - name: Generate FR pages
        run: |
          mkdir -p scripts
          # S'assure que le fichier existe bien dans la VM
          python - <<'PY'
import os
p="scripts/fr_generate_pages.py"
assert os.path.isfile(p), f"{p} manquant: commits-tu bien le script ?"
PY
          python scripts/fr_generate_pages.py

      - name: Commit changes (if any)
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            git config --global safe.directory "$GITHUB_WORKSPACE"
            git config user.name  "github-actions[bot]"
            git config user.email "github-actions[bot]@users.noreply.github.com"
            git add fr/nouveautes/*.html fr/nouveautes/**/*.html || true
            git commit -m "Générer pages FR (nouveautés concurrents)" || true
            git pull --rebase --autostash || true
            git push || true
          else
            echo "No changes to commit"
          fi
