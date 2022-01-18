import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3TtEBKU8foF6rfZVgYkcmyabmBz6ptU8",
  authDomain: "clone-316eb.firebaseapp.com",
  projectId: "clone-316eb",
  storageBucket: "clone-316eb.appspot.com",
  messagingSenderId: "977629043687",
  appId: "1:977629043687:web:ae428292fc824029ddbb42",
  measurementId: "G-MX6KSGH9X1",
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth()

export { db, auth }
