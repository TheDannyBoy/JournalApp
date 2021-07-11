import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBygf2o0ecXB9fuW-LHKQOZNjgld6Rgyk4",
  authDomain: "reactappfh.firebaseapp.com",
  projectId: "reactappfh",
  storageBucket: "reactappfh.appspot.com",
  messagingSenderId: "285224903085",
  appId: "1:285224903085:web:cf8f6f23e360d51b764124"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
};
