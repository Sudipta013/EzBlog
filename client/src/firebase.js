// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ezblog-8ea20.firebaseapp.com",
  projectId: "ezblog-8ea20",
  storageBucket: "ezblog-8ea20.appspot.com",
  messagingSenderId: "169929883264",
  appId: "1:169929883264:web:224f9b3b18b272d0637065",
  measurementId: "G-0PJVN8BMWB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);