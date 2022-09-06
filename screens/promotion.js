import { StatusBar } from "expo-status-bar";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { StyledContainer, Colors } from "../components/styles";

const { height, width } = Dimensions.get("screen");

const Promotion = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" backgroundColor="white" />
        <StyledContainer>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: Colors.WHITE,
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
            <View
              style={{
                width: width - 35,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  fontFamily: "Nunito",
                  textAlign: "center",
                  fontSize: 20,
                  paddingLeft: width / 5,
                }}
              >
                Promotion
              </Text>
              <Text style={{ fontFamily: "Nunito" }}>Enter Code</Text>
            </View>
          </View>
          <View
            style={{
              height: height - height / 8,
              width,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontFamily: "Nunito", marginVertical: 20, fontSize: 16 }}
            >
              No promotions yet
            </Text>
            <Text style={{ fontFamily: "NunitoLight", fontSize: 16 }}>
              Have a promo code? Add it to your account
            </Text>
          </View>
        </StyledContainer>
        <TouchableOpacity
          style={{ position: "absolute", bottom: height / 10 }}
          onPress={() => {
            navigation.navigate("payments");
          }}
        >
          <View
            style={{
              width,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.LIGHT,
                width: "90%",
                padding: 15,
                marginHorizontal: 5,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.DEEP,
                  fontFamily: "Nunito",
                  fontSize: 14,
                }}
              >
                Save Settings
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Promotion;
