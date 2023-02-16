import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// credentials context
import { CredentialsContext } from "../../../components/Credentials-async";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../../../firebase-config";

// import { StyleScreenRegister } from "../../styles/screenRegister";

// component
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
import SocialButton from "../../../components/Form/SocialButton";

// style
import { StyleScreenLogin } from "../../styles/screenLogin";

// import image from "../../../assets/bg-login2.png";
import IconEye from "../../../assets/images/icons-formInput/view-eye.png";
import HideEye from "../../../assets/images/icons-formInput/hide-eye.png";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";

const RegisterScreen = () => {
  const [fullname, setFullName] = useState();
  // const [imgUrl, setImgUrl] = useState();
  const [email, setEmail] = useState();
  const [password, setPasswrod] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordVissible, setPasswordVissible] = useState(true);
  const [passwordVissibleConf, setPasswordVissibleConf] = useState(true);

  const [userProfil, setUserProfil] = useState([]);
  // const [valuesUserData, setValuesUserData] = useState({
  //   invitees: [],
  // });

  // validation
  const [validationMessages, setValidationMessages] = useState("");

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

  let message = "Uspesno ste kreirali nalog. Bicete automatski ulogovani.";

  const handleCreateAccount = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const authCurrentUser = auth.currentUser;
          if (authCurrentUser) {
            // verification email
            sendEmailVerification(authCurrentUser);
            // end

            const user = userCredential.user;
            Alert.alert("Account Created!");

            // DATABASE ------------------
            if (user) {
              // try {
              const q = query(
                collection(db, "users"),
                where("uid", "==", user.uid)
              );
              const docRes = await getDocs(q);
              if (docRes.docs.length >= 0) {
                await addDoc(collection(db, "users"), {
                  uid: user.uid,
                  fullname,
                  // imgUrl,
                  authProvider: "local",
                  email: user.email,
                });
              }

              try {
                // const user = auth.currentUser;
                if (!authCurrentUser || !authCurrentUser.email) return;
                const q = query(
                  collection(db, "users"),
                  where("uid", "==", authCurrentUser?.uid)
                );
                const doc = await getDocs(q);
                const data = doc.docs[0].data();

                // console.log("samo setState: ", typeof data);

                // setUserProfil(data);

                if (data) {
                  const usrInfoValue = {
                    fullname: data.fullname,
                    email: data.email,
                    uid: data.uid,
                  };
                  if (usrInfoValue) {
                    console.log("usao u if USRINFO");
                    setUserProfil(usrInfoValue);
                  }
                } else {
                  alert("nema podataka!!!!");
                }
              } catch (err) {
                console.log(err.message);
                alert("An error occured while fetching user data");
              }

              // const displayUserInfo = async () => {
              // let authCurrentUser = auth.currentUser;

              // };

              //   // }
              // } catch (error) {
              //   console.log("database: ", error.message);
              // }
            }

            console.log("STATE CONTEXT-userProfil: ", userProfil);
            // console.log("OBJEKTI ZA CONTEXT-User: ", { ...user });

            // console.log("samo User: ", user);

            // if (user) {
            // Add a new document with a generated id.
            // const docRef = await addDoc(collection(db, "users"), {
            //   uid: user.uid,
            //   fullname,
            //   authProvider: "local",
            //   email: user.email,
            // });
            // console.log("docRef-AWAIT: ", docRef);
            // }

            // console.log("displayName99999999:", auth.currentUser);
            // navigation.navigate("Test");
            persistRegister({ ...user }, message);
          }
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error.message);
        });

      // let resultsAuth = auth.currentUser.user;
      // console.log("REZULTAT: ", resultsAuth);
    }
  };

  const persistRegister = (credentials, message) => {
    AsyncStorage.setItem("zoomCredentials", JSON.stringify(credentials))
      .then(() => {
        Alert.alert(message);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessages("Passwords do not match!");
    } else {
      setValidationMessages("");
    }

    setValue(value);
  };

  return (
    <>
      <KeyboardAvoidingWrapper>
        <View style={StyleScreenLogin.Container}>
          <View>
            <Text
              style={{
                color: "#fff12a",
                fontSize: 25,
                marginBottom: 5,
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              ZOOM GUIDE
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Create an account
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 25, color: "red" }}>
              {validationMessages}
            </Text>
          </View>

          <FormInput
            labelValue={fullname}
            onChangeText={(userEmail) => setFullName(userEmail)}
            placeholderText="Full Name"
            iconType={require("../../../assets/images/icons-formInput/user.png")}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* <FormInput
            labelValue={imgUrl}
            onChangeText={(imgUrl) => setImgUrl(imgUrl)}
            placeholderText="URL Avatar"
            iconType={require("../../../assets/images/icons-formInput/email.png")}
            autoCapitalize="none"
            autoCorrect={false}
          /> */}

          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType={require("../../../assets/images/icons-formInput/email.png")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {/* password */}
          <View
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <FormInput
              labelValue={password}
              onChangeText={(value) =>
                validateAndSet(value, confirmPassword, setPasswrod)
              }
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
          <View
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <FormInput
              labelValue={confirmPassword}
              onChangeText={(value) =>
                validateAndSet(value, password, setConfirmPassword)
              }
              placeholderText="Confirm Password"
              iconType={require("../../../assets/images/icons-formInput/unlock.png")}
              secureTextEntry={passwordVissibleConf}
            />
            <View
              style={{
                position: "absolute",
                top: 15,
                right: 20,
                bottom: 0,
              }}
            >
              {passwordVissibleConf ? (
                <TouchableOpacity
                  onPress={() => setPasswordVissibleConf(!passwordVissibleConf)}
                >
                  <Image style={{ width: 30, height: 30 }} source={IconEye} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setPasswordVissibleConf(!passwordVissibleConf)}
                >
                  <Image style={{ width: 30, height: 30 }} source={HideEye} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* end password */}

          <FormButton buttonTitle="Login" onPress={handleCreateAccount} />

          <View style={styles.textPrivate}>
            <Text style={styles.colorTextPrivate}>
              By registering, you confirm that you accept our
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "gold" }}>Terms of service</Text>
            </TouchableOpacity>
            <Text style={styles.colorTextPrivate}> and </Text>
            <Text style={styles.colorTextPrivate}>Privacy and Policy.</Text>
          </View>

          {/* <SocialButton
          buttonTitle="Sign Up with Facebook"
          btnType={require("../../../assets/images/icons-formInput/facebook.png")}
          color="#073B4C"
          backgroundColor="white"
        />

        <SocialButton
          buttonTitle="Sign Up with G-mail"
          btnType={require("../../../assets/images/icons-formInput/gmail.png")}
          color="#073B4C"
          backgroundColor="white"
        /> */}

          <TouchableOpacity
            style={StyleScreenLogin.forgotButton}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={StyleScreenLogin.navButtonText}>
              Already have an account? Login
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
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  colorTextPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "white",
  },
});

export default RegisterScreen;
