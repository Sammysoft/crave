import { StatusBar } from "expo-status-bar";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
const { height, width } = Dimensions.get("screen");

const Filter = ({ navigation }) => {
  const [pickFilter, setPickFilter] = React.useState(Boolean);
  React.useEffect(() => {
    setPickFilter(false);
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
            <View style={{ width: width - 100 }}>
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
            {pickFilter ? (
              <>
                <Text
                  style={{
                    fontFamily: "NunitoMedium",
                    fontSize: 16,
                    color: Colors.DEEP,
                  }}
                >
                  Reset
                </Text>
              </>
            ) : (
              <></>
            )}
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Divider />
          </View>
          <Pressable
            onLongPress={() => {
              setPickFilter(!pickFilter);
            }}
          >
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
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 10,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position:"relative",
                      paddingVertical:10
                    }}
                  >
                    <Image
                      source={require("./../assets/images/splash1.png")}
                      style={{ height: 30, width: 30 }}
                    />
                    <Text style={{ fontFamily: "NunitoMedium", fontSize:12 }}>
                      ChopHouse
                    </Text>
                    {pickFilter?<><BouncyCheckbox
                        style={{ borderColor: Colors.DEEP, position:"absolute", left:8, top:-1 }}
                        fillColor={Colors.DEEP}
                        size={15}
                      /></>:<></>}
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position:"relative",
                      paddingVertical:10
                    }}
                  >
                    <Image
                      source={require("./../assets/images/splash1.png")}
                      style={{ height: 30, width: 30 }}
                    />
                    <Text style={{ fontFamily: "NunitoMedium", fontSize:12 }}>
                      Fork & Spoon
                    </Text>
                    {pickFilter?<><BouncyCheckbox
                        style={{ borderColor: Colors.DEEP, position:"absolute", left:8, top:-1 }}
                        fillColor={Colors.DEEP}
                        size={15}
                      /></>:<></>}
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      position:"relative",
                      paddingVertical:10
                    }}
                  >
                    <Image
                      source={require("./../assets/images/splash1.png")}
                      style={{ height: 30, width: 30 }}
                    />
                    <Text style={{ fontFamily: "NunitoMedium", fontSize:12 }}>
                      The Grill
                    </Text>
                    {pickFilter?<><BouncyCheckbox
                        style={{ borderColor: Colors.DEEP, position:"absolute", left:8, top:-1 }}
                        fillColor={Colors.DEEP}
                        size={15}
                      /></>:<></>}
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
                        width: width / 5,
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
                        width: width / 5,
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
            <View style={{ width, height: height / 4 }}>
              <Text
                style={{
                  fontFamily: "Nunito",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                Ratings
              </Text>
              <View
                style={{
                  width,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium" }}>
                    Over 4.5 {" ⭐"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    Over 3.5 {" ⭐"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    Over 2.5 {" ⭐"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    Over 1.5 {" ⭐"}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    Less than 1.5 {" ⭐"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Divider />
            </View>
            <View style={{ width, height: height / 4 }}>
              <Text
                style={{
                  fontFamily: "Nunito",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                Delivery time
              </Text>
              <View
                style={{
                  width,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium" }}>
                    10 - 20 minutes
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    20 - 30 minutes
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    30 - 40 minutes
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {pickFilter ? (
                    <>
                      <BouncyCheckbox
                        style={{ borderColor: Colors.DEEP }}
                        fillColor={Colors.DEEP}
                        size={20}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  <Text style={{ fontFamily: "NunitoMedium", paddingTop: 10 }}>
                    40 - 50 minutes
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          {pickFilter ? (
            <>
              <Apply />
            </>
          ) : (
            <></>
          )}
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

const Apply = () => {
  return (
    <>
      <View
        style={{
          width,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Colors.BUTTON,
            textAlign: "center",
            width: "90%",
            alignItems: "center",
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontFamily: "Nunito", color: Colors.DEEP }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Filter;
