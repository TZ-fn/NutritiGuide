import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'theme/mainTheme';
import setHslaColor from 'components/utils/setHslaColor';
import notificationsIcons from './notificationsIcons';

const StyledNotificationBox = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  padding: 15px 40px;
  min-width: 328px;
  max-width: 860px;
  border: 2px solid ${({ type }) => setHslaColor(type, 'border')};
  border-left: 10px solid ${({ type }) => setHslaColor(type, 'border')};
  border-radius: 3px;
  background-color: ${({ type }) => setHslaColor(type, 'background')};
  box-shadow: ${({ type }) => setHslaColor(type, 'shadow')} 1px 1px 5px;
  list-style: none;

  transition: 0.3s;
  opacity: ${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)};
  display: ${({ state }) => (state === 'exited' ? 'none' : 'flex')};

  &:hover {
    box-shadow: ${({ type }) => setHslaColor(type, 'shadow')} 3px 3px 5px;
  }
`;

const StyledNotificationBoxIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 30px;

  @media (max-width: 600px) {
    & {
      margin-right: 10px;
      margin-left: -20px;
    }
  }
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

const MessageBox = ({ id, type, children, handleNotificationDeleting, state }) => (
  <StyledNotificationBox state={state} id={id} type={type}>
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
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning', 'error']).isRequired,
  children: PropTypes.node.isRequired,
  handleNotificationDeleting: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default MessageBox;
