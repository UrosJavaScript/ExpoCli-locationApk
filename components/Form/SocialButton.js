import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

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
       
        <Image
          source={btnType}
          style={{ height: 22, width: 22 }}
          color={color}
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
