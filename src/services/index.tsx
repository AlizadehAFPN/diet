import {CarDetailInterface, CarInfo} from '../Interface';
import axiosInstance from './axiosConfig';

export const fetchCarList = async (): Promise<CarInfo[]> => {
  try {
    const response = await axiosInstance.get('/api/vehicles/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCarDetail = async (
  id: number | null,
): Promise<CarDetailInterface | null> => {
  if (id === null) {
    return null;
  }

  try {
    const response = await axiosInstance.get(`/api/vehicles/${id}`);
    return response.data;
  } catch (error) {
    // Handle errors here, you can create custom error types for better type checking
    throw error;
  }
};
