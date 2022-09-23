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
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
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
          <View>
            <Text
              style={{
                fontFamily: "Nunito",
                paddingHorizontal: 10,
                paddingVertical: 20,
                fontSize: 16,
              }}
            >
              Restaurants
            </Text>
            <View style={{ width: "fit-content", paddingHorizontal: 10 }}>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("./../assets/images/splash1.png")}
                  style={{ height: 50, width: 50 }}
                />
                <Text style={{ fontFamily: "NunitoLight" }}>ChopHouse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default Filter;
