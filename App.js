import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";

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
import MainPage from "./screens/MainPage";

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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "TOGEDU",
            headerTitleStyle: { fontSize: 30, fontFamily: "Arsenal" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
              height: 73,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  style={styles.maindateicon}
                >
                  <Rect
                    x="5.58545"
                    y="10"
                    width="30.2108"
                    height="25"
                    rx="2"
                    stroke="white"
                  />
                  <Path
                    d="M5.58545 14C5.58545 12.1144 5.58545 11.1716 6.17124 10.5858C6.75702 10 7.69983 10 9.58545 10H31.7962C33.6818 10 34.6246 10 35.2104 10.5858C35.7962 11.1716 35.7962 12.1144 35.7962 14V16.6667H5.58545V14Z"
                    fill="white"
                  />
                  <Path
                    d="M12.2988 5L12.2988 10"
                    stroke="white"
                    strokeLinecap="round"
                  />
                  <Path
                    d="M29.0825 5L29.0825 10"
                    stroke="white"
                    strokeLinecap="round"
                  />
                  <Rect
                    x="12.2988"
                    y="20"
                    width="6.71351"
                    height="3.33333"
                    rx="0.5"
                    fill="white"
                  />
                  <Rect
                    x="12.2988"
                    y="26.6667"
                    width="6.71351"
                    height="3.33333"
                    rx="0.5"
                    fill="white"
                  />
                  <Rect
                    x="22.3691"
                    y="20"
                    width="6.7135"
                    height="3.33333"
                    rx="0.5"
                    fill="white"
                  />
                  <Rect
                    x="22.3691"
                    y="26.6667"
                    width="6.7135"
                    height="3.33333"
                    rx="0.5"
                    fill="white"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M25.6833 27.65L18.0499 20L25.6833 12.35L23.3333 10L13.3333 20L23.3333 30L25.6833 27.65Z"
                    fill="#656F77"
                  />
                </Svg>
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
  maindateicon: {
    marginRight: 24,
  },
});
