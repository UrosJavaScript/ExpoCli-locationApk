import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// style
import { StyleSocialButton } from "../../src/styles/componentsForm/SocialButton";

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;

  return (
    <TouchableOpacity
      style={[StyleSocialButton.buttonContainer, { backgroundColor: bgColor }]}
      {...rest}
    >
      <View style={StyleSocialButton.iconWrapper}>
        <AntDesign
          name={btnType}
          style={StyleSocialButton.icon}
          color={color}
          size={22}
        />
      </View>
      <View style={StyleSocialButton.btnTxtWrapper}>
        <Text style={[StyleSocialButton.buttonText, { color: color }]}>
          {buttonTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
