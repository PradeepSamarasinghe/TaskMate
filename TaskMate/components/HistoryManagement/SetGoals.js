import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SetGoalsScreen = () => {
  const [goalName, setGoalName] = useState("");
  const [motivation, setMotivation] = useState("");

  // Dropdown state
  const [open, setOpen] = useState(false);
  const [timeframe, setTimeframe] = useState(null);
  const [items, setItems] = useState([
    { label: "1 Week", value: "1_week" },
    { label: "1 Month", value: "1_month" },
    { label: "3 Months", value: "3_months" },
    { label: "1 Year", value: "1_year" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Your Goals</Text>

      {/* Goal Name Input */}
      <Text style={styles.label}>Goal Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter goal name"
        value={goalName}
        onChangeText={setGoalName}
      />

      {/* Timeframe Dropdown */}
      <Text style={styles.label}>Timeframe</Text>
      <DropDownPicker
        open={open}
        value={timeframe}
        items={items}
        setOpen={setOpen}
        setValue={setTimeframe}
        setItems={setItems}
        placeholder="Select your timeframe"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownStyle={styles.dropdownBox}
      />

      {/* Motivation Input */}
      <Text style={styles.label}>Why this goal? (optional)</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write down your motivation"
        multiline
        numberOfLines={4}
        value={motivation}
        onChangeText={setMotivation}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Goals</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,//Margin
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F8FC",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2A4D9B",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdown: {
    backgroundColor: "white",
    borderColor: "#ccc",
  },
  dropdownBox: {
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#2A4D9B",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SetGoalsScreen;
