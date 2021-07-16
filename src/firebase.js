import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDqOMvY-_c4EQQHCmueFF9lScQm8E3tMhI",
	authDomain: "the-dating-arts.firebaseapp.com",
	projectId: "the-dating-arts",
	storageBucket: "the-dating-arts.appspot.com",
	messagingSenderId: "945116935466",
	appId: "1:945116935466:web:83ed6ce918c1f76c5c9a53",
	measurementId: "G-MK6D2ZNRBZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

firebase.functions();

export { db, auth, firebase };
