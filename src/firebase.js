import firebase from "@firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDk502m62Q7ONwAC6pvUHdisvcZy8nYX_c",
    authDomain: "rap-trumps.firebaseapp.com",
    databaseURL: "https://rap-trumps.firebaseio.com",
    projectId: "rap-trumps",
    storageBucket: "rap-trumps.appspot.com",
    messagingSenderId: "1068098505682",
    appId: "1:1068098505682:web:0acfe6258b6d346fa1d60b",
    measurementId: "G-MRG14HHYW9"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;