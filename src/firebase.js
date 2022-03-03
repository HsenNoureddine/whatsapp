import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDa83CfxqhQeqEpTr_FYb0ze7L_nqvDs7U",
  authDomain: "whatsapp-clone-6d03f.firebaseapp.com",
  projectId: "whatsapp-clone-6d03f",
  storageBucket: "whatsapp-clone-6d03f.appspot.com",
  messagingSenderId: "1008886972938",
  appId: "1:1008886972938:web:382f9af3668c4b868095f3",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
