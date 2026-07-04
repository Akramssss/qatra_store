import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3TEp-p0E7SV-yPHVTV2qXsoqhVHycOeE",
  authDomain: "qatra-store-4197b.firebaseapp.com",
  projectId: "qatra-store-4197b",
  storageBucket: "qatra-store-4197b.firebasestorage.app",
  messagingSenderId: "202454262402",
  appId: "1:202454262402:web:ca093dfbcad40d9fe80a9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
