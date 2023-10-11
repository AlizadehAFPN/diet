import {loginType} from '../Interface';
import axiosInstance from './axiosConfig';

export const tempLogin = async (data: loginType): Promise<any> => {
  try {
    const response = await axiosInstance.post('auth/token', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const testTempLogin = async (data: loginType): Promise<any> => {
  try {
    const response = await axiosInstance.post('auth/token', data);
    return response;
  } catch (error) {
    throw error;
  }
};
