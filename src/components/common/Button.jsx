import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledButton = styled.button`
  max-width: 10rem;
  margin: 20px 0;
  padding: 15px 35px;
  border-radius: 3px;
  border: 1px solid ${theme.accentDarkGreen};
  background: linear-gradient(
    90deg,
    ${theme.backgroundLighterGreen} 66%,
    ${theme.backgroundLightGreen}
  );
  box-shadow: hsla(0, 0%, 0%, 0.2) 1px 1px 5px;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: ${theme.fontSize.x2s};
  font-weight: 700;

  &:hover {
    box-shadow: hsla(0, 0%, 0%, 0.2) 3px 3px 5px;
  }

  &:active {
    box-shadow: none;
  }

  &:focus {
    outline: 2px solid ${theme.accentDarkGreen};
  }
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;