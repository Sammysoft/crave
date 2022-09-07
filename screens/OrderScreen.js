import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Dimensions,
} from "react-native";

import Order from "../components/Order";

const { height, width } = Dimensions.get("screen");

const OrderScreen = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" />
        <Order />
      </SafeAreaView>
    </>
  );
};

export default OrderScreen;
