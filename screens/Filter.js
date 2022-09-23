import { StatusBar } from "expo-status-bar";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  Modal,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { StyledContainer, Colors, FormInput } from "../components/styles";
import { Formik } from "formik";
const { height, width } = Dimensions.get("screen");

const Filter = ({ navigation }) => {
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
            <View style={{ width: width - 70 }}>
              <Text
                style={{
                  fontFamily: "Nunito",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                All filters
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Divider />
          </View>
          <View style={{ width, height: height / 8 }}>
            <Text
              style={{
                fontFamily: "Nunito",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              Restaurants
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={require("./../assets/images/splash1.png")}
                    style={{ height: 50, width: 50 }}
                  />
                  <Text style={{ fontFamily: "NunitoMedium" }}>ChopHouse</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={require("./../assets/images/splash1.png")}
                    style={{ height: 50, width: 50 }}
                  />
                  <Text style={{ fontFamily: "NunitoMedium" }}>
                    Fork & Spoon
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={require("./../assets/images/splash1.png")}
                    style={{ height: 50, width: 50 }}
                  />
                  <Text style={{ fontFamily: "NunitoMedium" }}>The Grill</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Divider />
          </View>
          <View style={{ width, height: height / 8 }}>
            <Text
              style={{
                fontFamily: "Nunito",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              Price
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontFamily: "NunitoMedium" }}>Min.</Text>
                  <View
                    style={{
                      borderColor: Colors.DARK,
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      width: width/5
                    }}
                  >
                    <TextInput></TextInput>
                  </View>
                </View>
                <View
                  style={{
                    paddingLeft: 40,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontFamily: "NunitoMedium" }}>Max.</Text>
                  <View
                    style={{
                      borderColor: Colors.DARK,
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      width: width/5
                    }}
                  >
                    <TextInput></TextInput>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Divider />
          </View>
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default Filter;
