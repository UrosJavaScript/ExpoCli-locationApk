import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable
} from "react-native";

import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

import Swiper from 'react-native-swiper';
import styles from '../styles/WelcomeS';


const firebaseConfig = {
  //enter your fire base config details
};


const Welcome = () => {
  // Initialize Firebase

  const [img, setImg] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imageRefs = await firebase.storage().ref().child('images/').listAll();
      const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
      setImg(urls);
      console.log(urls);

    }
    getImages();
  }, [])

  firebase.initializeApp(firebaseConfig);

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
            {img.map((item, index) => (
              <Image style={styles.backgroundImage} key={index} source={{ uri: item }} />
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

