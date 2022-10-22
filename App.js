import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

// navigation screen
import Navigation from "./navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />;
  }

  // return (
  //   <>
  //     <NavigationContainer>
  //       <Stack.Navigator
  //         initialRouteName="ScreenAnim"
  //         screenOptions={{ headerShown: false }}
  //       >
  //         <Stack.Screen name="ScreenAnim" component={ScreenAnim} />
  //         <Stack.Screen name="OnBoarding" component={OnBoarding} />
  //         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </>
  // );
}
