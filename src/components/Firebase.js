import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDIavBgLVwT-1NhPe3slhGqfv6NAIX4A8",
  authDomain: "eshop-ad5c8.firebaseapp.com",
  projectId: "eshop-ad5c8",
  storageBucket: "eshop-ad5c8.firebasestorage.app",
  messagingSenderId: "773787211428",
  appId: "1:773787211428:web:fc0dbb08e9ee886003f831",
  measurementId: "G-DY85KVKY03",
};

// Initialize Firebase and Auth
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };