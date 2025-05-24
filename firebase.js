// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_me46lP_QD482D-KfBm-6Q4_ukBuKjsI",
  authDomain: "smartparcellocker-fb6bd.firebaseapp.com",
  projectId: "smartparcellocker-fb6bd",
  storageBucket: "smartparcellocker-fb6bd.firebasestorage.app",
  messagingSenderId: "801398865847",
  appId: "1:801398865847:web:2bfdc297a93661b4867232",
  measurementId: "G-K0ZRBNBM9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
