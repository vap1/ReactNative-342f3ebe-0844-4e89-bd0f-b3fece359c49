
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Employee } from '../types';
import { getEmployees } from '../api';

const EmployeeList: React.FC = () => {
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

  const renderEmployee = ({ item }: { item: Employee }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.role}</Text>
      <Text>{item.contactInfo}</Text>
    </View>
  );

  return (
    <View>
      <Text>Employee List</Text>
      <FlatList
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={(item) => item.employeeId}
      />
    </View>
  );
};

export default EmployeeList;