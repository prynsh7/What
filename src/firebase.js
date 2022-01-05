import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBph-O6Yh8zH6_TlB0aQCLoAklyZW5hS3Q",
  authDomain: "communicat-f6a54.firebaseapp.com",
  databaseURL: "https://communicat-f6a54-default-rtdb.firebaseio.com",
  projectId: "communicat-f6a54",
  storageBucket: "communicat-f6a54.appspot.com",
  messagingSenderId: "475359157605",
  appId: "1:475359157605:web:b34c23857beac7782e558c",
  measurementId: "G-VJJRVX0P7G"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const provider2 = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider, provider2 };
export default db;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

