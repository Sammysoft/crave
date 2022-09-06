import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Divider from "../Divider";
import { Colors } from "../styles";
import TopBar from "./TopBar";

const { height, width } = Dimensions.get("screen")

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
          width,
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
        <TopBar navigation={navigation} />
      </View>
      <TouchableOpacity
        style={{
          padding: 20,
        }}
        onPress={()=>{navigation.navigate("notifications")}}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Notification Settings
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
        onPress={()=>{navigation.navigate("payments")}}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Payment Details
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
        onPress={()=>{navigation.navigate("promotion")}}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Promotions
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
        onPress={()=>{navigation.navigate("wallet")}}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Wallet
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Privacy
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          FAQ
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          About
        </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{ fontFamily: "Nunito", fontSize: 16, color: Colors.NORMAL }}
        >
          Logout
        </Text>
      </TouchableOpacity>
      <Divider />
    </>
  );
};

export default Landing;
