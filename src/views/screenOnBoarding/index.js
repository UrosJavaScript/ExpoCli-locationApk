import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

// import { Entypo } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";

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
              color: "#fff12a",
            },
            subTitleStyles: {
              color: "#fff12a",
            },
            // nextLabel: {
            //   color: "red",
            // },
            image: (
              <Image
                style={{ height: 250 }}
                source={require("../../../assets/images/onBoarding/onBoard1.png")}
              />
              // <FontAwesome5
              //   name="buromobelexperte"
              //   size={180}
              //   color="#fff12a"
              // />
            ),

            title: "Experience it!",
            subtitle: "on your way",
          },
          {
            backgroundColor: "#073B4C",
            titleStyles: {
              color: "#fff12a",
            },
            subTitleStyles: {
              color: "#fff12a",
            },
            image: (
              <Image
                style={{ height: 250 }}
                source={require("../../../assets/images/onBoarding/onBoard2.png")}
              />
              // <FontAwesome5 name="search-location" size={180} color="#fff12a" />
            ),
            title: "Go to places you wish!",
            subtitle: "on different way",
          },
          {
            backgroundColor: "#073B4C",
            titleStyles: {
              color: "#fff12a",
            },
            subTitleStyles: {
              color: "#fff12a",
            },
            image: (
              <Image
                style={{ height: 250 }}
                source={require("../../../assets/images/onBoarding/onBoard3.png")}
              />
              // <Entypo name="login" size={180} color="#fff12a" />
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
