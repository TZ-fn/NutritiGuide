import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('fetches and renders the data when the "Analyse" button is pressed', async () => {
  render(<App />);
  const ingredientsInput = screen.getByPlaceholderText('Enter your ingredients list...');
  const analyseButton = screen.getByText('Analyse!');

  fireEvent.change(ingredientsInput, {
    target: { value: '200g butter' },
  });
  fireEvent.click(analyseButton);

  expect(await screen.findByText(/Calories/, {}, { timeout: 2000 })).toBeInTheDocument();
});
