// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3sVvhtwxngIxfqQwVSUxj4qOz71Jq2sM",
  authDomain: "grocery-manager-a2e7a.firebaseapp.com",
  projectId: "grocery-manager-a2e7a",
  storageBucket: "grocery-manager-a2e7a.appspot.com",
  messagingSenderId: "520482266392",
  appId: "1:520482266392:web:83bd2cf9a15bd5e994126d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;