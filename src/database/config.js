// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBp3O8T-fZ5z3GQHCyBEOPdE7VwGB8CUsQ",
  authDomain: "react-fca9a.firebaseapp.com",
  databaseURL: "https://react-fca9a-default-rtdb.firebaseio.com",
  projectId: "react-fca9a",
  storageBucket: "react-fca9a.appspot.com",
  messagingSenderId: "727341560756",
  appId: "1:727341560756:web:f4e9e372153a90dc8ef8e1",
  measurementId: "G-PCRNELVY21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

