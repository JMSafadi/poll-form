// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSg64-4B2jhFjnjyoQ7ivcO_i5X_YBhkE",
  authDomain: "challenge-grey-20855.firebaseapp.com",
  projectId: "challenge-grey-20855",
  storageBucket: "challenge-grey-20855.appspot.com",
  messagingSenderId: "302260013444",
  appId: "1:302260013444:web:9431d0b48e79dc4240b5d1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase