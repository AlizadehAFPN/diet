import {loginInterface} from '../Interface';
import axiosInstance from './axiosConfig';

export const tempLogin = async (data: loginInterface): Promise<any> => {
  try {
    const response = await axiosInstance.post('auth/token', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
