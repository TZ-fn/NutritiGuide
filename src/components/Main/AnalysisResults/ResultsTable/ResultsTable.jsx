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
`;

const StyledIndentedTableRow = styled(StyledTableRow)`
  padding-left: 10px;
  padding-right: -100px;
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
        <StyledDailyValueCellData>% Daily Value*</StyledDailyValueCellData>
      </StyledTableRow>

      {/* hard-coded markup for values that will always appear, I will try to refactor it using DRY principle */}
      {/* Total Fat */}
      <StyledTableRow>
        <StyledCellData>
          <b>Total {analysisResultsData?.totalNutrients.FAT.label}</b>{' '}
          {analysisResultsData?.totalNutrients.FAT.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.FAT.unit}
        </StyledCellData>
        <StyledCellData>{analysisResultsData?.totalDaily.FAT.quantity.toFixed(0)} %</StyledCellData>
      </StyledTableRow>

      {/* Saturated Fat */}
      <StyledIndentedTableRow>
        <StyledCellData>
          {analysisResultsData?.totalNutrients.FASAT.label} Fat{' '}
          {analysisResultsData?.totalNutrients.FASAT.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.FASAT.unit}
        </StyledCellData>
        <StyledCellData>
          {analysisResultsData?.totalDaily.FASAT.quantity.toFixed(0)} %
        </StyledCellData>
      </StyledIndentedTableRow>

      {/* Trans Fat */}
      <StyledIndentedTableRow>
        {analysisResultsData?.totalNutrients.FATRN ? (
          <StyledCellData>
            {analysisResultsData?.totalNutrients.FATRN.label} Fat{' '}
            {analysisResultsData?.totalNutrients?.FATRN?.quantity.toFixed(1)}{' '}
            {analysisResultsData?.totalNutrients?.FATRN?.unit}
          </StyledCellData>
        ) : (
          <StyledCellData>Trans Fat -</StyledCellData>
        )}
        <StyledCellData>-</StyledCellData>
      </StyledIndentedTableRow>

      {/* Cholesterol */}
      <StyledTableRow>
        <StyledCellData>
          <b>{analysisResultsData?.totalNutrients.CHOLE.label}</b>{' '}
          {analysisResultsData?.totalNutrients.CHOLE.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.CHOLE.unit}
        </StyledCellData>
        <StyledCellData>
          {analysisResultsData?.totalDaily.CHOLE.quantity.toFixed(0)} %
        </StyledCellData>
      </StyledTableRow>

      {/* Sodium */}
      <StyledTableRow>
        <StyledCellData>
          <b>{analysisResultsData?.totalNutrients.NA.label}</b>{' '}
          {analysisResultsData?.totalNutrients.NA.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.NA.unit}
        </StyledCellData>
        <StyledCellData>{analysisResultsData?.totalDaily.NA.quantity.toFixed(0)} %</StyledCellData>
      </StyledTableRow>

      {/* Total Carbohydrates */}
      <StyledTableRow>
        <StyledCellData>
          <b>Total Carbohydrate</b> {analysisResultsData?.totalNutrients.CHOCDF.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.CHOCDF.unit}
        </StyledCellData>
        <StyledCellData>
          {analysisResultsData?.totalDaily.CHOCDF.quantity.toFixed(0)} %
        </StyledCellData>
      </StyledTableRow>

      {/* Fiber */}
      <StyledIndentedTableRow>
        <StyledCellData>
          Dietary {analysisResultsData?.totalNutrients.FIBTG.label}{' '}
          {analysisResultsData?.totalNutrients.FIBTG.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.FIBTG.unit}
        </StyledCellData>
        <StyledCellData>
          {analysisResultsData?.totalDaily.FIBTG.quantity.toFixed(0)} %
        </StyledCellData>
      </StyledIndentedTableRow>

      {/* Sugars */}
      <StyledIndentedTableRow>
        {analysisResultsData?.totalNutrients.SUGAR ? (
          <StyledCellData>
            Total {analysisResultsData?.totalNutrients.SUGAR.label}{' '}
            {analysisResultsData?.totalNutrients?.SUGAR?.quantity.toFixed(1)}{' '}
            {analysisResultsData?.totalNutrients?.SUGAR?.unit}
          </StyledCellData>
        ) : (
          <StyledCellData>Sugars -</StyledCellData>
        )}
        <StyledCellData>-</StyledCellData>
      </StyledIndentedTableRow>

      {/* Added Sugars Info */}
      <StyledIndentedTableRow>
        <StyledCellData>Includes - Added Sugars</StyledCellData>
      </StyledIndentedTableRow>

      {/* Protein */}
      <StyledTableRow>
        <StyledCellData>
          <b>{analysisResultsData?.totalNutrients.PROCNT.label}</b>{' '}
          {analysisResultsData?.totalNutrients.PROCNT.quantity.toFixed(1)}{' '}
          {analysisResultsData?.totalNutrients.PROCNT.unit}
        </StyledCellData>
        <StyledCellData>
          {analysisResultsData?.totalDaily.PROCNT.quantity.toFixed(0)} %
        </StyledCellData>
      </StyledTableRow>
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
