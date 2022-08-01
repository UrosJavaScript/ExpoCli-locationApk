import React from "react";
import { Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// custom screens
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Test from "./screens/Test";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Welcome />
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Dodji na Zlatibor"
            component={Welcome}
            options={{
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              // headerLeft: () => <Button title="ZL" color="green" />,
              headerLeft: () => (
                <Image
                  style={{
                    height: 20,
                    width: 50,
                  }}
                  source={require("./assets/icon.png")}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <Test /> */}
    </>
  );
}
