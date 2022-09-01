import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { Formik } from "formik";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Colors, FormInput, SearchFormInput } from "../components/styles";
const { height, width } = Dimensions.get("screen");

const TopSearchBar = (props) => {
  let [fontLoaded] = useFonts({
    Nunito: require("./../assets/fonts/Nunito-Black.ttf"),
    NunitoLight: require("./../assets/fonts/Nunito-Light.ttf"),
  });

  if (fontLoaded) {
    return (
      <>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 25,
          }}
        >
          <View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("settings")}}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              source={require("./../assets/images/profile.png")}
            />
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{
              search: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values, handleBlur }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width,
                  padding: 8,
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    backgroundColor: Colors.WHITE,
                    borderRadius: 20,
                    width: (width * 2) / 3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: 5,
                    paddingRight: 5,
                    alignItems: "center",
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 4.65,
                  }}
                >
                  <SearchInput
                    placeholder="Search..."
                    placeholderTextColor={Colors.NORMAL}
                    style={{ fontFamily: "Nunito" }}
                  />
                  <View style={{}}>
                    <TouchableOpacity>
                      <Ionicons name="search" size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
          <TouchableOpacity>
            <Ionicons name="notifications" size={30} />
          </TouchableOpacity>
        </View>
      </>
    );
  } else {
    return <></>;
  }
};

//https://firebasestorage.googleapis.com/v0/b/ogs-storage.appspot.com/o/images%2Fprofile.pngd0c917cd-126d-48c2-a12b-75a36a943499?alt=media&token=1560423b-b9ad-4dd7-96eb-c3d8826bbb00

const SearchInput = ({ labels, icon, ...props }) => {
  return (
    <View>
      <SearchFormInput {...props} />
    </View>
  );
};

export default TopSearchBar;
