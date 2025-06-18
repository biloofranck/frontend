import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { useRouter
 } from "expo-router";


const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false); // ✅ STATE
  const navigate = useRouter()
  return (
    <>
      <View className="flex-1 justify-center items-center px-4">
        <View className="relative w-full h-[290px] py-4 mt-12 top-6">
          <Image
            source={require("../assets/images/well.png")}
            className="w-full h-full"
            resizeMode="contain"
          />
          <View className="absolute bottom-16 w-full items-center">
            <Text className="text-2xl font-semibold text-black">Welcome Back!</Text>
            <Text className="text-sm text-gray-500">sign in to access your account</Text>
          </View>
        </View>
      </View>

      <View className="flex-1 px-6">
        {/* Email input */}
        <View className="flex-row items-center bg-[#C4C4C433] h-[60px] rounded-3xl px-4 py-3 mb-4">
          <TextInput
            placeholder="Enter your email"
            className="flex-1 text-[#00000080]"
            placeholderTextColor="#888"
          />
          <Ionicons name="mail-outline" size={20} color="#0000004D" />
        </View>

        {/* Password input */}
        <View className="flex-row items-center bg-[#C4C4C433] h-[60px] rounded-3xl px-4 py-3 mb-2">
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="flex-1 text-[#00000080]"
            placeholderTextColor="#888"
          />
          <Ionicons name="lock-closed-outline" size={20} color="#0000004D" />
        </View>

        {/* Remember me and forgot password */}
        <View className="flex-row justify-between mt-4  items-center mb-6">
          <View className="flex-row items-center">
            <Checkbox
              value={rememberMe}
              onValueChange={setRememberMe}
              color={rememberMe ? "#6C63FF" : undefined}
            />
            <Text className="ml-2 text-sm text-gray-600">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-sm text-[#6C63FF] font-medium">Forgot password ?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-[#6C63FF] py-3 rounded-xl mt-20 mb-4">
          <Text className="text-white text-center text-base font-semibold">Login</Text>
        </TouchableOpacity>

        {/* Register */}
        <Text className="text-center text-sm text-gray-600">
          New Member? <TouchableOpacity onPress={()=> navigate.push("/screens/signup")}><Text className="text-[#6C63FF] font-semibold">Register</Text></TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default SignIn;