import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors, FormInput2, StyledContainer } from "../styles";
import Divider from "../Divider";
const { width, height } = Dimensions.get("screen");

const AccountSettings = ({ navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [toggleCameraChoice, setToggleCameraChoice] = React.useState(false);
  const snapRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const snapPoints = ["40%"];

  React.useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);
    if (result) {
      setImage(result.uri);
      console.log(image);
    }


  };

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
                Account Settings
              </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ padding: 30, backgroundColor: Colors.WHITE }}>
              <View style={{ position: "relative" }}>
                {image != null ? (
                  <>
                    <Image
                      source={{ uri: image }}
                      style={{
                        borderRadius: width / 2.5,
                        height: height / 5.5,
                        width: width / 2.5,
                      }}
                    />
                    <TouchableOpacity style={{position:"absolute", left:50, bottom:-10}}>
                      <Ionicons
                        name="create"
                        size={30}
                        style={{ bottom: 10, left: -50, color: Colors.DEEP }}
                        onPress={() =>
                          setToggleCameraChoice(!toggleCameraChoice)
                        }
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <View
                      style={{
                        backgroundColor: Colors.GREY,
                        width: width / 2.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: width / 2.5,
                        height: height / 5.5,
                        position: "relative",
                      }}
                    >
                      <Ionicons
                        name="person"
                        size={100}
                        style={{ color: Colors.DEEP, marginTop: 20 }}
                      />

                      <TouchableOpacity>
                        <Ionicons
                          name="create"
                          size={30}
                          style={{ bottom: 10, left: -50, color: Colors.DEEP }}
                          onPress={() =>
                            setToggleCameraChoice(!toggleCameraChoice)
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>

            <AccountForm />
          </ScrollView>
          {toggleCameraChoice === true ? (
            <BottomSheet
              snapPoints={snapPoints}
              ref={snapRef}
              enablePanDownToClose={true}
            >
              <BottomSheetView>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "90%",
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      paddingVertical: 10,
                    }}
                  >
                    Select a photo
                  </Text>
                  <View style={{ width: width - 40, paddingVertical: 10 }}>
                    <Divider />
                  </View>
                  <View
                    style={{
                      backgroundColor: Colors.BUTTON,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.DEEP,
                        fontFamily: "Nunito",
                        paddingVertical: 10,
                      }}
                    >
                      Take photo
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.BUTTON,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 5,
                    }}
                    onPress={() => pickImage()}
                  >
                    <Text
                      style={{
                        color: Colors.DEEP,
                        fontFamily: "Nunito",
                        paddingVertical: 10,
                      }}
                    >
                      Choose from Gallery
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 5,
                      borderColor: Colors.DEEP,
                      borderWidth: 1,
                    }}
                    onPress={() => setToggleCameraChoice(!toggleCameraChoice)}
                  >
                    <Text
                      style={{
                        color: Colors.DEEP,
                        fontFamily: "Nunito",
                        paddingVertical: 10,
                      }}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </BottomSheetView>
            </BottomSheet>
          ) : (
            <></>
          )}
          <TouchableOpacity style={{ position: "absolute", bottom: 10 }}>
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
                  style={{
                    color: Colors.DEEP,
                    fontFamily: "Nunito",
                    fontSize: 14,
                  }}
                >
                  Save Settings
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
        style={{ height: height / 2 }}
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
