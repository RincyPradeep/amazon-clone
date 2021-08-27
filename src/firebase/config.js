import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBaONKoroL-JiMFHuT3768tfJAcYttYDJo",
  authDomain: "clone-25652.firebaseapp.com",
  projectId: "clone-25652",
  storageBucket: "clone-25652.appspot.com",
  messagingSenderId: "654941267279",
  appId: "1:654941267279:web:df0a7f084a92fb69fd513a",
  measurementId: "G-33CFLZ58LN"
};

  export default firebase.initializeApp(firebaseConfig)