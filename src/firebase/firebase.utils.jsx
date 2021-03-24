import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCV9sLwh56Uf7Q2bM6tsnL7dQckWSvscX0",
    authDomain: "crwn-db-c50df.firebaseapp.com",
    projectId: "crwn-db-c50df",
    storageBucket: "crwn-db-c50df.appspot.com",
    messagingSenderId: "16787034404",
    appId: "1:16787034404:web:4d974222616ceed24ee3b1"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  //always trigger the google pop-up whenever using GoogleAuthProvider for authentication or signin
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider); //use google pop-up

  export default firebase;