import Button from 'components/common/Button';
import TextArea from 'components/common/TextArea';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import AnalysisIngredients from './AnalysisIngredients/AnalysisIngredients';
import AnalysisResults from './AnalysisResults/AnalysisResults';

const StyledMainWrapper = styled.main`
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 2;
  background: linear-gradient(
    ${theme.backgroundLighterGreen},
    hsl(0, 0%, 100%),
    ${theme.backgroundLighterGreen}
  );
`;

const StyledInputAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 60px;
`;

const Main = () => (
  <StyledMainWrapper>
    <StyledInputAreaWrapper>
      <TextArea />
      <Button type='button'>Analyse!</Button>
      <AnalysisIngredients />
    </StyledInputAreaWrapper>
    <AnalysisResults>Results</AnalysisResults>
  </StyledMainWrapper>
);

export default Main;
