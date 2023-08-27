
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface LeadFormProps {
  onSubmit: (leadData: LeadData) => void;
}

interface LeadData {
  contactDetails: string;
  relevantInfo: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [contactDetails, setContactDetails] = useState('');
  const [relevantInfo, setRelevantInfo] = useState('');

  const handleFormSubmit = () => {
    if (contactDetails && relevantInfo) {
      const leadData: LeadData = {
        contactDetails,
        relevantInfo,
      };
      onSubmit(leadData);
    } else {
      Alert.alert('Error', 'Please fill in all the fields');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Contact Details"
        value={contactDetails}
        onChangeText={setContactDetails}
      />
      <TextInput
        placeholder="Relevant Info"
        value={relevantInfo}
        onChangeText={setRelevantInfo}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default LeadForm;