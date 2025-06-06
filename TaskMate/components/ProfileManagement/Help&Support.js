import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TopBar from "../MenuBars/TopBar";
import { useTheme } from "../ThemeContext"; // Assuming you are using a theme context

const HelpSupport = () => {
  const { theme } = useTheme(); // Get the current theme

  const handleEmailSupport = () => {
    Linking.openURL("mailto:support@intellitask.com?subject=Support%20Request");
  };

  return (
    <ScrollView
      style={[
        styles.container,
        theme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <TopBar title="Help & Support" />
      <Text
        style={[
          styles.header,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Help & Support
      </Text>
      <Text
        style={[
          styles.description,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Find answers to common questions or contact our support team.
      </Text>

      <Text
        style={[
          styles.subHeader,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Frequently Asked Questions
      </Text>

      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <View style={styles.faqHeader}>
            <MaterialIcons name="help-outline" size={20} color="#007AFF" />
            <Text
              style={[
                styles.question,
                theme === "dark" ? styles.darkText : styles.lightText,
              ]}
            >
              {item.question}
            </Text>
          </View>
          <Text
            style={[
              styles.answer,
              theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            {item.answer}
          </Text>
        </View>
      ))}

      <Text
        style={[
          styles.subHeader,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Contact Support
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          theme === "dark" ? styles.darkButton : styles.lightButton,
        ]}
        onPress={handleEmailSupport}
      >
        <Ionicons name="mail" size={20} color="#fff" />
        <Text style={styles.buttonText}>Email Us</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.subHeader,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Feedback
      </Text>
      <Text
        style={[
          styles.feedbackText,
          theme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Have suggestions? Let us know at support@intellitask.com
      </Text>
    </ScrollView>
  );
};

const faqData = [
  {
    question: "How do I add a new task?",
    answer:
      "Tap the 'Add Task' button on the home screen and fill in the required details.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login screen, tap 'Forgot Password,' and follow the instructions.",
  },
  {
    question: "Does the app support voice commands?",
    answer: "Yes! Use the microphone icon to add tasks using voice input.",
  },
];

const styles = StyleSheet.create({
  container: { flex: 1 },
  darkContainer: { backgroundColor: "#121212" },
  lightContainer: { backgroundColor: "#F8F9FA" },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  faqItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  answer: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  feedbackText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  darkText: { color: "#FFF" },
  lightText: { color: "#333" },
  darkButton: { backgroundColor: "#FF5555" },
  lightButton: { backgroundColor: "#007bff" },
});

export default HelpSupport;
