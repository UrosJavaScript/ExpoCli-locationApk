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

const LoginScreen = () => {
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
      {/* <ImageBackground
        source={image}
        // resizeMode="center"
        style={StyleScreenLogin.imageBackground}
      > */}
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
          {/* <Entypo
            name="location"
            size={100}
            color="#fff12a"
            style={{ marginBottom: 10 }}
          /> */}
          <Text
            style={{
              color: "#fff12a",
              fontSize: 20,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            LOGIN
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

        <FormButton buttonTitle="Sign In" onPress={() => alert("Sign In")} />

        <TouchableOpacity style={StyleScreenLogin.forgotButton}>
          <Text style={StyleScreenLogin.navButtonText}>Forgot Password ?</Text>
        </TouchableOpacity>

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
});

export default LoginScreen;
