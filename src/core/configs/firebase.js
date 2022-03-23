import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseui } from 'firebaseui';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyANoCcbiGMfSNwvwTcz6IwJHArHIONhgBU",
    authDomain: "project-p-d04ab.firebaseapp.com",
    databaseURL: "https://project-p-d04ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-p-d04ab",
    storageBucket: "project-p-d04ab.appspot.com",
    messagingSenderId: "796721500661",
    appId: "1:796721500661:web:80365c3ce4fa5b604dd0bc",
    measurementId: "G-L1ED5CPBR6"
};


export default class Firebase {
    auth = getAuth();

    signInWithEmailAndPassword = async ({ email, password }) => {
        createUserWithEmailAndPassword(
            this.auth, email, password
        ).then((res) => {
            // Get `user` from credential
            const userCer = res.user;
        }).catch((error) => {
            // TODO: Handle error here .... 
        });
    }
}




