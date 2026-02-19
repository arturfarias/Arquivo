import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

it('renders correctly', () => {
  render(<App />);
});
