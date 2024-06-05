// RecordingScreen.js

import React from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function RecordingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const handleRecordComplete = () => {
    // Do whatever you need to do when recording is completed
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>녹음 중: {item}</Text>
      <Button title="녹음 완료" onPress={handleRecordComplete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});
