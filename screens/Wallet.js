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
  ImageBackground,
} from "react-native";

import { StyledContainer, Colors } from "../components/styles";
const background = {
  uri: "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fdoodle2%201%20(Traced).png2f786419-0404-4876-abd2-7ac9639da4a7?alt=media&token=353d0c9b-3486-4e8e-a6d4-ed3aa8f7d065",
};

const { height, width } = Dimensions.get("screen");

const Wallet = ({ navigation }) => {
  return (
    <>
      <StatusBar style="dark" />
      <ImageBackground source={background} resizeMode="cover">
      <View
          style={{
            height: height / 2.5,
            width,
            position:"absolute",
            zIndex:999,
            // backgroundColor: Colors.BUTTON,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          </View>
      </ImageBackground>
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
              width: width / 1.9,
              backgroundColor: Colors.DIRTYWHITE,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: height / 5,
              position: "absolute",
              bottom: 45,
            }}
          ></View>
          <View
            style={{
              width: width / 1.7,
              backgroundColor: Colors.TOMATO,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: height / 5.25,
              position: "absolute",
              bottom: 45,
            }}
          ></View>
          <View
            style={{
              width: width / 1.5,
              backgroundColor: Colors.DEEP,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: height / 5.5,
              position: "absolute",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: "NunitoMedium",
                  fontSize: 16,
                  color: Colors.WHITE,
                  marginHorizontal: 20,
                }}
              >
                Wallet balance
              </Text>
              <Text
                style={{
                  fontFamily: "Nunito",
                  fontSize: 25,
                  color: Colors.WHITE,
                  marginVertical: 20,
                  marginHorizontal: 20,
                }}
              >
                #23,970
              </Text>
            </View>
            <Image
              source={require("./../assets/images/coins.png")}
            />
          </View>
        </View>
        <View></View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 8,
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Ionicons name="arrow-up" size={30} style={{ color: "green" }} />
          <Text style={{ color: "green", fontFamily: "Nunito", fontSize:11 }}>Credit</Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 8,
            paddingHorizontal: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <Ionicons
            name="arrow-down"
            size={30}
            style={{ color: Colors.DEEP }}
          />
          <Text
            style={{ color: "green", fontFamily: "Nunito", color: Colors.DEEP, fontSize:11 }}
          >
            Debit
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 8,
            paddingHorizontal: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <Ionicons name="document" size={30} style={{ color: Colors.DEEP }} />
          <Text
            style={{ color: "green", fontFamily: "Nunito", color: Colors.DEEP, fontSize:11 }}
          >
            History
          </Text>
        </View>
      </View>
    </>
  );
};

export default Wallet;
