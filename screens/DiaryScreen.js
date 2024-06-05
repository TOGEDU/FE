import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
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
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>날짜 선택하기</Text>
        <Calendar
          style={{
            borderWidth: 1,
            borderRadius: 15,
            borderColor: "#65A102",
            height: 380,
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
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={styles.galbtn}
          >
            <Path
              d="M18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8Z"
              fill="#666666"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.943 1.25H12.057C14.366 1.25 16.175 1.25 17.587 1.44C19.031 1.634 20.171 2.04 21.066 2.934C21.961 3.829 22.366 4.969 22.56 6.414C22.75 7.825 22.75 9.634 22.75 11.943V12.031C22.75 13.94 22.75 15.502 22.646 16.774C22.542 18.054 22.329 19.121 21.851 20.009C21.641 20.4 21.381 20.751 21.066 21.066C20.171 21.961 19.031 22.366 17.586 22.56C16.175 22.75 14.366 22.75 12.057 22.75H11.943C9.634 22.75 7.825 22.75 6.413 22.56C4.969 22.366 3.829 21.96 2.934 21.066C2.141 20.273 1.731 19.286 1.514 18.06C1.299 16.857 1.26 15.36 1.252 13.502C1.25 13.029 1.25 12.529 1.25 12.001V11.943C1.25 9.634 1.25 7.825 1.44 6.413C1.634 4.969 2.04 3.829 2.934 2.934C3.829 2.039 4.969 1.634 6.414 1.44C7.825 1.25 9.634 1.25 11.943 1.25ZM6.613 2.926C5.335 3.098 4.564 3.426 3.995 3.995C3.425 4.565 3.098 5.335 2.926 6.614C2.752 7.914 2.75 9.622 2.75 12V12.844L3.751 11.968C4.19007 11.5837 4.75882 11.3806 5.34203 11.3999C5.92524 11.4192 6.47931 11.6594 6.892 12.072L11.182 16.362C11.5149 16.6948 11.9546 16.8996 12.4235 16.9402C12.8925 16.9808 13.3608 16.8547 13.746 16.584L14.044 16.374C14.5997 15.9835 15.2714 15.7932 15.9493 15.834C16.6273 15.8749 17.2713 16.1446 17.776 16.599L20.606 19.146C20.892 18.548 21.061 17.762 21.151 16.653C21.249 15.448 21.25 13.946 21.25 12C21.25 9.622 21.248 7.914 21.074 6.614C20.902 5.335 20.574 4.564 20.005 3.994C19.435 3.425 18.665 3.098 17.386 2.926C16.086 2.752 14.378 2.75 12 2.75C9.622 2.75 7.913 2.752 6.613 2.926Z"
              fill="#666666"
            />
          </Svg>
          <Text style={styles.btnText}>사진 첨부</Text>
        </TouchableOpacity>

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
    backgroundColor: GlobalStyles.colors.primary300,
    width: 343,
    height: 212,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  galbtn: {
    marginRight: 11,
    width: 24,
    height: 24,
  },
  btnText: {
    color: "#666",
    fontSize: 16,
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
