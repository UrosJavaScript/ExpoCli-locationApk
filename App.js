import React, { useState } from "react";

// navigation screen
import Navigation from "./navigation";

// splash-screen
import AppLoading from "expo-app-loading";

// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// credentials context
import { CredentialsContext } from "./components/Credentials-async";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkloginCredentials = () => {
    AsyncStorage.getItem("zoomCredentials")
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={checkloginCredentials}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn()}
      />
    );
  }

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      <Navigation />
    </CredentialsContext.Provider>
  );
}
