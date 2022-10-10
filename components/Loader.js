import React from "react";
import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, StyledContainer } from "./styles";
const { width, height } = Dimensions.get("screen");

const Loader = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.BUTTON }}>
        <StatusBar style="dark" backgroundColor={Colors.BUTTON}></StatusBar>
        <StyledContainer style={{ backgroundColor: Colors.BUTTON }}>
          <View
            style={{
              width,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <ActivityIndicator
              animating={true}
              color={Colors.DEEP}
              size="large"
              style={{paddingVertical:20}}
            />
            <Text style={{ fontFamily: "NunitoMedium", fontSize: 15,  }}>
              Loading...
            </Text>
          </View>
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default Loader;
