


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