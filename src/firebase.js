import firebase from 'firebase/app';
import "firebase/auth";

export const auth  = firebase.initializeApp({
    apiKey: "AIzaSyBEvmymbzG1uM72i7LeFNHSeaenotV0Wio",
    authDomain: "ymechat-80fd7.firebaseapp.com",
    projectId: "ymechat-80fd7",
    storageBucket: "ymechat-80fd7.appspot.com",
    messagingSenderId: "341604152243",
    appId: "1:341604152243:web:6906a513c08fe79c6f11c6"
  }).auth();