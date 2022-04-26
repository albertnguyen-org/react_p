
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import React from "react";
import { firebaseConfig } from "./configs/firebase";
import AppRouter from "./routes/AppRoute";

// import { firebase } from 'firebase/firebase-auth';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Setup Firebase reCapcha verifier
const auth = getAuth(app);

auth.languageCode = "it";

// Setup firebase UI
// export const firebaseUISetup = new firebaseui.auth.AuthUI(firebase.auth());;
export {
	auth as firebaseAuth
};
export default function App() {
	return <AppRouter />;
}