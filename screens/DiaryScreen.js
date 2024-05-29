import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Picker } from "@react-native-picker/picker";
import { Svg, Path } from "react-native-svg";
const formatDate = (date) => {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = days[date.getDay()];
  return `${year}년 ${month}월 ${day}일 (${weekday})`;
};

export default function DiaryScreen() {
  const [diaryText, setDiaryText] = useState("");
  const [selected, setSelected] = useState("");
  const today = new Date();
  const formattedToday = formatDate(today);
  const [dropdownValue, setDropdownValue] = useState("공통");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownItems = ["공통", "첫째", "둘째"];
  const displayDate = selected
    ? formatDate(new Date(selected))
    : formattedToday;

  const [iconRotation, setIconRotation] = useState(0);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setIconRotation(dropdownVisible ? 0 : 180);
  };
  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>날짜 선택하기</Text>
          <Calendar
            style={{
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#65A102",
              height: 350,
              width: 350,
              marginTop: 26,
              marginBottom: 47,
            }}
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: GlobalStyles.colors.primary100,
              },
            }}
            theme={{
              selectedDayBackgroundColor: GlobalStyles.colors.primary100,
              todayTextColor: GlobalStyles.colors.primary100,
              selectedDayTextColor: "#ffffff",
              dayTextColor: "black",
              arrowColor: "black",
              textMonthFontWeight: "bold",
              textMonthFontSize: 24,
              textDayHeaderFontColor: "black",
            }}
          />
          <Text style={styles.date}>{displayDate}</Text>
          <View style={styles.dropdownWrapper}>
            <TouchableOpacity
              style={styles.dropdownContainer}
              onPress={toggleDropdown}
            >
              <Text style={styles.dropdownText}>{dropdownValue}</Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                style={{ transform: [{ rotate: `${iconRotation}deg` }] }}
              >
                <Path d="M5.5 8L10.2631 0.5H0.73686L5.5 8Z" fill="#79B669" />
              </Svg>
            </TouchableOpacity>

            {dropdownVisible && (
              <View style={styles.dropdownMenu}>
                {dropdownItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setDropdownValue(item);
                      setDropdownVisible(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>사진 첨부하기</Text>
          </TouchableOpacity>
          <Text style={styles.filename}>파일명</Text>

          <TouchableOpacity style={styles.diaryBox} onPress={() => {}}>
            <TextInput
              style={styles.diaryInput}
              multiline
              placeholder="일기를 작성해 주세요."
              value={diaryText}
              onChangeText={(text) => setDiaryText(text)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrbtn} onPress={() => {}}>
            <Text style={styles.wrbtnText}>기록하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  scrollContainer: {},
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 33,
    paddingTop: 47,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  date: {
    fontSize: 20,
    alignSelf: "flex-start",
  },
  dropdownWrapper: {
    position: "relative",
    width: 107,
    marginTop: 27,
    marginBottom: 25,
    zIndex: 1,
    alignSelf: "flex-start",
  },
  dropdownContainer: {
    width: 107,
    height: 27,
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: "#878282",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 15,
    color: "black",
    flex: 1,
    textAlign: "center",
  },

  dropdownMenu: {
    width: 107,
    position: "absolute",
    top: 30,
    left: 0,
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: "#878282",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 1,
  },

  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 15,
    color: "black",
  },
  filename: {
    fontSize: 15,
    marginTop: 9,
    marginLeft: 5,
    alignSelf: "flex-start",
  },
  diaryBox: {
    width: 343,
    height: 202,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
    marginTop: 29,
    marginBottom: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  diaryInput: {
    flex: 1,
    fontSize: 18,
  },
  btn: {
    backgroundColor: GlobalStyles.colors.primary100,
    width: 343,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
  wrbtn: {
    backgroundColor: GlobalStyles.colors.primary100,
    width: 343,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 60,
  },
  wrbtnText: {
    color: "#fff",
    fontSize: 18,
  },
});
