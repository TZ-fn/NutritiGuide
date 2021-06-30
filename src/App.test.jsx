import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import mockedApiResponse from 'data/mockedApiResponse';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ mockedApiResponse }),
    }),
  );
});

it('fetches and renders the data when the "Analyse" button is pressed', async () => {
  render(<App />);
  const ingredientsInput = screen.getByPlaceholderText('Enter your ingredients list...');
  const analyseButton = screen.getByRole('button', { name: /analyse/i });

  fireEvent.change(ingredientsInput, {
    target: { value: '200g butter' },
  });
  fireEvent.click(analyseButton);

  expect(await screen.findByText(/Calories/, {}, { timeout: 3000 })).toBeInTheDocument();
});
