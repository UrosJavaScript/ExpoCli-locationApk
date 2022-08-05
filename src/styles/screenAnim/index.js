import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window").height;

export const StyleScreenAnim = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#073B4C",
    height: height,
  },
  Heading1: {
    color: "#FFD166",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 320,
  },
});
