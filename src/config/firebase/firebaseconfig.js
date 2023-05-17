// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDBvFJloYxiNo0UnzlQa06sL1DidwiM18",
  authDomain: "hackathon-fe4c4.firebaseapp.com",
  projectId: "hackathon-fe4c4",
  storageBucket: "hackathon-fe4c4.appspot.com",
  messagingSenderId: "483670054626",
  appId: "1:483670054626:web:fcbd6c508ea54cb18af0bb",
  measurementId: "G-2DTDS04XKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;