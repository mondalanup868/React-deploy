// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrlFVXAwUtW3RvABFnnXQBEIOB6qFWCt8",
  authDomain: "login-auth-170f7.firebaseapp.com",
  projectId: "login-auth-170f7",
  storageBucket: "login-auth-170f7.appspot.com",
  messagingSenderId: "897451863910",
  appId: "1:897451863910:web:686c74f9728701afcd62a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;