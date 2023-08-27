
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Lead } from '../types/LeadTypes';
import { getLeads } from '../apis/LeadApi';

const LeadManagementScreen: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await getLeads();
      setLeads(response.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const renderLeadItem = ({ item }: { item: Lead }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.contactInfo}</Text>
      {/* Render other lead details */}
    </View>
  );

  return (
    <View>
      <Text>Lead Management</Text>
      <FlatList
        data={leads}
        renderItem={renderLeadItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LeadManagementScreen;