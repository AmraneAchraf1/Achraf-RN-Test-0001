import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStack } from "./src/routes/RootStack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 400,
  fade: true,
});


export default function App() {
  const [loaded, error] = useFonts({
    jsB: require("./assets/fonts/JosefinSans-Bold.ttf"),
    jsR: require("./assets/fonts/JosefinSans-Regular.ttf"),
    jsSB: require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    jsL: require("./assets/fonts/JosefinSans-Light.ttf"),
    jsEL: require("./assets/fonts/JosefinSans-ExtraLight.ttf"),
    jsM: require("./assets/fonts/JosefinSans-Medium.ttf"),
    jsT: require("./assets/fonts/JosefinSans-Thin.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      if (loaded) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await SplashScreen.hideAsync();
      } else if (error) {
        console.error("Error loading fonts", error);
      }
    }
    prepare();
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: false,
        fonts: {
          regular: "jsR",
          medium: "jsM",
          light: "jsL",
          thin: "jsT",
          bold: "jsB",
          semiBold: "jsSB",
          extraLight: "jsEL",
        },
      }}
    >
      <StatusBar style="auto" animated backgroundColor="transparent" />
      
        <RootStack />
    </NavigationContainer>
  );
}


