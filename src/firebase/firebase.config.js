// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFlbICo0wnxAsk8uO2ak6HDP0UjFES0zg",
  authDomain: "myims-d3864.firebaseapp.com",
  projectId: "myims-d3864",
  storageBucket: "myims-d3864.appspot.com",
  messagingSenderId: "558353361496",
  appId: "1:558353361496:web:3a50bbff01ab1cbf23382d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth