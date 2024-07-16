// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFSD8M4LtjCucuyMJlMD7YuSjp7MpicXo",
  authDomain: "proyectoentornosdigitales.firebaseapp.com",
  projectId: "proyectoentornosdigitales",
  storageBucket: "proyectoentornosdigitales.appspot.com",
  messagingSenderId: "613186702927",
  appId: "1:613186702927:web:8a4316ec41d65c194de43a",
  measurementId: "G-9EVXHDFE07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





