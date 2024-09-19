import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RecoletaAlt: require("../assets/fonts/RecoletaAlt.ttf"),
    Mulish: require("../assets/fonts/Mulish-Regular.ttf"),
    MulishMedium: require("../assets/fonts/Mulish-Medium.ttf"),
    MulishSemiBold: require("../assets/fonts/Mulish-SemiBold.ttf"),
    MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent={true}
      />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}
