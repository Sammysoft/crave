import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  StyledContainer,
  TransparentButton,
  DeepText,
  AreaView,
  StyledImage,
  HeadText,
  CenterText,
  SvgImage,
  SignInButton,
  Colors,
} from "../components/styles";
import { useFonts } from "expo-font";


const { height, width } = Dimensions.get('screen')

const GetStarted = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight : require("./../assets/fonts/Nunito-Light.ttf")
  });

  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <StyledContainer>
            <AreaView>
              <StyledImage
                resizeMode="cover"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fsplash3.pngcd8cccaa-474c-488f-9d53-ec13c89c1163?alt=media&token=4d88dc8d-2759-46a3-abd9-ec2f741ffb82",
                }}
              />
            </AreaView>
            <AreaView>
              <HeadText style={{ fontFamily: "Nunito" }}>
                Dine-in/Delivery
              </HeadText>
            </AreaView>
            <AreaView>
              <AreaView>
                <CenterText style={{ fontFamily: "Nunito" }}>
                  We can have it delivered to you in good time or we could treat
                  you to a fine dine-in experience
                </CenterText>
              </AreaView>
            </AreaView>
            <AreaView average={true}>
              <View
                style={{
                  backgroundColor: Colors.BUTTON,
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderRadius: 30,
                  width: width * 2/3
                }}
              >
                <Text style={{ fontFamily: "NunitoLight", color: Colors.DEEP, fontSize: 15, textAlign:"center" }} onPress={()=>navigation.navigate('onboard')}>
                  Get Started
                </Text>
              </View>
            </AreaView>
        </StyledContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

export default GetStarted;
