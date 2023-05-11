import { Dimensions, StyleSheet } from "react-native";

const { heightWindow } = Dimensions.get("window").height;

export const StyleScreenRegister = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#073B4C",
    height: heightWindow,
    padding: 20,
  },
  BackgroundLinear: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  HeadingTop: {
    color: "#fff12a",
    fontSize: 25,
    //marginBottom: 5,
    textAlign: "center",
    //fontWeight: "bold",
    fontFamily: "Barlow",
    // fontFamily: "MoonDance",
  },
  Heading1: {
    color: "#fff12a",
    fontSize: 18,
    //marginBottom: 2,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "MoonDance",
  },
  Heading2: {
    color: "#FFD166",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  PasswordWrapp: {
    position: "relative",
    width: "100%",
  },
  PasswordInsideEl: {
    position: "absolute",
    top: 15,
    right: 20,
    bottom: 0,
  },
  ToptextMargin: {
    marginVertical: 15,
  },
  TopTextAcc: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fff12a",
  },
  BottomTextPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 40,
    justifyContent: "center",
  },
  BottomColorTextPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "white",
  },
});
