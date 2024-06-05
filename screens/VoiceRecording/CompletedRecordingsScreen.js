// CompletedRecordingsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CompletedRecordingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>완료된 음성 기록</Text>
      {/* 이 곳에 완료된 기록을 표시하는 컴포넌트를 추가하세요 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CompletedRecordingsScreen;
