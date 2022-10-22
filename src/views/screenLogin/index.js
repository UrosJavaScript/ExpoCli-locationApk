import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// component
import FormInput from "../../../components/Form/FormInput";
import FormButton from "../../../components/Form/FormButton";
import SocialButton from "../../../components/Form/SocialButton";

// style
import { StyleScreenLogin } from "../../styles/screenLogin";
import image from "../../../assets/background-login.png";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPasswrod] = useState();

  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={image}
        // resizeMode="center"
        style={StyleScreenLogin.imageBackground}
      >
        <View style={StyleScreenLogin.Container}>
          {/* <Image
            style={StyleScreenLogin.Logo}
            source={require("../../../assets/icon.png")}
          /> */}
          <Text style={StyleScreenLogin.Text}>Login to zOOm</Text>

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
            <Text style={StyleScreenLogin.navButtonText}>
              Forgot Password ?
            </Text>
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
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
