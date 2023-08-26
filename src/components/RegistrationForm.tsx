
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface RegistrationFormProps {
  onSubmit: (username: string, password: string, email: string, role: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegistration = () => {
    // Perform validation here if needed

    // Call the onSubmit function with the form data
    onSubmit(username, password, email, role);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationForm;