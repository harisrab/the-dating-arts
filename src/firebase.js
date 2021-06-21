import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCNTwA8si_qsts3owkQS3B81CFlBMFHJZc",
	authDomain: "the-dating-a.firebaseapp.com",
	projectId: "the-dating-a",
	storageBucket: "the-dating-a.appspot.com",
	messagingSenderId: "591832416553",
	appId: "1:591832416553:web:8aa9dc70b92a186f933738",
	measurementId: "G-85HLVT9JX1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
