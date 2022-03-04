
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDbqO-5pJF-pyJInGY2G17cn86279bwZ5g",
  authDomain: "crud---operations.firebaseapp.com",
  projectId: "crud---operations",
  storageBucket: "crud---operations.appspot.com",
  messagingSenderId: "326319776633",
  appId: "1:326319776633:web:2945ece67c955caa7885a8",
  measurementId: "G-EHY7RX3TEJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
