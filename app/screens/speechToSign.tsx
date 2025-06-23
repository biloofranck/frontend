import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // For controlling status bar style
import { Feather } from '@expo/vector-icons'; // For icons

export default function SignTranslationScreen() {
  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" /> {/* Set status bar style */}

      {/* Header Bar */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Sign Translation</Text>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content Area */}
      <View className="flex-1 items-center justify-center p-4">
        {/* Placeholder for sign animation - you'd likely use a dedicated component or library for animations here */}
        <View className="items-center justify-center w-32 h-32 rounded-full bg-blue-100 mb-4">
          {/* This is a simplified representation of the hands icon. You'd use an SVG or a custom icon. */}
          <Text className="text-6xl">👋✍️</Text> {/* Just for visual placeholder */}
        </View>
        <Text className="text-base text-gray-500">Sign animations will appear here</Text>
      </View>

      {/* Input Area */}
      <View className="flex-row items-center px-4 py-3 bg-white border-t border-gray-200">
        <TextInput
          className="flex-1 h-12 px-4 border border-gray-300 rounded-full text-lg mr-2"
          placeholder="Type text to translate to sign language..."
          value={inputText}
          onChangeText={setInputText}
          multiline={false} // Ensure it's a single line input
        />
        <TouchableOpacity className="p-3 bg-blue-500 rounded-full">
          <Feather name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Voice Input Button */}
      <View className="items-center justify-center px-4 py-3 bg-white">
        <TouchableOpacity className="flex-row items-center justify-center w-full py-3 bg-blue-500 rounded-full">
          <Feather name="mic" size={24} color="white" className="mr-2" />
          <Text className="text-lg font-semibold text-white">Voice Input</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}