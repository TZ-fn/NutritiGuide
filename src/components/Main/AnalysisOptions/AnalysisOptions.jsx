import React from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';

const StyledAnalysisOptionsContainer = styled.div``;

const AnalysisOptions = () => (
  <StyledAnalysisOptionsContainer>
    <Checkbox />
    <Checkbox />
    <Checkbox />
    <Checkbox />
  </StyledAnalysisOptionsContainer>
);

export default AnalysisOptions;
