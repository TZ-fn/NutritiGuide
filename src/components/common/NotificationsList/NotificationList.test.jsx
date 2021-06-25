import React from 'react';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import App from 'App';

describe('Testing the notifications', () => {
  let defaultNotification;
  let ingredientsInput;
  let analyseButton;
  beforeEach(() => {
    render(<App />);
    defaultNotification = screen.getByText(
      /Enter your food's ingredients, each ingredient on a new line,/,
    );
    ingredientsInput = screen.getByPlaceholderText('Enter your ingredients list...');
    analyseButton = screen.getByText('Analyse!');
  });

  it('renders the default notification', () => {
    expect(defaultNotification).toBeInTheDocument();
  });

  it('hides the default notification when the Close button is clicked', async () => {
    const closeButton = within(defaultNotification).getByRole('button');
    fireEvent.click(closeButton);
    // waitFor has to be used, because button disappears after a short animation
    await waitFor(() => expect(defaultNotification).not.toBeInTheDocument());
  });

  it('renders the warning notification when the Analyse button is clicked, but the passed input value is empty', async () => {
    fireEvent.change(ingredientsInput, {
      target: { value: '' },
    });
    fireEvent.click(analyseButton);
    await waitFor(() =>
      expect(screen.getByText(/Please enter your food's ingredients/)).toBeInTheDocument(),
    );
  });

  it('renders the error notification when the user input is not valid and the API returns an empty response', async () => {
    fireEvent.change(ingredientsInput, {
      target: { value: 'lorem ipsum abcdf' },
    });
    fireEvent.click(analyseButton);
    await waitFor(() =>
      expect(screen.getByText(/Please check the ingredient spelling/)).toBeInTheDocument(),
    );
  });
});
