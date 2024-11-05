import { Stack } from "expo-router";
import ArticleDetails from "./ArticleDetails";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerShown :false}}/>
      <Stack.Screen name="HomeScreen"  options={{headerShown :false}}/>
      <Stack.Screen name="ArticleDetails"/>
    </Stack>
  );
}
