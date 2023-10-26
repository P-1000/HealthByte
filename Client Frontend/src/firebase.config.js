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
  apiKey: "AIzaSyAeN73r1Ar0RhHs9iQX_2_v68eqO5s7AZM",
  authDomain: "webrtc-a7843.firebaseapp.com",
  projectId: "webrtc-a7843",
  storageBucket: "webrtc-a7843.appspot.com",
  messagingSenderId: "235001084562",
  appId: "1:235001084562:web:9f6d7efcdd443cb5c8044b",
  measurementId: "G-7WN6MT113X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);