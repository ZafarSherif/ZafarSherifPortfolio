// Firebase Configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMs9rtZsyTWosFeIrS2kzxpuvRZG-zYoU",
  authDomain: "personalwebsitezafarportfolio.firebaseapp.com",
  projectId: "personalwebsitezafarportfolio",
  storageBucket: "personalwebsitezafarportfolio.firebasestorage.app",
  messagingSenderId: "653044044710",
  appId: "1:653044044710:web:c949acc3b39fb0f13c7567",
  measurementId: "G-G9MNTC6XCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export for use in other files
export { db, collection, addDoc, serverTimestamp };
