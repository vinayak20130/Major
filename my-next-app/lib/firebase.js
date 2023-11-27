// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";


import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDRq5lP0Sy1BGJodH45f37q-IZ13Cw_t1A",
  authDomain: "timemachinetrades.firebaseapp.com",
  projectId: "timemachinetrades",
  storageBucket: "timemachinetrades.appspot.com",
  messagingSenderId: "326230374110",
  appId: "1:326230374110:web:07515fab62a9b7274ab44f",
  measurementId: "G-D987XXPB2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app,createUserWithEmailAndPassword };