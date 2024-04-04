import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// const firebase = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyCVj5xIR9cEjLLuu5NoLcMAa96m5SNd5hk",
  authDomain: "imoney-77e98.firebaseapp.com",
  projectId: "imoney-77e98",
  storageBucket: "imoney-77e98.appspot.com",
  messagingSenderId: "419850025761",
  appId: "1:419850025761:web:477e2a466e6c9f0ba25c60",
  measurementId: "G-WCZQK50LS7",
};
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
