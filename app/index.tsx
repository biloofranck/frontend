import { Button, Text, View } from "react-native";
import {useRouter} from "expo-router"

export default function Index() {
 const  navigate = useRouter()
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-primary font-bold text-3xl ">Hello World!</Text>
      <Button title="Click Me" color={"blue"} onPress={() => navigate.push("/signup")}/>
    </View>
  );
}
