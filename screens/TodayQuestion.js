import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import minilogo from "../assets/minilogo.png";

function TodayQuestion({ navigation }) {
  const [answer, setAnswer] = useState("");

  const handleNavigate = () => {
    navigation.navigate("TodayQuestionFinish");
  };

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image style={styles.img} source={minilogo} />
          <Text style={styles.boxText}>똑똑! 투게두가 보내는 오늘의 질문</Text>
        </View>
        <View style={styles.quesBox}>
          <Text style={styles.quesBoxText}>오늘의 질문 ~~~</Text>
        </View>
        <Text style={styles.textTitle}>텍스트로 남기기</Text>
        <Text style={styles.boxText2}>똑똑! 투게두가 보내는 오늘의 질문</Text>
        <View style={styles.answerOuterBox}>
          <View style={styles.answerInnerBox}>
            <TextInput
              style={styles.answerText}
              multiline={true}
              onChangeText={(text) => setAnswer(text)}
              value={answer}
              placeholder="질문에 대한 답변을 입력해주세요."
            />
          </View>
        </View>
        <TouchableOpacity style={styles.wrbtn} onPress={handleNavigate}>
          <Text style={styles.wrbtnText}>기록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listbtn}>
          <Text style={styles.wrbtnText}>목록보기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default TodayQuestion;

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
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    alignSelf: "flex-start",
  },
  img: {
    width: 33,
    height: 30,
    marginRight: 6,
  },
  boxText: {
    color: "#878282",
    fontSize: 15,
  },
  quesBox: {
    width: 342,
    height: 127,
    backgroundColor: "rgba(217, 217, 217, 0.4)",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 49,
  },
  quesBoxText: {
    color: "#5B5858",
    fontSize: 18,
    fontWeight: "600",
  },
  textTitle: {
    color: "#5B5858",
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginLeft: 15,
    marginBottom: 5,
  },
  boxText2: {
    color: "#878282",
    fontSize: 15,
    alignSelf: "flex-start",
    marginLeft: 15,
    marginBottom: 11,
  },
  answerOuterBox: {
    width: 351,
    height: 180,
    backgroundColor: GlobalStyles.colors.primary300,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  answerInnerBox: {
    width: 320,
    height: 145,
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    backgroundColor: "#fff",
  },
  answerText: {
    fontSize: 17,
    color: "#878282",
  },

  wrbtn: {
    backgroundColor: GlobalStyles.colors.primary100,
    width: 343,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 9,
  },
  wrbtnText: {
    color: "#fff",
    fontSize: 18,
  },
  listbtn: {
    backgroundColor: GlobalStyles.colors.primary100,
    width: 343,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 60,
  },
});
