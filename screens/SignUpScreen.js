import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
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
  FormInput,
  FormInputHalf,
  FormText,
} from "../components/styles";
import { useFonts } from "expo-font";
import { Formik } from "formik";

const { height, width } = Dimensions.get("screen");

const SignupScreen = ({ navigation }) => {
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
                Sign Up
              </Text>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  username: "",
                  phonenumber: "",
                  email: "",
                  password: "",
                  dateofbirth: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleSubmit, values, handleBlur }) => (
                  <View>
                    <View
                      style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",

                      }}
                    >
                      <MyTextInputHalf
                        placeholder="Firstname"
                        placeholderTextColor={Colors.NORMAL}
                        style={{ fontFamily: "Nunito" }}
                      />
                      <MyTextInputHalf
                        placeholder="Lastname"
                        placeholderTextColor={Colors.NORMAL}
                        style={{ fontFamily: "Nunito" }}
                      />
                    </View>
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
                    <View
                      style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <MyTextInputHalf
                        placeholder="Phone number"
                        placeholderTextColor={Colors.NORMAL}
                        style={{ fontFamily: "Nunito" }}
                      />
                      <MyTextInputHalf
                        placeholder="Birthday"
                        placeholderTextColor={Colors.NORMAL}
                        style={{ fontFamily: "Nunito" }}
                      />
                    </View>
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
                          onPress={() => navigation.navigate("signin")}
                        >
                          Next
                        </Text>
                      </View>
                    </AreaView>
                    <View
                      style={{
                        width:"100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: Colors.DEEP, fontFamily:"Nunito", fontSize: 12 }}>
                        Have an account? Log in
                      </Text>
                    </View>
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

const MyTextInputHalf = ({ labels, icon, ...props }) => {
  return (
    <View style={{ width: "48%" }}>
      <FormInputHalf {...props} />
    </View>
  );
};

export default SignupScreen;
