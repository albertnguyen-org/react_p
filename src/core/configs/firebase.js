// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANoCcbiGMfSNwvwTcz6IwJHArHIONhgBU",
    authDomain: "project-p-d04ab.firebaseapp.com",
    databaseURL: "https://project-p-d04ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-p-d04ab",
    storageBucket: "project-p-d04ab.appspot.com",
    messagingSenderId: "796721500661",
    appId: "1:796721500661:web:80365c3ce4fa5b604dd0bc",
    measurementId: "G-L1ED5CPBR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);