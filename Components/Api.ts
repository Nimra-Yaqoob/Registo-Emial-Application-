import axios from 'axios';
import Config from './Config';
//import { useNavigate } from 'react-router-dom';
import { loadState, saveState } from '../Components/LocalStorage';
import { ApiEndpoints} from '../Components/Common';

let currentState = loadState() as any;

const Api = axios.create({
  baseURL: Config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  (config) => {
    currentState = loadState() as any;
    const accessToken = currentState?.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefresh = false;

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;
    if (originalConfig.url !== ApiEndpoints.Login && error.response) {
      if (error.response.status === 401 && !originalConfig._retry && !isRefresh) {
        originalConfig._retry = true;
        isRefresh = true;
        try {
          const response = await Api.post(ApiEndpoints.RefreshToken, {
            accessToken: currentState?.accessToken,
            refreshToken: currentState?.refreshToken,
          });

          if (response.data.refreshToken) {
            saveState(response.data);
            originalConfig.headers.Authorization = `Bearer ${response.data.accessToken}`;
            currentState = loadState() as any;
            if (response.data.accessToken === currentState.accessToken) {
              return axios(originalConfig);
            }
          }

          if (response.data.status === 401) {
            //let navigate = useNavigate();
            //navigate(FrontEndPoints.logout);
            console.error('Error removing data from AsyncStorage:', error);
          }
        } catch (err) {
          return Promise.reject(err);
        } finally {
          isRefresh = false;
        }
      }
    }
    return Promise.reject(error);
  }
);

export default Api;
