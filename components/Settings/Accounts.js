import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors, FormInput2, StyledContainer } from "../styles";
import Divider from "../Divider";
const { width, height } = Dimensions.get("screen");

const AccountSettings = ({ navigation }) => {
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
            <View style={{width:width-70,}}>
              <Text
                style={{
                  fontFamily: "Nunito",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Account Settings
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ padding: 30, backgroundColor: Colors.WHITE }}>
              <View
                style={{
                  backgroundColor: Colors.GREY,
                  width: width / 2.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: width/2.5,
                  height: height / 5.5,
                  position: "relative",
                }}
              >
                <Ionicons
                  name="person"
                  size={100}
                  style={{ color: Colors.DEEP, marginTop: 20 }}
                />
                <Ionicons
                  name="create"
                  size={30}
                  style={{ bottom: 10, left: -50, color: Colors.DEEP }}
                />
              </View>
            </View>
            <AccountForm />
          </ScrollView>
        </StyledContainer>
      </SafeAreaView>
    </>
  );
};

const AccountForm = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: height / 2.2, paddingBottom: height / 3 }}
      >
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
            <>
              <MyTextField labels="Full name" />
              <MyTextField labels="User name" />
              <MyTextField labels="Email" />
              <MyTextField labels="Phone number" />
              <MyTextField labels="Password" secureTextEntry={true} />
              <MyTextField labels="Saved Location" />
            </>
          )}
        </Formik>
      </ScrollView>
      <TouchableOpacity >
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
              style={{ color: Colors.DEEP, fontFamily: "Nunito", fontSize: 14 }}
            >
              Save Settings
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const MyTextField = ({ labels, ...props }) => {
  return (
    <>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 5,
        }}
      >
        <Text style={{ fontFamily: "NunitoLight", fontSize: 12, padding: 10 }}>
          {labels}
        </Text>
        <FormInput2 {...props} style={{ fontFamily: "NunitoMedium" }} />
      </View>
      <Divider />
    </>
  );
};
export default AccountSettings;
