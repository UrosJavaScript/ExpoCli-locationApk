import { Dimensions, StyleSheet } from "react-native";
const { heightWindow } = Dimensions.get("window").height;
const { widthWindow } = Dimensions.get("window").width;

export const StyleScreenLogin = StyleSheet.create({
  Container: {
    // backgroundColor: "#073B4C",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // Logo: {
  //   height: 150,
  //   width: 150,
  //   resizeMode: "cover",
  // },
  Text: {
    textTransform: "uppercase",
    color: "#fff12a",
    fontWeight: "900",
    fontSize: 35,
    marginBottom: 100,
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
  imageBackground: {
    width: widthWindow,
    height: heightWindow,
    flex: 1,
  },
});
