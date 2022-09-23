import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
import { useFonts } from "expo-font";
import TopSearchBar from "../components/TopSearchBar";
import Switcher from "../components/Switcher";
import HeadText from "../components/HeadText";
import Categories from "../components/Products/Categories";
import AdSection from "../components/Products/AdSection";
import ProductListings from "../components/Products/ProductListings";

const { height, width } = Dimensions.get("screen");

const DashboardScreen = ({ navigation }) => {
  const [screen, setScreen] = React.useState(Boolean);
  React.useEffect(() => {
    setScreen(false);
  }, []);

  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
    NunitoMedium: require("./../assets/fonts/Nunito-Medium.ttf"),
  });

  if (fontLoaded) {
    switch (screen) {
      case true:
        return (
          <>
            <SafeAreaView>
              <StatusBar style="dark" />
              <StyledContainer>
                <TopSearchBar navigation={navigation} />
                <Searching navigation={navigation}/>
              </StyledContainer>
            </SafeAreaView>
          </>
        );
        break;

      default:
        return (
          <>
            <SafeAreaView>
              <StatusBar style="dark" />
              <StyledContainer>
                <TopSearchBar
                  navigation={navigation}
                  screen={screen}
                  setScreen={setScreen}
                />
                <Landing />
              </StyledContainer>
            </SafeAreaView>
          </>
        );
        break;
    }
  } else {
    return <></>;
  }
};

const Landing = () => {
  return (
    <>
      <Switcher />
      <HeadText />
      <Categories />
      {/* <AdSection /> */}
      <ProductListings />
    </>
  );
};

const Searching = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "rgba(121, 121, 130, 0.15)",
          shadowOpacity: 0.2,
          shadowRadius: 3,
          borderRadius: 15,
          paddingVertical: 5,
          paddingHorizontal: 5,
          backgroundColor: Colors.WHITE,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: width / 4,
          marginHorizontal: width / 17,
        }}
        onPress={()=>{navigation.navigate("filter")}}
      >
        <Ionicons name="options" size={30} />
        <Text style={{ color: Colors.DARK, fontFamily: "Nunito" }}>Filter</Text>
      </TouchableOpacity>
      <View
        style={{
          width: width,
          height: height / 1.6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "rgba(121, 121, 130, 0.15)",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <View
          style={{
            height: "100%",
            width: "90%",
            backgroundColor: Colors.WHITE,
            flex: 1,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", height: "100%" }}
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
                <Image
                  source={require("./../assets/images/splash1.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../assets/images/splash3.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../assets/images/splash2.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../assets/images/splash3.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../assets/images/splash4.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../assets/images/splash1.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("./../assets/images/splash2.png")}
                  style={{
                    height: height / 8,
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
                      fontFamily: "NunitoMedium",
                      fontSize: 12,
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
                  <Text>{"⭐⭐⭐⭐⭐ "}</Text>
                  <Image
                    style={{ height: 20, width: 20, marginVertical: 10 }}
                    source={require("../assets/images/Vector.png")}
                  />
                </View>
              </View>

          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default DashboardScreen;
