import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC45lbsb8YpyHJedn0LZBT4ZXnw-kDWIzU",
  authDomain: "netflixgpt-8c267.firebaseapp.com",
  projectId: "netflixgpt-8c267",
  storageBucket: "netflixgpt-8c267.firebasestorage.app",
  messagingSenderId: "723073534792",
  appId: "1:723073534792:web:727e19dc3d877caa7c017d",
  measurementId: "G-5LGBY6RPLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
