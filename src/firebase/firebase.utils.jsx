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

  try {
    firebase.initializeApp(config);
  } catch (error) {
    console.error('firebase initialization error')
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  //always trigger the google pop-up whenever using GoogleAuthProvider for authentication or signin
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  