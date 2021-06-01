import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme/mainTheme';
import ResultsTableMainData from './ResultsTableMainData';
/* eslint-disable */

const StyledTable = styled.table`
  width: 100%;
  font-size: ${theme.fontSize.x3s};
`;

const StyledTableHeader = styled.thead`
  font-size: ${theme.fontSize.x2s};
`;

const StyledCellHeader = styled.th`
  font-size: ${theme.fontSize.x2s};
  font-weight: ${theme.fontWeight.bold};
`;

const StyledCaloriesCellHeader = styled(StyledCellHeader)`
  font-size: ${theme.fontSize.m};
`;

const StyledTableRow = styled.tr`
  padding: 4px 0;
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  border-bottom: ${({ isAPS }) => (isAPS ? 'none' : '')};
`;

const StyledIndentedTableRow = styled(StyledTableRow)`
  padding-left: 10px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #fff 0% 2.5%, #000 2.5% 100%) 0 0 1 0;
`;

const StyledCaloriesTableRow = styled(StyledTableRow)`
  border-bottom: 5px solid black;
`;

const StyledCellData = styled.td`
  font-weight: ${({ isBold }) => (isBold ? theme.fontWeight.bold : theme.fontWeight.regular)};
`;

const StyledCaloriesCellData = styled(StyledCellData)`
  font-size: ${theme.fontSize.s};
`;

const StyledDailyValueCellData = styled(StyledCellData)`
  font-size: ${theme.fontSize.x4s};
`;

const ResultsTable = ({ analysisResultsData }) => (
  <StyledTable>
    <StyledTableHeader>
      <StyledTableRow isAPS>
        <StyledCellHeader>Amount Per Serving</StyledCellHeader>
      </StyledTableRow>
    </StyledTableHeader>

    <tbody>
      {/* Main table heading */}
      <StyledCaloriesTableRow>
        <StyledCaloriesCellHeader>Calories</StyledCaloriesCellHeader>
        <StyledCaloriesCellData>{analysisResultsData?.calories}</StyledCaloriesCellData>
      </StyledCaloriesTableRow>
      <StyledTableRow>
        <StyledCellData />
        <StyledDailyValueCellData>% Daily Value*</StyledDailyValueCellData>
      </StyledTableRow>
      <ResultsTableMainData analysisResultsData={analysisResultsData} />
    </tbody>
  </StyledTable>
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
