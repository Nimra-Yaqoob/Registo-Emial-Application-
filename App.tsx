import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen } from './screens/splash';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import ForgetScreen from './screens/ForgetPas';
import Verify from './screens/Verify';
import Home from './chat/Home';
import EmailScreen from './chat/EmailScreen';
import Inbox from './chat/MessageScreen';
import AddPersonScreen from './chat/AddMembers';
import EmailContent from './chat/EmailContent';
import TwoFactorAuth from './screens/2Factor';
import QRCodeScreen from './screens/QRCodeScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
        <Stack.Screen name="EmailContent" component={EmailContent} options={{ headerShown: false }} />
        <Stack.Screen name="AddPersonScreen" component={AddPersonScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TwoFactorAuth" component={TwoFactorAuth} options={{ headerShown: false }} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

