import React from 'react';
import { render, screen, fireEvent, getByRole, waitFor, getByText } from '@testing-library/react';
import App from 'App';

it('renders the default notification', () => {
  render(<App />);
  const defaultNotification = screen.getByText(
    /Enter your food's ingredients, each ingredient on a new line,/i,
  );
  expect(defaultNotification).toBeInTheDocument();
});

it('hides the default notification when the Close button is clicked', async () => {
  render(<App />);
  const defaultNotification = screen.getByText(
    /Enter your food's ingredients, each ingredient on a new line,/i,
  );
  const closeButton = getByRole(defaultNotification, 'button');
  fireEvent.click(closeButton);
  // waitFor is used, because button disappears after a short animation
  await waitFor(() => expect(defaultNotification).not.toBeInTheDocument());
});

it('renders the error notification when the user input is not valid and the API returns an empty response', async () => {
  render(<App />);
  const ingredientsInput = screen.getByPlaceholderText('Enter your ingredients list...');
  const analyseButton = screen.getByText('Analyse!');

  fireEvent.change(ingredientsInput, {
    target: { value: 'lorem ipsum abcdf' },
  });
  fireEvent.click(analyseButton);

  await waitFor(() =>
    expect(screen.getByText(/Please check the ingredient spelling/)).toBeInTheDocument(),
  );
});

it('renders the warning notification when the Analyse button is clicked, but the passed input value is empty', async () => {
  render(<App />);
  const ingredientsInput = screen.getByPlaceholderText('Enter your ingredients list...');
  const analyseButton = screen.getByText('Analyse!');

  fireEvent.change(ingredientsInput, {
    target: { value: '' },
  });
  fireEvent.click(analyseButton);

  await waitFor(() =>
    expect(screen.getByText(/Please enter your food's ingredients/)).toBeInTheDocument(),
  );
});
