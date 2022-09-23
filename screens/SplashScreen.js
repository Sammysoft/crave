import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { Colors } from "../components/styles";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import {
  StyledContainer,
  TransparentButton,
  DeepText,
  AreaView,
  StyledImage,
  HeadText,
  CenterText,
} from "../components/styles";

const { width, height } = Dimensions.get("screen");

//https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fsplash2.png0a3ce283-7301-4cc5-9915-91fbac9b40fd?alt=media&token=b416b7e7-503c-4ca4-8236-1f89bc9d2118

const Data = [
  {
    head: "Explore Food",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fsplash1.png0481eede-eff6-4801-b42d-7459e832b35e?alt=media&token=1530cba8-a667-40d2-90ad-5dae8e77f212",
    text: "Choose from a wide variety of meals, Pick chef specials and many more",
  },
  {
    head: "Order Meals",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fsplash4.pngb991cc4e-994f-4c0b-95f9-d9c72f58e8b7?alt=media&token=d433dc98-7477-4049-b3e4-6a98ae2de02e",
    text: "Request many meals you see now or pre-order and schedule to when needed",
  },
  {
    head: "Share Moments",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fsplash2.png0a3ce283-7301-4cc5-9915-91fbac9b40fd?alt=media&token=b416b7e7-503c-4ca4-8236-1f89bc9d2118",
    text: "Request many meals you see now or pre-order and schedule to when needed",
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ bottom: 30, flexDirection: "row", display: "flex" }}>
      {Data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [10, 25, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: scale,
              borderRadius: 5,
              opacity,
              backgroundColor: Colors.DEEP,
              marginHorizontal: 10,
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};

// https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fsplash4.pngb991cc4e-994f-4c0b-95f9-d9c72f58e8b7?alt=media&token=d433dc98-7477-4049-b3e4-6a98ae2de02e

const SplashScreen = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
  });

  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (!fontLoaded) {
    return <></>;
  } else {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <StyledContainer>
            <AreaView placement={true}>
              <TransparentButton onPress={() => navigation.navigate("Start")}>
                <DeepText style={{ fontFamily: "Nunito" }}>Skip</DeepText>
                <AntDesign name="right" size={24} color="#BD0000" />
              </TransparentButton>
            </AreaView>
            <Animated.FlatList
              data={Data}
              keyExtractor={(item) => item.key}
              horizontal
              scrollEventThrottle={32}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: { contentOffset: { x: scrollX } },
                  },
                ],
                { useNativeDriver: false }
              )}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={{ width, height }}>
                    <View>
                      <AreaView>
                        <StyledImage
                          resizeMode="cover"
                          source={{ uri: item.image }}
                          // style={{width: width, height: height/1.6}}
                        />
                      </AreaView>
                      <AreaView>
                        <HeadText style={{ fontFamily: "Nunito" }}>
                          {item.head}
                        </HeadText>
                      </AreaView>
                    </View>
                    <View >
                      <AreaView>
                        <Text
                          style={{
                            padding: 10,
                            width: width,
                            textAlign: "center",
                            fontFamily: "Nunito",
                          }}
                        >
                          {item.text}
                        </Text>
                      </AreaView>
                    </View>
                  </View>
                );
              }}
            />
            <AreaView average={true}>
              <Indicator scrollX={scrollX} />
            </AreaView>
          </StyledContainer>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  applyFont: { fontFamily: "Nunito" },
});

export default SplashScreen;
