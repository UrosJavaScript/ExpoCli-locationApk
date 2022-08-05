import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
    //enter your fire base config details
    apiKey: "AIzaSyDIHeVx5nILAtEJkpFARNMMnqVLAMuVkEs",
    authDomain: "test-apk-17655.firebaseapp.com",
    projectId: "test-apk-17655",
    storageBucket: "test-apk-17655.appspot.com",
    messagingSenderId: "952482744952",
    appId: "1:952482744952:web:61ca8fbd959194ff067b8d"
};


firebase.initializeApp(firebaseConfig);

export default firebase;