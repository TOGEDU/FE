import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Signup() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>회원가입</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.parentBtn]}>
            <Text style={styles.buttonText}>부모로{"\n"}가입하기</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/signupparent1.png")}
                style={styles.image}
              />
              <Image
                source={require("../../assets/signupparent2.png")}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.childBtn]}>
            <Text style={styles.buttonText}>자식으로{"\n"}가입하기</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/signupchild1.png")}
                style={styles.image}
              />
              <Image
                source={require("../../assets/signupchild2.png")}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
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
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: -137,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 171,
    height: 292,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  parentBtn: {
    backgroundColor: GlobalStyles.colors.primary100,
  },
  childBtn: {
    backgroundColor: GlobalStyles.colors.primary200,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    lineHeight: 43.5,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  image: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
  },
});

export default Signup;
