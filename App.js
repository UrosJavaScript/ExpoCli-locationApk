import React from "react";
// import { Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// custom screens
import Welcome from "./screens/Welcome";

import ScreenAnim from "./src/views/screenAnim";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ScreenAnim"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="ScreenAnim" component={ScreenAnim} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
