# Deploy Private Teaching Manager 1.7.1 to GitHub Pages

1. Extract this ZIP.
2. In your existing GitHub repository, upload the **contents** of this folder to the repository root (not the ZIP and not an extra nested folder). Replace the old project files.
3. Commit directly to `main`.
4. Open **Settings → Pages** and ensure the source is **GitHub Actions**.
5. Open the **Actions** tab and wait for the Pages workflow to finish successfully.
6. Open the published HTTPS GitHub Pages address in Chrome.
7. Hard refresh once (Ctrl+Shift+R).
8. Use the visible **Install app** button in the top bar. If Chrome has made the site installable, it opens the native install prompt. You can also use Chrome's ⋮ menu → **Cast, save and share** → **Install page as app** (menu wording may vary).

## If Chrome still does not offer installation
- Make sure the site address begins with `https://`.
- Open the deployed `manifest.webmanifest` directly and verify it loads as JSON.
- Open `service-worker.js` directly and verify it loads.
- In Chrome, open DevTools → Application → Manifest and Service Workers. Resolve any manifest/icon/service-worker errors.
- The 192px and 512px PNG icons are included under `www/icons/`.
- Chrome does not guarantee that an install icon is permanently displayed next to the address bar; the browser menu or the app's Install app button may be the available route.

## Data
The PWA stores data locally in the browser on each device. It does not automatically synchronise between laptop and phone. Export JSON backups regularly. This update does not require importing data if you are starting fresh; if you already entered records into 1.7.0, keep a JSON export before replacing the site.
