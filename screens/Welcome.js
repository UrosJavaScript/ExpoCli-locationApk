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
  TextInput,
} from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
// const SPACING = 10;
// const THUMB_SIZE = 80;

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
      <View>
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
              fontSize: 25,
            }}
          >
            ZLATIBOR zOOm
          </Text>
          <Text>Testtttt</Text>
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
      </View>

      {/* <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
        <View>
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
            sliderHeight={height}
            autoplay={true}
            autoplayInterval={2000}
          />

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
            <Text style={{ color: "white" }}>Text</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "white" }}>2222</Text>
          <Text style={{ color: "white" }}>Str2</Text>
          <Text style={{ color: "white" }}>Str3</Text>
          <Text style={{ color: "white" }}>Str4</Text>
        </View>
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
