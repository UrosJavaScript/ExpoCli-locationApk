import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../assets/logo-zl.jpeg")}
          style={styles.image}
        />
        <Text style={styles.title}>Koja je tvoja lokacija?</Text>
      </View>
      <Text style={styles.text}>Moja adresa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070707",
    alignItems: "center",
    paddingTop: 130,
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
});

export default Welcome;
