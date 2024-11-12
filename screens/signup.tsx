import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SignupScreenStyles } from './SignupScreenStyles';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const handleGooglesignupPress = () => {
    // Implement Google login logic here
  };

  const handleSignUpPress = () => {
    // Implement Continue with Email logic here
    navigation.navigate('Verify');

  };

  const handleLoginPress = () => {
    // Implement Register logic here
    navigation.navigate('LoginScreen');
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={SignupScreenStyles.container}>
      <Text style={SignupScreenStyles.title}>Registo</Text>
      <Text style={SignupScreenStyles.subtitle}>SignUp to your account</Text>

      <TouchableOpacity
        style={[SignupScreenStyles.button, SignupScreenStyles.googleButton]}
        onPress={handleGooglesignupPress}>
        <View style={SignupScreenStyles.buttonContent}>
          <Image
            source={require('../screens/image/google.png')}
            style={SignupScreenStyles.bothicon}
          />
          <Text style={[SignupScreenStyles.buttonText, { color: '#2C2C2C' }]}>SignUp with Google</Text>
        </View>
      </TouchableOpacity>

      <View style={SignupScreenStyles.inputContainer}>
        <TextInput
          style={[SignupScreenStyles.input, emailFocused || email.length > 0 ? SignupScreenStyles.inputFocused : null]}
          placeholder="Email"
          placeholderTextColor="#2C2C2C"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        {emailFocused || email.length > 0 ? (
          <Text style={SignupScreenStyles.label}>Enter email</Text>
        ) : null}
      </View>

      <View style={SignupScreenStyles.inputContainer}>
        <TextInput
          style={[SignupScreenStyles.input, SignupScreenStyles.passwordTextInput, passwordFocused || password.length > 0 ? SignupScreenStyles.inputFocused : null]}
          placeholder="Password"
          placeholderTextColor="#2C2C2C"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        {passwordFocused || password.length > 0 ? (
          <Text style={SignupScreenStyles.label}>Password</Text>
        ) : null}
        <TouchableOpacity
          style={SignupScreenStyles.passwordIcon}
          onPress={handleShowPasswordToggle}>
          <Image
            source={showPassword ? require('../screens/image/eye.png') : require('../screens/image/hide.png')}
            style={SignupScreenStyles.bothicon}
          />
        </TouchableOpacity>
      </View>

      <View style={SignupScreenStyles.inputContainer}>
        <TextInput
          style={[SignupScreenStyles.input, SignupScreenStyles.passwordTextInput, confirmPasswordFocused || confirmPassword.length > 0 ? SignupScreenStyles.inputFocused : null]}
          placeholder="Confirm Password"
          placeholderTextColor="#2C2C2C"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onFocus={() => setConfirmPasswordFocused(true)}
          onBlur={() => setConfirmPasswordFocused(false)}
        />
        {confirmPasswordFocused || confirmPassword.length > 0 ? (
          <Text style={SignupScreenStyles.label}>Confirm Password</Text>
        ) : null}
        <TouchableOpacity
          style={SignupScreenStyles.passwordIcon}
          onPress={handleShowPasswordToggle}>
          <Image
            source={showPassword ? require('../screens/image/eye.png') : require('../screens/image/hide.png')}
            style={SignupScreenStyles.bothicon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[SignupScreenStyles.button, SignupScreenStyles.continueWithEmailButton]}
        onPress={handleSignUpPress}>
        <Text style={SignupScreenStyles.continueWithEmailText}>SignUp</Text>
      </TouchableOpacity>

      <View style={SignupScreenStyles.registerContainer}>
        <Text style={SignupScreenStyles.registerText}>Already have an account?</Text>
        <TouchableOpacity
          style={SignupScreenStyles.registerButton}
          onPress={handleLoginPress}>
          <Text style={[SignupScreenStyles.registerButtonText, { color: '#007AFF' }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
