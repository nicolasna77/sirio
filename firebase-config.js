import { initializeApp, Firebase } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_qHcRbt4Ee2Me_615MGWnY2Ub8LCm5bc",
  authDomain: "sirio-69cfd.firebaseapp.com",
  databaseURL: "https://sirio-69cfd-default-rtdb.firebaseio.com",
  projectId: "sirio-69cfd",
  storageBucket: "sirio-69cfd.appspot.com",
  messagingSenderId: "303606603029",
  appId: "1:303606603029:web:e71ca0c282da1508fa1d1c",
  measurementId: "G-9GKGVVGBSD",
};

const app = initializeApp(firebaseConfig);

export { app };
