import { Dimensions, StyleSheet } from "react-native";

const { heightWindow } = Dimensions.get("window").height;
const { widthWindow } = Dimensions.get("window").width;

export const StyleSocialButton = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: widthWindow,
    height: heightWindow,
    padding: 10,
    flexDirection: "row",

    borderRadius: 3,
    borderColor: "#fff12a",
    borderWidth: 2,

    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#073B4C",
    // height: heightWindow,
  },
  iconWrapper: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "900",

    // color: "#FFD166",
    // fontSize: 25,
    // textAlign: "center",
    // textTransform: "uppercase",
    // marginTop: 320,
  },
});
