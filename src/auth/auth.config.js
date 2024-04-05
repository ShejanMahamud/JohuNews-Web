// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
getAuth
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ1DmZm3kJS7m8ZkldpDLaC2d7km2x2E0",
  authDomain: "johunews-web.firebaseapp.com",
  projectId: "johunews-web",
  storageBucket: "johunews-web.appspot.com",
  messagingSenderId: "126226571831",
  appId: "1:126226571831:web:6db1ba36a533c25e5a55b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;