// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwFDgazgcunIOJ89CFNDO5FimXD2F17bQ",
  authDomain: "speciality-real-estate.firebaseapp.com",
  projectId: "speciality-real-estate",
  storageBucket: "speciality-real-estate.appspot.com",
  messagingSenderId: "1072864370614",
  appId: "1:1072864370614:web:2cad2b72a02e48c41f6b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;