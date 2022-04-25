import { getApps, initializeApp, firebase } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAKRyaAAC9_TB4q3f06fJ2N5FkdC7PMBhg",
    authDomain: "nextfire-demo-c2b1d.firebaseapp.com",
    projectId: "nextfire-demo-c2b1d",
    storageBucket: "nextfire-demo-c2b1d.appspot.com",
    messagingSenderId: "854868131958",
    appId: "1:854868131958:web:d315b02d2cf05988d9df57",
    measurementId: "G-MQCNJM3NHB"
};


const app = initializeApp(firebaseConfig)


export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app)
export const storage = getStorage(app)