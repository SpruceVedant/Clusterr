// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARmPSmvWeQfbm-Txid4grF5diTY7rUdTQ",
  authDomain: "clusterr-f191f.firebaseapp.com",
  projectId: "clusterr-f191f",
  storageBucket: "clusterr-f191f.appspot.com",
  messagingSenderId: "1026125477613",
  appId: "1:1026125477613:web:fbbbac8904ef99b8f1bee4",
  measurementId: "G-XV4BFCGVX1"
};

// Initialize Firebase
let app;
if (firebase.app.length===0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const analytics = getAnalytics(app);