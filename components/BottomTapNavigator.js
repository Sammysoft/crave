import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import Favourite from "../screens/FavouriteScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import CartScreen from "../screens/Cart";
import UploadScreen from "../screens/Upload";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIconStyle: {
            activeTintColor: "#F6B300",
          },
          tabBarActiveTintColor: "#F6B300",
          tabBarLabelStyle: { fontSize: 10, fontFamily: "Nunito" },
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Discover") {
              iconName = focused ? "globe" : "globe-outline";
            } else if (route.name === "Favourite") {
              iconName = focused ? "heart" : "heart-outline";
            }
            else if (route.name === "Tray") {
              iconName = focused ? "cart" : "cart-outline";
            }
            else if (route.name === "Upload") {
              iconName = focused ? "cloud-upload" : "cloud-upload-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "#F6B300" : "grey"}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{ headerShown: false }}
        />
            <Tab.Screen
          name="Upload"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tray"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
