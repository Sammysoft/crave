import React from "react";
import { View, Dimensions, Image } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "./screens/DashboardScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import UploadScreen from "./screens/Upload";
import CartScreen from "./screens/Cart";
import SettingsScreen from "./screens/SettingsScreen";
import AccountSettings from "./components/Settings/Accounts";
import Payments from "./screens/payments";
import Promotion from "./screens/promotion";
import Filter from "./screens/Filter";
import Wallet from "./screens/Wallet";
import NotificationSettings from "./screens/notification";
import SplashScreen from "./screens/SplashScreen";
import GetStarted from "./screens/GetStarted";
import OnboardScreen from "./screens/onboardScreen";
import SignupScreen from "./screens/SignUpScreen";
import SigninScreen from "./screens/SignInScreen";

const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const UploadStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const FavouriteStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = createNativeStackNavigator();
const {height, width} = Dimensions.get("screen")

const HomeStackScreen = () => {
  return (
    <>
      <HomeStack.Navigator initialRouteName="dashboard">
        <HomeStack.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="account"
          component={AccountSettings}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="payments"
          component={Payments}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="promotion"
          component={Promotion}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="filter"
          component={Filter}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="wallet"
          component={Wallet}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="notifications"
          component={NotificationSettings}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </>
  );
};

const DiscoverStackScreen = () => {
  return (
    <>
      <DiscoverStack.Navigator initialRoute="discover">
        <DiscoverStack.Screen
          name="discover"
          component={DiscoverScreen}
          options={{ headerShown: false }}
        />
      </DiscoverStack.Navigator>
    </>
  );
};

const UploadStackScreen = () => {
  return (
    <>
      <UploadStack.Navigator>
        <UploadStack.Screen
          name="upload"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
      </UploadStack.Navigator>
    </>
  );
};

const CartStackScreen = () => {
  return (
    <>
      <CartStack.Navigator>
        <CartStack.Screen
          name="cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </CartStack.Navigator>
    </>
  );
};

const FavouriteStackScreen = () => {
  return (
    <>
      <FavouriteStack.Navigator>
        <FavouriteStack.Screen
          name="favourite"
          component={FavouriteScreen}
          options={{ headerShown: false }}
        />
      </FavouriteStack.Navigator>
    </>
  );
};

export const BottomTab = () => {
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
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Upload") {
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
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

function LogoTitle() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          textAlign: "center",
          width: (width * 4.2) / 7,
        }}
      >
        <Image source={require("./assets/images/logo.png")} />
      </View>
    );
  }



export const AuthStack = () => {
  return (
    <>
      <Auth.Navigator>
        <Auth.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Start"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="onboard"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="signup"
          component={SignupScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Auth.Screen
          name="signin"
          component={SigninScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Auth.Navigator>
    </>
  );
};
