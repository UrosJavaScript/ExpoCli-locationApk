import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>TEST Component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B4C",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "red",
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
});

export default Test;
