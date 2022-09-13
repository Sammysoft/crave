import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { StyledContainer, Colors } from "../components/styles";
import Divider from "../components/Divider";

const { height, width } = Dimensions.get("screen");



const Favourite =({navigation })=>{
    const [select, setSelect] = React.useState(false);
    React.useEffect(() => {
      setSelect(false);
    }, []);

    return(
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
            <View
              style={{
                width: width - 70,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Nunito",
                  textAlign: "center",
                  fontSize: 20,
                  flex: 2,
                }}
              >
                Favorites
              </Text>
              <Ionicons
                name="trash"
                size={30}
                style={select ? { color: Colors.DEEP } : { color: Colors.DARK }}
              />
            </View>
          </View>
          <Pressable
            style={{ height: "85%" }}
            onLongPress={() => {
              setSelect(!select);
            }}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{ height: "100%" }}
            >
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >

                <Image
                  source={require("./../assets/images/splash1.png")}
                  style={{
                    height: height / 9,
                    borderRadius: 5,
                    width: width / 3.5,
                  }}
                />
                <View
                  style={{
                    flex: 2,
                    paddingHorizontal: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      paddingBottom: 10,
                    }}
                  >
                    Penne pasta in tomato sauce
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito",
                      fontSize: 16,
                      paddingBottom: 10,
                      color:Colors.DEEP
                    }}
                  >
                    #5400
                  </Text>
                    <Text>{" ⭐⭐⭐⭐⭐ "}</Text>
                    <Image style={{height:50, width:50}} source={require("../assets/images/Vector.png")}/>
                </View>
              </View>
              <View style={{paddingHorizontal:10}}>
              <Divider />
              </View>

            </ScrollView>
          </Pressable>
          <Divider />
        </StyledContainer>
      </SafeAreaView>
        </>
    )
}

export default Favourite;