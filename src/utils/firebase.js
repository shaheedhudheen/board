// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYpQcRa6UbTvPSStyB73HZVEHtUNYqwNs",
  authDomain: "board-9a076.firebaseapp.com",
  projectId: "board-9a076",
  storageBucket: "board-9a076.appspot.com",
  messagingSenderId: "795064543852",
  appId: "1:795064543852:web:bb76a87e240ec258324649",
  measurementId: "G-C3SC239YC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
