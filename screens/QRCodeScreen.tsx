import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { ApiEndpoints, GetLoginMfaError } from '../Components/Common';
import Api from '../Components/Api';

const QRCodeScreen: React.FC = () => {
  const [code, setCode] = useState('');
  const [authenticatorUri, setAuthenticatorUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMfaError, setLoginMfaError] = useState('');

  useEffect(() => {
    getQr();
  }, []);

  const getQr = async () => {
    try {
      const response = await Api.get(ApiEndpoints.Authentication2Fa);
      if (response && response.status === 200) {
        setAuthenticatorUri(response.data.authenticatorUri);
      }
    } catch (error) {
      console.error('Failed to fetch QR code', error);
    }
  };

  const validateCode = async () => {
    setLoginMfaError('');
    setIsLoading(true);
    try {
      const response = await Api.post(ApiEndpoints.Authentication2Fa, { Code: code });
      if (response && response.status === 200) {
        setIsLoading(false);
        Alert.alert('Success', 'Code validated successfully!');
      }
    } catch (error: any) {
      setIsLoading(false);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error || GetLoginMfaError(400);
        setLoginMfaError(errorMessage);
      } else {
        setLoginMfaError('An unexpected error occurred.');
      }
    }
  };

  const handleSubmit = () => {
    if (code) {
      validateCode();
    } else {
      Alert.alert('Error', 'Please enter the code.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.qrContainer}>
        {authenticatorUri ? (
          <QRCode
            value={authenticatorUri}
            size={200}
            color="black"
            backgroundColor="white"
          />
        ) : (
          <Text style={styles.text}>Loading QR code...</Text>
        )}
      </View>
      <Text style={styles.title}>Scan this QR code:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your code"
        value={code}
        onChangeText={setCode}
        keyboardType="default"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={isLoading}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Text>
      </TouchableOpacity>

      {loginMfaError ? <Text style={styles.error}>{loginMfaError}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  qrContainer: {
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#007BFF',
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    width: '80%',
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
  text: { // Add this
    fontSize: 16,
    color: '#333',
  },
});

export default QRCodeScreen;
