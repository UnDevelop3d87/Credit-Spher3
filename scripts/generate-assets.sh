#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/generate-assets.sh [SOURCE_SVG]
# Default source: public/logo.svg

SRC="${1:-public/logo.svg}"
OUT_DIR="public"

if ! command -v convert >/dev/null 2>&1; then
  echo "ImageMagick 'convert' not found. Install ImageMagick and retry (e.g., brew install imagemagick or apt install imagemagick)."
  exit 1
fi

if [ ! -f "$SRC" ]; then
  echo "Source file '$SRC' not found. Place your source SVG/PNG at that path or pass a custom path."
  exit 1
fi

mkdir -p "$OUT_DIR"

echo "Generating raster assets from $SRC into $OUT_DIR..."

# High-resolution desktop logo
convert "$SRC" -background none -resize 1024x1024\> "$OUT_DIR/logo.png"

# Standard PWA icons
convert "$SRC" -background none -resize 512x512\> "$OUT_DIR/logo-512.png"
convert "$SRC" -background none -resize 192x192\> "$OUT_DIR/logo-192.png"

# Small logo for mobile (preserve square)
convert "$SRC" -background none -resize 256x256\> "$OUT_DIR/logo-small.png"

# Apple touch icon
convert "$SRC" -background none -resize 180x180\> "$OUT_DIR/apple-touch-icon.png"

# Social Open Graph image (crop/center to 1200x630)
convert "$SRC" -resize 1200x630^ -gravity center -extent 1200x630 "$OUT_DIR/og-image.png"

# Favicons
convert "$SRC" -background none -resize 32x32\> "$OUT_DIR/favicon-32x32.png"
convert "$SRC" -background none -resize 16x16\> "$OUT_DIR/favicon-16x16.png"

# Create .ico from multiple PNGs (Windows/legacy browsers)
convert "$OUT_DIR/favicon-16x16.png" "$OUT_DIR/favicon-32x32.png" "$OUT_DIR/favicon.ico"

echo "Done. Generated files:\n  - $OUT_DIR/logo.png\n  - $OUT_DIR/logo-512.png\n  - $OUT_DIR/logo-192.png\n  - $OUT_DIR/logo-small.png\n  - $OUT_DIR/apple-touch-icon.png\n  - $OUT_DIR/og-image.png\n  - $OUT_DIR/favicon-32x32.png\n  - $OUT_DIR/favicon-16x16.png\n  - $OUT_DIR/favicon.ico"
