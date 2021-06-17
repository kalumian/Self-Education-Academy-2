import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD7MT_r5a4B7jNHNCE0jeV_pGL3njXT-eA",
    authDomain: "self-education-aca.firebaseapp.com",
    projectId: "self-education-aca",
    storageBucket: "self-education-aca.appspot.com",
    messagingSenderId: "631287834812",
    appId: "1:631287834812:web:8f4ec3810a1592cd1388b9",
    measurementId: "G-9CFR9JFJYE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export const db = firebase.firestore();
export const auth = firebase.auth();
