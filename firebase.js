// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, database };
