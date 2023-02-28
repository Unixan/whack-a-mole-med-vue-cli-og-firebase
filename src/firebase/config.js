import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_iUA5t9P8OEStJ2_zIDrYYLzmdM9KWwI",
  authDomain: "tutorial-firebase-projec-8651d.firebaseapp.com",
  projectId: "tutorial-firebase-projec-8651d",
  storageBucket: "tutorial-firebase-projec-8651d.appspot.com",
  messagingSenderId: "499469792980",
  appId: "1:499469792980:web:e157519bf4b3755c856d41",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const moleApp = firebase.firestore();

export { moleApp };
