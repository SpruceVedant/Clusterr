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
    apiKey: "AIzaSyCYbCtCnizs6tcq3eqi_2wEkiSj6l8eLVY",
    authDomain: "clusterr-47f31.firebaseapp.com",
    projectId: "clusterr-47f31",
    storageBucket: "clusterr-47f31.appspot.com",
    messagingSenderId: "684562794339",
    appId: "1:684562794339:web:15905dbb72ec98ac157556"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();

export { auth };