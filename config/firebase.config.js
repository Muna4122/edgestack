// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "edgestack-6d2df.firebaseapp.com",
  projectId: "edgestack-6d2df",
  storageBucket: "edgestack-6d2df.firebasestorage.app",
  messagingSenderId: "1010652049817",
  appId: "1:1010652049817:web:27ec55e9d0391994402308"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
export {db,storage}