import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="start" />
      <Stack.Screen name="tracker" />
      <Stack.Screen name="workplace" />
      <Stack.Screen name="parkingSetup" />
      <Stack.Screen name="mineralChoice" />
      <Stack.Screen name="downloadPlace" />
      <Stack.Screen name="downloadSetup" />
    </Stack>
  );
}
