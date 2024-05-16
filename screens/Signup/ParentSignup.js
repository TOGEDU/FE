import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Svg, { Path } from "react-native-svg";

function ParentSignup() {
  const [isChecked, setIsChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState({
    serviceTerms: false,
    privacyPolicy: false,
    marketingConsent: false,
    additionalTerms: false,
  });

  const handleCheck = () => {
    setIsChecked(!isChecked);
    setTermsChecked({
      serviceTerms: !isChecked,
      privacyPolicy: !isChecked,
      marketingConsent: !isChecked,
      additionalTerms: !isChecked,
    });
  };

  const handleNext = () => {
    // 다음으로 진행하는 함수를 구현하세요
  };
  const handleTermsClick = (term) => {
    setTermsChecked((prevTermsChecked) => ({
      ...prevTermsChecked,
      [term]: !prevTermsChecked[term],
    }));
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          환영합니다!{"\n"}TOGEDU에 가입하시려면{"\n"}약관에 동의해 주세요.
        </Text>
        <View style={styles.lineContainer}>
          <View style={styles.lineColor}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity onPress={handleCheck} style={styles.agree}>
          <View
            style={[
              styles.radioButton,
              isChecked && { backgroundColor: GlobalStyles.colors.primary100 },
            ]}
          >
            {isChecked && (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <Path
                  opacity="0.2"
                  d="M25.1563 17.5C25.1563 19.0143 24.7072 20.4945 23.8659 21.7536C23.0247 23.0126 21.8289 23.994 20.4299 24.5735C19.0309 25.1529 17.4915 25.3046 16.0063 25.0091C14.5212 24.7137 13.157 23.9845 12.0862 22.9138C11.0155 21.843 10.2863 20.4788 9.99087 18.9937C9.69545 17.5085 9.84707 15.9691 10.4266 14.5701C11.006 13.1711 11.9874 11.9753 13.2464 11.1341C14.5055 10.2928 15.9857 9.84375 17.5 9.84375C19.5306 9.84375 21.478 10.6504 22.9138 12.0862C24.3496 13.522 25.1563 15.4694 25.1563 17.5Z"
                  fill="#525252"
                />
                <Path
                  d="M17.5 3.28125C14.6878 3.28125 11.9388 4.11517 9.60049 5.67754C7.26223 7.23992 5.43978 9.46058 4.36359 12.0587C3.28741 14.6569 3.00583 17.5158 3.55447 20.2739C4.1031 23.0321 5.4573 25.5656 7.44583 27.5542C9.43436 29.5427 11.9679 30.8969 14.7261 31.4455C17.4842 31.9942 20.3431 31.7126 22.9413 30.6364C25.5394 29.5602 27.7601 27.7378 29.3225 25.3995C30.8848 23.0613 31.7188 20.3122 31.7188 17.5C31.7148 13.7302 30.2155 10.1159 27.5498 7.45022C24.8841 4.78455 21.2698 3.28523 17.5 3.28125ZM17.5 29.5312C15.1205 29.5312 12.7943 28.8256 10.8158 27.5036C8.83727 26.1816 7.2952 24.3026 6.38458 22.1042C5.47396 19.9057 5.2357 17.4867 5.69993 15.1528C6.16416 12.819 7.31003 10.6752 8.99263 8.99262C10.6752 7.31002 12.819 6.16416 15.1528 5.69993C17.4867 5.2357 19.9057 5.47396 22.1042 6.38457C24.3026 7.29519 26.1816 8.83727 27.5036 10.8158C28.8256 12.7943 29.5313 15.1204 29.5313 17.5C29.5276 20.6898 28.2589 23.7479 26.0034 26.0034C23.7479 28.2589 20.6898 29.5276 17.5 29.5312ZM17.5 8.75C15.7694 8.75 14.0777 9.26318 12.6388 10.2246C11.1998 11.1861 10.0783 12.5527 9.41606 14.1515C8.75379 15.7504 8.58051 17.5097 8.91814 19.207C9.25576 20.9044 10.0891 22.4635 11.3128 23.6872C12.5365 24.9109 14.0956 25.7443 15.793 26.0819C17.4903 26.4195 19.2496 26.2462 20.8485 25.5839C22.4473 24.9217 23.8139 23.8002 24.7754 22.3612C25.7368 20.9223 26.25 19.2306 26.25 17.5C26.2475 15.1801 25.3248 12.956 23.6844 11.3156C22.044 9.67522 19.8199 8.75253 17.5 8.75ZM17.5 24.0625C16.2021 24.0625 14.9333 23.6776 13.8541 22.9565C12.7749 22.2354 11.9337 21.2105 11.437 20.0114C10.9403 18.8122 10.8104 17.4927 11.0636 16.2197C11.3168 14.9467 11.9418 13.7774 12.8596 12.8596C13.7774 11.9418 14.9467 11.3168 16.2197 11.0636C17.4927 10.8104 18.8122 10.9403 20.0114 11.437C21.2105 11.9337 22.2354 12.7749 22.9565 13.8541C23.6776 14.9333 24.0625 16.2021 24.0625 17.5C24.0607 19.2399 23.3687 20.9081 22.1384 22.1384C20.9081 23.3687 19.2399 24.0607 17.5 24.0625Z"
                  fill="#525252"
                />
              </Svg>
            )}
          </View>
          <Text style={styles.agreeText}>
            약관 전체 동의하기 (선택 동의 포함)
          </Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => handleTermsClick("privacyPolicy")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill={
                termsChecked.privacyPolicy
                  ? GlobalStyles.colors.primary100
                  : "#7D7C7C"
              }
            >
              <Path
                d="M9.948 18.75L4.0105 12.8125L5.49487 11.3281L9.948 15.7812L19.5053 6.22394L20.9897 7.70831L9.948 18.75Z"
                fill={
                  termsChecked.privacyPolicy
                    ? GlobalStyles.colors.primary100
                    : "#7D7C7C"
                }
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.text}>[필수] TOGEDU 이용 약관</Text>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => handleTermsClick("marketingConsent")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill={
                termsChecked.marketingConsent
                  ? GlobalStyles.colors.primary100
                  : "#7D7C7C"
              }
            >
              <Path
                d="M9.948 18.75L4.0105 12.8125L5.49487 11.3281L9.948 15.7812L19.5053 6.22394L20.9897 7.70831L9.948 18.75Z"
                fill={
                  termsChecked.marketingConsent
                    ? GlobalStyles.colors.primary100
                    : "#7D7C7C"
                }
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.text}>[필수] 개인정보 수집 및 이용 동의</Text>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => handleTermsClick("additionalTerms")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill={
                termsChecked.additionalTerms
                  ? GlobalStyles.colors.primary100
                  : "#7D7C7C"
              }
            >
              <Path
                d="M9.948 18.75L4.0105 12.8125L5.49487 11.3281L9.948 15.7812L19.5053 6.22394L20.9897 7.70831L9.948 18.75Z"
                fill={
                  termsChecked.additionalTerms
                    ? GlobalStyles.colors.primary100
                    : "#7D7C7C"
                }
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.text}>[선택] 광고성 정보 수신 동의</Text>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => handleTermsClick("serviceTerms")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill={
                termsChecked.serviceTerms
                  ? GlobalStyles.colors.primary100
                  : "#7D7C7C"
              }
            >
              <Path
                d="M9.948 18.75L4.0105 12.8125L5.49487 11.3281L9.948 15.7812L19.5053 6.22394L20.9897 7.70831L9.948 18.75Z"
                fill={
                  termsChecked.serviceTerms
                    ? GlobalStyles.colors.primary100
                    : "#7D7C7C"
                }
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.text}>[선택] 개인정보 수집 및 이용 동의</Text>
        </View>
        <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>다음</Text>
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
  },
  title: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold",
  },
  lineContainer: {
    marginTop: 23,
    flexDirection: "row",
  },
  lineColor: {
    width: 85,
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
  agree: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 42,
    marginBottom: 28,
  },
  radioButton: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary100,
    justifyContent: "center",
    alignItems: "center",
  },
  agreeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 9,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 16,
    marginLeft: 40,
  },
  text: {
    fontSize: 15,
    marginLeft: 11,
  },
  nextBtn: {
    backgroundColor: GlobalStyles.colors.primary200,
    width: 350,
    height: 59,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
  },
  nextBtnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
});
export default ParentSignup;
