import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { StyleScreenRegister } from "../../styles/screenRegister";

const RegisterScreen = () => {
  return (
    <>
      <View style={[StyleScreenRegister.Container]}>
        <Text style={[StyleScreenRegister.Heading2]}>Welcome</Text>
        <Text style={[StyleScreenRegister.Heading1]}>
          Register and Login Page
        </Text>
      </View>
    </>
  );
};

export default RegisterScreen;
