import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../styles";
const { height, width } = Dimensions.get("screen");

const TopBar = (props) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AccountInfo />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "Nunito", padding: 5 }}>Amaka</Text>
          <Text style={{ fontFamily: "NunitoLight", fontSize: 10, padding: 5 }}>
            Store 5, Block B, Prince Olaobaju Layout, Ikeja, Lagos
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginLeft: 5 }}>
        <Ionicons
          name="create"
          size={35}
          style={{ color: Colors.DEEP }}
          onPress={() => {
            props.navigation.navigate("account");
          }}
        />
      </TouchableOpacity>
    </>
  );
};

const AccountInfo = () => {
  return (
    <>
      <Image
        style={{ width: 50, height: 50, padding: 10, borderRadius: 50 }}
        source={require("./../../assets/images/profile.png")}
      />
    </>
  );
};

export default TopBar;
