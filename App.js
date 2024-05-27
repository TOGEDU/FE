import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  View,
  Text,
} from "react-native";
import Svg, {
  Path,
  G,
  ClipPath,
  LinearGradient,
  Circle,
  Rect,
  Stop,
  Defs,
} from "react-native-svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
import DiaryScreen from "./screens/DiaryScreen";
import VoiceScreen from "./screens/VoiceScreen";
import MyPageScreen from "./screens/MyPageScreen";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function HomeIcon({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0622 21.3837H15.9372V15.2475H14.0622V21.3837ZM14.9997 2.50748L1.09473 14.4225L2.31598 15.8462L4.49098 13.9825V27.4925H25.5122V13.985L27.6835 15.8462L28.9047 14.4225L14.9997 2.50748Z"
        fill={color}
      />
    </Svg>
  );
}

function DiaryIcon({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      style={styles.diaryIcon}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0044 9.84998L19.9969 2.84248L2.99561 19.8437L3.00186 26.845H3.00936V27.1562L26.2106 27.1575V25.2825H11.5719L27.0044 9.84998Z"
        fill={color}
      />
    </Svg>
  );
}

function VoiceIcon({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      style={styles.voiceIcon}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6941 15.7812H26.5691V8.41875H24.6941V15.7812Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.43164 15.7812H5.30664V8.41875H3.43164V15.7812Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.001 2.34375C11.7023 2.34375 9.01851 5.03875 9.01851 8.35V15.8512C9.01851 18.84 11.2123 21.305 14.0635 21.7612V25.7812H10.6623V27.6562H19.3373V25.7812H15.9385V21.7612C18.7898 21.305 20.9835 18.84 20.9835 15.8512V8.35C20.9835 5.03875 18.2998 2.34375 15.001 2.34375Z"
        fill={color}
      />
    </Svg>
  );
}

function MyPageIcon({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3994 24.2389C23.1294 20.2227 19.7169 17.9214 15.0331 17.9214H14.9994C10.3031 17.8952 6.87312 20.2127 5.60063 24.2389L5.45312 24.7064L5.87062 24.9614C8.31813 26.4539 11.3706 27.2102 14.9406 27.2102C14.9806 27.2102 15.0206 27.2102 15.0594 27.2102C18.6794 27.2102 21.6469 26.4739 24.1294 24.9614L24.5469 24.7064L24.3994 24.2389Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 15.1362C18.4038 15.1362 21.1738 12.3674 21.1738 8.96367C21.1738 5.55867 18.4038 2.78992 15 2.78992C11.5963 2.78992 8.82753 5.55867 8.82753 8.96367C8.82753 12.3674 11.5963 15.1362 15 15.1362Z"
        fill={color}
      />
    </Svg>
  );
}
function FloatingActionButton({ onPress, isOpen }) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Ionicons name={isOpen ? "close" : "add"} size={30} color="white" />
    </TouchableOpacity>
  );
}

function MenuItem({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.menuItem, style]} onPress={onPress}>
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  );
}

function BottomTabNavigator() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <BottomTabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 96,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderTopWidth: 1,
            borderTopColor: "#C4C4C4",
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ focused }) => {
            let color = focused ? "#79B669" : "#C4C4C4";

            if (route.name === "홈") {
              return <HomeIcon color={color} />;
            } else if (route.name === "일기 기록") {
              return <DiaryIcon color={color} />;
            } else if (route.name === "음성 기록") {
              return <VoiceIcon color={color} />;
            } else if (route.name === "마이 페이지") {
              return <MyPageIcon color={color} />;
            }
          },
          tabBarActiveTintColor: "#79B669",
          tabBarInactiveTintColor: "#C4C4C4",
        })}
      >
        <BottomTabs.Screen name="홈" component={MainPage} />
        <BottomTabs.Screen
          name="일기 기록"
          component={DiaryScreen}
          options={{ tabBarLabelStyle: { marginRight: 40 } }}
        />
        <BottomTabs.Screen
          name="음성 기록"
          component={VoiceScreen}
          options={{ tabBarLabelStyle: { marginLeft: 40 } }}
        />
        <BottomTabs.Screen name="마이 페이지" component={MyPageScreen} />
      </BottomTabs.Navigator>
      <FloatingActionButton
        onPress={() => setMenuOpen(!isMenuOpen)}
        isOpen={isMenuOpen}
      />
      <Modal
        visible={isMenuOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setMenuOpen(false)}
        >
          <View style={styles.menuContainer}>
            <MenuItem
              title="오늘의 질문"
              onPress={() => console.log("오늘의 질문")}
              style={styles.firstMenuItem}
            />
            <MenuItem
              title="TTS 녹음"
              onPress={() => console.log("TTS 녹음")}
            />
            <MenuItem
              title="육아 일기"
              onPress={() => console.log("육아 일기")}
              style={styles.lastMenuItem}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

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
          component={BottomTabNavigator}
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
  diaryIcon: {
    marginRight: 40,
  },
  voiceIcon: {
    marginLeft: 40,
  },
  fab: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    backgroundColor: "#79B669",
    width: 55,
    height: 55,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: 200,
  },
  menuItem: {
    paddingVertical: 15,
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
  firstMenuItem: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  lastMenuItem: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
