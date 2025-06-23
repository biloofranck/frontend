import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigate = useRouter();

  return (
    <View className="flex-1">
  
      <SafeAreaView className="bg-white">
        <View className="flex-row justify-between mt-12 items-center px-6 py-4">
          <View className="flex-row items-center gap-4">
            <Image
              source={require("../../assets/images/dope.jpeg")}
              style={{
                height: height * 0.1,
                width: height * 0.1,
                borderRadius: (height * 0.1) / 2,
              }}
              resizeMode="cover"
            />
            <View>
              <Text className="text-sm text-gray-500">Hi, welcome back</Text>
              <Text className="text-2xl font-bold text-primary">Mr Nitidem</Text>
            </View>
          </View>

          <View className="flex-row items-center gap-4">
            <Image
              source={require("../../assets/images/glove1.png")}
              style={{ height: height * 0.06, width: height * 0.06 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/bell-icon.png")}
              style={{ height: height * 0.06, width: height * 0.06 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        {/* View 2 */}
        <View className="flex-col justify-center items-center">
          <Image
            source={require("../../assets/images/myBell.png")}
            resizeMode="contain"
            style={{ height: height * 0.22, width: height * 0.22 }}
          />
          <View className="pb-6 mb-4">
            <Text className="text-primary font-bold text-3xl text-center">
              Hi Nitidem
            </Text>
            <Text className="text-sm font-semibold text-center">
              Let&rsquo;s dive in and enjoy the world of voices!
            </Text>
          </View>
        </View>

        {/* View 3 */}
        <View className="flex-1 justify-center items-center flex-col gap-4">
          <View className="flex-row gap-8 justify-center flex-wrap">
            
            <TouchableOpacity
              style={{
                height: height * 0.18,
                width: width * 0.42,
              }}
              className="bg-[#ffff] rounded-xl p-2"
              onPress={() => navigate.push("/screens/signSpeech")}
            >
              <Ionicons
                name="videocam"
                size={28}
                color="#6c63ff"
                style={{ marginLeft: 8, marginTop: 8 }}
              />
              <Text className="text-primary font-bold text-xl mt-4 px-2">
                Sign To Speech
              </Text>
              <Text className="text-sm px-2">
                Transform your signs to natural voice by Ai.
              </Text>
            </TouchableOpacity>

            {/* Card 2 */}
            <TouchableOpacity
              style={{
                height: height * 0.18,
                width: width * 0.42,
              }}
              className="bg-[#ffff] rounded-xl p-2"
              onPress={() => navigate.push("/screens/voiceScreen")}
            >
              <FontAwesome
                name="microphone"
                size={25}
                color="#6c63ff"
                style={{ marginLeft: 8, marginTop: 8 }}
              />
              <Text className="text-primary font-bold text-xl mt-4 px-2">
                Speech To Text
              </Text>
              <Text className="text-sm px-2">
                Transform your speech to text by Ai.
              </Text>
            </TouchableOpacity>

            {/* Card 3 */}
            <TouchableOpacity
              style={{
                height: height * 0.18,
                width: width * 0.42,
              }}
              className="bg-[#ffff] rounded-xl p-2 mt-4"
            >
              <Ionicons
                name="document-text-sharp"
                size={25}
                color="#6c63ff"
                style={{ marginLeft: 8, marginTop: 8 }}
              />
              <Text className="text-primary font-bold text-xl mt-4 px-2">
                Text To Speech
              </Text>
              <Text className="text-sm px-2">
                Transform your text to natural voice by Ai.
              </Text>
            </TouchableOpacity>

            {/* Card 4 */}
            <TouchableOpacity
              style={{
                height: height * 0.18,
                width: width * 0.42,
              }}
              className="bg-[#ffff] rounded-xl p-2 mt-4"
          
            >
              <Ionicons
                name="move"
                size={25}
                color="#6c63ff"
                style={{ marginLeft: 8, marginTop: 8 }}
              />
              <Text className="text-primary font-bold text-xl mt-4 px-2">
               Speech To Sign
              </Text>
              <Text className="text-sm px-2">
                Transform your speech to signs  by Ai.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Card */}
        <View
          style={{
            height: height * 0.28,
            width: width * 0.9,
          }}
          className="bg-[#ffff] items-center rounded-lg mt-8 self-center p-4"
        >
          <View>
            <Ionicons
              name="chatbox"
              color={"white"}
              size={25}
              style={{
                height: height * 0.08,
                width: height * 0.08,
                backgroundColor: "#6c63ff",
                textAlign: "center",
                textAlignVertical: "center",
                borderRadius: 100,
                padding: 12,
                marginTop: height * 0.03,
              }}
              className="py-6"
            />
          </View>
          <Text className="text-primary font-bold text-2xl mt-4">
            Start New Chat
          </Text>
          <TouchableOpacity
            style={{
              width: width * 0.8,
              height: 48,
              backgroundColor: "#6c63ff",
            }}
            className="mt-6 rounded-2xl justify-center"
          >
            <Text className="text-white font-semibold text-center">
              Start New chat
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
