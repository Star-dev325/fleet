import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Splash } from "@components/ui/splash";
import { CheckListProvider } from "@/hooks/checklist.hook";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito: require("@assets/fonts/Nunito-Regular.ttf"),
  });

  const router = useRouter();

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      const timer = setTimeout(() => {
        setShowSplash(false);
        router.replace("/(auth)/login");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loaded, error]);

  if (!loaded || showSplash) {
    return <Splash />;
  }

  return (
    <CheckListProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </CheckListProvider>
  );
}
