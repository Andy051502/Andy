// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLoF99P6IgNGVcpfu86XOoxDAaX32S8Gw",
  authDomain: "smartparcellocker-abfda.firebaseapp.com",
  databaseURL: "https://smartparcellocker-abfda-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartparcellocker-abfda",
  storageBucket: "smartparcellocker-abfda.firebasestorage.app",
  messagingSenderId: "840948905793",
  appId: "1:840948905793:web:9d43e7af5df96917bbd3c0",
  measurementId: "G-L3M5C0BP6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
