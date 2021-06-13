import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  margin: 10px 3px;

  &:active,
  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:checked {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #99a1a7;
  }

  &:checked:after {
    content: '✔';
    font-size: 27px;
    position: absolute;
    top: -12px;
    left: -1px;
    color: ${theme.accentDarkGreen};
  }
`;

const StyledLabel = styled.label`
  margin: 10px 3px 10px 15px;
`;

const Checkbox = ({ name, id }) => (
  <>
    <StyledLabel htmlFor={name}>{name}</StyledLabel>
    <StyledCheckbox type='checkbox' name={name} id={id} />
  </>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
