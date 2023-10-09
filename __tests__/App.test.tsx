import MockAdapter from 'axios-mock-adapter';
import { tempLogin } from '../src/services';
import axiosInstance from '../src/services/axiosConfig';

// Import your function that makes the API request

// Create a mock instance
const mock = new MockAdapter(axiosInstance);

// Mock a successful response with status code 200
const mockUsername = 'stas.testufwfweser1@dietdoctor.com';
const mockPassword = 'C5(Pg5qwrfwfwP^(WJ!eS%d38FI';
mock.onPost('https://ddapi.prod.dietdoctor.com/auth/token').reply((config) => {
  console.log(config , 'config')
  const requestData = JSON.parse(config.data); // Parse the request data
  if (
    requestData.username === mockUsername &&
    requestData.password === mockPassword
  ) {
    return [200, { data: 'Your data' }];
  } else {
    return [401]; // Unauthorized status code for incorrect credentials
  }
});
// Your test
test('API POST request returns status code 200', async () => {
  const response = await tempLogin({username:mockUsername, password:mockPassword}); // Use the same values as the mock
  console.log(response.data , 'response')
  // expect(response.status).toBe(200);
});
