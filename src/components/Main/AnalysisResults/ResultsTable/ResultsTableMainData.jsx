/* eslint-disable */
import React from 'react';
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
        ingredientData={analysisResultsData.totalNutrients[ingredient]}
        totalDailyData={analysisResultsData.totalDaily[ingredient]}
      />
    ))}
  </>
);

export default ResultsTableMainData;
