import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig ={
   apiKey: "AIzaSyBvBjQgGw0_XiYobLP41QgTuWeruSHlf5I",
  authDomain: "tienda-fe3f9.firebaseapp.com",
  projectId: "tienda-fe3f9",
  storageBucket: "tienda-fe3f9.appspot.com",
  messagingSenderId: "652480515156",
  appId: "1:652480515156:web:7efab315c8de7f5456f1c1"
}

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () =>{
    return firebase.firestore(app)
}