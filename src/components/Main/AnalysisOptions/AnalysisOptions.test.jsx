import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
