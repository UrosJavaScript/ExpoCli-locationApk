import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require("../assets/zl-nature2.jpeg"),
  image2: require("../assets/zl-nature.jpeg"),
  image3: require("../assets/zlatibor-bg.jpeg"),
};

const Welcome = () => {
  const [img, setImg] = useState([
    { id: "1", image: IMAGES.image1 },
    { id: "2", image: IMAGES.image2 },
    { id: "3", image: IMAGES.image3 },
  ]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 32,
            marginTop: 50,
            marginBottom: 25,
          }}
        >
          Nature locality
        </Text>

        <View style={{ flex: 1, marginTop: 20 }}>
          <Carousel
            data={img}
            renderItem={({ item, index }) => (
              <Image
                key={index}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
                source={item.image}
              />
            )}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white" }}>Button1</Text>
        <Text style={{ color: "white" }}>Button1</Text>
        <Text style={{ color: "white" }}>Button1</Text>
      </View>
    </>
  );
};

export default Welcome;
