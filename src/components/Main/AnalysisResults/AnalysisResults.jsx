import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledWrapper = styled.div`
  width: 400px;
  height: 550px;
  margin: 10px 75px;
  padding: 15px 15px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
  box-shadow: hsla(0, 0%, 0%, 0.2) 2px 2px 5px;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: ${theme.fontSize.x2s};

  @media (max-width: 1300px) {
    & {
      margin: 10px 15px;
    }
  }
`;

const AnalysisResults = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

AnalysisResults.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AnalysisResults;
