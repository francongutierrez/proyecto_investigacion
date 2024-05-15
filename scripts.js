// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6bY2pfTVeIT4HFaVt2xMgjVYzEa275M0",
  authDomain: "proicoentornosdigitales-6fc4c.firebaseapp.com",
  projectId: "proicoentornosdigitales-6fc4c",
  storageBucket: "proicoentornosdigitales-6fc4c.appspot.com",
  messagingSenderId: "385169235858",
  appId: "1:385169235858:web:c7008ab0a89b7c34d6eb4b",
  measurementId: "G-4ETMCPHJ9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);