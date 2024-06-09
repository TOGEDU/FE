import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const ProgressBar = ({ progress, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>음성 기록 진행 현황</Text>
      </View>

      <AnimatedCircularProgress
        size={170}
        width={15}
        fill={progress}
        tintColor="#4caf50"
        backgroundColor="#e0e0df"
        rotation={0}
        lineCap="round"
        style={styles.progressCircle}
      >
        {(fill) => (
          <View style={styles.innerCircle}>
            <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>
            <Text style={styles.subText}>잘하고 계세요!</Text>
          </View>
        )}
      </AnimatedCircularProgress>

      <View style={styles.buttonContainer}>
        <Button
          title="기록 보기"
          onPress={onButtonPress} // 여기서 버튼 클릭 이벤트를 전달합니다.
          style={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 30,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  titleContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 250,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  progressCircle: {
    marginTop: 20,
    marginBottom: 16,
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  subText: {
    fontSize: 14,
    color: "black",
    marginTop: 8,
  },
  buttonContainer: {
    width: 170,
    marginTop: 16,
    backgroundColor: "#DAEDD5",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
});

export default ProgressBar;
