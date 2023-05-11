import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";

import { useFonts } from "expo-font/build";
import * as SplashScreen from "expo-splash-screen";

// redux persist
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

// navigation screen
import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow: require("./assets/fonts/barlow/Barlow-Regular.ttf"),
    MoonDance: require("./assets/fonts/moonDance/MoonDance-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>LOADING...</Text>} persistor={persistor}>
        <SafeAreaProvider>
          <RootSiblingParent>
            <Navigation />
          </RootSiblingParent>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
