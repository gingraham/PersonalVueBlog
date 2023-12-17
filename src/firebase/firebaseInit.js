// Frontend hook up to the firebase backend
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVMSCavkxQLJfluRHVELZtdak0wbuqebQ",
    authDomain: "vuefirebaseblog-cf9af.firebaseapp.com",
    projectId: "vuefirebaseblog-cf9af",
    messagingSenderId: "362538943156",
    appId: "1:362538943156:web:5d48d137f0f98b52f8cde1",
    storageBucket: 'gs://vuefirebaseblog-cf9af.appspot.com'
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore()