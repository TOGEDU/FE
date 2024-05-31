import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
const SignupFinish = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          style={styles.check}
        >
          <G clip-path="url(#clip0_176_4436)">
            <Path
              d="M109.204 43.5791L115.796 50.1709L60.9375 105.029L34.2041 78.2959L40.7959 71.7041L60.9375 91.8457L109.204 43.5791ZM75 0C81.8848 0 88.5254 0.878906 94.9219 2.63672C101.318 4.39453 107.3 6.90918 112.866 10.1807C118.433 13.4521 123.486 17.3584 128.027 21.8994C132.568 26.4404 136.475 31.5186 139.746 37.1338C143.018 42.749 145.532 48.7305 147.29 55.0781C149.048 61.4258 149.951 68.0664 150 75C150 81.8848 149.121 88.5254 147.363 94.9219C145.605 101.318 143.091 107.3 139.819 112.866C136.548 118.433 132.642 123.486 128.101 128.027C123.56 132.568 118.481 136.475 112.866 139.746C107.251 143.018 101.27 145.532 94.9219 147.29C88.5742 149.048 81.9336 149.951 75 150C68.1152 150 61.4746 149.121 55.0781 147.363C48.6816 145.605 42.7002 143.091 37.1338 139.819C31.5674 136.548 26.5137 132.642 21.9727 128.101C17.4316 123.56 13.5254 118.481 10.2539 112.866C6.98242 107.251 4.46777 101.294 2.70996 94.9951C0.952148 88.6963 0.0488281 82.0312 0 75C0 68.1152 0.878906 61.4746 2.63672 55.0781C4.39453 48.6816 6.90918 42.7002 10.1807 37.1338C13.4521 31.5674 17.3584 26.5137 21.8994 21.9727C26.4404 17.4316 31.5186 13.5254 37.1338 10.2539C42.749 6.98242 48.7061 4.46777 55.0049 2.70996C61.3037 0.952148 67.9688 0.0488281 75 0ZM75 140.625C81.0059 140.625 86.792 139.844 92.3584 138.281C97.9248 136.719 103.149 134.521 108.032 131.689C112.915 128.857 117.358 125.415 121.362 121.362C125.366 117.31 128.784 112.891 131.616 108.105C134.448 103.32 136.67 98.0957 138.281 92.4316C139.893 86.7676 140.674 80.957 140.625 75C140.625 68.9941 139.844 63.208 138.281 57.6416C136.719 52.0752 134.521 46.8506 131.689 41.9678C128.857 37.085 125.415 32.6416 121.362 28.6377C117.31 24.6338 112.891 21.2158 108.105 18.3838C103.32 15.5518 98.0957 13.3301 92.4316 11.7188C86.7676 10.1074 80.957 9.32617 75 9.375C68.9941 9.375 63.208 10.1562 57.6416 11.7188C52.0752 13.2812 46.8506 15.4785 41.9678 18.3105C37.085 21.1426 32.6416 24.585 28.6377 28.6377C24.6338 32.6904 21.2158 37.1094 18.3838 41.8945C15.5518 46.6797 13.3301 51.9043 11.7188 57.5684C10.1074 63.2324 9.32617 69.043 9.375 75C9.375 81.0059 10.1562 86.792 11.7188 92.3584C13.2812 97.9248 15.4785 103.149 18.3105 108.032C21.1426 112.915 24.585 117.358 28.6377 121.362C32.6904 125.366 37.1094 128.784 41.8945 131.616C46.6797 134.448 51.9043 136.67 57.5684 138.281C63.2324 139.893 69.043 140.674 75 140.625Z"
              fill="#95C289"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_176_4436">
              <Rect width="150" height="150" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
        <Text style={styles.title}>환영합니다</Text>

        <TouchableOpacity style={styles.nextBtn} onPress={handleLoginPress}>
          <Text style={styles.nextBtnText}>로그인하러 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  check: {
    marginTop: 214,
  },
  title: {
    marginTop: 37,
    fontSize: 30,

    fontWeight: "bold",
  },

  nextBtn: {
    backgroundColor: GlobalStyles.colors.primary200,
    width: 350,
    height: 59,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 31,
  },
  nextBtnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
});

export default SignupFinish;
