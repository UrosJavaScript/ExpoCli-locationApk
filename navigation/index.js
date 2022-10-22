import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// view screens
import ScreenAnim from "../src/views/screenAnim";
import OnBoarding from "../src/views/screenOnBoarding";
import ScreenAnimSecond from "../src/views/screenAnimSecond";
import LoginScreen from "../src/views/screenLogin";
import RegisterScreen from "../src/views/screenRegister";

const Stack = createStackNavigator();

const Navigation = () => {
  const [isFirstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ScreenAnim"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="ScreenAnim" component={ScreenAnim} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ScreenAnimSecond"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="ScreenAnimSecond"
              component={ScreenAnimSecond}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

export default Navigation;
