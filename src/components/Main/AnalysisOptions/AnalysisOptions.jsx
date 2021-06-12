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
  max-width: 400px;
  border: 1px solid black;
`;

const AnalysisOptions = () => (
  <StyledAnalysisOptionsContainer>
    <Checkbox name='proteins' />
    <Checkbox name='fats' />
    <Checkbox name='carbs' />
    <Checkbox name='proteins2' />
    <Checkbox name='fats3' />
    <Checkbox name='carbs4' />
    <Checkbox name='proteins5' />
    <Checkbox name='fats6' />
    <Checkbox name='carbs7' />
    <Checkbox name='proteins' />
    <Checkbox name='fats' />
    <Checkbox name='carbs' />
    <Checkbox name='proteins2' />
    <Checkbox name='fats3' />
    <Checkbox name='carbs4' />
    <Checkbox name='proteins5' />
    <Checkbox name='fats6' />
    <Checkbox name='carbs7' />
  </StyledAnalysisOptionsContainer>
);

export default AnalysisOptions;
