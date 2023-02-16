import React, { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet, Image, Alert } from "react-native";
import Constants from "expo-constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
  withRepeat,
  withDelay,
  Easing,
} from "react-native-reanimated";

const Pulse = ({ delay = 0, repeat }) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.linear,
        }),
        repeat ? -1 : 1,
        false
      )
    );
  }, []);
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0.6, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }],
    };
  });
  return <Animated.View style={[styles.circle, animatedStyles]} />;
};

const dummyArray = [
  {
    id: "1",
    value: "Destination 1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpboMVlXlUobCH2dRG4ZanKXaNmL9mGKkDw&usqp=CAU",
  },
  {
    id: "2",
    value: "Destination 2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxYN_PCp_tUd3LPHCDJVJ6N2RRz3b8N0iug&usqp=CAU",
  },
  {
    id: "3",
    value: "Destination 3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cywCY0i2StHKu0x9FsWmcB-IAbxrlWAMGQ&usqp=CAU",
  },
  {
    id: "4",
    value: "Destination 4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8eB91Gt8huiPxsKDJmathHJ16HJGBgIfGw&usqp=CAU",
  },
  {
    id: "5",
    value: "Destination 5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTNuNg4jKKumg5lq_bBQiy15uCJsO-lP-xA&usqp=CAU",
  },
  {
    id: "6",
    value: "Destination 6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TGtkmXm63rcGOomTa3Z3LRC4S5pDeQ28EA&usqp=CAU",
  },
];

export default function HomePulseScreen() {
  const [pulse, setPulse] = useState([1]);
  const [listItems, setListItems] = useState(dummyArray);

  // useEffect(() => {
  //   console.log("podaci iz array: ", listItems);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Pressable
          style={styles.innerCircle}
          onPress={() => {
            setPulse((prev) => [...prev, Math.random()]);
          }}
        >
          <Image
            style={styles.innerCircle}
            source={{
              uri: "https://www.travelandleisure.com/thmb/QDUywna6SQbiQte-ZmrJmXcywp0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rome-italy-lead-ROMETG0521-7bd455d3c2b545219498215df7143e0d.jpg",
            }}
          />
        </Pressable>
        <>
          {pulse?.map(
            (item, index) => (
              console.log("u pulsu: ", item),
              (<Pulse key={index} repeat={index === 0} />)
            )
          )}
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#ecf0f1",
    backgroundColor: "#073B4C",
    padding: 8,
  },
  circle: {
    width: 300,
    borderRadius: 150,
    height: 300,
    position: "absolute",
    borderColor: "#FFD166",
    borderWidth: 4,
    backgroundColor: "#FFD166",
  },
  innerCircle: {
    width: 100,
    borderRadius: 40,
    height: 100,
    zIndex: 100,
    position: "absolute",
    backgroundColor: "#ffffff",
  },
});
