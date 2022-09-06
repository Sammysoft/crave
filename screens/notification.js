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
  Pressable,
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
const { height, width } = Dimensions.get("screen");

const NotificationSettings = ({ navigation }) => {
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
                Notification Settings
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                width,
              }}
            >
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Delivery push notifications
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 5,
                    borderColor: Colors.DEEP,
                    borderWidth: 1,
                    borderRadius: 5,
                    width: width / 8,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Pressable
                      style={{
                        padding: 5,
                        borderColor: Colors.DEEP,
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    ></Pressable>
                    <Text
                      style={{ fontFamily: "NunitoLight", color: Colors.DEEP }}
                    >
                      Off
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontFamily: "NunitoMedium", fontSize: 16 }}>
                Delivery SMS notifications
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 5,
                    borderColor: Colors.DEEP,
                    borderWidth: 1,
                    borderRadius: 5,
                    width: width / 8,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Pressable
                      style={{
                        padding: 5,
                        borderColor: Colors.DEEP,
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    ></Pressable>
                    <Text
                      style={{ fontFamily: "NunitoLight", color: Colors.DEEP }}
                    >
                      Off
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Divider />
          <View style={{ marginVertical: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: 10,
                width,
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    fontFamily: "Nunito",
                    fontSize: 16,
                    color: Colors.DARK,
                    marginVertical: 10,
                  }}
                >
                  Offers
                </Text>
                <Text style={{ fontFamily: "NunitoMedium" }}>
                  Discounts, offers and promotions
                </Text>
              </View>
              <TouchableOpacity
                style={{ padding: 8, borderColor: Colors.DEEP, borderWidth: 1 }}
              ></TouchableOpacity>
            </View>
          </View>
          <Divider />
          <View style={{ marginVertical: 10 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: 10,
                width,
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    fontFamily: "Nunito",
                    fontSize: 16,
                    color: Colors.DARK,
                    marginVertical: 10,
                  }}
                >
                  Other
                </Text>
                <Text style={{ fontFamily: "NunitoMedium" }}>
                  Events, recommendations and other messages
                </Text>
              </View>
              <TouchableOpacity
                style={{ padding: 8, borderColor: Colors.DEEP, borderWidth: 1 }}
              ></TouchableOpacity>
            </View>
          </View>
          <Divider />
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
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default NotificationSettings;
