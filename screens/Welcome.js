import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable
} from "react-native";

import Swiper from 'react-native-swiper';
import styles from '../styles/WelcomeS';

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
      <View style={styles.carouselContainer}  >
        {img.length !== 0 &&
          <Swiper
            loop
            autoplay
            dot={<View />}
            activeDot={<View />}
          >
            {img.map(item => (
              <Image style={styles.backgroundImage} key={item.id} source={item.image} />
            ))}

          </Swiper>
        }
        <Text style={styles.title}>ZLATIBOR ZOOM</Text>
        <View style={styles.buttonHolder} >
          <Pressable
            onPress={() => {
              alert("Click");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Uđi u aplikaciju!
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Welcome;

