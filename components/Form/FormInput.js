import React from "react";
import { View, TextInput, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// style
import { StyleFormInput } from "../../src/styles/componentsForm/FormInput";

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={StyleFormInput.inputContainer}>
      <View style={StyleFormInput.iconStyle}>
        <AntDesign name={iconType} color="#073B4C" size={25} />
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
