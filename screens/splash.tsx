import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import OnboardingScreen from './OnboardingScreen';
const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  useEffect(() => {
    // Simulate splash screen by waiting for 2 seconds
    setTimeout(() => {
      navigation.replace('OnboardingScreen'); // Replace with your main screen component
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../screens/image/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '72%',
    height: '100%',
    marginLeft: 45,
    resizeMode: 'contain',
  },
});

export { SplashScreen, OnboardingScreen };
