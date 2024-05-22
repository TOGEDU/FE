import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStyles } from "./constants/styles";
import ParentSignup from "./screens/Signup/Parent/ParentSignup";
import ParentSearchCode from "./screens/Signup/Parent/ParentSearchCode";
import ParentIdPw from "./screens/Signup/Parent/ParentIdPw";
import ParentChildInfo from "./screens/Signup/Parent/ParentChildInfo";
import ParentPush from "./screens/Signup/Parent/ParentPush";
import SignupFinish from "./screens/Signup/SignupFinish";
import ChildSignup from "./screens/Signup/Child/ChildSignup";
import ChildSearchCode from "./screens/Signup/Child/ChildSearchCode";
import ChildNameBirth from "./screens/Signup/Child/ChildNameBirth";
import ChildIdPw from "./screens/Signup/Child/ChildIdPw";

const arrowLeftImage = require("./assets/arrow-left.png");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.topSafeArea}>
        <StatusBar
          backgroundCorlor={GlobalStyles.colors.primary100}
          style="dark"
        />
      </SafeAreaView>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "TOGEDU",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ParentSignup"
          component={ParentSignup}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ParentSearchCode"
          component={ParentSearchCode}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ParentIdPw"
          component={ParentIdPw}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ParentChildInfo"
          component={ParentChildInfo}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ParentPush"
          component={ParentPush}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SignupFinish"
          component={SignupFinish}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChildSignup"
          component={ChildSignup}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChildSearchCode"
          component={ChildSearchCode}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChildNameBirth"
          component={ChildNameBirth}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChildIdPw"
          component={ChildIdPw}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "회원가입",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeftContainer}
                onPress={() => navigation.goBack()}
              >
                <Image source={arrowLeftImage} style={styles.arrowLeftImage} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: GlobalStyles.colors.primary100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLeftContainer: {
    paddingLeft: 20,
  },
  arrowLeftImage: {
    width: 40,
    height: 40,
  },
});
