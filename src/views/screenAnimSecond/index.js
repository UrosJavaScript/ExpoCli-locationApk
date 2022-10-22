import React, { useEffect } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { StyleScreenAnim } from "../../styles/screenAnim";

const ScreenAnimSecond = () => {
  let animation = React.createRef();
  const navigation = useNavigation();

  useEffect(() => {
    animation.current.play();
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "LoginScreen" }],
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
        />
        <Text style={[StyleScreenAnim.Heading1]}>ZOOM</Text>
      </View>
    </>
  );
};

export default ScreenAnimSecond;
