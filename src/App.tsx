
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import { firebaseConfig } from './core/configs/firebase';
import AppRouter from "./core/routes/AppRoute";

// import { firebase } from 'firebase/firebase-auth';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Setup Firebase reCapcha verifier
const auth = getAuth();
auth.languageCode = 'it';

// Setup firebase UI
// export const firebaseUISetup = new firebaseui.auth.AuthUI(firebase.auth());;

export default function App() {
    return <AppRouter />
}