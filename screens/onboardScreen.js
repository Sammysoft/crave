import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Dimensions,
} from "react-native";

import {
  StyledContainer,
  Colors,
} from "../components/styles";
import { useFonts } from "expo-font";

const { height, width } = Dimensions.get("screen");

const OnboardScreen = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
  });

  const background = {
    uri: "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fdoodle2%201%20(Traced)%20(1).png5a04849b-9ff0-4bdd-bc22-72d421929402?alt=media&token=73c62155-954a-4bf0-b8ec-f6b45f0a8c3f",
  };

  //https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fdoodle2%201%20(Traced)%20(1).png5a04849b-9ff0-4bdd-bc22-72d421929402?alt=media&token=73c62155-954a-4bf0-b8ec-f6b45f0a8c3f
  //https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fdoodle2%201%20(Traced).png2f786419-0404-4876-abd2-7ac9639da4a7?alt=media&token=353d0c9b-3486-4e8e-a6d4-ed3aa8f7d065
  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <ImageBackground source={background} resizeMode="cover">
            <StyledContainer>
              <View
                style={{
                  width,
                  height,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: Colors.BUTTON,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderRadius: 30,
                    width: (width * 2) / 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "NunitoLight",
                      color: Colors.DEEP,
                      fontSize: 16,
                      textAlign: "center",
                    }}
                    onPress={() => navigation.navigate("signup")}
                  >
                    Sign Up
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "transparent",
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderRadius: 30,
                    width: (width * 2) / 3,
                    marginTop: 30,
                    borderColor: "#BD0000",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "NunitoLight",
                      color: Colors.DEEP,
                      fontSize: 16,
                      textAlign: "center",
                    }}
                    onPress={() => navigation.navigate("signin")}
                  >
                    Log In
                  </Text>
                </View>
              </View>
            </StyledContainer>
          </ImageBackground>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

export default OnboardScreen;
