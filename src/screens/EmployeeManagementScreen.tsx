
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Employee } from '../models/Employee';
import { getEmployees } from '../api/employees';

const EmployeeManagementScreen: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const renderEmployeeItem = ({ item }: { item: Employee }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.contactInfo}</Text>
      <Text>{item.role}</Text>
      {/* Add more employee details here */}
    </View>
  );

  return (
    <View>
      <Text>Employee Management</Text>
      <FlatList
        data={employees}
        renderItem={renderEmployeeItem}
        keyExtractor={(item) => item.employeeId}
      />
    </View>
  );
};

export default EmployeeManagementScreen;