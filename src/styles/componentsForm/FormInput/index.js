import { Dimensions, StyleSheet } from "react-native";

const { windowHeight } = Dimensions.get("window").height;
const { windowWidth } = Dimensions.get("window").width;

export const StyleFormInput = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth,
    height: windowHeight,
    padding: 0,
    borderColor: "#fff12a",
    borderRadius: 3,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff12a",
    borderRadius: 3,
    borderWidth: 1,
    width: windowWidth,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#073B4C",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
  },
  // inputField: {
  //   padding: 10,
  //   marginTop: 5,
  //   marginBottom: 10,
  //   width: windowWidth,
  //   height: windowHeight,
  //   fontSize: 55,
  //   borderRadius: 88,
  //   borderWidth: 1,
  // },
});
