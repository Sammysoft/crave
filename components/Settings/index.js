import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import Divider from "../Divider";
import { Colors } from "../styles";
import TopBar from "./TopBar";

const Landing = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: Colors.WHITE,
          marginTop: 30,
          padding: 10,
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
        <TopBar navigation={navigation}/>
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Notification Settings
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Payment Details
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Promotions
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Wallet
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Privacy
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          FAQ
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          About
        </Text>
      </View>
      <Divider />
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Logout
        </Text>
      </View>
      <Divider />
    </>
  );
};

export default Landing;
