import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const VoiceAssistantScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1  mt-12 px-4 pt-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Speaking to Ai bot</Text>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Status */}
      <Text className="text-center text-gray-500 text-base mb-4">
        Go ahead, I'm listening
      </Text>

      {/* Animation / Image */}
      <View className="items-center mb-8">
        <Image
          source={require("../../assets/images/myBell.png")} // Replace with your animated SVG or image
          className="w-64 h-64"
          resizeMode="contain"
        />
      </View>

      {/* User's Speech Text */}
      <View className="items-center mb-6 px-6">
        <Text className="text-center text-lg font-semibold text-black">
          What is digital abstract design and find 3 example of
        </Text>
        <Text className="text-center text-lg font-semibold text-black">
          abstract design
        </Text>
      </View>

      {/* Footer Controls */}
      <View className="flex-row justify-center items-center gap-12 mt-auto mb-6">
        {/* Clipboard */}
        <TouchableOpacity className="p-3 rounded-full bg-gray-100">
          <MaterialIcons name="content-copy" size={24} color="gray" />
        </TouchableOpacity>

        {/* Mic Button */}
        <TouchableOpacity className="p-5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400">
          <Ionicons name="mic" size={32} color="white" className="h-16 w-16 bg-[#6c63ff] text-center p-3 rounded-full"/>
        </TouchableOpacity>

        {/* Cancel / Close */}
        <TouchableOpacity className="p-3 rounded-full bg-gray-100">
          <Ionicons name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VoiceAssistantScreen;
