import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import optionalTableRows from 'data/optionalTableRows';
import Checkbox from 'components/common/Checkbox';
import MainContext from 'components/Context/MainContext';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  min-width: 328px;
  max-width: 400px;
  padding: 0.8rem 1rem;
  border: ${theme.defaultBorder};
  border-radius: 3px;
  box-shadow: hsla(0, 0%, 0%, 0.2) 2px 2px 5px;
  background-color: white;

  @media (min-width: 1200px) {
    & {
      width: 400px;
    }
  }
`;

const AnalysisOptions = () => {
  const { dispatch } = useContext(MainContext);
  const handleCheckboxChange = (id) => dispatch({ type: 'CHANGE_CHECKBOX_VALUE', payload: id });

  return (
    <StyledContainer>
      {optionalTableRows.map((ingredient) => (
        <Checkbox
          name={ingredient.name}
          id={ingredient.id}
          key={ingredient.id}
          onChange={(e) => handleCheckboxChange(e.target.id)}
        />
      ))}
    </StyledContainer>
  );
};

export default AnalysisOptions;
