import React, { useState, useEffect, useContext } from "react";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";

import {
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// credentials context
import { CredentialsContext } from "../../../components/Credentials-async";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../firebase-config";

// icons
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconEye from "../../../assets/images/icons-formInput/view-eye.png";
import HideEye from "../../../assets/images/icons-formInput/hide-eye.png";

// component
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
import SocialButton from "../../../components/Form/SocialButton";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
// import { Welcome } from "../../../screens/Welcome";

// style
import { StyleScreenLogin } from "../../styles/screenLogin";

// web CLIENTiD: 1050717595769-sv7092aolgjl9ibqi6p8lof0n0frchhp.apps.googleusercontent.com
// iOS Id: 1050717595769-vc00emlr03clvmj37r5rr6u5f3bp2brn.apps.googleusercontent.com
//  android: 1050717595769-s0m2c4gaiqo0s3f8ohkpkklktuej9t3e.apps.googleusercontent.com

// WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  let [email, setEmail] = useState();
  let [password, setPasswrod] = useState();
  const [passwordVissible, setPasswordVissible] = useState(true);

  const [erroMessage, setErrorMessage] = useState("");

  // Google authentication
  // const [accessToken, setAccessToken] = useState(null);
  // const [user, setUser] = useState(null);
  // const [request, response, promtpAsync] = Google.useIdTokenAuthRequest({
  //   clientId:
  //     "1050717595769-sv7092aolgjl9ibqi6p8lof0n0frchhp.apps.googleusercontent.com",
  //   iosClientId:
  //     "1050717595769-vc00emlr03clvmj37r5rr6u5f3bp2brn.apps.googleusercontent.com",
  //   androidClientId:
  //     "1050717595769-s0m2c4gaiqo0s3f8ohkpkklktuej9t3e.apps.googleusercontent.com",
  // });

  // Context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const navigation = useNavigation();

  const startValue = new Animated.Value(1);
  const endValue = 1.5;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

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

  // useEffect for GOOGLE
  // useEffect(() => {
  //   if (response?.type === "success") {
  //     setAccessToken(response.authentication.accessToken);
  //     accessToken && fetchUserInfo();
  //   }
  // }, [response, accessToken]);

  // async function fetchUserInfo() {
  //   let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //     headers: { Authorization: `Bearer ${accessToken}` },
  //   });
  //   const userInfo = await response.json();
  //   setUser(userInfo);
  // }

  let message = "Uspesno ste se ulogovali. Uzivajte u ZOOM Aplikaciji";

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Signed In");
          const user = userCredential.user;
          console.log(user);

          // navigation.navigate("Test");
          // navigation.dispatch(
          //   CommonActions.reset({
          //     index: 1,
          //     routes: [{ name: "Test", params: { user: user, auth: auth } }],
          //   })
          // );
          persistLogin({ ...user }, message);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          Alert.alert(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  };

  const persistLogin = (credentials, message) => {
    AsyncStorage.setItem("zoomCredentials", JSON.stringify(credentials))
      .then(() => {
        console.log("persint Funkcija: ", message);
        Alert.alert(message);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <>
      <KeyboardAvoidingWrapper>
        <View style={StyleScreenLogin.Container}>
          {/* <Image
            style={StyleScreenLogin.Logo}
            source={require("../../../assets/icon.png")}
          /> */}
          {/* <Text style={StyleScreenLogin.Text}>Login to zOOm</Text> */}

          {/* <MaterialCommunityIcons
          name="map-marker-radius"
          size={100}
          color="#fff12a"
        /> */}

          <View>
            {/* <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    scale: startValue,
                  },
                ],
              },
            ]}
          /> */}
            <View>
              {/* <Text>ANIMACIJA</Text> */}
              <Image
                style={{
                  height: 70,
                  width: 250,
                  borderWidth: 1,
                  padding: 50,
                  borderColor: "gold",
                  borderRadius: 10,
                  marginBottom: 20,
                  marginTop: 0,
                }}
                source={require("../../../assets/icon.png")}
              />
            </View>

            {/* <Text
              style={{
                color: "#fff12a",
                fontSize: 20,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              LOGIN
            </Text> */}
          </View>

          <View>
            <Text style={{ fontSize: 25, color: "red" }}>{erroMessage}</Text>
          </View>

          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType={require("../../../assets/images/icons-formInput/email.png")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <FormInput
              labelValue={password}
              onChangeText={(userPass) => setPasswrod(userPass)}
              placeholderText="Password"
              iconType={require("../../../assets/images/icons-formInput/unlock.png")}
              secureTextEntry={passwordVissible}
            />

            <View
              style={{
                position: "absolute",
                top: 15,
                right: 20,
                bottom: 0,
              }}
            >
              {passwordVissible ? (
                <TouchableOpacity
                  onPress={() => setPasswordVissible(!passwordVissible)}
                >
                  <Image style={{ width: 30, height: 30 }} source={IconEye} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setPasswordVissible(!passwordVissible)}
                >
                  <Image style={{ width: 30, height: 30 }} source={HideEye} />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <FormButton buttonTitle="Sign In" onPress={handleLogin} />

          <TouchableOpacity
            style={StyleScreenLogin.forgotButton}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text style={StyleScreenLogin.navButtonText}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>

          {/* <SocialButton
            buttonTitle="Sign in with Facebook"
            btnType={require("../../../assets/images/icons-formInput/facebook.png")}
            color="#073B4C"
            backgroundColor="white"
          /> */}

          <SocialButton
            buttonTitle="Sign in with G-mail"
            btnType={require("../../../assets/images/icons-formInput/google.png")}
            color="#000000"
            backgroundColor="green"
          />

          <TouchableOpacity
            style={StyleScreenLogin.forgotButton}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={StyleScreenLogin.navButtonText}>
              Dont't have an account? Create here
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    // height: 50,
    // width: 50,
    backgroundColor: "gold",

    borderColor: "red",
    borderWidth: 8,

    width: 30,
    height: 30,
    // transform: [{ rotate: "45deg" }],
  },
});

export default LoginScreen;
