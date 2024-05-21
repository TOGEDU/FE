import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalStyles } from "./constants/styles";
import ParentSignup from "./screens/Signup/Parent/ParentSignup";
import ChildSignup from "./screens/Signup/Child/ChildSignup";

const arrowLeftImage = require("./assets/arrow-left.png");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundCorlor={GlobalStyles.colors.primary100}
        style="dark"
      />
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
              height: 100,
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
              height: 100,
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
              height: 100,
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
