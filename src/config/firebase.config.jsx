import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV-AEE6Q1gGpWYb9wOvEGoK2W-YEP0yZM",
  authDomain: "react-glasses-auth-48035.firebaseapp.com",
  projectId: "react-glasses-auth-48035",
  storageBucket: "react-glasses-auth-48035.appspot.com",
  messagingSenderId: "902006831799",
  appId: "1:902006831799:web:935f6f479f06f9a3f82b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 