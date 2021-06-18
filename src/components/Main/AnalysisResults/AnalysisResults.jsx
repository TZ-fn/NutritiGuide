import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import Heading from 'components/common/Heading';
import Loader from 'components/common/Loader';
import ResultsTable from './ResultsTable/ResultsTable';

const StyledWrapper = styled.section`
  min-width: 330px;
  max-width: 400px;
  min-height: 635px;
  height: max-content;
  margin: 10px 35px;
  padding: 0 20px;
  border: ${theme.defaultBorder};
  border-radius: 3px;
  background-color: white;
  box-shadow: hsla(0, 0%, 0%, 0.2) 2px 2px 5px;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: ${theme.fontSize.x2s};

  & > h2 {
    margin: 10px 5px;
    padding-bottom: 7px;
    border-bottom: 8px solid black;
    font-size: ${theme.fontSize.l};
    font-weight: ${theme.fontWeight.regular};
  }

  @media (max-width: 1200px) {
    & {
      margin: 10px 5px;
    }
  }

  @media (min-width: 1200px) {
    & {
      width: 400px;
    }
  }
`;

const StyledDailyValuesInfo = styled.p`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: ${theme.fontSize.x4s};
`;

const AnalysisResults = ({ analysisResultsData, isLoading }) => {
  if (!isLoading && !analysisResultsData?.calories) {
    return (
      <StyledWrapper>
        <Heading HeadingLevel='h2'>Nutrition Facts</Heading>
        <p>Please enter your food&apos;s ingredients.</p>
      </StyledWrapper>
    );
  }
  return isLoading ? (
    <StyledWrapper>
      <Loader />
    </StyledWrapper>
  ) : (
    <StyledWrapper>
      <Heading HeadingLevel='h2'>Nutrition Facts</Heading>
      <ResultsTable analysisResultsData={analysisResultsData} />
      <StyledDailyValuesInfo>
        * Percent Daily Values are based on a 2,000 calorie diet.
      </StyledDailyValuesInfo>
    </StyledWrapper>
  );
};

AnalysisResults.propTypes = {
  analysisResultsData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  ),
  isLoading: PropTypes.bool.isRequired,
};

AnalysisResults.defaultProps = {
  analysisResultsData: {},
};

export default AnalysisResults;
