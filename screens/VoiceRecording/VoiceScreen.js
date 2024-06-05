import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

export default function VoiceScreen() {
  const [progress, setProgress] = useState(45);
  const [pendingRecordings, setPendingRecordings] = useState([
    "배고파배고파너무배고파",
    "서비스 이용약관이라네요",
    "자주 묻는 질문도 있어요",
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

  const handleRecordingPress = (item) => {
    navigation.navigate("RecordingScreen", {
      item,
      onRecordComplete: handleRecordComplete,
    });
  };

  const handleViewCompletedRecordings = () => {
    navigation.navigate("CompletedRecordingsScreen", {
      completedRecordings,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <ProgressBar
          progress={progress}
          onButtonPress={handleViewCompletedRecordings} // 올바른 prop 전달
        />

        {pendingRecordings.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.recordingItem}
            onPress={() => handleRecordingPress(item)}
          >
            <Text style={styles.recordingText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {},
  recordingItem: {
    marginHorizontal: 20,
    backgroundColor: "#DAEDD5",
    padding: 26,
    marginVertical: 8,
    borderRadius: 15,
  },
  recordingText: {
    fontSize: 17,
    color: "black",
  },
});
