import React from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';

const StyledAnalysisOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 328px;
  max-width: 380px;
  border: 1px solid black;

  @media (min-width: 1200px) {
    & {
      width: 400px;
    }
  }
`;

const AnalysisOptions = () => (
  <StyledAnalysisOptionsContainer>
    <Checkbox name='proteins' id={1} />
    <Checkbox name='fats' id={2} />
    <Checkbox name='carbs' id={3} />
    <Checkbox name='proteins2' id={4} />
    <Checkbox name='fats3' id={5} />
    <Checkbox name='carbs4' id={6} />
    <Checkbox name='proteins5' id={7} />
    <Checkbox name='fats6' id={8} />
    <Checkbox name='carbs7' id={9} />
  </StyledAnalysisOptionsContainer>
);

export default AnalysisOptions;
