
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TaskDetails } from '../types/TaskTypes';
import { getTasks } from '../apis/TaskApi';

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View>
        <Text>{item.taskName}</Text>
        <Text>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleTaskPress = (task: TaskDetails) => {
    // Handle task press action
  };

  return (
    <View>
      <Text>Task Assignment Screen</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.taskId}
      />
    </View>
  );
};

export default TaskAssignmentScreen;