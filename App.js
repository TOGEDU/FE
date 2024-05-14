import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundCorlor="#79B669" style="dark-" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#79B669" },
          }}
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
});
