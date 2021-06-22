import React from 'react';
import { render, screen, fireEvent, getByRole, waitFor } from '@testing-library/react';
import App from 'App';

it('renders the default notification', () => {
  render(<App />);
  const defaultNotification = screen.getByText(
    /Enter your food's ingredients, each ingredient on a new line,/i,
  );
  expect(defaultNotification).toBeInTheDocument();
});

it('hides the default notification properly when the Close button is clicked', async () => {
  render(<App />);
  const defaultNotification = screen.getByText(
    /Enter your food's ingredients, each ingredient on a new line,/i,
  );
  const closeButton = getByRole(defaultNotification, 'button');
  fireEvent.click(closeButton);
  // waitFor is used, because button disappears after a short animation
  await waitFor(() => expect(defaultNotification).not.toBeInTheDocument());
});
