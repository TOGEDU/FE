import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Signup() {
  return (
    <View style={styles.container}>
      <Text>회원가입 페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Signup;
