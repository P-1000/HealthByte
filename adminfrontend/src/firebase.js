import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDcgjIZwDlxqNyO_sR2RjhaxtCuybq8Hnw",
  authDomain: "meduxin-ecom.firebaseapp.com",
  projectId: "meduxin-ecom",
  storageBucket: "meduxin-ecom.appspot.com",
  messagingSenderId: "877776420829",
  appId: "1:877776420829:web:9876b5c6f3c016d01e4034",
  measurementId: "G-F5QLDQFQNJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();