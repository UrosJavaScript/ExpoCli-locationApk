import React from "react";
import { Text, View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

// style
//import { StyleScreenOnBoarding } from "../../styles/screenOnBoarding";

const OnBoarding = ({ navigation }) => {
  return (
    <>
      <Onboarding
        onSkip={() => navigation.replace("LoginScreen")}
        onDone={() => navigation.navigate("LoginScreen")}
        pages={[
          {
            backgroundColor: "#073B4C",
            titleStyles: {
              color: "#FFD166",
            },
            subTitleStyles: {
              color: "#FFD166",
            },
            nextLabel: {
              color: "red",
            },
            image: (
              <Image
                style={{ height: 300 }}
                source={require("../../../assets/onb-3.png")}
              />
            ),
            title: "Experience it!",
            subtitle: "on your way",
          },
          {
            backgroundColor: "#073B4C",
            titleStyles: {
              color: "#FFD166",
            },
            subTitleStyles: {
              color: "#FFD166",
            },
            image: (
              <Image
                style={{ height: 300 }}
                source={require("../../../assets/onb-2.png")}
              />
            ),
            title: "Go to places you wish!",
            subtitle: "on different way",
          },
          {
            backgroundColor: "#073B4C",
            titleStyles: {
              color: "#FFD166",
            },
            subTitleStyles: {
              color: "#FFD166",
            },
            image: (
              <Image
                style={{ height: 300 }}
                source={require("../../../assets/onb-1.png")}
              />
            ),
            title: "Just login first!",
            subtitle: "and you can start",
          },
        ]}
      />
    </>
  );
};

export default OnBoarding;
