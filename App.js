import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View, Dimensions } from 'react-native';

import BottomTabNavigator from './components/BottomTapNavigator';
import SplashScreen from "./screens/SplashScreen";
import GetStarted from "./screens/GetStarted";
import OnboardScreen from './screens/onboardScreen';
import SignupScreen from './screens/SignUpScreen';
import SigninScreen from './screens/SignInScreen';
import SettingsScreen from './screens/SettingsScreen';
import DashboardScreen from './screens/DashboardScreen';
import AccountSettings from './components/Settings/Accounts';
const { height, width } = Dimensions.get("screen")

function LogoTitle() {
  return (
  <View style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", margin:"auto", textAlign: "center", width: width * 4.2/7}}>
      <Image
      source={require('./assets/images/logo.png')}
    />
  </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="dashboard" component={BottomTabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Start" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name="onboard" component={OnboardScreen} options={{headerShown:false}}/>
      <Stack.Screen name="settings" component={SettingsScreen} options={{headerShown:false}}/>
      <Stack.Screen name="account" component={AccountSettings} options={{headerShown:false}}/>
      {/* <Stack.Screen name="dashboard" component={DashboardScreen} options={{headerShown:false}}/> */}
      <Stack.Screen name="signup" component={SignupScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      <Stack.Screen name="signin" component={SigninScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}