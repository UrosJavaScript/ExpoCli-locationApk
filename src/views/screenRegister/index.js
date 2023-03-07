import React, { useState, useEffect } from "react";
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// redux
import { useDispatch } from "react-redux";
import { registrationUser } from "../../../redux/store/authSlice";

// firebase
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
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "../../../firebase-config";

// toster
// import Toast from "react-native-root-toast";

// component
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
// import SocialButton from "../../../components/Form/SocialButton";

// style
import { StyleScreenRegister } from "../../styles/screenRegister";

// icon
// import image from "../../../assets/bg-login2.png";
import IconEye from "../../../assets/images/icons-formInput/view-eye.png";
import HideEye from "../../../assets/images/icons-formInput/hide-eye.png";

const RegisterScreen = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [imgUrl, setImgUrl] = useState("");

  const dispatch = useDispatch();

  const [passwordVissible, setPasswordVissible] = useState(true);
  const [passwordVissibleConf, setPasswordVissibleConf] = useState(true);
  // validation
  const [validationMessages, setValidationMessages] = useState("");

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

  const handleCreateAccount = () => {
    if (password === confirmPassword && fullname !== "") {
      setValidationMessages("");

      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const authCurrentUser = auth.currentUser;
          if (authCurrentUser) {
            // verification email
            sendEmailVerification(authCurrentUser);

            const user = userCredential.user;
            Alert.alert("Account Created!");

            // DATABASE ------------------
            if (user) {
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
                  tokenUser: user.uid,
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

                dispatch(registrationUser(data));
              } catch (err) {
                console.log(err.message);
                alert("An error occured while fetching user data");
              }
            }
          }
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(error.message);
        });
    } else {
      setValidationMessages("Passwords do not match!");
    }
  };

  return (
    <>
      <KeyboardAvoidingWrapper>
        <View style={StyleScreenRegister.Container}>
          <View>
            <Text style={StyleScreenRegister.HeadingTop}>ZOOM GUIDE</Text>
            <Text style={StyleScreenRegister.Heading1}>Create an account</Text>
          </View>

          <View>
            <Text style={{ fontSize: 25, color: "red" }}>
              {validationMessages}
            </Text>
            {/* <Toast
              visible={true}
              position={40}
              shadow={true}
              animation={true}
              hideOnPress={true}
              backgroundColor={"red"}
            >
              {validationMessages}
            </Toast> */}
          </View>

          <FormInput
            labelValue={fullname}
            onChangeText={(fullname) => setFullname(fullname)}
            placeholderText="Full Name"
            iconType={require("../../../assets/images/icons-formInput/user.png")}
            autoCapitalize="none"
            autoCorrect={true}
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
            onChangeText={(email) => setEmail(email)}
            placeholderText="Email"
            iconType={require("../../../assets/images/icons-formInput/email.png")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={true}
          />
          {/* password */}
          <View style={StyleScreenRegister.PasswordWrapp}>
            <FormInput
              labelValue={password}
              onChangeText={(password) => setPassword(password)}
              placeholderText="Password min 6characters"
              iconType={require("../../../assets/images/icons-formInput/unlock.png")}
              secureTextEntry={passwordVissible}
            />
            <View style={StyleScreenRegister.PasswordInsideEl}>
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

          <View style={StyleScreenRegister.PasswordWrapp}>
            <FormInput
              labelValue={confirmPassword}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              placeholderText="Confirm Password"
              iconType={require("../../../assets/images/icons-formInput/unlock.png")}
              secureTextEntry={passwordVissibleConf}
            />
            <View style={StyleScreenRegister.PasswordInsideEl}>
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

          <View style={StyleScreenRegister.BottomTextPrivate}>
            <Text style={StyleScreenRegister.BottomColorTextPrivate}>
              By registering, you confirm that you accept our
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "gold" }}>Terms of service</Text>
            </TouchableOpacity>
            <Text style={StyleScreenRegister.BottomColorTextPrivate}>
              {" "}
              and{" "}
            </Text>
            <Text style={StyleScreenRegister.BottomColorTextPrivate}>
              Privacy and Policy.
            </Text>
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
            style={StyleScreenRegister.ForgotButton}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={StyleScreenRegister.NavButtonText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingWrapper>
    </>
  );
};

export default RegisterScreen;
