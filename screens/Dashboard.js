import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Dimensions } from "react-native";

import { StyledContainer, Colors } from "../components/styles";
import { useFonts } from "expo-font";
import TopSearchBar from "../components/TopSearchBar";
import Switcher from "../components/Switcher";

const { height, width } = Dimensions.get("screen");

const Dashboard = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
  });

  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <StyledContainer>
            <TopSearchBar />
            <Switcher />
          </StyledContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

export default Dashboard;
