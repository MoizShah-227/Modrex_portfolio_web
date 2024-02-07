import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNESGSZhjbpjqY0tAHp-iegYN14JozssA",
  authDomain: "portfolio2-9b3ed.firebaseapp.com",
  projectId: "portfolio2-9b3ed",
  storageBucket: "portfolio2-9b3ed.appspot.com",
  messagingSenderId: "774254560071",
  appId: "1:774254560071:web:ebf7ba09753a30fad40262",
  measurementId: "G-R1B72JCCDQ"
};


  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)
const db = getFirestore(app)


export {db,storage};

