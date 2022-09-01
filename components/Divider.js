import React from "react";
import { View, Dimensions } from "react-native";
import { Colors } from "./styles";
const { height, width } = Dimensions.get("screen");

const Divider = () => {
  return (
    <>
      <View
        style={{
          width,
          backgroundColor: Colors.GREY,
          height: 1,
          margin: "auto",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
      ></View>
    </>
  );
};

export default Divider;
