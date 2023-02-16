import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase-config";

// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// credentials context
import { CredentialsContext } from "../components/Credentials-async";

import FormButton from "../components/Form/FormButton";

const Test = () => {
  const [userData, setUserData] = useState([]);
  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  // let testing = props.route.params.user.email;
  // let logout = props.route.params.auth;
  const { email, password } = storedCredentials;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const db = getFirestore(app);

  const clearLogin = () => {
    AsyncStorage.removeItem("zoomCredentials")
      .then(() => {
        signOut(auth)
          .then(() => {
            Alert.alert("Success Logout");
          })
          .catch((error) => {
            Alert.alert(error.message);
          });

        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  // let text = email;
  // let result = text?.split("@")[0];

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
      if (!user || !user.email) return;
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      // console.log("DATA: ", { ...data });

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
        <Text style={styles.title}>Welcome {email}</Text>

        <View
          style={{
            backgroundColor: "gray",
            padding: 50,
          }}
        >
          {/* <Image
            source={{ uri: userData.imgUrl }}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          /> */}
          <Text>Profile Information: </Text>
          <View
            style={{
              color: "#ffffff",
              borderWidth: 1,
              borderColor: "red",
              padding: "10%",
            }}
          >
            <Text style={{ color: "blue" }}>{userData.fullname}</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "red", padding: 20, marginTop: 100 }}>
          {auth?.currentUser?.emailVerified
            ? showContent()
            : showSendVerificationEmail()}
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <FormButton buttonTitle="Odjavi Me" onPress={clearLogin} />
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
    color: "red",
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
});

export default Test;
