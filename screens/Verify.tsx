import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
interface Props {
  navigation: NavigationProp<any>;
}
const Verify: React.FC<Props> = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [codeFocused, setCodeFocused] = useState(0);

  const handleCodeChange = (index: number, value: string) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
  };

  const handleCodeFocus = (index: number) => {
    setCodeFocused(index);
  };

  const handleContinueWithCodePress = () => {
    // Implement Continue with Code logic here
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registo</Text>
      <Text style={styles.subtitle}>We have sent you a Code</Text>
      <Text style={styles.subtext}>Enter your code here</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.codeInput, codeFocused === index ? styles.codeInputFocused : null]}
            placeholder=""
            placeholderTextColor="#2C2C2C"
            value={digit}
            onChangeText={(value) => handleCodeChange(index, value)}
            onFocus={() => handleCodeFocus(index)}
            onBlur={() => handleCodeFocus(-1)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, styles.continueWithCodeButton]}
        onPress={handleContinueWithCodePress}>
        <Text style={styles.continueWithCodeText}>Verify</Text>
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
  codeContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  codeInputFocused: {
    borderColor: '#007AFF',
  },
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  continueWithCodeButton: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 20,
  },
  continueWithCodeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Verify;
