import { Dimensions, StyleSheet } from "react-native";

const { heightWindow } = Dimensions.get("window").height;

export const StyleScreenOnBoarding = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#073B4C",
    height: heightWindow,
  },
  Heading1: {
    color: "#FFD166",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
