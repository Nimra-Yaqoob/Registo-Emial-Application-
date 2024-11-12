import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const ForgetScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);

  const handleContinueWithEmailPress = () => {
    // Implement Continue with Email logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registo</Text>
      <Image source={require('../screens/image/forget.png')} style={styles.image} />
      <Text style={styles.subtitle}>Forget Password</Text>
      <Text style={styles.subtext}>Enter your email to reset your password</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, emailFocused || email.length > 0 ? styles.inputFocused : null]}
          placeholder="Email"
          placeholderTextColor="#2C2C2C"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        {emailFocused || email.length > 0 ? (
          <Text style={styles.label}>Enter email</Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={[styles.button, styles.continueWithEmailButton]}
        onPress={handleContinueWithEmailPress}>
        <Text style={styles.continueWithEmailText}>Submit Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 70, // Add paddingTop to reduce spacing at the top
  },
  title: {
    color: '#007AFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  subtitle: {
    color:'#2C2C2C',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5, // Reduce marginBottom
  },
  subtext: {
    fontSize: 16,
    marginTop: 5, // Reduce marginTop
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  inputFocused: {
    borderColor: '#007AFF',
  },
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  continueWithEmailButton: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 20,
  },
  continueWithEmailText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    position: 'absolute',
    left: 14,
    top: -8,
    fontSize: 12,
    backgroundColor: '#FFF',
    paddingHorizontal: 4,
  },
});

export default ForgetScreen;
