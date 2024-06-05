// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNLEkym-DsozEpeMIi7vMUB8Y4SzNlaCw",
  authDomain: "government-and-public-military.firebaseapp.com",
  projectId: "government-and-public-military",
  storageBucket: "government-and-public-military.appspot.com",
  messagingSenderId: "547696877470",
  appId: "1:547696877470:web:612d7f13ecd8bb798bc08f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;