import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotificationBox from './NotificationBox';

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

const NotificationsList = ({ notificationsArray, handleNotificationDeleting }) => (
  <StyledUnorderedList>
    {notificationsArray.map(({ id, type, children }) => (
      <NotificationBox
        handleNotificationDeleting={handleNotificationDeleting}
        key={id}
        id={id}
        type={type}
      >
        {children}
      </NotificationBox>
    ))}
  </StyledUnorderedList>
);

NotificationsList.propTypes = {
  notificationsArray: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      children: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleNotificationDeleting: PropTypes.func.isRequired,
};

export default NotificationsList;
