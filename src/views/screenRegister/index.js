import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StyleScreenRegister } from "../../styles/screenRegister";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// component
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
import SocialButton from "../../../components/Form/SocialButton";

// style
import { StyleScreenLogin } from "../../styles/screenLogin";
// import image from "../../../assets/bg-login2.png";

// const RegisterScreen = () => {
//   return (
//     <>
//       <View style={[StyleScreenRegister.Container]}>
//         <Text style={[StyleScreenRegister.Heading2]}>Welcome</Text>
//         <Text style={[StyleScreenRegister.Heading1]}>
//           Register and Login Page
//         </Text>
//       </View>
//     </>
//   );
// };

// export default RegisterScreen;

const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPasswrod] = useState();

  const navigation = useNavigation();

  const startValue = new Animated.Value(1);
  const endValue = 1.5;

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
    <>
      <View style={StyleScreenLogin.Container}>
        <View>
          <Animated.View
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
          />
          <Text
            style={{
              color: "#fff12a",
              fontSize: 20,
              marginBottom: 20,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Create an account
          </Text>
        </View>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPass) => setPasswrod(userPass)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign In"
          onPress={() => alert("Click Register button")}
        />

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

        <SocialButton
          buttonTitle="Sign in with Facebook"
          btnType="facebook-square"
          color="#073B4C"
          backgroundColor="white"
        />

        <SocialButton
          buttonTitle="Sign in with G-mail"
          btnType="mail"
          color="#073B4C"
          backgroundColor="white"
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
      {/* </ImageBackground> */}
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
