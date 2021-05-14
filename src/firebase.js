import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDdg4GAJN-erxoZwBfwaWZN-y8x42ofV6Q",
    authDomain: "todoist-app-eba7a.firebaseapp.com",
    projectId: "todoist-app-eba7a",
    storageBucket: "todoist-app-eba7a.appspot.com",
    messagingSenderId: "860483365990",
    appId: "1:860483365990:web:9d849109cf04b5818091a7"
  });

export { firebaseConfig as firebase };