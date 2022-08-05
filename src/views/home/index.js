import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable
} from "react-native";
import Swiper from 'react-native-swiper';

import styles from '../../styles/home';
import firebase from '../../../firebase';

const Home = () => {

  const [img, setImg] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imageRefs = await firebase.storage().ref().child('homePageImages/').listAll();
      const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
      setImg(urls);
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
            removeClippedSubviews={false}
            dot={<View />}
            activeDot={<View />}
          >
            {img.map((item, index) => (
              <Image
                style={styles.backgroundImage}
                key={index}
                source={{ uri: item }} />
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

export default Home;

