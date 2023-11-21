import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQQLWw_A_5AYADKd0laRE2UTDti_K0EiE",
  authDomain: "urbuy-d3345.firebaseapp.com",
  projectId: "urbuy-d3345",
  storageBucket: "urbuy-d3345.appspot.com",
  messagingSenderId: "754137280171",
  appId: "1:754137280171:web:34af5e5b8d5239e95251ee"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);