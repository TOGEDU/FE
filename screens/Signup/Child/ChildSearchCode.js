import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const ChildSearchCode = () => {
  const [text, onChangeText] = useState("");
  const [isValidCode, setIsValidCode] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNext = () => {
    navigation.navigate("ChildNameBirth");
  };
  const handleSearch = () => {
    if (text === "1234") {
      setIsValidCode(true);
    } else {
      setIsValidCode(false);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>부모님을 찾아주세요.</Text>
        <Text style={styles.subtitle}>
          부모님의 계정에서 고유 코드를 {"\n"}찾을 수 있습니다.
        </Text>
        <View style={styles.lineContainer}>
          <View style={styles.lineColor}></View>
          <View style={styles.lineColor}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
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
            placeholder="고유 코드"
            value={text}
            onChangeText={onChangeText}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              style={styles.inputIconRight}
            >
              <Path
                d="M24.5 26.25L16.625 18.375C16 18.875 15.2812 19.2708 14.4688 19.5625C13.6562 19.8542 12.7917 20 11.875 20C9.60417 20 7.6825 19.2133 6.11 17.64C4.5375 16.0667 3.75083 14.145 3.75 11.875C3.75 9.60417 4.53667 7.6825 6.11 6.11C7.68333 4.5375 9.605 3.75083 11.875 3.75C14.1458 3.75 16.0679 4.53667 17.6412 6.11C19.2146 7.68333 20.0008 9.605 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4688C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7658 16.9533 15.86 15.86C16.9542 14.7667 17.5008 13.4383 17.5 11.875C17.5 10.3125 16.9533 8.98458 15.86 7.89125C14.7667 6.79792 13.4383 6.25083 11.875 6.25C10.3125 6.25 8.98458 6.79708 7.89125 7.89125C6.79792 8.98542 6.25083 10.3133 6.25 11.875C6.25 13.4375 6.79708 14.7658 7.89125 15.86C8.98542 16.9542 10.3133 17.5008 11.875 17.5Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        {isValidCode !== null && text.trim() !== "" && (
          <View style={styles.validContainer}>
            <Text style={styles.validText}>
              {isValidCode ? "확인되었습니다." : "유효하지 않은 코드입니다."}
            </Text>
            {isValidCode ? (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <G clip-path="url(#clip0_176_4540)">
                  <Path
                    d="M9.5 0C10.3721 0 11.2132 0.111328 12.0234 0.333984C12.8337 0.556641 13.5882 0.878255 14.2871 1.29883C14.986 1.7194 15.6261 2.21419 16.2075 2.7832C16.7889 3.35221 17.2868 3.99235 17.7012 4.70361C18.1156 5.41488 18.4341 6.17253 18.6567 6.97656C18.8794 7.7806 18.9938 8.62175 19 9.5C19 10.3721 18.8887 11.2132 18.666 12.0234C18.4434 12.8337 18.1217 13.5882 17.7012 14.2871C17.2806 14.986 16.7858 15.6261 16.2168 16.2075C15.6478 16.7889 15.0076 17.2868 14.2964 17.7012C13.5851 18.1156 12.8275 18.4341 12.0234 18.6567C11.2194 18.8794 10.3783 18.9938 9.5 19C8.62793 19 7.78678 18.8887 6.97656 18.666C6.16634 18.4434 5.41178 18.1217 4.71289 17.7012C4.014 17.2806 3.37386 16.7858 2.79248 16.2168C2.2111 15.6478 1.71322 15.0076 1.29883 14.2964C0.88444 13.5851 0.565918 12.8275 0.343262 12.0234C0.120605 11.2194 0.0061849 10.3783 0 9.5C0 8.62793 0.111328 7.78678 0.333984 6.97656C0.556641 6.16634 0.878255 5.41178 1.29883 4.71289C1.7194 4.014 2.21419 3.37386 2.7832 2.79248C3.35221 2.2111 3.99235 1.71322 4.70361 1.29883C5.41488 0.88444 6.17253 0.565918 6.97656 0.343262C7.7806 0.120605 8.62175 0.0061849 9.5 0ZM15.0942 6.35498L13.8325 5.09326L7.71875 11.207L5.16748 8.65576L3.90576 9.91748L7.71875 13.7305L15.0942 6.35498Z"
                    fill="#4ECB71"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_176_4540">
                    <Rect width="19" height="19" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            ) : (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <Path
                  d="M9.5 0C14.7469 0 19 4.25315 19 9.5C19 14.7469 14.7469 19 9.5 19C4.25315 19 0 14.7469 0 9.5C0 4.25315 4.25315 0 9.5 0ZM12.92 4.94C12.8202 4.86515 12.7066 4.81068 12.5858 4.77972C12.4649 4.74876 12.3392 4.7419 12.2156 4.75955C12.0921 4.77719 11.9733 4.81899 11.866 4.88255C11.7586 4.94611 11.6649 5.0302 11.59 5.13L9.5 7.91635L7.41 5.13C7.33515 5.0302 7.24137 4.94611 7.13402 4.88255C7.02667 4.81899 6.90785 4.77719 6.78435 4.75955C6.66085 4.7419 6.53508 4.74876 6.41423 4.77972C6.29338 4.81068 6.1798 4.86515 6.08 4.94C5.9802 5.01485 5.89611 5.10863 5.83255 5.21598C5.76899 5.32333 5.72719 5.44215 5.70955 5.56565C5.69191 5.68915 5.69876 5.81492 5.72972 5.93577C5.76068 6.05662 5.81515 6.1702 5.89 6.27L8.3125 9.5L5.89 12.73C5.73883 12.9316 5.67392 13.1849 5.70955 13.4344C5.74518 13.6838 5.87844 13.9088 6.08 14.06C6.28156 14.2112 6.53493 14.2761 6.78435 14.2405C7.03377 14.2048 7.25883 14.0716 7.41 13.87L9.5 11.0836L11.59 13.87C11.7412 14.0716 11.9662 14.2048 12.2156 14.2405C12.4651 14.2761 12.7184 14.2112 12.92 14.06C13.1216 13.9088 13.2548 13.6838 13.2905 13.4344C13.3261 13.1849 13.2612 12.9316 13.11 12.73L10.6875 9.5L13.11 6.27C13.1849 6.1702 13.2393 6.05662 13.2703 5.93577C13.3012 5.81492 13.3081 5.68915 13.2905 5.56565C13.2728 5.44215 13.231 5.32333 13.1675 5.21598C13.1039 5.10863 13.0198 5.01485 12.92 4.94Z"
                  fill="#F24E1E"
                />
              </Svg>
            )}
          </View>
        )}
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
  subtitle: {
    fontSize: 20,
    marginTop: 23,
    textAlign: "center",
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: 33,
  },
  lineContainer: {
    marginTop: 23,
    flexDirection: "row",
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 44,
    backgroundColor: "#E3E3E3",
    borderRadius: 15,
    width: 350,
    height: 54,
    position: "relative",
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
  inputIconRight: {
    marginRight: 10,
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
  validContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 30,
    bottom: 415,
  },
  validText: {
    marginRight: 5,
    fontSize: 16,
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

export default ChildSearchCode;
