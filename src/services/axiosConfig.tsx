import axios, {AxiosInstance} from 'axios';
import {Platform} from 'react-native';

// Define the base URL based on the platform
const baseURL: string = 'https://ddapi.prod.dietdoctor.com/'

// Create a custom Axios instance with specific typings
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Add authentication headers or other global headers here if needed
    return config;
  },
  error => {
    // Handle request errors globally
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Handle successful responses globally (e.g., logging, data transformation)
    return response;
  },
  error => {
    // Handle response errors globally (e.g., logging, error codes)
    return Promise.reject(error);
  },
);

// Enable request cancellation

export default axiosInstance;
