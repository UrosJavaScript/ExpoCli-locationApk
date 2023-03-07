import React, { useCallback } from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
// redux persist
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

// navigation screen
import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow: require("./assets/fonts/barlow/Barlow-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>LOADING...</Text>} persistor={persistor}>
        <SafeAreaProvider>
          <RootSiblingParent>
            <Navigation onLayout={onLayoutRootView} />
          </RootSiblingParent>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
