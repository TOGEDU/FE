import React, { useState } from "react";
import {
  View,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const MyPageScreen = () => {
  // 기본 프로필 사진 경로
  const defaultProfileImage = require("../assets/default-profile.png");

  // 프로필 수정 버튼 클릭 시 동작
  const handleEditProfile = () => {
    // 프로필 수정 기능 구현
    console.log("프로필 수정 버튼이 클릭되었습니다.");
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("09:00");
  const [items, setItems] = useState([
    { label: "오전 09:00", value: "09:00" },
    { label: "오전 10:00", value: "10:00" },
    { label: "오전 11:00", value: "11:00" },
    { label: "오후 12:00", value: "12:00" },
    { label: "오후 01:00", value: "13:00" },
    { label: "오후 02:00", value: "14:00" },
    { label: "오후 03:00", value: "15:00" },
    { label: "오후 04:00", value: "16:00" },
    { label: "오후 05:00", value: "17:00" },
    { label: "오후 06:00", value: "18:00" },
    { label: "오후 07:00", value: "19:00" },
    { label: "오후 08:00", value: "20:00" },
    { label: "오후 09:00", value: "21:00" },
    { label: "오후 10:00", value: "22:00" },
  ]);

  return (
    <View style={styles.container}>
      {/* 프로필 이미지와 사진 변경 버튼 */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={defaultProfileImage} />
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}> 사진 변경하기 </Text>
        </TouchableOpacity>
      </View>
      {/* 이름과 이메일 입력란 */}
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileText}>이름</Text>
        <TextInput
          style={styles.profileInputText}
          placeholder="사용자 이름"
          defaultValue="{Name}"
        />
        <Text style={styles.profileText}>이메일</Text>
        <TextInput
          style={styles.profileInputText}
          placeholder="사용자 이메일"
          defaultValue="{email}"
        />
      </View>
      {/* 알림 시간 설정 */}
      <View style={styles.notificationTimeContainer}>
        <Text style={styles.notificationTimeText}>알림 시간 설정</Text>
        <View style={styles.notificationRow}>
          <Image
            style={styles.notificationIcon}
            source={require("../assets/alarm.png")}
          />
          <View style={styles.notificationTextContainer}>
            <Text style={styles.notificationHeaderText}>푸시 알림 켜기</Text>
            <Text style={styles.notificationSubText}>
              매일 오늘의 질문을 받아보세요
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#79B669" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.notificationSwitch}
          />
        </View>
        <View style={styles.mainContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            direction="DOWN" // 드롭다운 방향을 아래로 강제 설정
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
    marginTop: 10,
  },
  editButtonText: {
    color: "dimgrey",
    fontSize: 12,
  },
  profileTextContainer: {
    marginHorizontal: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 10,
  },
  profileInputText: {
    borderColor: "lightgray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  notificationTimeContainer: {
    marginHorizontal: 30,
    marginTop: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  notificationTimeText: {
    fontSize: 14,
    color: "gray",
  },
  notificationRow: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationTextContainer: {
    flex: 1, // 텍스트 컨테이너가 가능한 모든 공간을 차지하도록 함
  },

  mainContainer: {
    flexDirection: "row",
    padding: 30,
    borderRadius: 30,
    backgroundColor: "#DDDDDD",
    alignItems: "center",

    marginBottom: 15,
  },
  notificationHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationSubText: {
    fontSize: 14,
    color: "dimgrey",
  },
  notificationSwitch: {
    alignSelf: "flex-end", // Switch 컴포넌트를 끝으로 정렬
  },
  dropdown: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    backgroundColor: "transparent", // 배경색 제거
    borderWidth: 0, // 테두리 제거
  },
  dropdownContainer: {
    backgroundColor: "#DDDDDD", // 드롭다운 목록의 배경색 제거
    borderWidth: 0, // 드롭다운 목록의 테두리 제거
  },
  dropdownText: {
    fontSize: 16,
  },
});

export default MyPageScreen;
