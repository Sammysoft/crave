import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
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

const  { width, height } = Dimensions.get('screen')


const Data = [
  {
    head: "Explore Food",
    image: "./../assets/images/splash1.png",
    text: "Choose from a wide variety of meals, Pick chef specials and many more",
  },
  {
    head: "Order Meals",
    image: "./../assets/images/splash2.png",
    text: "Request many meals you see now or pre-order and schedule to when needed",
  },
  {
    head: "Share Moments",
    image: "./../assets/images/splash4.png",
    text: "Request many meals you see now or pre-order and schedule to when needed",
  },
];

const SplashScreen = () => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
  });

  if (!fontLoaded) {
    return <></>;
  } else {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <StyledContainer>
            <AreaView placement={true}>
              <TransparentButton>
                <DeepText style={{ fontFamily: "Nunito" }}>Skip</DeepText>
                <AntDesign name="right" size={24} color="#BD0000" />
              </TransparentButton>
            </AreaView>
            <Animated.FlatList
              data={Data}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={{width}}>
                    <AreaView>
                      <StyledImage
                        resizeMode="cover"
                        source={{uri: item.image}}
                      />
                    </AreaView>
                    <AreaView>
                      <HeadText style={{ fontFamily: "Nunito" }}>
                        Explore Food
                      </HeadText>
                    </AreaView>
                    <AreaView>
                      <AreaView average={true}>
                        <CenterText style={{ fontFamily: "Nunito" }}>
                          Choose from a wide variety of meals. Pick chefs,
                          specials and many more
                        </CenterText>
                      </AreaView>
                    </AreaView>
                  </View>
                );
              }}
            />
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
