// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import {  getFirestore,collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAY9ECts1Ik19qhS_-FUKwgbZ1rHSfpY5M",
    authDomain: "ecommer-website-97e24.firebaseapp.com",
    projectId: "ecommer-website-97e24",
    storageBucket: "ecommer-website-97e24.firebasestorage.app",
    messagingSenderId: "795232900014",
    appId: "1:795232900014:web:fa0d60535d4144dd04ee3f"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { addDoc,collection,auth,db,createUserWithEmailAndPassword };
