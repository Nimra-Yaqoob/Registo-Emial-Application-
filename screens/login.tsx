import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { LoginScreenStyles } from './LoginScreenStyles';
import { saveState } from '../Components/LocalStorage';
import { ApiEndpoints } from '../Components/Common';
import Api from '../Components/Api';
import { handleFetchUserMessages } from './apiService';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>('mudirs@plusnor.no');
  const [password, setPassword] = useState<string>('123qwe');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const validatePassword = (password: string) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return passwordRegex.test(password);
  // };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // if (!validatePassword(password)) {
    //   Alert.alert('Invalid Password', 'Password must be at least 8 characters long and include a mix of upper case, lower case, number, and special character.');
    //   return;
    // }

    try {
      const response = await Api.post(ApiEndpoints.Login, {
        email,
        password,
      });

      if (response.data) {
        saveState(response.data);
        navigation.navigate('QRCodeScreen');
      }
    } catch (error) {
      console.error('Login failed', error);
      Alert.alert('Login Failed', 'Unable to login. Please check your credentials and try again.');
    }
  };

  const handleGoogleLoginPress = () => {
    // Google login logic
    handleFetchUserMessages();
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgetScreen');
  };

  const handleRegisterPress = () => {
    navigation.navigate('SignupScreen');
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Registo</Text>
      <Text style={LoginScreenStyles.subtitle}>Login to your account</Text>

      <TouchableOpacity
        style={[LoginScreenStyles.button, LoginScreenStyles.googleButton]}
        onPress={handleGoogleLoginPress}
      >
        <View style={LoginScreenStyles.buttonContent}>
          <Image
            source={require('../screens/image/google.png')}
            style={LoginScreenStyles.bothicon}
          />
          <Text style={[LoginScreenStyles.buttonText, { color: '#2C2C2C' }]}>
            Login with Google
          </Text>
        </View>
      </TouchableOpacity>

      <View style={LoginScreenStyles.inputContainer}>
        <TextInput
          style={[
            LoginScreenStyles.input,
            emailFocused || email.length > 0 ? LoginScreenStyles.inputFocused : null,
          ]}
          placeholder="Email"
          placeholderTextColor="#2C2C2C"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        {emailFocused || email.length > 0 ? (
          <Text style={LoginScreenStyles.label}>Enter email</Text>
        ) : null}
      </View>

      <View style={LoginScreenStyles.inputContainer}>
        <TextInput
          style={[
            LoginScreenStyles.input,
            LoginScreenStyles.passwordTextInput,
            passwordFocused || password.length > 0 ? LoginScreenStyles.inputFocused : null,
          ]}
          placeholder="Password"
          placeholderTextColor="#2C2C2C"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        {passwordFocused || password.length > 0 ? (
          <Text style={LoginScreenStyles.label}>Password</Text>
        ) : null}
        <TouchableOpacity
          style={LoginScreenStyles.passwordIcon}
          onPress={handleShowPasswordToggle}
        >
          <Image
            source={
              showPassword
                ? require('../screens/image/eye.png')
                : require('../screens/image/hide.png')
            }
            style={LoginScreenStyles.bothicon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={LoginScreenStyles.forgotPasswordButton}
        onPress={handleForgotPasswordPress}
      >
        <Text style={LoginScreenStyles.forgotPasswordText}>
          Forget Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          LoginScreenStyles.button,
          LoginScreenStyles.continueWithEmailButton,
        ]}
        onPress={handleLogin}
      >
        <Text style={LoginScreenStyles.continueWithEmailText}>
          Continue with Email
        </Text>
      </TouchableOpacity>

      <View style={LoginScreenStyles.registerContainer}>
        <Text style={LoginScreenStyles.registerText}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={LoginScreenStyles.registerButton}
          onPress={handleRegisterPress}
        >
          <Text
            style={[LoginScreenStyles.registerButtonText, { color: '#007AFF' }]}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={LoginScreenStyles.agreementText}>
        By continuing, you agree to the{'\n'}
        <Text style={LoginScreenStyles.linkText}>
          Terms of Service
        </Text> and{' '}
        <Text style={LoginScreenStyles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;