import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
import Divider from "../components/Divider";

const { height, width } = Dimensions.get("screen");

const CartScreen = ({ navigation }) => {
  const [select, setSelect] = React.useState(false);
  React.useEffect(() => {
    setSelect(false);
  }, []);

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
            <View
              style={{
                width: width - 70,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Nunito",
                  textAlign: "center",
                  fontSize: 20,
                  flex: 2,
                }}
              >
                Cart
              </Text>
              <Ionicons
                name="trash"
                size={30}
                style={select ? { color: Colors.DEEP } : { color: Colors.DARK }}
              />
            </View>
          </View>
          <Pressable
            style={{ height: "85%" }}
            onLongPress={() => {
              setSelect(!select);
            }}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{ height: "100%" }}
            >
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {select === true ? (
                  <BouncyCheckbox
                    style={{ borderColor: Colors.DEEP }}
                    fillColor={Colors.DEEP}
                  />
                ) : (
                  <></>
                )}
                <Image
                  source={require("./../assets/images/splash1.png")}
                  style={{
                    height: height / 9,
                    borderRadius: 5,
                    width: width / 3.5,
                  }}
                />
                <View
                  style={{
                    flex: 2,
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      paddingBottom: 10,
                    }}
                  >
                    Penne pasta in tomato sauce
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      paddingBottom: 10,
                      color: Colors.DEEP,
                    }}
                  >
                    #5400
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "NunitoMedium",
                        fontSize: 10,
                        flex: 1,
                      }}
                    >
                      Quantity: 1 plate
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Ionicons name="time-outline" size={20} />
                      <Text
                        style={{ fontFamily: "NunitoMedium", fontSize: 10 }}
                      >
                        40 Mins
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ paddingHorizontal: 10 }}>
                <Divider />
              </View>
            </ScrollView>
          </Pressable>
          <TouchableOpacity
            style={{
              width,
              paddingVertical: 15,
              backgroundColor: Colors.BUTTON,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Nunito", color: Colors.DEEP }}>
              Pay Now
            </Text>
          </TouchableOpacity>
          <Divider />
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
