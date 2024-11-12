// src/TwoFactorAuth.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
const TwoFactorAuth: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleCodeChange = (input: string) => {
    if (/^\d*$/.test(input) && input.length <= 6) {
      setCode(input);
    }
  };

  const handleVerify = () => {
    if (code.length === 6) {
      // Handle the verification logic here
      Alert.alert('Success', 'Code verified successfully!');
    } else {
      Alert.alert('Error', 'Please enter a 6-digit code.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../screens/image/twofactor.png')} style={styles.icon} />
      <Text style={styles.title}>Enter 2FA Code</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={6}
        value={code}
        onChangeText={handleCodeChange}
        placeholder="Enter 6-digit code"
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TwoFactorAuth;
