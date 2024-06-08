import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const RecordingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item, onRecordComplete } = route.params;

  React.useLayoutEffect(() => {
    const handleCompleteRecording = () => {
      if (onRecordComplete) {
        onRecordComplete(item);
      }
      navigation.goBack();
    };

    navigation.setOptions({
      headerRight: () => (
        <Button title="완료" onPress={handleCompleteRecording} />
      ),
    });
  }, [navigation, item, onRecordComplete]);

  return (
    <View style={styles.container}>
      <Text style={styles.notetext}>
        녹음할 때 유의해주세요 {"\n"}
        {"\n"}
        .(마침표)와 ,(쉼표)는 쉬어 {"\n"}
        ?(물음표)는 의문문으로 읽어주세요 {"\n"}
        {"\n"}
        모든 문장은 일정한 속도로 ! {"\n"}
        초당 3.8 글자에서 3.9 글자가 적당합니다 {"\n"}
        {"\n"}
        숨소리, 키보드 소리, 에어컨 소리 등 {"\n"}
        잡음이 들어기지 않도록 주의해주세요
      </Text>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  notetext: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  itemContainer: {
    backgroundColor: "#79B669",
    borderRadius: 15,
    marginBottom: 30,
  },
  itemText: {
    fontSize: 20,
    color: "white",
    padding: 20,
    marginHorizontal: 46,
  },
});

export default RecordingScreen;
