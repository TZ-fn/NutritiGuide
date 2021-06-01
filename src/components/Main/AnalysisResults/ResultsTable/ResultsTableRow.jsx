import React from 'react';
import StyledTableElements from './StyledTableElements';
/* eslint-disable */

const ResultsTableRow = ({ ingredientData, totalDailyData, isIndented }) => (
  <StyledTableElements.StyledTableRow>
    <StyledTableElements.StyledCellData>
      <b>{ingredientData?.label}</b> {Math.round(ingredientData?.quantity.toFixed(1))}{' '}
      {ingredientData?.unit}
    </StyledTableElements.StyledCellData>

    <StyledTableElements.StyledCellData>
      {Math.round(totalDailyData?.quantity)} %
    </StyledTableElements.StyledCellData>
  </StyledTableElements.StyledTableRow>
);

export default ResultsTableRow;
