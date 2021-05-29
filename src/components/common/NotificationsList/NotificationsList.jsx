import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';
import NotificationBox from './NotificationBox';

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

const NotificationsList = ({ notificationsArray, handleNotificationDeleting }) => (
  <StyledUnorderedList>
    <TransitionGroup>
      {notificationsArray.map(({ id, type, children }) => (
        <CSSTransition classNames='notification' key={id} timeout={{ enter: 500, exit: 450 }}>
          <NotificationBox
            handleNotificationDeleting={handleNotificationDeleting}
            key={id}
            id={id}
            type={type}
          >
            {children}
          </NotificationBox>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </StyledUnorderedList>
);

NotificationsList.propTypes = {
  notificationsArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
  handleNotificationDeleting: PropTypes.func.isRequired,
};

export default NotificationsList;
