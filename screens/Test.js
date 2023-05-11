import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase-config";

import FormButton from "../components/Form/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/store/authSlice";

const Test = () => {
  const [userData, setUserData] = useState([]);

  const uid = useSelector((state) => state.uid);
  const email = useSelector((state) => state.email);
  const displayName = useSelector((state) => state.fullName);
  // const phoneNumber = useSelector((state) => state.auth.phoneNumber);
  // const photoURL = useSelector((state) => state.auth.photoURL);
  const authToken = useSelector((state) => state.authToken);
  // const token = useSelector((state) => state.auth.authToken);
  // console.log("token TEST SCreen: ", token);
  //console.log("samo state: ", userData);

  const dispatch = useDispatch();

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const db = getFirestore(app);


  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());

        Alert.alert("Success Logout");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const showContent = () => {
    return (
      <View>
        <Text>Verification Success!</Text>
      </View>
    );
  };

  const showSendVerificationEmail = () => {
    return (
      <View>
        <Text>Please verify your email to use ZOOM application.</Text>
        <Button
          title="Send Verification Email"
          onPress={() => sendEmailVerification(auth.currentUser)}
        />
      </View>
    );
  };

  const displayUserInfo = async () => {
    try {
      const user = auth.currentUser;
      console.log("USER: ", user);
      if (!user || !user.email) return;
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      // console.log("DATA TEST SCREEEN: ", data);

      if (data) {
        return setUserData(data);
      }
    } catch (err) {
      console.log(err.message);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    displayUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View
          style={{
            // backgroundColor: "gold",
            padding: 50,
          }}
        >
          {/* <Image
            source={{ uri: userData.imgUrl }}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          /> */}
          <Text style={styles.title}>Welcome {displayName}</Text>
          <Text>Profile Information: </Text>
          <View
            style={{
              color: "#ffffff",
              // borderWidth: 1,
              // borderColor: "red",
              padding: 0,
              width: 150,
            }}
          >
            <Text style={{ color: "white" }}>{uid}</Text>
            <Text style={{ color: "white" }}>{email}</Text>
            <Text style={{ color: "white" }}>{authToken}</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "red", padding: 20, marginTop: 20 }}>
          {auth?.currentUser?.emailVerified
            ? showContent()
            : showSendVerificationEmail()}
        </View>
        <View
          style={{
            marginTop: 5,
          }}
        >
          <FormButton buttonTitle="Odjavi Me" onPress={logOutUser} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B4C",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "gold",
    paddingBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
});

export default Test;
