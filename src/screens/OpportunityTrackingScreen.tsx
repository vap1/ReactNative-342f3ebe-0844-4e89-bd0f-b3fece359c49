
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getOpportunities } from '../api/opportunities';

interface Opportunity {
  id: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string[];
}

const OpportunityTrackingScreen: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const opportunitiesData = await getOpportunities();
      setOpportunities(opportunitiesData);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    }
  };

  const renderOpportunityItem = ({ item }: { item: Opportunity }) => (
    <View>
      <Text>Opportunity ID: {item.id}</Text>
      <Text>Lead ID: {item.leadId}</Text>
      <Text>Assigned To: {item.assignedTo}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Notes: {item.notes}</Text>
      <Text>Documents: {item.documents.join(', ')}</Text>
    </View>
  );

  return (
    <View>
      <Text>Opportunity Tracking</Text>
      <FlatList
        data={opportunities}
        renderItem={renderOpportunityItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OpportunityTrackingScreen;