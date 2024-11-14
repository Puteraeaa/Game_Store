import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom", // Use one of the available animation types: 'fade', 'slide', etc.
        gestureEnabled: true, // Enable gestures for smooth transitions
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="instal" />
      <Stack.Screen name="recant" />
      <Stack.Screen name="achivment" />
      <Stack.Screen name="notifications" />
      
    </Stack>
  );
}
