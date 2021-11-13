import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDmBVihfj9Dp6og8U2um2SRPmeO-Aa_-FU",
  authDomain: "chat-app-f0bd5.firebaseapp.com",
  projectId: "chat-app-f0bd5",
  storageBucket: "chat-app-f0bd5.appspot.com",
  messagingSenderId: "601670044431",
  appId: "1:601670044431:web:af6e4bae7d2df532e20c7a",
  measurementId: "G-0G8HCHF1P3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
