import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View, Dimensions, TextInput } from "react-native";

import {
  StyledContainer,
  AreaView,
  Colors,
  FormInput,
} from "../components/styles";
import { useFonts } from "expo-font";
import { Formik } from "formik";

const { height, width } = Dimensions.get("screen");

const SigninScreen = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
  });

  if (fontLoaded) {
    return (
      <>
        <SafeAreaView>
          <StatusBar style="dark" />
          <StyledContainer>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Text
                style={{
                  fontFamily: "Nunito",
                  color: Colors.DARK,
                  fontSize: 24,
                }}
              >
                Sign In
              </Text>
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleSubmit, values, handleBlur }) => (
                  <View>
                    <MyTextInput
                      placeholder="Username"
                      placeholderTextColor={Colors.NORMAL}
                      style={{ fontFamily: "Nunito" }}
                    />
                    <MyTextInput
                      placeholder="Email Address"
                      placeholderTextColor={Colors.NORMAL}
                      style={{ fontFamily: "Nunito" }}
                    />
                    <MyTextInput
                      placeholder="Password"
                      placeholderTextColor={Colors.NORMAL}
                      secureTextEntry={true}
                      style={{ fontFamily: "Nunito" }}
                    />
                    <View style={{ paddingTop: 20 }}>
                      <Text style={{ fontFamily: "NunitoLight" }}>
                        By signing up, signing in or continuing, I agree to the
                        Terms of Use and Privacy Policy
                      </Text>
                    </View>
                    <AreaView average={true}>
                      <View
                        style={{
                          backgroundColor: Colors.BUTTON,
                          paddingLeft: 30,
                          paddingRight: 30,
                          paddingTop: 20,
                          paddingBottom: 20,
                          borderRadius: 30,
                          marginTop: 20,
                          width: (width * 2) / 3,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "NunitoLight",
                            color: Colors.DEEP,
                            fontSize: 15,
                            textAlign: "center",
                          }}
                          onPress={() => navigation.navigate("Home", {screen:"dashboard"})}
                        >
                          Next
                        </Text>
                      </View>
                    </AreaView>
                  </View>
                )}
              </Formik>
            </View>
          </StyledContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <></>;
  }
};

const MyTextInput = ({ labels, icon, ...props }) => {
  return (
    <View>
      <FormInput {...props} />
    </View>
  );
};

export default SigninScreen;
