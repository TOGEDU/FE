import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function DropdownList() {
  const [dropdowns, setDropdowns] = useState([
    {
      id: 1,
      title: "아이가 학교에서 친구와 다투...",
      date: "2024.06.01",
      question:
        "아이가 학교에서 친구와 다투고 온 날 해주고 싶은 말은 무엇인가요?",
      answer:
        "오늘 학교에서 친구와 다퉜다고 힘들었겠구나. 너의 마음이 어려웠을 거라고 알아. 친구와 다투는 건 어렵고 슬픈 일이지만, 때로는 그런 상황도 있어. 그럴 때마다 당황스러워하고 속상하겠구나.",
      expanded: false,
    },
    {
      id: 2,
      title: "목록 2",
      date: "2024.06.02",
      question: "질문 2",
      answer: "답변 2",
      expanded: false,
    },
    {
      id: 3,
      title: "목록 3",
      date: "2024.06.03",
      question: "질문 3",
      answer: "답변 3",
      expanded: false,
    },
    {
      id: 4,
      title: "목록 4",
      date: "2024.06.04",
      question: "질문 4",
      answer: "답변 4",
      expanded: false,
    },
    {
      id: 5,
      title: "목록 5",
      date: "2024.06.05",
      question: "질문 5",
      answer: "답변 5",
      expanded: false,
    },
    {
      id: 6,
      title: "목록 6",
      date: "2024.06.06",
      question: "질문 6",
      answer: "답변 6",
      expanded: false,
    },
  ]);

  const toggleDropdown = (id) => {
    setDropdowns((prevDropdowns) =>
      prevDropdowns.map((dropdown) =>
        dropdown.id === id
          ? { ...dropdown, expanded: !dropdown.expanded }
          : dropdown
      )
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {dropdowns.map((dropdown, index) => (
          <View
            key={dropdown.id}
            style={[styles.dropdown, index !== 0 && { marginTop: 10 }]}
          >
            <TouchableOpacity
              style={styles.header}
              onPress={() => toggleDropdown(dropdown.id)}
            >
              <View style={styles.headerText}>
                <Text style={styles.title}>{dropdown.title}</Text>
                <Text style={styles.date}>{dropdown.date}</Text>
              </View>
              <Ionicons
                name={
                  dropdown.expanded
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
            {dropdown.expanded && (
              <View style={styles.content}>
                <View style={styles.questionBox}>
                  <Text style={styles.question}>{dropdown.question}</Text>
                </View>
                <View style={styles.answerBox}>
                  <Text style={styles.answer}>{dropdown.answer}</Text>
                </View>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  dropdown: {
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#79B669",
    borderRadius: 15,
    marginBottom: 5,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: "#666666",
  },
  content: {
    marginTop: 5,
    padding: 18,
    backgroundColor: "#DAEDD5",
    marginBottom: 10,
    borderRadius: 10,
  },
  questionBox: {
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 10,
  },
  question: {
    fontSize: 17,
    fontWeight: "bold",
  },
  answerBox: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
  },
  answer: {
    fontSize: 18,
    //letterSpacing: 2,
  },
});

export default DropdownList;
