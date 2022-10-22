import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import MapView from "react-native-maps";

const LocationView = (props) => {
  console.log("Propssssssss: ", props.position?.longitude);
  console.log("Prop2: ", props.position?.latitude);
  const [mapRegion, setmapRegion] = useState({
    latitude: props.position?.latitude ? props.position?.latitude : 44.8011004,
    longitude: props.position?.longitude
      ? props.position?.longitude
      : 20.5283077,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      />
      {/* <Text
        style={{
          color: "#FFD166",
          fontSize: 22,
          textAlign: "center",
          padding: 10,
        }}
      >
        Gde se nalazis?
      </Text> */}
    </View>
  );
};
export default LocationView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073B4C",
  },
});
