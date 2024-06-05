// VoiceScreen.js

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

export default function VoiceScreen() {
  const [progress, setProgress] = useState(45);
  const [pendingRecordings, setPendingRecordings] = useState([
    "배고파배고파너무배고파",
    "서비스 이용약관이라네요",
    "자주 묻는 질문도 있어요",
  ]);
  const [completedRecordings, setCompletedRecordings] = useState([]);
  const navigation = useNavigation();

  const handleRecordComplete = (item) => {
    setCompletedRecordings([...completedRecordings, item]);
    setPendingRecordings(pendingRecordings.filter((record) => record !== item));
    setProgress((prevProgress) =>
      Math.min(100, prevProgress + 100 / pendingRecordings.length)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={progress} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {pendingRecordings.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.recordingItem}
            onPress={() =>
              navigation.navigate("RecordingScreen", {
                item,
              })
            }
          >
            <Text style={styles.recordingText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button
        title="기록 보기"
        onPress={() =>
          navigation.navigate("CompletedRecordingsScreen", {
            completedRecordings,
          })
        }
      />
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
