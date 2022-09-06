import { StatusBar } from "expo-status-bar";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
import { Formik } from "formik";
const { height, width } = Dimensions.get("screen");

const Payments = ({ navigation }) => {
  const [toggleForm, setToggleForm] = React.useState(Boolean);

  React.useEffect(() => {
    setToggleForm(false);
  }, []);

  switch (toggleForm) {
    case true:
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
                <View style={{ width: width - 70 }}>
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Payment details
                  </Text>
                </View>
              </View>
              <PaymentForm />
            </StyledContainer>
          </SafeAreaView>
        </>
      );
      break;

    default:
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
                <View style={{ width: width - 70 }}>
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Payment details
                  </Text>
                </View>
              </View>
              <View style={{ marginVertical: 10 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    width,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="card"
                      size={30}
                      style={{ color: Colors.DEEP }}
                    ></Ionicons>
                    <Text
                      style={{
                        fontFamily: "NunitoMedium",
                        fontSize: 16,
                        paddingHorizontal: 10,
                      }}
                    >
                      Credit or Debit Card
                    </Text>
                  </View>
                  <TouchableOpacity onPress={()=>{setToggleForm(true)}}>
                    <Text style={{ fontFamily: "Nunito", fontSize: 16 }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Divider />
              <View style={{ marginVertical: 10 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    width,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      height={50}
                      width={50}
                      source={require("./../assets/images/paypal.png")}
                    />
                    <Text
                      style={{
                        fontFamily: "NunitoMedium",
                        fontSize: 16,
                        paddingHorizontal: 10,
                      }}
                    >
                      Paypal
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={{ fontFamily: "Nunito", fontSize: 16 }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </StyledContainer>
          </SafeAreaView>
        </>
      );
      break;
  }
};







const PaymentForm = () => {
  return (
    <>
      <View style={{ marginVertical: 20 }}>
        <Formik
          initialValues={{
            cardnumber: "",
            cardname: "",
            date: "",
            cvv: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit, values, handleBlur }) => (
            <>
              <MyTextField labels="Card number" />
              <MyTextField labels="Cardholder name" />
              <MyTextField labels="MM/YY" />
              <MyTextField
                labels="CVV "
                icon={
                  <Ionicons
                    name={"information-circle-outline"}
                    size={30}
                    style={{ color: Colors.GREY }}
                  />
                }
              />
            </>
          )}
        </Formik>
      </View>
    </>
  );
};





const MyTextField = ({ labels, icon }) => {
  return (
    <>
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.WHITE,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginHorizontal: 10,
          marginVertical: 5,
        }}
      >
        <TextInput
          placeholder={labels}
          style={{ fontFamily: "NunitoLight" }}
        ></TextInput>
        <View>{icon}</View>
      </View>
    </>
  );
};

export default Payments;
