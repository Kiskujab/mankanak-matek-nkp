#!/bin/zsh
# Manka matek tankönyv – telepítő (macOS, zsh)
# Letölti a tankönyvet az Asztalra, és létrehozza a "manka-matek" parancsot.

REPO="Kiskujab/mankanak-matek-nkp"
DIR="$HOME/Desktop/manka-matek"
ZSHRC="$HOME/.zshrc"
ALIAS_LINE="alias manka-matek='cd \"\$HOME/Desktop/manka-matek\" && open index.html'"

echo "==> Mappa létrehozása: $DIR"
mkdir -p "$DIR" || exit 1

echo "==> Letöltés a GitHubról (kb. 280 MB, ez eltarthat egy ideig)..."
curl -fL --progress-bar "https://github.com/$REPO/archive/refs/heads/main.tar.gz" \
  | tar -xz --strip-components=1 -C "$DIR"
if [ $? -ne 0 ] || [ ! -f "$DIR/index.html" ]; then
  echo "!! A letöltés nem sikerült. Ellenőrizd az internetkapcsolatot, és futtasd újra." >&2
  exit 1
fi

echo "==> Parancs beállítása (manka-matek)..."
touch "$ZSHRC"
if grep -q "alias manka-matek=" "$ZSHRC"; then
  echo "    (már be volt állítva)"
else
  printf '\n# Manka matek tankönyv\n%s\n' "$ALIAS_LINE" >> "$ZSHRC"
fi

echo "==> Kész! A tankönyv megnyitása..."
open "$DIR/index.html"
echo "    Legközelebb elég ezt beírni a Terminálba: manka-matek"
