import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
export default function MainPage() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}></View>
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
});
