// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "day27-b033b.firebaseapp.com",
  projectId: "day27-b033b",
  storageBucket: "day27-b033b.appspot.com",
  messagingSenderId: "391472456311",
  appId: "1:391472456311:web:3179c0b33402ae0d751c72",
  measurementId: "G-H0HS7356LH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
