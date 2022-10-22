import React from "react";
import { Text, TouchableOpacity } from "react-native";

// style
import { StyleFormButton } from "../../src/styles/componentsForm/FormButton";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={StyleFormButton.buttonContainer} {...rest}>
      <Text style={StyleFormButton.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
