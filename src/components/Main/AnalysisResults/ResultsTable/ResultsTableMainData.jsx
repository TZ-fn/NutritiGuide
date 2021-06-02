import React from 'react';
import PropTypes from 'prop-types';
import ResultsTableRow from './ResultsTableRow';
import usedTableRows from './usedTableRows';

const ResultsTableMainData = ({ analysisResultsData }) => (
  <>
    {usedTableRows.map((ingredient) => (
      <ResultsTableRow
        key={ingredient}
        ingredientData={analysisResultsData.totalNutrients[ingredient.ingredientName]}
        totalDailyData={analysisResultsData.totalDaily[ingredient.ingredientName]}
        isIndented={ingredient.isIndented}
        isBold={ingredient.isBold}
        customLabel={ingredient.customLabel}
      />
    ))}
  </>
);

ResultsTableMainData.propTypes = {
  analysisResultsData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
};

ResultsTableMainData.defaultProps = {
  analysisResultsData: {},
};

export default ResultsTableMainData;
