import * as React from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import { AreaView, Colors } from "./styles";
const { height, width } = Dimensions.get("screen");

const Switcher = () => {
  const [activeTab, setActiveTab] = React.useState("Delivery");
  return (
    <>
      <AreaView>
        <View
          style={{
            width: width / 3,
            flexDirection: "row",
          }}
        >
          <Switch
            text="Delivery"
            bgColor="#F6B300"
            textColor="#1A1A19"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Switch
            text="Pick Up"
            bgColor=""
            textColor="#F6B300"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
      </AreaView>
    </>
  );
};

const Switch = (props) => {
  return (
    <>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: props.activeTab === props.text ? "#F6B300" : "transparent",
          borderRadius: 5,
        }}
        onPress={() => {
          props.setActiveTab(props.text);
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito",
            color: props.activeTab === props.text ? "#1A1A19" : "#F6B300",
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Switcher;
