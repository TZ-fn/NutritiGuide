/* eslint-disable */
import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
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
  const { state, dispatch } = useContext(MainContext);
  const handleCheckboxChange = (id) => dispatch({ type: 'CHANGE_CHECKBOX_VALUE', payload: id });

  return (
    <StyledContainer>
      <Checkbox
        name='Vitamin A'
        id='VITA_RAE'
        onChange={(e) => handleCheckboxChange(e.target.id)}
      />
      <Checkbox name='Vitamin C' id='VITC' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Thiamin (B1)' id='THIA' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox
        name='Riboflavin (B2)'
        id='RIBF'
        onChange={(e) => handleCheckboxChange(e.target.id)}
      />
      <Checkbox name='Niacin (B3)' id='NIA' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Vitamin B6' id='VITB6A' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox
        name='Folate equivalent (total)'
        id='FOLDFE'
        onChange={(e) => handleCheckboxChange(e.target.id)}
      />
      <Checkbox
        name='Folate (food)'
        id='FOLFD'
        onChange={(e) => handleCheckboxChange(e.target.id)}
      />
      <Checkbox name='Folic acid' id='FOLAC' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox
        name='Vitamin B12'
        id='VITB12'
        onChange={(e) => handleCheckboxChange(e.target.id)}
      />
      <Checkbox name='Vitamin D' id='VITD' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Vitamin K' id='VITK1' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Calcium' id='CA' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Magnesium' id='MG' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Potassium' id='K' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Iron' id='FE' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Phosphorus' id='P' onChange={(e) => handleCheckboxChange(e.target.id)} />
      <Checkbox name='Zinc' id='ZN' onChange={(e) => handleCheckboxChange(e.target.id)} />
    </StyledContainer>
  );
};

export default AnalysisOptions;
