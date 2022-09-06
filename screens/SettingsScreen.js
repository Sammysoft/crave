import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyledContainer } from "../components/styles";
import Landing from "../components/Settings";

const SettingsScreen = ({ navigation }) => {
  const route = useRoute();

  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
  });

  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" backgroundColor="white" />
          <StyledContainer>
            <Landing navigation={navigation} />
          </StyledContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

export default SettingsScreen;
