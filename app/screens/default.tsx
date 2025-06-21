import { View, Text, Image, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router"
import React from "react";

const DefaultScreen = () => {
  const navigate = useRouter()
  return (
    <>
      <View className="flex-1 justify-center items-center px-4 mt-28">
        <View>
          <Image
            source={require("../../assets/images/Group32.png")}
            width={26}
            height={26}
            resizeMode="contain"
            className="h-25 w-25"
          />
        </View>
      </View>
      <View className="px-6 mb-24">
        <Text className="text-primary text-6xl font-bold">Explore the </Text>
        <Text className="text-primary text-6xl font-bold">world easily</Text>
        <Text className="text-3xl py-2">To your desire</Text>
      </View>
      <View className="px-6 flex-row items-center justify-between mb-20">
        <View className="flex-row gap-1">
          <View className="h-2 w-6 bg-primary rounded-xl "></View>
          <View className="h-2 w-6 bg-[#6C63FF] rounded-xl "></View>
          <View className="h-2 w-6 bg-[#6C63FF] rounded-xl"></View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigate.push("/screens/screenSlide2")}>
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
};

export default DefaultScreen;






