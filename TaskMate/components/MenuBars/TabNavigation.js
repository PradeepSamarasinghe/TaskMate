import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import tab screens
import HomeScreen from "../TaskManagement/HomeScreen";
import CalendarScreen from "../ReminderManagement/CalenderScreen";
import HistoryScreen from "../HistoryManagement/HistoryScreen";
import ProfileScreen from "../ProfileManagement/ProfileScreen";

// Import additional screens
import Goals from "../HistoryManagement/Goals";
import CompletedTask from "../HistoryManagement/CompletedTask";
import SetGoals from "../HistoryManagement/SetGoals";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack for the History tab
const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoryMain" component={HistoryScreen} />
      <Stack.Screen name="CompletedTask" component={CompletedTask} />
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="SetGoals" component={SetGoals} />
    </Stack.Navigator>
  );
};

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Calendar") iconName = "calendar-outline";
          else if (route.name === "History") iconName = "time-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          borderRadius: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={HistoryStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
