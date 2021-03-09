// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAea2ngchMSpVdvEABfolFssnPl9Lek6Kk",
  authDomain: "social-app-twitter-clone.firebaseapp.com",
  projectId: "social-app-twitter-clone",
  storageBucket: "social-app-twitter-clone.appspot.com",
  messagingSenderId: "875486441883",
  appId: "1:875486441883:web:f71c05e8811d645a86f13e",
  measurementId: "G-3RK0Y08XT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
