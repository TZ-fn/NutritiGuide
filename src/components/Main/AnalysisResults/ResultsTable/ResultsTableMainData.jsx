import React from 'react';
import PropTypes from 'prop-types';
import ResultsTableRow from './ResultsTableRow';

// Create an object with all the properties used in the table
const usedTableRows = [
  'FAT',
  'FASAT',
  'FATRN',
  'CHOLE',
  'NA',
  'CHOCDF',
  'FIBTG',
  'SUGAR',
  'PROCNT',
  'VITD',
  'CA',
  'FE',
  'K',
];

const ResultsTableMainData = ({ analysisResultsData }) => (
  <>
    {usedTableRows.map((ingredient) => (
      <ResultsTableRow
        key={ingredient}
        ingredientData={analysisResultsData.totalNutrients[ingredient]}
        totalDailyData={analysisResultsData.totalDaily[ingredient]}
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
