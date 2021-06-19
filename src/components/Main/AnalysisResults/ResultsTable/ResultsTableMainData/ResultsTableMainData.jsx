import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MainContext from 'components/Context/MainContext';
import allTableRows from 'data/allTableRows';
import ResultsTableRow from './ResultsTableRow';

const ResultsTableMainData = ({ analysisResultsData }) => {
  const {
    state: { usedTableRows },
  } = useContext(MainContext);

  return (
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
};

ResultsTableMainData.propTypes = {
  analysisResultsData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
  // usedTableRows: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ResultsTableMainData.defaultProps = {
  analysisResultsData: {},
};

export default ResultsTableMainData;
