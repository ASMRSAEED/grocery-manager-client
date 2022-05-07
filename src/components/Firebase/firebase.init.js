// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-glax14qiIdzIxp9Hq1fekZxFsHzeXkI",
  authDomain: "vehicle-manager-388f6.firebaseapp.com",
  projectId: "vehicle-manager-388f6",
  storageBucket: "vehicle-manager-388f6.appspot.com",
  messagingSenderId: "564055169526",
  appId: "1:564055169526:web:e4d87e9c05fee77c8bcfd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;