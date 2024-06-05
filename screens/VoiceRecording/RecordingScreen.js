import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecordingScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const handleCompleteRecording = () => {
    const onRecordComplete = route.params.onRecordComplete;
    onRecordComplete(item);
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="완료" onPress={handleCompleteRecording} />
      ),
    });
  }, [navigation, handleCompleteRecording]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default RecordingScreen;
