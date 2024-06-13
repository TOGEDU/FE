import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import VoiceScreen from "./screens/VoiceRecording/VoiceScreen";
import ProgressBar from "./screens/VoiceRecording/ProgressBar";
import RecordingScreen from "./screens/VoiceRecording/RecordingScreen";
import CompletedRecordingsScreen from "./screens/VoiceRecording/CompletedRecordingsScreen";
import MyPageScreen from "./screens/MyPageScreen";
import TodayQuestion from "./screens/TodayQuestion";
import TodayQuestionFinish from "./screens/TodayQuestionFinish";
import ChildChat from "./screens/ChildChat";
import TodayQuestionList from "./screens/TodayQuestionList";

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

function BottomTabNavigator() {
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
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white",
        })}
      >
        <BottomTabs.Screen name="홈" component={MainPage} />
        <BottomTabs.Screen name="일기 기록" component={DiaryScreen} />
        <BottomTabs.Screen name="음성 기록" component={VoiceScreen} />
        <BottomTabs.Screen name="마이 페이지" component={MyPageScreen} />
      </BottomTabs.Navigator>
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
          name="ChildChat"
          component={ChildChat}
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
              <TouchableOpacity>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    d="M26.6668 8.3335L14.0501 19.3735C13.9609 19.4517 13.8894 19.5481 13.8404 19.6561C13.7915 19.7642 13.7661 19.8815 13.7661 20.0002C13.7661 20.1188 13.7915 20.2361 13.8404 20.3442C13.8894 20.4523 13.9609 20.5486 14.0501 20.6268L26.6668 31.6668"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5838 19.512C14.5838 22.4258 17.0138 24.7965 20.0005 24.7965C22.9872 24.7965 25.4172 22.4258 25.4172 19.512C25.4172 16.5982 22.9872 14.2274 20.0005 14.2274C17.0138 14.2274 14.5838 16.5982 14.5838 19.512ZM17.0838 19.512C17.0838 17.9429 18.3922 16.6664 20.0005 16.6664C21.6088 16.6664 22.9172 17.9429 22.9172 19.512C22.9172 21.0811 21.6088 22.3575 20.0005 22.3575C18.3922 22.3575 17.0838 21.0811 17.0838 19.512Z"
                    fill="white"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6247 30.9075C14.6247 33.8148 17.0363 36.179 19.9997 36.179C22.963 36.179 25.3747 33.8148 25.3747 30.9075C25.3747 30.2197 25.8413 29.8831 26.043 29.7693C26.2413 29.6603 26.7597 29.4408 27.353 29.7742C28.5947 30.4799 30.0413 30.6652 31.428 30.3042C32.818 29.94 33.9797 29.0652 34.698 27.8425C36.1763 25.3286 35.293 22.101 32.7313 20.6473C32.133 20.3059 32.068 19.74 32.068 19.5124C32.068 19.2847 32.133 18.7189 32.733 18.379C35.293 16.927 36.1747 13.6994 34.698 11.1823C33.978 9.9579 32.8163 9.08473 31.4263 8.7205C30.0397 8.36278 28.5947 8.54977 27.3547 9.25221C26.7613 9.58554 26.238 9.3644 26.043 9.25383C25.8413 9.14164 25.3747 8.80505 25.3747 8.11725C25.3747 5.20993 22.963 2.8457 19.9997 2.8457C17.0363 2.8457 14.6247 5.20993 14.6247 8.11725C14.6247 8.80505 14.158 9.14164 13.9563 9.25383C13.7597 9.36928 13.238 9.58717 12.648 9.25221C11.4063 8.54977 9.96133 8.36278 8.573 8.7205C7.183 9.08473 6.02133 9.9579 5.30133 11.1823C3.82466 13.6994 4.70633 16.927 7.26633 18.379C7.86633 18.7189 7.92966 19.2847 7.92966 19.5124C7.92966 19.7384 7.86633 20.3059 7.26633 20.6457C4.70633 22.101 3.82466 25.3286 5.30133 27.8425C6.01966 29.0652 7.18133 29.9384 8.57133 30.3042C9.95633 30.6652 11.4047 30.4782 12.6497 29.7725C13.238 29.4392 13.7597 29.6603 13.9563 29.7693C14.1563 29.8831 14.6247 30.2197 14.6247 30.9075ZM15.2013 27.6571C14.608 27.3238 13.9563 27.1563 13.3047 27.1563C12.6463 27.1563 11.9897 27.3254 11.3913 27.6652C10.728 28.0392 9.95633 28.14 9.21966 27.9465C8.478 27.753 7.85466 27.2847 7.47133 26.6294C6.673 25.275 7.14633 23.5351 8.52466 22.7546C9.718 22.0766 10.4297 20.8636 10.4297 19.5124C10.4297 18.1612 9.718 16.9481 8.523 16.2701C7.148 15.488 6.67466 13.7514 7.46966 12.3953C7.85466 11.74 8.478 11.2701 9.21966 11.0766C9.95966 10.888 10.7297 10.9872 11.393 11.3612C12.5847 12.0376 14.0097 12.0392 15.203 11.3693C16.4063 10.6929 17.1247 9.47822 17.1247 8.11725C17.1247 6.55465 18.4147 5.28473 19.9997 5.28473C21.5847 5.28473 22.8747 6.55465 22.8747 8.11725C22.8747 9.4766 23.5913 10.6912 24.7947 11.3677C25.9897 12.0392 27.4147 12.0343 28.6097 11.3612C29.2713 10.9872 30.0397 10.8847 30.7797 11.0766C31.523 11.2701 32.1447 11.74 32.5297 12.3953C33.3247 13.7514 32.853 15.4896 31.4747 16.2701C30.2813 16.9481 29.5697 18.1612 29.5697 19.5124C29.5697 20.8636 30.2813 22.0766 31.4747 22.7546C32.853 23.5351 33.3263 25.275 32.5297 26.6294C32.1447 27.2847 31.523 27.753 30.7797 27.9465C30.0413 28.14 29.2713 28.0392 28.6097 27.6652C27.418 26.9888 25.9913 26.9872 24.7963 27.6571C23.593 28.3319 22.8747 29.5481 22.8747 30.9075C22.8747 32.4701 21.5847 33.74 19.9997 33.74C18.4147 33.74 17.1247 32.4701 17.1247 30.9075C17.1247 29.5465 16.4063 28.3319 15.2013 27.6571Z"
                    fill="white"
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
          name="TodayQuestion"
          component={TodayQuestion}
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
          name="TodayQuestionFinish"
          component={TodayQuestionFinish}
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

        <Stack.Screen name="RecordingScreen" component={RecordingScreen} />

        <Stack.Screen name="ProgressBar" component={ProgressBar}></Stack.Screen>
        <Stack.Screen
          name="CompletedRecordingsScreen"
          component={CompletedRecordingsScreen}
        />
        <Stack.Screen name="TodayQuestionList" component={TodayQuestionList} />
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
