import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/store/authSlice";

import {
  Animated,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from "react-native";
// firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

// component
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
// import SocialButton from "../../../components/Form/SocialButton";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";

// icons
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconEye from "../../../assets/images/icons-formInput/view-eye.png";
import HideEye from "../../../assets/images/icons-formInput/hide-eye.png";

// style
import { StyleScreenLogin } from "../../styles/screenLogin";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVissible, setPasswordVissible] = useState(true);
  const [erroMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const startValue = new Animated.Value(1);
  const endValue = 1.5;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const db = getFirestore(app);

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

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user.providerData;
          console.log("Ulogovan User: ", user);

          try {
            const user = auth.currentUser;
            if (!user || !user.email) {
              return;
            }
            const q = query(
              collection(db, "users"),
              where("uid", "==", user?.uid)
            );
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            console.log("login user TRY: ", data);

            if (data) {
              dispatch(loginUser(data));
            }
          } catch (err) {
            console.log(err.message);
            alert("An error occured while fetching user data");
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
          Alert.alert(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
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
            <View>
              {/* <Text>ANIMACIJA</Text> */}
              <Image
                style={StyleScreenLogin.LogoTop}
                source={require("../../../assets/icon.png")}
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 25, color: "red" }}>{erroMessage}</Text>
          </View>

          <FormInput
            labelValue={email}
            onChangeText={(email) => setEmail(email)}
            placeholderText="Email"
            iconType={require("../../../assets/images/icons-formInput/email.png")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={StyleScreenLogin.PasswordWrapp}>
            <FormInput
              labelValue={password}
              onChangeText={(password) => setPassword(password)}
              placeholderText="Password"
              iconType={require("../../../assets/images/icons-formInput/unlock.png")}
              secureTextEntry={passwordVissible}
            />

            <View style={StyleScreenLogin.PasswordInsideEl}>
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

          <View>
            <Text style={StyleScreenLogin.navButtonText}>Neki TEXT!</Text>
          </View>

          {/* <SocialButton
            buttonTitle="Sign in with G-mail"
            btnType={require("../../../assets/images/icons-formInput/google.png")}
            color="#000000"
            backgroundColor="green"
          /> */}

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

export default LoginScreen;
