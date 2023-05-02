// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgSAIb-imccaOV_4BQ9D4Zmpgxp1FKJxk",
  authDomain: "flavor-frenzy-auth.firebaseapp.com",
  projectId: "flavor-frenzy-auth",
  storageBucket: "flavor-frenzy-auth.appspot.com",
  messagingSenderId: "314625515960",
  appId: "1:314625515960:web:121837e7fa85232158af4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;