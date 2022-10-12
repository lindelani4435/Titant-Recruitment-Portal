// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZaXmDZdj3RQTqr_tQPATwA74XkIwJ40",
  authDomain: "myadviser-c3a63.firebaseapp.com",
  projectId: "myadviser-c3a63",
  storageBucket: "myadviser-c3a63.appspot.com",
  messagingSenderId: "458440669571",
  appId: "1:458440669571:web:3a7e72f7016e673f339eb6",
  measurementId: "G-KQNB83ZL0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};