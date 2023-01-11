import { Dimensions, StyleSheet } from "react-native";

const { heightWindow } = Dimensions.get("window").height;

export const StyleFormButton = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    height: heightWindow,
    marginTop: 10,
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    borderColor: "#fff12a",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff12a",
    fontSize: 18,
    fontWeight: "bold",
  },
});
