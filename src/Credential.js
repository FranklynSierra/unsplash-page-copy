// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-kw6Y8FJG_b_V1BnGoEKFk-6L19I6WZM",
  authDomain: "unsplashcopy.firebaseapp.com",
  projectId: "unsplashcopy",
  storageBucket: "unsplashcopy.appspot.com",
  messagingSenderId: "988321964890",
  appId: "1:988321964890:web:afa6831e74921fbaf18963"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;