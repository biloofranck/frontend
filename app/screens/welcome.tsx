import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const WelcomeScreen = () => {
  const navigate = useRouter();
  return (
    <>
    <View className='flex-1 justify-start items-start px-6 mt-36'>
      <View className=''>
        <Text className='text-primary text-3xl font-bold'>Welcome To Home</Text>
      </View>
      <View className='mt-24'>
        <Image source={require("../../assets/images/Group35.png")} width={26} height={26} resizeMode='contain'/>
      </View>
      <View className='mt-4'>
        <Text className='text-[#252525]'>
            Currently The Next Part of Home Activity & Fragementation is under development. The upcoming Part 2 is coming Soon........
        </Text>
      </View>
    </View>

     <View className='flex-1 justify-center items-center'>
        <TouchableOpacity onPress={() => navigate.push("/screens/home")} className='bg-[#6C63FF] h-12 w-[250px] px-2 py-3 rounded-lg'>
            <Text className='text-center text-white font-semibold'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
    
  )
}

export default WelcomeScreen;