# Unais Visual Portfolio

A responsive, no-build portfolio in `3d_dynamic_profile.html`. It is designed to
work as a static site, so it can be previewed directly with any local web server.

## Run locally

From this folder, run:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/3d_dynamic_profile.html` in your browser. Use a local
server rather than opening the file directly so images and future Firebase modules
behave consistently.

## Test on an Android phone

1. Connect the computer and phone to the same Wi-Fi network.
2. Find the computer's LAN address, for example with `hostname -I` on Linux.
3. Start the server with `python3 -m http.server 8080 --bind 0.0.0.0`.
4. On Android Chrome, open `http://YOUR_COMPUTER_IP:8080/3d_dynamic_profile.html`.
5. Test the floating menu, section links, card taps, swipe left/right in the image
viewer, the close button, and the WhatsApp link. Replace the placeholder WhatsApp
number and email in the HTML before publishing.

## Firebase preparation (not connected by default)

The portfolio does **not** currently connect to Firebase. This avoids shipping any
project configuration or loading extra JavaScript until an admin workflow exists.

When ready to build the admin panel:

1. Create a Firebase project and register a Web App.
2. Copy `firebase-config.example.js` to `firebase-config.js`, then fill it with the
   Web App configuration. The real file is ignored by Git.
3. Add Firebase Authentication for the admin account and lock Firestore/Storage
   rules so only that authenticated account can write. Do not rely on hidden URLs.
4. Create a `portfolioItems` Firestore collection with fields such as `title`,
   `caption`, `category`, `imageUrl`, `imageAlt`, `position`, and `published`.
5. Store optimized image originals in Firebase Storage, create responsive variants
   in the upload/admin workflow, and save their URLs in Firestore.
6. Add the Firebase client SDK only to the future admin/content module, initialize
   it from `window.PORTFOLIO_FIREBASE_CONFIG`, and test rules with the Firebase
   Emulator Suite before deploying.

Firebase Web App configuration is not a secret, but service-account JSON, Admin SDK
credentials, and permissive security rules are unsafe and must never be committed.
