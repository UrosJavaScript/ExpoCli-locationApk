import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// credentials context
import { CredentialsContext } from "../components/Credentials-async";

// view screens
import ScreenAnim from "../src/views/screenAnim";
import OnBoarding from "../src/views/screenOnBoarding";
import ScreenAnimSecond from "../src/views/screenAnimSecond";
import LoginScreen from "../src/views/screenLogin";
import RegisterScreen from "../src/views/screenRegister";
import Test from "../screens/Test";
import ResetPassword from "../src/views/screenResetPassword";
import Welcome from "../screens/Welcome";

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
      <CredentialsContext.Consumer>
        {({ storedCredentials }) => (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="ScreenAnim">
              {storedCredentials ? (
                <>
                  <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ header: () => null }}
                  />
                  <Stack.Screen
                    name="Test"
                    component={Test}
                    options={{ header: () => null }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="ScreenAnim"
                    component={ScreenAnim}
                    options={{ header: () => null }}
                  />
                  <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                    options={{ header: () => null }}
                  />
                  <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ header: () => null }}
                  />
                  <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={() => ({
                      title: "Reset Password",
                      headerTitleAlign: "center",
                      headerTitleStyle: {
                        color: "gold",
                        fontSize: 22,
                      },
                      headerShadowVisible: false,
                      headerStyle: {
                        backgroundColor: "#073B4C",
                      },
                    })}
                  />
                  <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={({ navigation }) => ({
                      title: "",
                      headerStyle: {
                        backgroundColor: "#073B4C",
                        shadowColor: "#073B4C",
                        elevation: 0,
                      },

                      headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                          <TouchableOpacity
                            onPress={() => navigation.navigate("LoginScreen")}
                          >
                            <Image
                              style={{ height: 35, width: 35 }}
                              source={require("../assets/images/arrow/arrow-left.png")}
                            />
                          </TouchableOpacity>
                        </View>
                      ),
                    })}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </CredentialsContext.Consumer>
    );
  } else {
    return (
      <CredentialsContext.Consumer>
        {({ storedCredentials }) => (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="ScreenAnimSecond">
              {storedCredentials ? (
                <>
                  <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ header: () => null }}
                  />
                  <Stack.Screen
                    name="Test"
                    component={Test}
                    options={{ header: () => null }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="ScreenAnimSecond"
                    component={ScreenAnimSecond}
                    options={{ header: () => null }}
                  />
                  <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    // options={{ header: () => null }}
                    options={() => ({
                      title: "ZOOM APPLICATION HEADER",
                      headerTitleAlign: "center",
                      headerTitleStyle: {
                        color: "gold",
                        fontSize: 22,
                      },
                      headerShadowVisible: false,
                      headerStyle: {
                        backgroundColor: "#073B4C",
                      },
                    })}
                  />
                  <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    // options={{ header: () => null }}
                    options={() => ({
                      title: "Reset Password",
                      headerTitleAlign: "center",
                      headerTitleStyle: {
                        color: "gold",
                        fontSize: 22,
                      },
                      headerShadowVisible: false,
                      headerStyle: {
                        backgroundColor: "#073B4C",
                      },
                      headerLeft: () => {
                        null;
                      },
                    })}
                  />
                  <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={({ navigation }) => ({
                      title: "",
                      headerStyle: {
                        backgroundColor: "#073B4C",
                        shadowColor: "#073B4C",
                        elevation: 0,
                      },
                      headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                          <TouchableOpacity
                            onPress={() => navigation.navigate("LoginScreen")}
                          >
                            <Image
                              style={{ height: 35, width: 35 }}
                              source={require("../assets/images/arrow/arrow-left.png")}
                            />
                          </TouchableOpacity>
                        </View>
                      ),
                    })}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </CredentialsContext.Consumer>
    );
  }
};

export default Navigation;
