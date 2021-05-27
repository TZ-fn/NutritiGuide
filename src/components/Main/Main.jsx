import React, { useState, useReducer, useContext } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';
import NotificationsList from 'components/common/NotificationsList/NotificationsList';
import {
  emptyInputNotification,
  emptyResponseNotification,
} from 'components/reducer/defaultNotifications';
import initialState from 'components/reducer/initialState';
import reducer from 'components/reducer/reducer';
import AnalysisResults from './AnalysisResults/AnalysisResults';
import fetchData from '../utils/fetchData';
import encodeInput from '../utils/encodeInput';
/* eslint-disable */
const StyledMainWrapper = styled.main`
  width: auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 2;
  background: linear-gradient(
    ${theme.backgroundLighterGreen},
    hsl(0, 0%, 100%),
    ${theme.backgroundLighterGreen}
  );
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const StyledInputAreaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 30px;

  @media (max-width: 1200px) {
    & {
      margin: 10px 15px;
    }
  }

  @media (max-width: 470px) {
    & {
      margin: 3px 5px;
    }
  }
`;

const Main = () => {
  const [analysisResultsData, setAnalysisResultsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const notificationsContext = useContext(state.notifications);

  const handleDataFetching = async (inputData) => {
    // remove all error and warning notifications
    dispatch({ type: 'CLEAR_ERRORS', payload: {} });

    // display an error when the input is empty
    if (!inputValue.trim()) {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: emptyInputNotification,
      });
      return;
    }

    setIsLoading(true);
    const data = await fetchData(encodeInput(inputData));

    // check for an empty response, the free version API won't send an error when any of the ingredients are invalid
    if (data.totalWeight === 0) {
      dispatch({ type: 'ADD_NOTIFICATION', payload: emptyResponseNotification });
      setIsLoading(false);
      return;
    }

    setAnalysisResultsData(data);
    setIsLoading(false);
  };

  const handleNotificationDeleting = (notificationId) => {
    const notification = document.querySelector(`#${notificationId}`);
    notification.animate(
      [
        {
          opacity: 0,
        },
      ],
      300,
    ).onfinish = setTimeout(() => {
      dispatch({ type: 'DELETE_NOTIFICATION', payload: notificationId });
    }, 300);
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  return (
    <StyledMainWrapper>
      <NotificationsList
        handleNotificationDeleting={handleNotificationDeleting}
        notificationsArray={state.notifications}
      />
      <StyledFlexWrapper>
        <StyledInputAreaWrapper>
          <TextArea
            onChange={(e) => handleInputValue(e.target.value)}
            placeholder='Enter your ingredient list...'
          />
          <Button onClick={() => handleDataFetching(inputValue)} type='button'>
            Analyse!
          </Button>
        </StyledInputAreaWrapper>
        <AnalysisResults analysisResultsData={analysisResultsData} isLoading={isLoading} />
      </StyledFlexWrapper>
    </StyledMainWrapper>
  );
};

export default Main;
