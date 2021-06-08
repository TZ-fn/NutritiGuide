import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';
import NotificationsList from 'components/common/NotificationsList/NotificationsList';
import { emptyInputNotification, emptyResponseNotification } from 'data/defaultNotifications';
import initialState from 'data/initialState';
import rootReducer from 'components/reducer/reducer';
import AnalysisResults from './AnalysisResults/AnalysisResults';
import fetchData from '../utils/fetchData';
import encodeInput from '../utils/encodeInput';

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
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleDataFetching = async (inputValue) => {
    // remove all error and warning notifications, clear the analysisResultsData
    dispatch({ type: 'CLEAR_ERRORS', payload: {} });
    setAnalysisResultsData(null);

    // display an error when the input is empty
    if (!state.inputValue.trim()) {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: emptyInputNotification,
      });
      dispatch({ type: 'SET_LOADING', payload: false });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    const data = await fetchData(encodeInput(inputValue));

    // check for an empty response, the free version of the API won't send an error when any of the ingredients are invalid
    if (data.totalWeight === 0) {
      dispatch({ type: 'ADD_NOTIFICATION', payload: emptyResponseNotification });
      dispatch({ type: 'SET_LOADING', payload: false });
      return;
    }

    setAnalysisResultsData(data);
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const handleNotificationDeleting = (notificationId) => {
    dispatch({ type: 'DELETE_NOTIFICATION', payload: notificationId });
  };

  const handleInputValue = (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: value });
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
          <Button onClick={() => handleDataFetching(state.inputValue)} type='button'>
            Analyse!
          </Button>
        </StyledInputAreaWrapper>
        <AnalysisResults analysisResultsData={analysisResultsData} isLoading={state.isLoading} />
      </StyledFlexWrapper>
    </StyledMainWrapper>
  );
};

export default Main;
