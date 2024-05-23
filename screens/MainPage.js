import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { GlobalStyles } from "../constants/styles";

import minilogo from "../assets/minilogo.png";

export default function MainPage() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.subTitle}>2024년 03월 18일 (월요일)</Text>
        <View style={styles.box}>
          <Image style={styles.img} source={minilogo} />
          <Text style={styles.boxText}>똑똑! 투게두가 보내는 오늘의 질문</Text>
        </View>
        <View style={styles.qbox}>
          <Text style={styles.qboxText}>어쩌구저쩌구</Text>
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
    height: 195,
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
});
