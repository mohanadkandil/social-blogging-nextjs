import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKRyaAAC9_TB4q3f06fJ2N5FkdC7PMBhg",
    authDomain: "nextfire-demo-c2b1d.firebaseapp.com",
    projectId: "nextfire-demo-c2b1d",
    storageBucket: "nextfire-demo-c2b1d.appspot.com",
    messagingSenderId: "854868131958",
    appId: "1:854868131958:web:d315b02d2cf05988d9df57",
    measurementId: "G-MQCNJM3NHB"
};

if (!firebase.getApps().length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();