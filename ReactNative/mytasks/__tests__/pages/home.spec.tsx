import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../../src/pages/Home';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewTask = getByPlaceholderText('Nova Tarefa...');

    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });
});
