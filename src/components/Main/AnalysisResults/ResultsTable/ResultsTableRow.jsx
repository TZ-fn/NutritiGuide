import React from 'react';
import PropTypes from 'prop-types';
import StyledTableElements from './StyledTableElements';

const ResultsTableRow = ({ ingredientData, totalDailyData, isIndented, isBold, customLabel }) => {
  const label = customLabel || ingredientData?.label;
  return (
    <StyledTableElements.StyledTableRow isIndented={isIndented}>
      <StyledTableElements.StyledCellData>
        {isBold ? <b>{label}</b> : label} {Math.round(ingredientData?.quantity.toFixed(1))}{' '}
        {ingredientData?.unit}
      </StyledTableElements.StyledCellData>

      <StyledTableElements.StyledCellData>
        {/* If the ingredient has no daily recommended value return a hyphen instead */}
        <b>{totalDailyData?.quantity ? `${Math.round(totalDailyData?.quantity)} %` : '-'}</b>
      </StyledTableElements.StyledCellData>
    </StyledTableElements.StyledTableRow>
  );
};

ResultsTableRow.propTypes = {
  ingredientData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
  totalDailyData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
  isIndented: PropTypes.bool,
  isBold: PropTypes.bool,
  customLabel: PropTypes.string,
};

ResultsTableRow.defaultProps = {
  ingredientData: {},
  totalDailyData: {},
  isIndented: false,
  isBold: false,
  customLabel: '',
};

export default ResultsTableRow;
