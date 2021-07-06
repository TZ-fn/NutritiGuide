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
    analyseButton = screen.getByRole('button', { name: /analyse/i });
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
    expect(await screen.findByText(/Please enter your food's ingredients/)).toBeInTheDocument();
  });

  it('renders the error notification when the ingredients are invalid and the response is empty', async () => {
    fireEvent.change(ingredientsInput, {
      target: { value: '1234asdf' },
    });
    fireEvent.click(analyseButton);
    expect(await screen.findByText(/Please check the ingredient spelling/)).toBeInTheDocument();
  });

  it('renders the error notification when a server error occurs', async () => {
    fireEvent.change(ingredientsInput, {
      target: { value: 'SERVER_ERROR' },
    });
    fireEvent.click(analyseButton);
    expect(await screen.findByText(/Please try again/)).toBeInTheDocument();
  });
});
