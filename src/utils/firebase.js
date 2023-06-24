// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0ww2LmZi-BqgOZAMN-MrX0SetZrwipdw",
  authDomain: "auth-cab22.firebaseapp.com",
  projectId: "auth-cab22",
  storageBucket: "auth-cab22.appspot.com",
  messagingSenderId: "30467137399",
  appId: "1:30467137399:web:202e9853b0b6a57977cb72",
  measurementId: "G-6BN43KT4DX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
