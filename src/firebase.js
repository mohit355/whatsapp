// import firebase from "firebase/app";
import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeNIKVq2XrOvvq2pmwxWDSrlwKfOB7WUg",
  authDomain: "whatsapp-chitchats.firebaseapp.com",
  databaseURL: "https://whatsapp-chitchats.firebaseio.com",
  projectId: "whatsapp-chitchats",
  storageBucket: "whatsapp-chitchats.appspot.com",
  messagingSenderId: "874222767820",
  appId: "1:874222767820:web:8ee685e3171e923d443c69",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// window.firestore = firestore;
// const auth = firebase.auth();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
