import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDHOfGNsN57BjB1XBDq3h8_ESVvFyeE0cw",
  authDomain: "tolu-netflix.firebaseapp.com",
  projectId: "tolu-netflix",
  storageBucket: "tolu-netflix.appspot.com",
  messagingSenderId: "615446031303",
  appId: "1:615446031303:web:3ff244e059e46bb8a5c7e2",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
