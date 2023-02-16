import React from "react";
import { View, Image, TextInput } from "react-native";

// style
import { StyleFormInput } from "../../src/styles/componentsForm/FormInput";

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={StyleFormInput.inputContainer}>
      <View style={StyleFormInput.iconStyle}>
        <Image style={{ height: 25, width: 25 }} source={iconType} />
      </View>
      <TextInput
        value={labelValue}
        style={StyleFormInput.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#073B4C"
        {...rest}
      />
    </View>
  );
};

export default FormInput;
