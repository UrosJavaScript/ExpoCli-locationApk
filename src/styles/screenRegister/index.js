import { Dimensions, StyleSheet } from "react-native";

const { heightWindow } = Dimensions.get("window").height;

export const StyleScreenRegister = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#073B4C",
    height: heightWindow,
    backgroundColor: "#073B4C",
  },
  HeadingTop: {
    color: "#fff12a",
    fontSize: 25,
    marginBottom: 5,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Barlow",
  },
  Heading1: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
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
  ForgotButton: {
    marginVertical: 35,
  },
  NavButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff12a",
  },
  BottomTextPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  BottomColorTextPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "white",
  },
});
