import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import optionalTableRows from 'data/optionalTableRows';
import App from 'App';

describe('Testing the checkboxes for the optional table rows', () => {
  it('renders all the checkboxes options from the optionalTableRows file', () => {
    render(<App />);
    const allCheckboxes = optionalTableRows.map((ingredient) => ingredient.name);
    allCheckboxes.forEach((checkboxName) => {
      const currentCheckbox = screen.getByText(checkboxName);
      expect(currentCheckbox).toBeInTheDocument();
    });
  });

  it('shows/hides correct table rows when the checkboxes values are changed', async () => {
    render(<App />);
    const ingredientsInput = screen.getByPlaceholderText('Enter your ingredients list...');
    const analyseButton = screen.getByRole('button', { name: /analyse/i });
    const options = screen
      .getAllByRole('checkbox')
      .map((checkbox) => checkbox.name)
      .map((checkbox) => new RegExp(checkbox.replace(/[(]/g, '\\(').replace(/[)]/g, '\\)')));

    fireEvent.change(ingredientsInput, {
      target: { value: '200g butter' },
    });
    fireEvent.click(analyseButton);
    expect(fetch).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      const dataTable = screen.getByRole('table');
    });

    options.forEach((option) => {
      fireEvent.click(screen.getByRole('checkbox', { name: option }));
      expect(screen.getByRole('cell', { name: option })).toBeInTheDocument();
      fireEvent.click(screen.getByRole('checkbox', { name: option }));
      expect(screen.queryByRole('cell', { name: option })).not.toBeInTheDocument();
    });
  });
});
