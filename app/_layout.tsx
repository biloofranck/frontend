import { Stack } from "expo-router";
import "./global.css";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/screenSlide2"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="screens/screenSlide3"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="signin"
        options={{ headerShown: false }}
      />

       <Stack.Screen
        name="screens/signup"
        options={{ headerShown: false }}
      />

     
    </Stack>
  );
}
