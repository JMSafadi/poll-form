// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDS7fqLqDz03OjkBcPht09XLEx9ctQv3I",
  authDomain: "challenge-grey-f9a81.firebaseapp.com",
  projectId: "challenge-grey-f9a81",
  storageBucket: "challenge-grey-f9a81.appspot.com",
  messagingSenderId: "46131745308",
  appId: "1:46131745308:web:8ef61b392bcee1dd8105d9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase