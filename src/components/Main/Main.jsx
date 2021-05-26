import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';
import NotificationsList from 'components/common/NotificationsList/NotificationsList';
import defaultNotification from 'components/common/NotificationsList/defaultNotification';
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
  const [notificationsArray, setNotificationsArray] = useState([defaultNotification]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleDataFetching = async (inputData) => {
    // prevent from getting the empty-input error more than once
    if (
      !inputValue.trim() &&
      notificationsArray.find((notification) => notification.id === 'noInputWarning')
    ) {
      return;
    }
    // display an error when the input is empty
    if (
      !inputValue.trim() &&
      !notificationsArray.find((notification) => notification.id === 'noInputWarning')
    ) {
      setNotificationsArray((prevState) => [
        ...prevState,
        {
          id: 'noInputWarning',
          type: 'warning',
          children: 'Please enter your food\'s ingredients before pressing the "Analyse" button.',
        },
      ]);
      return;
    }
    setIsLoading(true);

    // remove all error and warning notifications if the input data is valid
    setNotificationsArray((prevState) => [
      ...prevState.filter(
        (notification) => notification.type !== 'warning' && notification.type !== 'error',
      ),
    ]);
    const data = await fetchData(encodeInput(inputData));

    // check for an empty response, the free version API won't send an error when any of the ingredients is invalid
    try {
      if (data.calories === 0 && data.totalWeight === 0) {
        throw new Error(
          'Please check the ingredient spelling or if you have entered a quantities for the ingredients.',
        );
      }
    } catch (e) {
      setNotificationsArray((prevState) => [
        ...prevState,
        {
          id: 'invalidItemError',
          type: 'error',
          children: e.message,
        },
      ]);
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
    ).onfinish = setTimeout(
      () =>
        setNotificationsArray([
          ...notificationsArray.filter(
            (currentNotification) => currentNotification.id !== notificationId,
          ),
        ]),
      300,
    );
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  return (
    <StyledMainWrapper>
      <NotificationsList
        handleNotificationDeleting={handleNotificationDeleting}
        notificationsArray={notificationsArray}
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
