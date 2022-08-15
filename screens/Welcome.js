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

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

function MapeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#073B4C",
      }}
    >
      <Text
        style={{
          color: "#FFD166",
          fontSize: 25,
          padding: 25,
          letterSpacing: 3,
        }}
      >
        Dozivi Zlatibor na pravi nacin i udahni vazduh na svojoj lokaciji!
      </Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#073B4C",
      }}
    >
      <Text style={{ color: "#FFD166", fontSize: 25, padding: 10 }}>
        Ako se izgubis u zlatiborskoj divljini ili imas pitanja pisi nam putem
        cheta!
      </Text>
    </View>
  );
}

function AlbumScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#073B4C",
      }}
    >
      <Text style={{ color: "#FFD166", fontSize: 25, padding: 10 }}>
        Slikaj prirodni prizor i automatski kreiraj svoju uspomenu na ovoj
        strani!
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Welcome = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="MapeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Mape" component={MapeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Album" component={AlbumScreen} />
      </Tab.Navigator>

      {/* <View>
        <ImageBackground
          source={{
            uri: "https://zlatibor-booking.com/staro_selo1.1792ea88ceb94bd8ac32.jpeg",
          }}
          resizeMode="cover"
          style={styles.img}
        >
          <Text
            style={{
              alignSelf: "center",

              color: "white",
              fontSize: 16,
            }}
          >
            ZLATIBOR zOOm
          </Text>
          <TextInput
            placeholder="Udji u aplikaciju"
            style={
              ({ ...styles.input },
              {
                backgroundColor: "lightgreen",
                padding: 10,
                borderBottomWidth: 3,
                borderRadius: 5,
              })
            }
          />
        </ImageBackground>
        <>
         
        </>
      </View> */}
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
