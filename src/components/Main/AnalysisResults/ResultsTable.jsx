import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme/mainTheme';

const StyledResultsTable = styled.table`
  width: 100%;
  font-size: ${theme.fontSize.x3s};
`;

const StyledTableHeader = styled.thead`
  font-size: ${theme.fontSize.x2s};
`;

const StyledCellHeader = styled.thead`
  font-size: ${theme.fontSize.x2s};
  font-weight: ${theme.fontWeight.bold};
`;

const StyledCaloriesCellHeader = styled(StyledCellHeader)`
  font-size: ${theme.fontSize.m};
`;

const StyledTableRow = styled.tr`
  padding: 3px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const StyledIndentedTableRow = styled(StyledTableRow)`
  padding-left: 10px;
  padding-right: -100px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #fff 0% 4%, #000 4% 100%) 0 0 1 0;
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

const ResultsTable = ({ analysisResultsData }) => (
  <StyledResultsTable>
    <StyledTableHeader>
      <StyledTableRow>
        <StyledCellHeader>Amount Per Serving</StyledCellHeader>
      </StyledTableRow>
    </StyledTableHeader>

    <tbody>
      <StyledCaloriesTableRow>
        <StyledCaloriesCellHeader>Calories</StyledCaloriesCellHeader>
        <StyledCaloriesCellData>{analysisResultsData?.calories}</StyledCaloriesCellData>
      </StyledCaloriesTableRow>

      <StyledTableRow>
        <StyledCellData />
        <StyledCellData>% Daily Value*</StyledCellData>
      </StyledTableRow>

      <StyledTableRow>
        <span>
          <StyledCellData isBold>Total Fat</StyledCellData>
          <StyledCellData>
            {analysisResultsData?.totalNutrients.FAT.quantity.toFixed(2)}{' '}
            {analysisResultsData?.totalNutrients.FAT.unit}
          </StyledCellData>
        </span>
        <StyledCellData>{analysisResultsData?.totalDaily.FAT.quantity.toFixed(2)} %</StyledCellData>
      </StyledTableRow>

      <StyledIndentedTableRow>
        <div>
          <StyledCellData>Saturated Fat</StyledCellData>
          <StyledCellData>
            {analysisResultsData?.totalNutrients.FASAT.quantity.toFixed(2)}{' '}
            {analysisResultsData?.totalNutrients.FASAT.unit}
          </StyledCellData>
        </div>
        <StyledCellData>
          {analysisResultsData?.totalDaily.FASAT.quantity.toFixed(2)} %
        </StyledCellData>
      </StyledIndentedTableRow>

      {/* <StyledIndentedTableRow>
        <div>
          <StyledCellData>Trans Fat</StyledCellData>
          <StyledCellData>
            {analysisResultsData?.totalNutrients?.FATRN?.quantity?.toFixed(2)}{' '}
            {analysisResultsData?.totalNutrients?.FATRN?.unit}
          </StyledCellData>
        </div>
        <StyledCellData>{analysisResultsData?.totalDaily.FAT.quantity.toFixed(2)} %</StyledCellData>
      </StyledIndentedTableRow> */}
    </tbody>
  </StyledResultsTable>
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
