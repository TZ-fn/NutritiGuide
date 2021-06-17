import React from 'react';
import PropTypes from 'prop-types';
import formatNumber from 'components/utils/formatNumber';
import StyledTableElements from './StyledTableElements';

const ResultsTableRow = ({ ingredientData, totalDailyData, isIndented, isBold, customLabel }) => {
  // use custom label for the ingredient if available
  const label = customLabel || ingredientData?.label;
  return (
    <>
      <StyledTableElements.StyledTableRow isIndented={isIndented}>
        <StyledTableElements.StyledCellData>
          {isBold ? <b>{label}</b> : label}{' '}
          {ingredientData?.quantity
            ? `${formatNumber(ingredientData?.quantity)} ${ingredientData?.unit}`
            : '-'}{' '}
        </StyledTableElements.StyledCellData>

        <StyledTableElements.StyledCellData>
          {/* If the ingredient has no daily recommended value or it's not existent in the food analysed, return a hyphen instead */}
          <b>{totalDailyData?.quantity ? `${formatNumber(totalDailyData?.quantity)} %` : '-'}</b>
        </StyledTableElements.StyledCellData>
      </StyledTableElements.StyledTableRow>
      {/* Add a custom disclaimer about added sugars under the Sugars' row */}
      {ingredientData.label === 'Sugars' && (
        <StyledTableElements.StyledTableRow isIndented>
          <StyledTableElements.StyledCellData>
            Includes - Added Sugars
          </StyledTableElements.StyledCellData>
        </StyledTableElements.StyledTableRow>
      )}
    </>
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
