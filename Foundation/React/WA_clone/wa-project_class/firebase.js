// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// auth import -> step-1
import { getAuth } from "firebase/auth";
// firstore step-1
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC50bzscTtB9jCeQWKmlHTNKwaUvXOxLcU",
    authDomain: "wa-clone-83cad.firebaseapp.com",
    projectId: "wa-clone-83cad",
    storageBucket: "wa-clone-83cad.appspot.com",
    messagingSenderId: "508080111257",
    appId: "1:508080111257:web:a270cc09f9b7956830c208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth-step-2
const auth = getAuth(app);
// firestor step-2
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage }

