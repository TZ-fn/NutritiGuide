import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledTextArea = styled.textarea`
  width: 400px;
  height: 250px;
  padding: 15px 15px;
  border-radius: 3px;
  box-shadow: hsla(0, 0%, 0%, 0.2) 2px 2px 5px;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: ${theme.fontSize.x2s};
  resize: none;

  &:focus {
    outline: 2px solid ${theme.accentDarkGreen};
  }
`;

const TextArea = ({ children }) => <StyledTextArea>{children}</StyledTextArea>;

TextArea.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextArea;
