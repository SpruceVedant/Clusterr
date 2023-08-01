// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCq9JkVRgIMaEriRb94Fizrke6-o-Swrlg",
//   authDomain: "clus-85e9b.firebaseapp.com",
//   projectId: "clus-85e9b",
//   storageBucket: "clus-85e9b.appspot.com",
//   messagingSenderId: "98279637899",
//   appId: "1:98279637899:web:10e3b455a24a2c5e12258e"
// };


// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = firebase.auth()

// export { app };
// const analytics = getAnalytics(app);


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();

export { auth };