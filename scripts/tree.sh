#!/bin/bash

echo "====================================="
echo " DZ MACONNERIE - PROJECT STRUCTURE "
echo "====================================="

echo ""
echo "ROOT:"
echo ""

find . \
  -path ./node_modules -prune -o \
  -path ./.next -prune -o \
  -path ./.git -prune -o \
  -path ./out -prune -o \
  -path ./dist -prune -o \
  -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'

echo ""
echo "====================================="
echo " APP ROUTES "
echo "====================================="

find ./app \
  -path "./app/api" -prune -o \
  -name "page.tsx" \
  -print

echo ""
echo "====================================="
echo " SEO FILES "
echo "====================================="

find ./lib/seo -type f

echo ""
echo "====================================="
echo " COMPONENTS "
echo "====================================="

find ./components -type f

echo ""
echo "====================================="
echo " DATA FILES "
echo "====================================="

find ./data -type f

echo ""
echo "====================================="
echo " TYPES "
echo "====================================="

find ./types -type f

echo ""
echo "====================================="
echo " TOTAL COUNTS "
echo "====================================="

echo ""
echo "Pages:"
find ./app -name "page.tsx" | wc -l

echo ""
echo "Components:"
find ./components -type f | wc -l

echo ""
echo "SEO files:"
find ./lib/seo -type f | wc -l

echo ""
echo "Data files:"
find ./data -type f | wc -l

echo ""
echo "Type files:"
find ./types -type f | wc -l

echo ""
echo "====================================="
echo " END "
echo "====================================="