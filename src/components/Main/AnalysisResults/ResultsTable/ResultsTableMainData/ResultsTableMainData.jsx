import React from 'react';
import PropTypes from 'prop-types';
import ResultsTableRow from './ResultsTableRow';
import allTableRows from './allTableRows';

const ResultsTableMainData = ({ analysisResultsData, usedTableRows }) => (
  <>
    {allTableRows
      .filter((ingredient) => usedTableRows.includes(ingredient.ingredientName))
      .map((ingredient) => (
        <ResultsTableRow
          key={ingredient.ingredientName}
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
  usedTableRows: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ResultsTableMainData.defaultProps = {
  analysisResultsData: {},
};

export default ResultsTableMainData;
