name: Build competitor feed (FR)

on:
  workflow_dispatch: {}
  schedule:
    - cron: "0 */6 * * *"   # toutes les 6h

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.x"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install requests

      - name: Run harvester (FR)
        run: |
          mkdir -p fr/data
          python ./stealth_competitor_feed.py \
            --domain "https://www.cbd.fr" \
            --out-json "fr/data/cbd_competitor.json" \
            --out-rss  "fr/data/cbd_competitor.rss"

      - name: Commit changes (if any)
        run: |
          if [ -n "$(git status --porcelain)" ]; then
            git config user.name  "github-actions[bot]"
            git config user.email "github-actions[bot]@users.noreply.github.com"
            git add fr/data/cbd_competitor.json fr/data/cbd_competitor.rss
            git commit -m "Update competitor feed (FR)"
            git push
          else
            echo "No changes to commit"
          fi
