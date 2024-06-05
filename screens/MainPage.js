import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Svg, {
  Path,
  LinearGradient,
  Circle,
  Stop,
  Defs,
  FeBlend,
  FeColorMatrix,
  FeGaussianBlur,
  Filter,
  FeFlood,
  FeOffset,
  G,
  FeComposite,
} from "react-native-svg";
import minilogo from "../assets/minilogo.png";

function MainPage({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("TodayQuestion");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.subTitle}>2024년 03월 18일 (월요일)</Text>
        <View style={styles.box}>
          <Image style={styles.img} source={minilogo} />
          <Text style={styles.boxText}>똑똑! 투게두가 보내는 오늘의 질문</Text>
        </View>
        <TouchableOpacity style={styles.qbox} onPress={handleNavigate}>
          <Text style={styles.qboxText}>어쩌구저쩌구</Text>
        </TouchableOpacity>
        <View style={styles.miniboxContainer}>
          <View style={styles.minibox}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="48"
              viewBox="0 0 47 48"
              fill="none"
              style={styles.minisvg}
            >
              <Circle
                cx="23.5"
                cy="23.6238"
                r="23.5"
                fill="url(#paint0_linear_176_6357)"
                fillOpacity="0.15"
              />
              <Path
                d="M22.9114 34.1373V27.0313H18.7768C18.2017 27.0313 17.8131 26.3447 18.0929 25.7783L23.8129 13.4716C24.1705 12.6648 25.2741 12.9566 25.2741 13.8663V21.0581H29.2222C29.7973 21.0581 30.1703 21.7276 29.9216 22.294L24.3881 34.5149C24.015 35.3388 22.9114 35.047 22.9114 34.1373Z"
                fill="url(#paint1_linear_176_6357)"
              />
              <Defs>
                <LinearGradient
                  id="paint0_linear_176_6357"
                  x1="5.875"
                  y1="0.123765"
                  x2="41.125"
                  y2="47.1238"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#FFBF1A" />
                  <Stop offset="1" stopColor="#FF4080" />
                </LinearGradient>
                <LinearGradient
                  id="paint1_linear_176_6357"
                  x1="19.5"
                  y1="13"
                  x2="35.8514"
                  y2="24.8919"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#FFBF1A" />
                  <Stop offset="1" stopColor="#FF4080" />
                </LinearGradient>
              </Defs>
            </Svg>
            <View>
              <Text style={styles.minitext1}>8일</Text>
              <Text style={styles.minitext2}>연속 답변 성공</Text>
            </View>
          </View>
          <View style={styles.minibox}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              style={styles.minisvg}
            >
              <Path
                d="M47 23.5C47 36.4787 36.4787 47 23.5 47C10.5213 47 0 36.4787 0 23.5C0 10.5213 10.5213 0 23.5 0C36.4787 0 47 10.5213 47 23.5Z"
                fill="url(#paint0_linear_176_6335)"
                fillOpacity="0.15"
              />
              <Defs>
                <LinearGradient
                  id="paint0_linear_176_6335"
                  x1="39.715"
                  y1="25.4583"
                  x2="6.815"
                  y2="25.4583"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#2FEA9B" />
                  <Stop offset="1" stopColor="#7FDD53" />
                </LinearGradient>
              </Defs>
            </Svg>
            <View>
              <Text style={styles.minitext1}>44%</Text>
              <Text style={styles.minitext2}>음성 기록 현황</Text>
            </View>
          </View>
        </View>
        <View style={styles.miniboxContainer}>
          <View style={styles.minibox}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              style={styles.minisvg}
            >
              <Circle cx="23.5" cy="23.5" r="23.5" fill="#E7E5FF" />
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <Path
                  d="M4.05 17.7779H0.9C0.405 17.7779 0 17.3334 0 16.7902V6.91361C0 6.3704 0.405 5.92595 0.9 5.92595H4.05C4.545 5.92595 4.95 6.3704 4.95 6.91361V16.7902C4.95 17.3334 4.545 17.7779 4.05 17.7779ZM10.575 0H7.425C6.93 0 6.525 0.444446 6.525 0.987659V16.7902C6.525 17.3334 6.93 17.7779 7.425 17.7779H10.575C11.07 17.7779 11.475 17.3334 11.475 16.7902V0.987659C11.475 0.444446 11.07 0 10.575 0ZM17.1 7.90127H13.95C13.455 7.90127 13.05 8.34572 13.05 8.88893V16.7902C13.05 17.3334 13.455 17.7779 13.95 17.7779H17.1C17.595 17.7779 18 17.3334 18 16.7902V8.88893C18 8.34572 17.595 7.90127 17.1 7.90127Z"
                  fill="url(#paint0_linear_182_3927)"
                />
                <Defs>
                  <LinearGradient
                    id="paint0_linear_182_3927"
                    x1="9"
                    y1="0"
                    x2="9"
                    y2="17.7779"
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#967CFD" />
                    <Stop offset="1" stopColor="#3177FF" />
                  </LinearGradient>
                </Defs>
              </Svg>
            </Svg>
            <View>
              <Text style={styles.minitext1}>상위 20%</Text>
              <Text style={styles.minitext2}>데이터 보유량</Text>
            </View>
          </View>
          <View style={styles.minibox}>
            {/* <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="132"
              height="131"
              viewBox="0 0 132 131"
              fill="none"
              style={styles.minisvg}
            >
              <Circle
                cx="23.5"
                cy="23.6238"
                r="23.5"
                fill="url(#paint0_linear_176_6357)"
                fillOpacity="0.15"
              />
              <Circle
                cx="65.5"
                cy="60.5"
                r="23.5"
                stroke="url(#paint1_linear_176_6414)"
              />

              <Path
                d="M66.0632 65.5777L69.9738 67.8825C70.69 68.3049 71.5663 67.6805 71.3778 66.8908L70.3413 62.5566L73.7996 59.6366C74.4309 59.104 74.0917 58.094 73.2624 58.0297L68.7111 57.6532L66.9302 53.5578C66.6098 52.8141 65.5167 52.8141 65.1963 53.5578L63.4154 57.644L58.8641 58.0205C58.0348 58.0848 57.6956 59.0949 58.3269 59.6274L61.7852 62.5475L60.7487 66.8816C60.5602 67.6713 61.4365 68.2957 62.1527 67.8733L66.0632 65.5777Z"
                fill="url(#paint2_linear_176_6414)"
              />

              <Defs>
                <LinearGradient
                  id="paint0_linear_176_6414"
                  x1="65.5"
                  y1="37"
                  x2="116.005"
                  y2="107.231"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#FFCE51" />
                  <Stop offset="1" stopColor="#CB9F03" />
                </LinearGradient>
                <LinearGradient
                  id="paint1_linear_176_6414"
                  x1="65.5"
                  y1="37"
                  x2="65.5"
                  y2="84"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#FFCE51" />
                  <Stop offset="1" stopColor="#FEE71C" />
                </LinearGradient>
                <LinearGradient
                  id="paint2_linear_176_6414"
                  x1="66.0632"
                  y1="53"
                  x2="66.0632"
                  y2="68.0187"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#FFAF51" />
                  <Stop offset="1" stopColor="#FFD914" />
                </LinearGradient>
              </Defs>
            </Svg> */}

            <View>
              <Text style={styles.minitext1}>20개</Text>
              <Text style={styles.minitext2}>자녀를 위한 일기</Text>
            </View>
          </View>
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "flex-start",
  },
  subTitle: {
    fontSize: 20,
    color: "#5B5858",
    marginTop: 13,
    alignSelf: "flex-start",
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
    fontSize: 20,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  qbox: {
    width: 350,
    height: 140,
    borderRadius: 15,
    shadowColor: "rgba(166, 166, 166, 0.35)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
    backgroundColor: "#fff",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  qboxText: {
    fontSize: 20,
    letterSpacing: -0.4,
  },
  miniboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 359,
    marginTop: 23,
  },
  minibox: {
    width: 170,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
    shadowColor: "rgba(166, 171, 189, 0.25)",
    shadowOffset: { width: 2.296, height: 2.296 },
    shadowOpacity: 1,
    shadowRadius: 17.222,
    backgroundColor: "#fff",
    elevation: 5,
  },
  minisvg: {
    marginRight: 11,
  },

  minitext1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  minitext2: {
    fontSize: 13,
    color: "#9098A3",
    fontWeight: "bold",
  },
});

export default MainPage;
