import axios from 'axios';
import { FrontEndPoints } from '../Components/Common';
import { Alert } from 'react-native';
const API_URL = 'https://registoapp-stage.azurewebsites.net/login';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Login mein error:', error);
    throw error;
  }
};

//const API_BASE_URL = 'https://localhost:44332/api';
const API_BASE_URL = 'https://registoapp-stage.azurewebsites.net';

export const handleFetchUserMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${FrontEndPoints.UserMessage}`);

    if (response.data) {
      console.log('User Messages:', response.data);
    }
  } catch (error) {
    console.error('User Messages fetching error:', error);
    Alert.alert('Fetch Failed', 'Unable to fetch user messages. Please try again.');
  }
};


