import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyAk5gFAre2LbFg0YWmbL_MVfGHViD2Zc08",
  authDomain: "foodeat-feb04.firebaseapp.com",
  projectId: "foodeat-feb04",
  storageBucket: "foodeat-feb04.appspot.com",
  messagingSenderId: "893741563561",
  appId: "1:893741563561:web:5a5e61af7aae3e2d8173b8",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
