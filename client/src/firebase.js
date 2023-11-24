// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnTs5Pp6CBb0TFfDqfN9NTI6FqdAFc1Pw",
  authDomain: "ziamonconnects.firebaseapp.com",
  databaseURL: "https://ziamonconnects-default-rtdb.firebaseio.com",
  projectId: "ziamonconnects",
  storageBucket: "ziamonconnects.appspot.com",
  messagingSenderId: "494262962170",
  appId: "1:494262962170:web:74944630b5f4d7cf610643",
  measurementId: "G-SR9GK0K6L8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
