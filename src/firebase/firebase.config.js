// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzPK12ZvI2wQkIxAncsaVi1ltAWsB8258",
  authDomain: "emec-mapper-app.firebaseapp.com",
  projectId: "emec-mapper-app",
  storageBucket: "emec-mapper-app.appspot.com",
  messagingSenderId: "777800313970",
  appId: "1:777800313970:web:4ae919cb0347dd2128a6eb",
  measurementId: "G-R0WB88B2MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;