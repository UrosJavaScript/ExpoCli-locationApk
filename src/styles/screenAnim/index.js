import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { height } = Dimensions.get("window").height;

export const StyleScreenAnim = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000080",
    height: height,
  },
  Heading1: {
    color: "#ffffff",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 320,
  },
});
