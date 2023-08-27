
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getOpportunities, Opportunity } from '../apis/OpportunityApi';

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
      <Text>Opportunity ID: {item.opportunityId}</Text>
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
        keyExtractor={(item) => item.opportunityId}
      />
    </View>
  );
};

export default OpportunityTrackingScreen;