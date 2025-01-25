import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Jimoo Software/i);
  expect(headingElement).toBeInTheDocument();
});
