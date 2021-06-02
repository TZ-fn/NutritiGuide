import React from 'react';
import PropTypes from 'prop-types';
import StyledTableElements from './StyledTableElements';

const ResultsTableRow = ({ ingredientData, totalDailyData, isIndented }) => (
  <StyledTableElements.StyledTableRow isIndented={isIndented}>
    <StyledTableElements.StyledCellData>
      <b>{ingredientData?.label}</b> {Math.round(ingredientData?.quantity.toFixed(1))}{' '}
      {ingredientData?.unit}
    </StyledTableElements.StyledCellData>

    <StyledTableElements.StyledCellData>
      {Math.round(totalDailyData?.quantity)} %
    </StyledTableElements.StyledCellData>
  </StyledTableElements.StyledTableRow>
);

ResultsTableRow.propTypes = {
  ingredientData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
  totalDailyData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
  isIndented: PropTypes.bool,
};

ResultsTableRow.defaultProps = {
  ingredientData: {},
  totalDailyData: {},
  isIndented: false,
};

export default ResultsTableRow;
