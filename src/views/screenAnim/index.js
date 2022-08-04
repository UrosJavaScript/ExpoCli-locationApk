import React, { useEffect } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { StyleScreenAnim } from "../../styles/screenAnim";

const ScreenAnim = () => {
  let animation = React.createRef();
  const navigation = useNavigation();

  useEffect(() => {
    animation.current.play();
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Welcome" }],
        })
      );
    }, 2500);
  }, []);

  return (
    <>
      <View style={[StyleScreenAnim.Container]}>
        <LottieView
          ref={animation}
          loop={false}
          source={require("../../../assets/location-pin.json")}
          speed={0.5}
          // onAnimationFinish={(e) => {
          //   console.log("evo", e);
          // }}
        />
        <Text style={[StyleScreenAnim.Heading1]}>ZLatibor zoom</Text>
      </View>
    </>
  );
};

export default ScreenAnim;
