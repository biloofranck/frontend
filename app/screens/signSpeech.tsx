import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Speech from 'expo-speech'; // Expo speech API for audio playback

const SignCameraScreen = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [interpretedText, setInterpretedText] = useState("Waiting for signs...");
  const router = useRouter();

  if (!permission) return <View style={styles.container} />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () =>
    setFacing(curr => (curr === "back" ? "front" : "back"));

  // Fake function simulating sign language interpretation updating text (replace with real logic)
  const simulateInterpretation = () => {
    // Just for demo, update text every 3 seconds while recording
    let count = 0;
    const phrases = [
      "Hello",
      "How are you?",
      "Thank you",
      "Goodbye",
    ];
    const interval = setInterval(() => {
      if (!isRecording) {
        clearInterval(interval);
        return;
      }
      setInterpretedText(phrases[count % phrases.length]);
      count++;
    }, 3000);
  };

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setInterpretedText("Recording stopped. You can play the audio.");
    } else {
      setIsRecording(true);
      setInterpretedText("Recording started...");
      simulateInterpretation();
    }
  };

  const handlePlayAudio = () => {
    if (interpretedText && interpretedText !== "Waiting for signs...") {
      Speech.speak(interpretedText);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={[styles.camera, isRecording && styles.recordingBorder]}
        facing={facing}
      />

      {/* Overlayed UI */}
      <View style={styles.overlayContainer}>
        {/* Back Button */}
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        </View>

        {/* Bottom controls */}
        <View style={styles.bottomControls}>
          {/* Flip Camera Button */}
          <TouchableOpacity style={styles.controlButton} onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse" size={28} color="white" />
          </TouchableOpacity>

          {/* Record Button */}
          <TouchableOpacity
            style={[styles.controlButton, isRecording && styles.recordingButton]}
            onPress={handleRecord}
          >
            <Ionicons
              name={isRecording ? "square" : "radio-button-on"}
              size={36}
              color={isRecording ? "red" : "white"}
            />
          </TouchableOpacity>

          {/* Play Audio Button */}
          <TouchableOpacity
            style={styles.controlButton}
            onPress={handlePlayAudio}
            disabled={interpretedText === "Waiting for signs..." || !interpretedText}
          >
            <Ionicons name="volume-high" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Interpreted Text Box */}
        <View style={styles.textBox}>
          <Text style={styles.interpretedText}>{interpretedText}</Text>
        </View>
      </View>
    </View>
  );
};

export default SignCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  message: {
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  permissionButton: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 40,
    borderRadius: 5,
  },
  permissionText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  camera: {
    flex: 1,
  },
  recordingBorder: {
    borderWidth: 4,
    borderColor: "red",
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  bottomControls: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
  },
  controlButton: {
    backgroundColor: "rgba(255,255,255,0.3)",
    padding: 16,
    borderRadius: 50,
  },
  recordingButton: {
    backgroundColor: "rgba(255,0,0,0.7)",
  },
  textBox: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    maxWidth: "90%",
  },
  interpretedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
