import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  StyledContainer,
  TransparentButton,
  DeepText,
  AreaView,
  StyledImage,
  HeadText,
  CenterText,
  SvgImage,
} from "../components/styles";

const SplashScreen1 = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" />
        <StyledContainer>
          <AreaView placement={true}>
            <TransparentButton>
              <DeepText>Skip</DeepText>
              <AntDesign name="right" size={24} color="#BD0000" />
            </TransparentButton>
          </AreaView>
          <AreaView>
            <StyledImage
              resizeMode="cover"
              source={require("./../assets/images/splash4.png")}
            />
          </AreaView>
          <AreaView>
            <HeadText>Order Meals</HeadText>
          </AreaView>
          <AreaView>
            <AreaView average={true}>
              <CenterText>
                Request any meal you see now or pre-order and schedule to when
                needed
              </CenterText>
            </AreaView>
          </AreaView>
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen1;
