import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
    //enter your fire base config details
    apiKey: "AIzaSyBpmLwGgzIc65i6YbdGMODuKK00x5uRlY4",
    authDomain: "react-native-test-12cb8.firebaseapp.com",
    databaseURL: "https://react-native-test-12cb8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-native-test-12cb8",
    storageBucket: "react-native-test-12cb8.appspot.com",
    messagingSenderId: "875358294051",
    appId: "1:875358294051:web:5f7d69229a9f912c966196"
};


firebase.initializeApp(firebaseConfig);

export default firebase;