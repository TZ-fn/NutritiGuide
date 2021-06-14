import React from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 328px;
  max-width: 400px;
  padding: 8px 15px;
  border: 1px solid black;

  @media (min-width: 1200px) {
    & {
      width: 400px;
    }
  }
`;

const StyleInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const AnalysisOptions = () => (
  <StyledContainer>
    <StyleInnerContainer id='vitamins'>
      <Checkbox name='Vitamin A' id='VITA_RAE' />
      <Checkbox name='Vitamin C' id='VITC' />
      <Checkbox name='Thiamin (B1)' id='THIA' />
      <Checkbox name='Riboflavin (B2)' id='RIBF' />
      <Checkbox name='Niacin (B3)' id='NIA' />
      <Checkbox name='Vitamin B6' id='VITB6A' />
      <Checkbox name='Folate equivalent (total)' id='FOLDFE' />
      <Checkbox name='Folate (food)' id='FOLFD' />
      <Checkbox name='Folic acid' id='FOLAC' />
      <Checkbox name='Vitamin B12' id='VITB12' />
      <Checkbox name='Vitamin D' id='VITD' />
      <Checkbox name='Vitamin K' id='VITK1' />
    </StyleInnerContainer>
    <StyleInnerContainer id='microelements'>
      <Checkbox name='Calcium' id='CA' />
      <Checkbox name='Magnesium' id='MG' />
      <Checkbox name='Potassium' id='K' />
      <Checkbox name='Iron' id='FE' />
      <Checkbox name='Phosphorus' id='P' />
      <Checkbox name='Zinc' id='ZN' />
    </StyleInnerContainer>
  </StyledContainer>
);

export default AnalysisOptions;
