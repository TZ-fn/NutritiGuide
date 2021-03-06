import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme/mainTheme';

const StyledTextArea = styled.textarea`
  min-width: 328px;
  min-height: 235px;
  padding: 15px 15px;
  border: ${theme.defaultBorder};
  border-radius: 3px;
  box-shadow: hsla(0, 0%, 0%, 0.2) 2px 2px 5px;
  font-size: ${theme.fontSize.x2s};
  resize: none;

  &:focus {
    outline: 2px solid ${theme.accentDarkGreen};
  }

  @media (min-width: 450px) {
    & {
      width: 400px;
    }
  }
`;

const TextArea = ({ onChange, placeholder }) => (
  <StyledTextArea placeholder={placeholder} onChange={onChange} />
);

TextArea.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  onChange: null,
};

export default TextArea;
