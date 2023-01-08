// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUbEgWRYJXZNMZ8dbkn33pfzw_wpAH5oo",
  authDomain: "challenge-grey-bf16c.firebaseapp.com",
  projectId: "challenge-grey-bf16c",
  storageBucket: "challenge-grey-bf16c.appspot.com",
  messagingSenderId: "467349664013",
  appId: "1:467349664013:web:ea959e35c7400ce93f4044"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;