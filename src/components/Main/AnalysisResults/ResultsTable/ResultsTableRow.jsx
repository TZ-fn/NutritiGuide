import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
/* eslint-disable */
const StyledTableRow = styled.tr`
  padding: 4px 0;
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  border-bottom: ${({ isAPS }) => (isAPS ? 'none' : '')};
`;

const StyledCellData = styled.td`
  font-weight: ${({ isBold }) => (isBold ? theme.fontWeight.bold : theme.fontWeight.regular)};
`;

const ResultsTableRow = ({ ingredientData, totalDailyData }) => (
  <StyledTableRow>
    <StyledCellData>
      <b>{ingredientData?.label}</b> {Math.round(ingredientData?.quantity.toFixed(1))}{' '}
      {ingredientData?.unit}
    </StyledCellData>

    <StyledCellData>{Math.round(totalDailyData?.quantity)} %</StyledCellData>
  </StyledTableRow>
);

export default ResultsTableRow;
