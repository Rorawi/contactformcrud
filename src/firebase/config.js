// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBw539A6EQDQiAqj7tQob6x3QKUHXMP8Nc",
  authDomain: "my-project-bfa64.firebaseapp.com",
  projectId: "my-project-bfa64",
  storageBucket: "my-project-bfa64.appspot.com",
  messagingSenderId: "211156177641",
  appId: "1:211156177641:web:439c9f78c85faad1b5d678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export  const auth = getAuth(app);