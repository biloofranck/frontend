import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// eslint-disable-next-line import/no-named-as-default
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { useRouter
 } from "expo-router";

const SignUp = () => {
  const [rememberMe, setRememberMe] = useState(false); // ✅ STATE
  const navigate = useRouter()
  return (
    <>
      <View className="flex-1 justify-center items-center px-4">
        <View className="relative w-full h-[290px] py-4 mt-16 top-6">
          <Image
            source={require("../../assets/images/well.png")}
            className="w-full h-full"
            resizeMode="contain"
          />
          <View className="absolute bottom-16 w-full items-center">
            <Text className="text-3xl font-semibold text-primary">Get Started!</Text>
            <Text className="text-sm text-gray-500">By creating a free account</Text>
          </View>
        </View>
      </View>

      <View className="flex-[2] px-6 mt-4 py-4 ">
         <View className="flex-row items-center bg-[#C4C4C433] h-[60px] rounded-3xl px-4 py-3 mb-4">
          <TextInput
            placeholder="Full Name"
            className="flex-1 text-[#00000080]"
            placeholderTextColor="#888"
          />
          <Ionicons name="person" size={20} color="#0000004D" />
        </View>
        {/* Email input */}
        <View className="flex-row items-center bg-[#C4C4C433] h-[60px] rounded-3xl px-4 py-3 mb-4">
          <TextInput
            placeholder="Valid email"
            className="flex-1 text-[#00000080]"
            placeholderTextColor="#888"
          />
          <Ionicons name="mail-outline" size={20} color="#0000004D" />
        </View>

         <View className="flex-row items-center bg-[#C4C4C433] h-[60px] rounded-3xl px-4 py-3 mb-4">
          <TextInput
            placeholder="Phone number"
            className="flex-1 text-[#00000080]"
            placeholderTextColor="#888"
          />
          <Ionicons name="phone-portrait" size={20} color="#0000004D" />
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
            <Text className="ml-2 text-sm text-[#6C63FF]">By checking the box you agree to our Terms and Conditions.</Text>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-[#6C63FF] py-3 rounded-xl mt-20 mb-4">
          <Text className="text-white text-center text-base font-semibold">Register</Text>
        </TouchableOpacity>

        {/* Register */}
        <Text className="text-center text-sm text-gray-600">
          New Member?<TouchableOpacity onPress={()=> navigate.push("/signin")}><Text className="text-[#6C63FF] font-semibold"> login now</Text></TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

export default SignUp;