import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

const FlexTransitionGroup = styled(TransitionGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotificationsList = ({ notificationsArray, handleNotificationDeleting }) => (
  <StyledUnorderedList>
    <FlexTransitionGroup>
      {notificationsArray.map(({ id, type, children }) => (
        <CSSTransition classNames='notification' key={id} timeout={500}>
          {(state) => (
            <NotificationBox
              handleNotificationDeleting={handleNotificationDeleting}
              key={id}
              id={id}
              type={type}
              state={state}
            >
              {children}
            </NotificationBox>
          )}
        </CSSTransition>
      ))}
    </FlexTransitionGroup>
  </StyledUnorderedList>
);

NotificationsList.propTypes = {
  notificationsArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
  handleNotificationDeleting: PropTypes.func.isRequired,
};

export default NotificationsList;
