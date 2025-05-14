import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import   "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAa1RNy8xcMPpVPg36W58mRE2AA86LaPZA",
    authDomain: "doctor-abc30.firebaseapp.com",
    databaseURL: "https://doctor-abc30-default-rtdb.firebaseio.com",
    projectId: "doctor-abc30",
    storageBucket: "doctor-abc30.appspot.com",
    messagingSenderId: "208301078345",
    appId: "1:208301078345:web:36f4ca46fe31567fa7cc98"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const storage = getStorage(firebase);
export default firebase
