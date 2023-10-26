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
  apiKey: "AIzaSyDcekUOYjRhEg40Le_DANZHMmg23PIbjpA",
  authDomain: "my-blog-36eab.firebaseapp.com",
  projectId: "my-blog-36eab",
  storageBucket: "my-blog-36eab.appspot.com",
  messagingSenderId: "1034845078042",
  appId: "1:1034845078042:web:9d69b33bc84bd6a594c7a3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);