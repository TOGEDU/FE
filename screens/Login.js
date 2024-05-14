import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LOGO from "../assets/logo1.png";

export default function Login() {
  const navigation = useNavigation();

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />

      <Text style={styles.logintitle}>로그인</Text>

      <TextInput
        style={styles.input}
        placeholder="아이디"
        // onChangeText={handleChangeUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
        // onChangeText={handleChangePassword}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        아직 계정이 없다면
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.signupLink}>회원가입</Text>
        </TouchableOpacity>
        해주세요.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    width: 333,
    height: 253.382,
    marginTop: 120,
  },
  logintitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 17,
    marginTop: 50,
    alignSelf: "flex-start",
    marginLeft: 14,
  },
  input: {
    width: 341,
    height: 63,
    borderRadius: 15,
    fontSize: 16,
    color: "#989797",
    backgroundColor: "#D9D9D9",
    padding: 23,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#79B669",
    borderRadius: 15,
    width: 336,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 153,
    marginTop: 37,
    fontWeight: "bold",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    fontWeight: 500,
  },
  signupText: {
    position: "absolute",
    marginTop: 20,
    bottom: 55,
    fontSize: 15,
    fontWeight: "bold",
    color: "#949494",
  },
  signupLink: {
    color: "#79B669",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
});
