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
        screenOptions={{ headerShown: false }}
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
