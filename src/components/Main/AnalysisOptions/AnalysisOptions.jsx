import React from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';

const StyledAnalysisOptionsContainer = styled.div``;

const AnalysisOptions = () => (
  <StyledAnalysisOptionsContainer>
    <Checkbox name='proteins' />
    <Checkbox name='fats' />
    <Checkbox name='carbs' />
  </StyledAnalysisOptionsContainer>
);

export default AnalysisOptions;
