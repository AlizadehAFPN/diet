import React from 'react';
import {RicepeItem} from '../src/component/ricepe-item/ricepe-item';
import axiosInstance from '../src/services/axiosConfig';
import {render} from '@testing-library/react-native';
import {Text} from '../src/component/text/text';

const correctData = {
  username: 'stas.testuser1@dietdoctor.com',
  password: 'C5(Pg5qwrwP^(WJ!eS%d38FI',
};

const wrongData = {
  username: 'testuser1@dietdoctor.com',
  password: 'qwrwP^(WJ!eS%d38FI',
};

test('API POST request with correct credentials returns status code 200', async () => {
  const response = await axiosInstance.post('auth/token', correctData);
  expect(response.status).toBe(200);
});

test('API POST request with wrong credentials returns status code 401', async () => {
  try {
    await axiosInstance.post('auth/token', wrongData);
    // If the request succeeds with incorrect credentials, fail the test
    fail('API request should have raised an error');
  } catch (error: any) {
    // Check the error message or status code as needed
    expect(error.response.status).toBe(401); // Expect a 401 Unauthorized status code
  }
});

describe('Text component', () => {
  it('applies the default preset if none is provided', () => {
    const {getByText} = render(<Text text="Hello, World!" />);
    const textElement = getByText('Hello, World!');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        {color: 'black', fontSize: 13}, // Update the expected fontSize here
        {color: 'black', fontSize: undefined, marginHorizontal: undefined},
        undefined,
      ]),
    );
  });

  it('applies the specified preset', () => {
    const {getByText} = render(<Text text="Hello, World!" preset="header" />);
    const textElement = getByText('Hello, World!');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        {color: 'black', fontSize: 30}, // Update the expected fontSize here
        {color: 'black', fontSize: undefined, marginHorizontal: undefined},
        undefined,
      ]),
    );
  });
});
