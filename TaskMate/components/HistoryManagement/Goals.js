import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GoalsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Goals');

  // State for goals data
  const [goals, setGoals] = useState({
    daily: { completed: 6, total: 8 },
    weekly: { completed: 24, total: 30 },
  });

  // State for completed tasks
  const [completedTasks, setCompletedTasks] = useState([
    { id: 1, title: 'Design Changes', completed: 5, total: 5 },
    { id: 2, title: 'Bug Fixes', completed: 3, total: 3 },
    { id: 3, title: 'Meeting Preparation', completed: 4, total: 4 },
  ]);

  // State for achievements
  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Productivity Master', description: 'Completed all daily tasks for 7 days straight' },
    { id: 2, title: 'Goal Crusher', description: 'Exceeded weekly goal by 120%' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Goals</Text>
        <TouchableOpacity
  style={[styles.addGoalButton, activeTab === 'SetGoals' && styles.activeTab]}
  onPress={() => navigation.navigate('SetGoals')}
>
  <Ionicons name="add-circle" size={28} color="#4CAF50" />
</TouchableOpacity>
      </View>

      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Completed' && styles.activeTab]}
          onPress={() => {
            setActiveTab('Completed');
            navigation.navigate('CompletedTask');
          }}
        >
          <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Goals' && styles.activeTab]}
          onPress={() => setActiveTab('Goals')}
        >
          <Text style={[styles.tabText, activeTab === 'Goals' && styles.activeTabText]}>Goals</Text>
        </TouchableOpacity>


      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Goals Section (Now Horizontal) */}
        <View style={styles.goalSection}>
          <View style={styles.goalContainer}>
            <Text style={styles.goalTitle}>Daily Goal</Text>
            <Text style={styles.goalProgress}>{goals.daily.completed}/{goals.daily.total}</Text>
            <Text style={styles.goalLabel}>Tasks completed</Text>
          </View>

          <View style={styles.goalContainer}>
            <Text style={styles.goalTitle}>Weekly Goal</Text>
            <Text style={styles.goalProgress}>{goals.weekly.completed}/{goals.weekly.total}</Text>
            <Text style={styles.goalLabel}>Tasks completed</Text>
          </View>
        </View>

        {/* Completed Tasks Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed Tasks</Text>
          {completedTasks.map(task => (
            <View key={task.id} style={styles.taskItem}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <View style={styles.taskCompletion}>
                <Text style={styles.taskCompletedText}>{task.completed}/{task.total} Completed</Text>
                <Ionicons name="checkmark-circle" size={20} color="#4685FF" />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        {/* Achievements Section */}
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>Recent Achievements</Text>
          {achievements.map(achievement => (
            <View key={achievement.id} style={styles.achievementItem}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addGoalButton: {
    padding: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginHorizontal: 20,
    margin:15,
  },
  tabButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomColor: '#4685FF',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#4685FF',
    fontWeight: 'bold',
  },
  goalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,//Goal section margin
    marginBottom: 25,
  },
  goalContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  goalProgress: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4685FF',
  },
  goalLabel: {
    fontSize: 14,
    color: '#666',

  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    margin:10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  achievementItem: {
    marginLeft:10,
    marginRight:10,
    marginBottom: 15,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default GoalsScreen;
