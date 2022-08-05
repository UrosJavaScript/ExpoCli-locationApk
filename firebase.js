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

/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

 */


firebase.initializeApp(firebaseConfig);

export default firebase;