import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable
} from "react-native";
import Swiper from 'react-native-swiper';
import { fetchImages } from "../util/http";
import styles from '../styles/WelcomeS';


const Welcome = () => {

  const [img, setImg] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imgs = await fetchImages();
      setImg(imgs);
    }
    getImages();
  }, [])


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
           { img.map(item=>(
           <Image style={styles.backgroundImage} key={item.id} source={{ uri: item.image }} />
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

