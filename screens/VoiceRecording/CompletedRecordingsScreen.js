// CompletedRecordingsScreen.js
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function CompletedRecordingsScreen() {
  const route = useRoute();
  const { completedRecordings } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {completedRecordings.map((item, index) => (
          <View key={index} style={styles.recordingItem}>
            <Text style={styles.recordingText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    marginTop: 16,
  },
  recordingItem: {
    backgroundColor: "#e0f2f1",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  recordingText: {
    fontSize: 16,
    color: "#4caf50",
  },
});
