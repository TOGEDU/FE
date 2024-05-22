import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const ChildNameBirth = () => {
  const [name, onChangeName] = useState("");
  const [birth, onChangeBirth] = useState("");

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
    navigation.navigate("ChildIdPw");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>이름과 생년월일을 {"\n"}입력해 주세요.</Text>

        <View style={styles.lineContainer}>
          <View style={styles.lineColor}></View>
          <View style={styles.lineColor}></View>
          <View style={styles.lineColor}></View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.nameInputContainer}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            style={styles.inputIconLeft}
          >
            <Path
              d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5978 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <TextInput
            style={styles.input}
            placeholder="이름"
            value={name}
            onChangeText={onChangeName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            style={styles.inputIconLeft}
          >
            <Path
              d="M6.25 27.5C5.5625 27.5 4.97375 27.255 4.48375 26.765C3.99375 26.275 3.74917 25.6867 3.75 25V7.5C3.75 6.8125 3.995 6.22375 4.485 5.73375C4.975 5.24375 5.56334 4.99917 6.25 5H7.5V2.5H10V5H20V2.5H22.5V5H23.75C24.4375 5 25.0263 5.245 25.5163 5.735C26.0063 6.225 26.2508 6.81333 26.25 7.5V25C26.25 25.6875 26.005 26.2763 25.515 26.7663C25.025 27.2563 24.4367 27.5008 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25ZM6.25 10H23.75V7.5H6.25V10ZM15 17.5C14.6458 17.5 14.3488 17.38 14.1088 17.14C13.8688 16.9 13.7492 16.6033 13.75 16.25C13.75 15.8958 13.87 15.5987 14.11 15.3587C14.35 15.1187 14.6467 14.9992 15 15C15.3542 15 15.6513 15.12 15.8913 15.36C16.1313 15.6 16.2508 15.8967 16.25 16.25C16.25 16.6042 16.13 16.9013 15.89 17.1413C15.65 17.3813 15.3533 17.5008 15 17.5ZM10 17.5C9.64584 17.5 9.34875 17.38 9.10875 17.14C8.86875 16.9 8.74917 16.6033 8.75 16.25C8.75 15.8958 8.87 15.5987 9.11 15.3587C9.35 15.1187 9.64667 14.9992 10 15C10.3542 15 10.6513 15.12 10.8913 15.36C11.1313 15.6 11.2508 15.8967 11.25 16.25C11.25 16.6042 11.13 16.9013 10.89 17.1413C10.65 17.3813 10.3533 17.5008 10 17.5ZM20 17.5C19.6458 17.5 19.3488 17.38 19.1088 17.14C18.8688 16.9 18.7492 16.6033 18.75 16.25C18.75 15.8958 18.87 15.5987 19.11 15.3587C19.35 15.1187 19.6467 14.9992 20 15C20.3542 15 20.6513 15.12 20.8913 15.36C21.1313 15.6 21.2508 15.8967 21.25 16.25C21.25 16.6042 21.13 16.9013 20.89 17.1413C20.65 17.3813 20.3533 17.5008 20 17.5ZM15 22.5C14.6458 22.5 14.3488 22.38 14.1088 22.14C13.8688 21.9 13.7492 21.6033 13.75 21.25C13.75 20.8958 13.87 20.5988 14.11 20.3588C14.35 20.1188 14.6467 19.9992 15 20C15.3542 20 15.6513 20.12 15.8913 20.36C16.1313 20.6 16.2508 20.8967 16.25 21.25C16.25 21.6042 16.13 21.9012 15.89 22.1412C15.65 22.3812 15.3533 22.5008 15 22.5ZM10 22.5C9.64584 22.5 9.34875 22.38 9.10875 22.14C8.86875 21.9 8.74917 21.6033 8.75 21.25C8.75 20.8958 8.87 20.5988 9.11 20.3588C9.35 20.1188 9.64667 19.9992 10 20C10.3542 20 10.6513 20.12 10.8913 20.36C11.1313 20.6 11.2508 20.8967 11.25 21.25C11.25 21.6042 11.13 21.9012 10.89 22.1412C10.65 22.3812 10.3533 22.5008 10 22.5ZM20 22.5C19.6458 22.5 19.3488 22.38 19.1088 22.14C18.8688 21.9 18.7492 21.6033 18.75 21.25C18.75 20.8958 18.87 20.5988 19.11 20.3588C19.35 20.1188 19.6467 19.9992 20 20C20.3542 20 20.6513 20.12 20.8913 20.36C21.1313 20.6 21.2508 20.8967 21.25 21.25C21.25 21.6042 21.13 21.9012 20.89 22.1412C20.65 22.3812 20.3533 22.5008 20 22.5Z"
              fill="black"
            />
          </Svg>
          <TextInput
            style={styles.input}
            placeholder="생년월일"
            value={birth}
            onChangeText={onChangeBirth}
          />
        </View>

        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <Text style={styles.backBtnText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  },
  title: {
    marginTop: 70,
    fontSize: 30,
    marginLeft: 33,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  lineContainer: {
    marginTop: 59,
    flexDirection: "row",
    marginBottom: 44,
  },
  lineColor: {
    width: 68,
    height: 4,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  line: {
    width: 85,
    height: 4,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: GlobalStyles.colors.primary300,
  },
  nameInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E3E3",
    borderRadius: 15,
    width: 350,
    height: 54,
    marginBottom: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E3E3",
    borderRadius: 15,
    width: 350,
    height: 54,
  },

  input: {
    flex: 1,
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputIconLeft: {
    marginLeft: 10,
  },

  backBtn: {
    backgroundColor: GlobalStyles.colors.primary300,
    width: 350,
    height: 59,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 109,
  },
  backBtnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  nextBtn: {
    backgroundColor: GlobalStyles.colors.primary200,
    width: 350,
    height: 59,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 31,
  },
  nextBtnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ChildNameBirth;
