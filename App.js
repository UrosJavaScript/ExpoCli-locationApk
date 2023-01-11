import React from "react";

// navigation screen
import Navigation from "./navigation";

export default function App() {
  return <Navigation />;

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
