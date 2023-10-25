// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { get } from "http";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPpTctWuXZILzFjsX26OudyuhOwdBjjeA",
  authDomain: "otp-project-1d042.firebaseapp.com",
  projectId: "otp-project-1d042",
  storageBucket: "otp-project-1d042.appspot.com",
  messagingSenderId: "116265958647",
  appId: "1:116265958647:web:532950ef1ab9ecc1ef67f2",
  measurementId: "G-XLRGZQ9G9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);