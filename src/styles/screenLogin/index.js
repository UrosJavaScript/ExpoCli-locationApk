import { Dimensions, StyleSheet } from "react-native";
const { heightWindow } = Dimensions.get("window").height;
const { widthWindow } = Dimensions.get("window").width;

export const StyleScreenLogin = StyleSheet.create({
  Container: {
    backgroundColor: "#073B4C",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: heightWindow,
  },
  LogoTop: {
    height: 70,
    width: 250,
    borderWidth: 1,
    padding: 50,
    borderColor: "gold",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 0,
  },
  Text: {
    textTransform: "uppercase",
    color: "#fff12a",
    fontWeight: "900",
    fontSize: 35,
    marginBottom: 50,
    marginTop: 100,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff12a",
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

  imageBackground: {
    width: widthWindow,
    height: heightWindow,
    flex: 1,
  },
});
