import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmsRZDm-UiRXrbVawXeALrH6a7mvxb0zI",
  authDomain: "antidepressotodo.firebaseapp.com",
  databaseURL:
    "https://antidepressotodo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "antidepressotodo",
  storageBucket: "antidepressotodo.appspot.com",
  messagingSenderId: "986590210949",
  appId: "1:986590210949:web:0374cea87902e025c4f2ec",
  measurementId: "G-Z1X2ML58YL",
});

const db = app.firestore();
// const auth = app.auth();

export default db;
