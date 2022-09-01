import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Landing from "../components/Settings";

const SettingsScreen = ({ navigation }) => {
    const route = useRoute()

  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
  });

  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" backgroundColor="white" />
          <Landing navigation={navigation}/>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

export default SettingsScreen;
