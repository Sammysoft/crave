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
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors, FormInput2 } from "../styles";
import Divider from "../Divider";
const { width, height } = Dimensions.get("screen");

const AccountSettings = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" backgroundColor="white" />
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: Colors.WHITE,
            marginTop: 30,
            padding: 10,
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
          <View style={{ marginLeft: width / 5 }}>
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
        <View style={{ padding: 30, backgroundColor: Colors.WHITE }}>
          <View
            style={{
              backgroundColor: Colors.GREY,
              width: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 150,
              height: 150,
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
      </SafeAreaView>
    </>
  );
};

const AccountForm = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: height / 2.2 }}
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
      <TouchableOpacity>
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
            <Text style={{ color: Colors.DEEP, fontFamily: "Nunito", fontSize:14 }}>
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
