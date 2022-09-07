import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Dimensions } from "react-native";
import { StyledContainer } from "../components/styles";

const { height, width } = Dimensions.get("screen");

const UploadScreen = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" />
        <StyledContainer></StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default UploadScreen;
