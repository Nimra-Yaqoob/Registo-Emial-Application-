// import axios from 'axios';
// import { Alert } from 'react-native';
// import { FrontEndPoints } from '../Components/Common';


// const API_BASE_URL = 'https://localhost:44332/api';

// export const handleFetchUserMessages = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/${FrontEndPoints.UserMessage}`);

//     if (response.data) {
//       console.log('User Messages:', response.data);
//       // Agar response data ko state mein save karna hai toh saveState(response.data) jesa code yahan use kar sakte hain
//     }
//   } catch (error) {
//     console.error('User Messages fetch karne mein error:', error);
//     Alert.alert('Fetch Failed', 'Unable to fetch user messages. Please try again.');
//   }
// };

// // Example usage
// handleFetchUserMessages();


// import axios from 'axios';
// import { FrontEndPoints } from './path-to-endpoints-file';

// const API_BASE_URL = 'https://localhost:44332/api';

// export const getUserMessages = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/${FrontEndPoints.UserMessage}`);
    
//     // Check if response is HTML (indicating a potential problem)
//     if (response.headers['content-type'].includes('text/html')) {
//       console.error('Expected JSON but got HTML:', response.data);
//       Alert.alert('Fetch Failed', 'Unable to fetch user messages. Received an unexpected response from the server.');
//       return;
//     }

//     return response.data;
//   } catch (error) {
//     console.error('User Messages fetch karne mein error:', error);
//     throw error;
//   }
// };
