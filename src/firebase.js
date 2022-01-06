import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpouBggNKwLuQ7KKn7XDEQSgKQ3JOcL-Q",
  authDomain: "quora-s.firebaseapp.com",
  databaseURL: "https://quora-s-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quora-s",
  storageBucket: "quora-s.appspot.com",
  messagingSenderId: "888341973583",
  appId: "1:888341973583:web:db4a03bbcda92da650383a",
  measurementId: "G-XF6N9ZP3CG"
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

