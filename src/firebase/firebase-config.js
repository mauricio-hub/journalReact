import  firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyAXr83ffE_fctk1yM0OEG4V5bkRQXEhg3k",
    authDomain: "journalapp-react-2b5f7.firebaseapp.com",
    databaseURL: "https://journalapp-react-2b5f7.firebaseio.com",
    projectId: "journalapp-react-2b5f7",
    storageBucket: "journalapp-react-2b5f7.appspot.com",
    messagingSenderId: "567903171795",
    appId: "1:567903171795:web:31fe26407e5f29e9ee1026"
  };
  // Initialize Firebase
  //esta es la base de datos
  firebase.initializeApp(firebaseConfig);
//esta es la referencia a firestore
  const db = firebase.firestore();
//esto es para poder hacer autenticaciones con google
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

//estas son las exportaciones a usar en el archivo auth
export {
	db,
	googleAuthProvider,
	firebase
}
