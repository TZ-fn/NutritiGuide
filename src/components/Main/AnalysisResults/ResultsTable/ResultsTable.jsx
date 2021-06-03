import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme/mainTheme';
import ResultsTableMainData from './ResultsTableMainData';
import StyledTableElements from './StyledTableElements';

const StyledCaloriesCellHeader = styled(StyledTableElements.StyledCellHeader)`
  font-size: ${theme.fontSize.m};
`;

const StyledCaloriesTableRow = styled(StyledTableElements.StyledTableRow)`
  border-bottom: 5px solid black;
`;

const StyledCaloriesCellData = styled(StyledTableElements.StyledCellData)`
  font-size: ${theme.fontSize.s};
`;

const StyledDailyValueCellData = styled(StyledTableElements.StyledCellData)`
  font-size: ${theme.fontSize.x4s};
`;

const ResultsTable = ({ analysisResultsData }) => (
  <StyledTableElements.StyledTable>
    <StyledTableElements.StyledTableHeader>
      <StyledTableElements.StyledTableRow isAPS>
        <StyledTableElements.StyledCellHeader>
          Amount Per Serving
        </StyledTableElements.StyledCellHeader>
      </StyledTableElements.StyledTableRow>
    </StyledTableElements.StyledTableHeader>

    <tbody>
      {/* Main table heading */}
      <StyledCaloriesTableRow>
        <StyledCaloriesCellHeader>Calories</StyledCaloriesCellHeader>
        <StyledCaloriesCellData>{analysisResultsData?.calories}</StyledCaloriesCellData>
      </StyledCaloriesTableRow>
      <StyledTableElements.StyledTableRow>
        <StyledTableElements.StyledCellData />
        <StyledDailyValueCellData>% Daily Value*</StyledDailyValueCellData>
      </StyledTableElements.StyledTableRow>

      <ResultsTableMainData analysisResultsData={analysisResultsData} />
    </tbody>
  </StyledTableElements.StyledTable>
);

ResultsTable.propTypes = {
  analysisResultsData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
};

ResultsTable.defaultProps = {
  analysisResultsData: {},
};

export default ResultsTable;
