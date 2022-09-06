import { getFirestore } from "firebase/firestore"
//SDK
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCip4XIHaR4Z9p8q8z79upvBT42WGcKG-Y",
  authDomain: "redbikestoreappi.firebaseapp.com",
  databaseURL: "https://redbikestoreappi-default-rtdb.firebaseio.com",
  projectId: "redbikestoreappi",
  storageBucket: "redbikestoreappi.appspot.com",
  messagingSenderId: "821639310170",
  appId: "1:821639310170:web:3b0446d99befdc7307e163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) //trae base de datos => al importar db