import React, { useState, useEffect } from "react";

import {
  Animated,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseConfig } from "../../../firebase-config";

// component
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";

// style
import { StyleScreenLogin } from "../../styles/screenLogin";

const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const startValue = new Animated.Value(1);
  const endValue = 1.5;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setErrorMessage(Alert.alert(error.message));
      });
  };

  useEffect(() => {
    Animated.loop(
      Animated.spring(startValue, {
        toValue: endValue,
        friction: 1,
        useNativeDriver: true,
      }),
      { iterations: 1000 }
    ).start();
  }, [startValue, endValue]);

  return (
    <View
      style={{
        backgroundColor: "#073B4C",
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <View
          style={{
            marginBottom: 50,
          }}
        >
          <Image
            style={{
              height: 70,
              width: 250,
              borderWidth: 1,
              padding: 50,
              borderColor: "gold",
              borderRadius: 10,
              marginBottom: 20,
              marginTop: 20,
            }}
            source={require("../../../assets/icon.png")}
          />
        </View>

        <View>
          <Text style={{ fontSize: 25, color: "red" }}>{errorMessage}</Text>
        </View>
      </View>
      <KeyboardAvoidingWrapper>
        <>
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType={require("../../../assets/images/icons-formInput/email.png")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormButton buttonTitle="Reset Password" onPress={resetPassword} />

          <TouchableOpacity
            style={[
              StyleScreenLogin.forgotButton,
              { marginBottom: 100, marginTop: 100 },
            ]}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={StyleScreenLogin.navButtonText}>
              Dont't have an account? Create here
            </Text>
          </TouchableOpacity>
        </>
      </KeyboardAvoidingWrapper>
    </View>
  );
};

export default ResetPassword;
