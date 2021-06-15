import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  margin: 0;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  margin-right: -2px;
  padding: 12px;
  border-radius: 3px;
  display: inline-block;
  position: relative;

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
    font-size: 30px;
    position: absolute;
    top: -9px;
    left: 0;
    color: ${theme.accentDarkGreen};
  }
`;

const StyledLabel = styled.label`
  padding: 0.21rem 0.5rem;
  margin-left: -2px;
`;

const StyleInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  width: max-content;
  margin: 5px 3px;

  & input[type='checkbox']:checked + label {
    color: white;
    background-color: ${theme.accentDarkGreen};
  }
`;

const Checkbox = ({ name, id }) => (
  <StyleInnerContainer>
    <StyledCheckbox type='checkbox' name={name} id={id} />
    <StyledLabel htmlFor={id}>{name}</StyledLabel>
  </StyleInnerContainer>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
