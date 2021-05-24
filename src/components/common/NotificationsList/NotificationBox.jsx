import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme/mainTheme';
import notificationsIcons from './notificationsIcons';

const StyledNotificationBox = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  padding: 15px 40px;
  min-width: 305px;
  border: 2px solid
    hsla(${({ type }) => theme.messageBoxColors[type]}, ${theme.messageBoxColors.alpha.border});
  border-radius: 3px;
  background-color: hsla(
    ${({ type }) => theme.messageBoxColors[type]},
    ${theme.messageBoxColors.alpha.background}
  );
  box-shadow: hsla(
      ${({ type }) => theme.messageBoxColors[type]},
      ${theme.messageBoxColors.alpha.shadow}
    )
    1px 1px 5px;
  list-style: none;

  &:hover {
    box-shadow: hsla(
        ${({ type }) => theme.messageBoxColors[type]},
        ${theme.messageBoxColors.alpha.shadow}
      )
      4px 4px 5px;
  }
`;

const StyledNotificationBoxIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 30px;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: hsla(0, 100%, 100%, 0.7);
  font-size: ${theme.fontSize.x2s};
  cursor: pointer;

  &:hover {
    box-shadow: hsla(0, 0%, 0%, 0.2) 1px 1px 3px;
  }

  &:active {
    box-shadow: none;
  }
`;

const MessageBox = ({ id, type, children, handleNotificationDeleting }) => (
  <StyledNotificationBox id={id} type={type}>
    <StyledNotificationBoxIcon src={notificationsIcons[type]} alt='' />
    {children}
    <StyledCloseButton
      onClick={(e) => handleNotificationDeleting(e.currentTarget.parentNode.id)}
      type='button'
      aria-label='Close this message.'
    >
      <span aria-hidden='true'>×</span>
    </StyledCloseButton>
  </StyledNotificationBox>
);

MessageBox.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning', 'error']).isRequired,
  id: PropTypes.string.isRequired,
  handleNotificationDeleting: PropTypes.func.isRequired,
};

export default MessageBox;
