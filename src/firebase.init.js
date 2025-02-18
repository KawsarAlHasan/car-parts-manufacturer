// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PUBLIC_APIKEY,
  authDomain: process.env.PUBLIC_AUTHDOMAIN,
  projectId: process.env.PUBLIC_PROJECTID,
  storageBucket: process.env.PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.PUBLIC_MESSAGINGSENDERID,
  appId: process.env.PUBLIC_APPID,
  measurementId: process.env.PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
