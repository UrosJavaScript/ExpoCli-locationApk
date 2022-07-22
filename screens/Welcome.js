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
  Button,
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
        <View
          style={{
            color: "white",
            fontSize: 32,
            marginTop: 100,
            marginBottom: 25,
            width: 200,
          }}
        >
          <Button
            onPress={() => {
              alert("Click");
            }}
            title="Udji u aplikaciju"
            color="#841584"
          />
        </View>

        <View style={{ flex: 1, marginTop: 20 }}>
          <Carousel
            data={img}
            renderItem={({ item, index }) => (
              <Image
                key={index}
                style={{ width: "100%", height: "100%" }}
                resizeMode="center"
                source={item.image}
              />
            )}
            sliderWidth={width}
            itemWidth={width}
            autoplay={true}
            autoplayInterval={2000}
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
        <Text style={{ color: "white" }}>Str1</Text>
        <Text style={{ color: "white" }}>Str2</Text>
        <Text style={{ color: "white" }}>Str3</Text>
        <Text style={{ color: "white" }}>Str4</Text>
      </View>
    </>
  );
};

export default Welcome;
