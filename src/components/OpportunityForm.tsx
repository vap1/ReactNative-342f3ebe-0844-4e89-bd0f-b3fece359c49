
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface OpportunityFormProps {
  onSubmit: (opportunity: Opportunity) => void;
}

interface Opportunity {
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}

const OpportunityForm: React.FC<OpportunityFormProps> = ({ onSubmit }) => {
  const [leadId, setLeadId] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [documents, setDocuments] = useState('');

  const handleFormSubmit = () => {
    const opportunity: Opportunity = {
      leadId,
      assignedTo,
      status,
      notes,
      documents,
    };

    onSubmit(opportunity);
  };

  return (
    <View>
      <TextInput
        placeholder="Lead ID"
        value={leadId}
        onChangeText={setLeadId}
      />
      <TextInput
        placeholder="Assigned To"
        value={assignedTo}
        onChangeText={setAssignedTo}
      />
      <TextInput
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />
      <TextInput
        placeholder="Documents"
        value={documents}
        onChangeText={setDocuments}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default OpportunityForm;