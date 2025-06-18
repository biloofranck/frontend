import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {useRouter} from "expo-router"

const screenSlide2 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useRouter();
  return (
    <>
      <View className="flex-1 justify-center items-center px-4 mt-28">
        <View>
          <Image
            source={require("../../assets/images/Group33.png")}
            width={26}
            height={26}
            resizeMode="contain"
            className="h-26 w-26"
          />
        </View>
      </View>
      <View className="px-6 mb-24">
        <Text className="text-primary text-6xl font-bold">Reach the </Text>
        <Text className="text-primary text-6xl font-bold">unknown spot</Text>
        <Text className="text-3xl py-2">To your destination</Text>
      </View>
      <View className="px-6 flex-row items-center justify-between mb-20">
        <View className="flex-row gap-1">
          <View className="h-2 w-6 bg-[#6C63FF]  rounded-xl "></View>
          <View className="h-2 w-6 bg-primary rounded-xl "></View>
          <View className="h-2 w-6 bg-[#6C63FF] rounded-xl"></View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigate.push("/screens/screenSlide3")}>
            <Image
            source={require("../../assets/images/Next.png")}
            width={24}
            height={24}
            className="h-12 w-12"
          />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default screenSlide2