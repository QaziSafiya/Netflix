// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVxnxPS3bb6dCEXz7y51UVnm-vzYPgQv0",
  authDomain: "netflixgpt-fc219.firebaseapp.com",
  projectId: "netflixgpt-fc219",
  storageBucket: "netflixgpt-fc219.appspot.com",
  messagingSenderId: "842843813375",
  appId: "1:842843813375:web:9d22aef2eadf9dbab7a3ca",
  measurementId: "G-04TTZXDEL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
