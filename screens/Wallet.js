import { StatusBar } from "expo-status-bar";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import { StyledContainer, Colors } from "../components/styles";

const { height, width } = Dimensions.get("screen");

const Wallet = ({ navigation }) => {
  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          height: height / 2.5,
          width,
          backgroundColor: Colors.BUTTON,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <SafeAreaView>
          <StyledContainer>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                padding: 5,
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back-outline"
                  size={35}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </TouchableOpacity>
              <View style={{ width: width - 70 }}>
                <Text
                  style={{
                    fontFamily: "Nunito",
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Wallet
                </Text>
              </View>
            </View>
          </StyledContainer>
        </SafeAreaView>
      </View>
      <View
        style={{
          width,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: height / 3.5,
          top: height / 6,
        }}
      >

          <View
            style={{
              width: width / 1.5,
              backgroundColor: Colors.DEEP,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: height / 5.5,
              position: "absolute",
            }}
          >
             <Text>Yo</Text>
          </View>
          <View
            style={{
              width: width / 1.5,
              backgroundColor: Colors.DEEP,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: height / 5.5,
              position: "absolute",
            }}
          >
             
          </View>
      </View>
      <View></View>
    </>
  );
};

export default Wallet;
