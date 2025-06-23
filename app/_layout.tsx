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

      <Stack.Screen name="signin" options={{ headerShown: false }} />

      <Stack.Screen name="screens/default" options={{ headerShown: false }} />
      <Stack.Screen name="screens/signup" options={{ headerShown: false }} />
      <Stack.Screen name="screens/welcome" options={{ headerShown: false }} />
      <Stack.Screen name="screens/home" options={{ headerShown: false }} />
      <Stack.Screen name="screens/speechToSign" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/voiceScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="screens/signSpeech"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
