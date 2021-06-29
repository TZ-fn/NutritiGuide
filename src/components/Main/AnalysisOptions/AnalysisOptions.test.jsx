import React from 'react';
import { render, screen, fireEvent, getByText, waitFor } from '@testing-library/react';
import optionalTableRows from 'data/optionalTableRows';
import App from 'App';

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
  const analyseButton = screen.getByText('Analyse!');
  const options = screen.getAllByRole('checkbox').map((checkbox) => checkbox.name);
  let dataTable;

  fireEvent.change(ingredientsInput, {
    target: { value: '200g butter' },
  });
  fireEvent.click(analyseButton);

  await waitFor(() => {
    dataTable = screen.getByRole('table');
  });

  options.forEach(async (option) => {
    const optionCheckbox = screen.getByText(`${option}`);
    fireEvent.click(optionCheckbox);
    await waitFor(() => expect(getByText(dataTable, `${option}`)).toBeInTheDocument());
  });
});
