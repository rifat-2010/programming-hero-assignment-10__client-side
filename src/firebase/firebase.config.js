// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1M_iyhuY6oDfE5YZeR6Q8rVbXg4qAJZc",
  authDomain: "programming-hero-assignm-c94c8.firebaseapp.com",
  projectId: "programming-hero-assignm-c94c8",
  storageBucket: "programming-hero-assignm-c94c8.firebasestorage.app",
  messagingSenderId: "492629732305",
  appId: "1:492629732305:web:11d3b2c7efd376f8e04ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);