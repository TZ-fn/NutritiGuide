import styled from 'styled-components';
import theme from 'theme/mainTheme';
/* eslint-disable */

const StyledTableElements = {
  StyledTable: styled.table`
    width: 100%;
    font-size: ${theme.fontSize.x3s};
  `,

  StyledTableHeader: styled.thead`
    font-size: ${theme.fontSize.x2s};
  `,

  StyledTableRow: styled.tr`
    padding: 4px 0;
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    border-bottom: ${({ isAPS }) => (isAPS ? 'none' : '')};
    ${({ isIndented }) =>
      isIndented
        ? `padding-left: 10px;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #fff 0% 2.5%, #000 2.5% 100%) 0 0 1 0;`
        : ''}
  `,

  StyledCellHeader: styled.th`
    font-size: ${theme.fontSize.x2s};
    font-weight: ${theme.fontWeight.bold};
  `,

  StyledCellData: styled.td`
    font-weight: ${({ isBold }) => (isBold ? theme.fontWeight.bold : theme.fontWeight.regular)};
  `,
};

export default StyledTableElements;
