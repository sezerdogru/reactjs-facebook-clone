import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, Timestamp, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDR4oFhytg93Y50vlnF_S9d_-i_qmx25EA",
  authDomain: "fb-clone-7c2de.firebaseapp.com",
  projectId: "fb-clone-7c2de",
  storageBucket: "fb-clone-7c2de.appspot.com",
  messagingSenderId: "559342056594",
  appId: "1:559342056594:web:3fc4a7eb01c18d3e88e24b",
  measurementId: "G-GHFJ1THQ9H"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider, doc, addDoc, Timestamp, query, orderBy, collection, onSnapshot, GoogleAuthProvider, signInWithPopup };
export default db;