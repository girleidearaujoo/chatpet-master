// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjg6AwIOFfd3uf_wdKhpPNMFkZlwSmaZ8",
  authDomain: "chatpet-59597.firebaseapp.com",
  projectId: "chatpet-59597",
  storageBucket: "chatpet-59597.appspot.com",
  messagingSenderId: "691359662586",
  appId: "1:691359662586:web:8332f1fb3196a6ae316443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export {auth};
