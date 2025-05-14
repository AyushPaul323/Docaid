import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function StartFirebase (){
  const firebaseConfig = {
    apiKey: "AIzaSyAa1RNy8xcMPpVPg36W58mRE2AA86LaPZA",
    authDomain: "doctor-abc30.firebaseapp.com",
    databaseURL: "https://doctor-abc30-default-rtdb.firebaseio.com",
    projectId: "doctor-abc30",
    storageBucket: "doctor-abc30.appspot.com",
    messagingSenderId: "208301078345",
    appId: "1:208301078345:web:36f4ca46fe31567fa7cc98"
  };
const app = initializeApp(firebaseConfig);
return getDatabase(app);
}
export default StartFirebase;