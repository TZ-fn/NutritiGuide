import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import Button from 'components/common/Button';
import TextArea from 'components/common/TextArea';
import AnalysisResults from './AnalysisResults/AnalysisResults';
import fetchData from '../utils/fetchData';

const StyledMainWrapper = styled.main`
  width: auto;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 2;
  background: linear-gradient(
    ${theme.backgroundLighterGreen},
    hsl(0, 0%, 100%),
    ${theme.backgroundLighterGreen}
  );

  @media (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }
  }
`;

const StyledInputAreaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 60px;

  @media (max-width: 1300px) {
    & {
      margin: 10px 15px;
    }
  }

  @media (max-width: 470px) {
    & {
      margin: 3px 5px;
    }
  }
`;

const Main = () => {
  const [analysisResultsData, setAnalysisResultsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    // 200g%20butter
    setAnalysisResultsData(await fetchData());
    setIsLoading(false);
  }, []);

  return (
    <StyledMainWrapper>
      <StyledInputAreaWrapper>
        <TextArea />
        <Button type='button'>Analyse!</Button>
      </StyledInputAreaWrapper>
      <AnalysisResults analysisResultsData={analysisResultsData} isLoading={isLoading} />
    </StyledMainWrapper>
  );
};

export default Main;
