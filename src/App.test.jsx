import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import optionalTableRows from 'data/optionalTableRows';
import App from './App';

it('renders the default notification', () => {
  render(<App />);
  const defaultNotification = screen.getByText(
    /Enter your food's ingredients, each ingredient on a new line,/i,
  );
  expect(defaultNotification).toBeInTheDocument();
});

it('renders all the checkboxes options from the optionalTableRows file', () => {
  render(<App />);
  const allCheckboxes = optionalTableRows.map((ingredient) => ingredient.name);
  allCheckboxes.forEach((checkboxName) => {
    const currentCheckbox = screen.getByText(checkboxName);
    expect(currentCheckbox).toBeInTheDocument();
  });
});

it('fetches and renders the data when the "Analyse" button is pressed', async () => {
  render(<App />);
  const ingredientsInput = screen.getByPlaceholderText('Enter your ingredient list...');
  const analyseButton = screen.getByText('Analyse!');

  fireEvent.change(ingredientsInput, {
    target: { value: '200g butter' },
  });
  fireEvent.click(analyseButton);

  expect(await screen.findByText(/Calories/, {}, { timeout: 2000 })).toBeInTheDocument();
});
