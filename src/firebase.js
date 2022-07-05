// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArdULWFNrWkKxcblyXxOLgEa404DkWgHw",
  authDomain: "pick-six-ai.firebaseapp.com",
  projectId: "pick-six-ai",
  storageBucket: "pick-six-ai.appspot.com",
  messagingSenderId: "864267252189",
  appId: "1:864267252189:web:b52c3c44fa3f49f0564634",
  measurementId: "G-B7Q0GQJM41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();