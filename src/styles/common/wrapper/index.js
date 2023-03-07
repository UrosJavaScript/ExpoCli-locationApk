import { Dimensions, StyleSheet } from "react-native";
const { heightWindow } = Dimensions.get("window").height;
// const { widthWindow } = Dimensions.get("window").width;

export const StyleCommon = StyleSheet.create({
  Container: {
    backgroundColor: "#073B4C",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: heightWindow,
  },
  Title: {
    textTransform: "uppercase",
    color: "#fff12a",
    fontWeight: "900",
    fontSize: 35,
  },
  Text: {
    color: "#fff12a",
    fontWeight: "900",
    fontSize: 25,
  },
});
