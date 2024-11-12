import { StyleSheet } from 'react-native';

export const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    color: '#007AFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#2C2C2C',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  // message: {
  //   marginTop: 12,
  //   color: 'red',
  // },
  error: {
    color: 'red',
    marginBottom: 10,
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
  passwordTextInput: {
    paddingRight: 40,
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
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
  googleButton: {
    backgroundColor: '#FAFAFA',
    borderColor: 'gray', // Add border color
    borderWidth: 1, // Add border width
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bothicon: {
    marginRight: 10,
    width: 20,
    height: 20,
    // Other styles for the icon
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start', // Move to left side
    marginBottom: 10,
    marginLeft: '10%',
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
  },
  continueWithEmailButton: {
    width: '80%', // Set the width same as other buttons
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
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerText: {
    // color: '#2C2C2C',
    fontSize: 16,
  },
  registerButton: {
    marginLeft: 5,
  },
  registerButtonText: {
    fontSize: 16,
  },
  agreementText: {
    textAlign: 'center',
    fontSize: 14,
  },
  linkText: {
    color: '#007AFF',
  },
  label: {
    position: 'absolute',
    left: 14,
    top: -8,
    fontSize: 12,
    //color: '#007AFF',
    backgroundColor: '#FFF',
    paddingHorizontal: 4,
  },
});
