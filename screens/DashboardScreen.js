import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Dimensions } from "react-native";
import { StyledContainer, Colors } from "../components/styles";
import { useFonts } from "expo-font";
import TopSearchBar from "../components/TopSearchBar";
import Switcher from "../components/Switcher";
import HeadText from "../components/HeadText";
import Categories from "../components/Products/Categories";
import AdSection from "../components/Products/AdSection";
import ProductListings from "../components/Products/ProductListings";

const { height, width } = Dimensions.get("screen");

const DashboardScreen = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
    NunitoMedium: require("./../assets/fonts/Nunito-Medium.ttf"),
  });

  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <StyledContainer>
            <TopSearchBar navigation={navigation} />
            <Switcher />
            <HeadText />
            <Categories />
            {/* <AdSection /> */}
            <ProductListings />
          </StyledContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

export default DashboardScreen;
