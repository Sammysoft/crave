/* eslint-disable */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, View, Dimensions } from "react-native";
import { useFonts } from "expo-font";

import { BottomTab, AuthStack } from "./navigation";
const { height, width } = Dimensions.get("screen");

export default function App() {
  let [fontLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Black.ttf"),
  });

  const [user, setUser] = React.useState();

  React.useEffect(() => {
    setUser("Sammysoft");
  }, []);

  if (!fontLoaded) {
    return <></>;
  } else {
    return (
      <>
        {user ? (
          <>
            <NavigationContainer>
              <BottomTab />
            </NavigationContainer>
          </>
        ) : (
          <>
            <NavigationContainer>
              <AuthStack />
            </NavigationContainer>
          </>
        )}
      </>
    );
  }
}
