
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const RegistrationScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleRegistration = () => {
    // Perform API call to register user
    // Replace `API_ENDPOINT` with the actual API endpoint
    fetch(API_ENDPOINT + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Registration successful, show success message
          Alert.alert('Registration Successful', 'You can now login with your credentials.');
        } else {
          // Registration failed, show error message
          Alert.alert('Registration Failed', data.errorMessage);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        Alert.alert('Error', 'An error occurred during registration.');
      });
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

export default RegistrationScreen;