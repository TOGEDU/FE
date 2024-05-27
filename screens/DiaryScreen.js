import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function DiaryScreen() {
  const [diaryText, setDiaryText] = useState("");

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>날짜 선택하기</Text>
        <Text style={styles.date}>2024년 03월 18일 (월요일)</Text>

        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>사진 첨부하기</Text>
        </TouchableOpacity>
        <Text style={styles.filename}>파일명</Text>
        <TouchableOpacity style={styles.diaryBox} onPress={() => {}}>
          <TextInput
            style={styles.diaryInput}
            multiline
            placeholder="일기를 작성해 주세요."
            value={diaryText}
            onChangeText={(text) => setDiaryText(text)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>기록하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 33,
    paddingTop: 47,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  date: {
    fontSize: 20,
    alignSelf: "flex-start",
  },
  filename: {
    fontSize: 15,
    marginTop: 9,
    marginLeft: 5,
  },
  diaryBox: {
    width: 343,
    height: 202,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
    marginTop: 29,
    marginBottom: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  diaryInput: {
    flex: 1,
    fontSize: 18,
  },
  btn: {
    backgroundColor: GlobalStyles.colors.primary100,
    width: 343,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
