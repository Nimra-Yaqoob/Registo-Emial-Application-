import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';


const { width } = Dimensions.get('window');
const SLIDE_DURATION = 3000; // Duration in milliseconds for each slide

interface SlideProps {
  title: string;
  subtitle: string;
  image: number;
}
interface Props {
    navigation: any;
  }
const slides: SlideProps[] = [
  {
    subtitle: 'Registo',
    title: 'Get the updated about the task anywhere, anytime, no more frustration.',
    image: require('../screens/image/Dashboard.png'),
  },
  {
    subtitle: 'Registo',
    title: 'Get messages everywhere at any time about tasks',
    image: require('../screens/image/ForgetPassword.png'),
  },
  {
    subtitle: 'Registo',
    title: 'Get the updated about the task anywhere, anytime, no more frustration.',
    image: require('../screens/image/Reminders.png'),
  },
];

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      // Increment slide index cyclically
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, SLIDE_DURATION);

    // Clear timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleLoginPress = () => {
    // Implement your login logic here
    navigation.navigate('LoginScreen');

  };


  const handleCreateAccountPress = () => {
    // Implement your create account logic here
    navigation.navigate('SignupScreen');

  };

  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Text style={styles.title}>{slides[currentSlideIndex].subtitle}</Text>
        <Text style={styles.subtitle}>{slides[currentSlideIndex].title}</Text>
        <Image source={slides[currentSlideIndex].image} style={styles.image} />
      </View>
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login to account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.createButton]} onPress={handleCreateAccountPress}>
        <Text style={[styles.buttonText, styles.createButtonText]}>Create new account!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  slideContainer: {
    width,
    alignItems: 'center',
  },
  image: {
    width: '37%',
    height: 300,
    resizeMode: 'cover',
    marginBottom:13,
  },
  title: {
    color:'#007AFF',
    fontSize: 24,
    fontWeight: 'bold',
    //marginTop: 10,
  },
  subtitle: {
    color:'grey',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
    marginTop: 10, // Increased margin between buttons
    borderColor: '#1790FC', // Added border color
    borderWidth: 1, // Added border width
    width: width * 0.8, // Set button width to 80% of screen width
  },
  buttonText: {
    color: '#E6F7FF', // Text color changed to #E6F7FF
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#007AFF', // Background color for the Login button
  },
  createButton: {
    backgroundColor: '#E6F7FF', // Background color for the Create Account button
  },
  createButtonText: {
    color: '#1790FC', // Text color for the Create Account button
  },
});

export default OnboardingScreen;
