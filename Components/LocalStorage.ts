import AsyncStorage from '@react-native-async-storage/async-storage';

const authSessionKey = 'auth_key';

export interface LocalData {
    isSignedin: boolean,
    accessToken: string,
    refreshToken: string,
    roles: Array<string>
}

export const saveState = async (data: LocalData): Promise<void> => {
    try {
        await AsyncStorage.setItem(authSessionKey, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
    }
};

export const removeState = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(authSessionKey);
    } catch (error) {
        console.error('Error removing data from AsyncStorage:', error);
    }
};

export const loadState = async (): Promise<LocalData | undefined> => {
    try {
        const data = await AsyncStorage.getItem(authSessionKey);
        if (data !== null) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
    }
    return undefined;
};
