// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3b7b6.firebaseapp.com",
  projectId: "mern-auth-3b7b6",
  storageBucket: "mern-auth-3b7b6.appspot.com",
  messagingSenderId: "877785912598",
  appId: "1:877785912598:web:319d1d38210e8afc78ec37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);