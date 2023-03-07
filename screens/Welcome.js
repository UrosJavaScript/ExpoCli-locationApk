import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

import Map from "../src/views/screenMap";
import LocationView from "../src/views/screenLocation";
import Test from "../screens/Test";
import HomePulseScreen from "./HomePulseScreen";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const Welcome = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#073B4C",
            // borderTopWidth: 2,
            borderTopColor: "#2e5c83",
            paddingBottom: 5,
            paddingTop: 5,
            // paddingBottom: 5,
            height: 60,
          },
          tabBarActiveTintColor: "#FFD166",
          // tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="HomePulseScreen"
          component={HomePulseScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="LocationView" component={LocationView} />
        <Tab.Screen
          name="Test"
          component={Test}
          options={{
            tabBarLabel: "User",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});

export default Welcome;
