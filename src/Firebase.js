// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCb61Z6y7AEGuQtsT8_l0yFmUZaG2unTjs",
    authDomain: "melanoma-detector-22605.firebaseapp.com",
    projectId: "melanoma-detector-22605",
    storageBucket: "melanoma-detector-22605.firebasestorage.app",
    messagingSenderId: "195915498835",
    appId: "1:195915498835:web:4670e8dbd6f9f8bb7acda6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services and configuration
export { auth, db, storage, firebaseConfig };
 




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import {getStorage} from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAx6HmMleJAur41a7uHTKe1YhTLG3BF1M4",
//   authDomain: "melanomaproject-10350.firebaseapp.com",
//   projectId: "melanomaproject-10350",
//   storageBucket: "melanomaproject-10350.firebasestorage.app",
//   messagingSenderId: "533239834964",
//   appId: "1:533239834964:web:fb04e24cdcee8e03b380c1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const imageDb = getStorage(app);