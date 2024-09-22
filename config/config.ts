// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA65g9zMF7C1Ovqtp7r8bahZjIAhPKxmAs",
  authDomain: "currency-converter-8fa9e.firebaseapp.com",
  projectId: "currency-converter-8fa9e",
  storageBucket: "currency-converter-8fa9e.appspot.com",
  messagingSenderId: "783386124704",
  appId: "1:783386124704:web:1e6dce33edc410d9c4c4c5",
  measurementId: "G-WG2EWGC5R7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firestoreDB = getFirestore(firebaseApp)
