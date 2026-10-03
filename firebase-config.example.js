/*
 * Copy this file to firebase-config.js (which is intentionally gitignored),
 * then replace every value with your Firebase Web App configuration.
 *
 * Firebase web configuration is safe to use in the browser; real protection
 * comes from restrictive Firestore and Storage Security Rules. Never put a
 * service-account key, Admin SDK key, or other private credential here.
 */
window.PORTFOLIO_FIREBASE_CONFIG = {
  apiKey: "YOUR_PUBLIC_WEB_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
