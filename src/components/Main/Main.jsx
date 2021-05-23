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
/* eslint-disable */
const StyledMainWrapper = styled.main`
  width: auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: 10px 60px;

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
    // prevent from getting the error more than once
    if (
      !inputValue.trim() &&
      notificationsArray.find((notification) => notification.id === 'noInputError')
    ) {
      return;
    }
    // display an error when the input is empty
    if (
      !inputValue.trim() &&
      !notificationsArray.find((notification) => notification.id === 'noInputError')
    ) {
      setNotificationsArray((prevState) => [
        ...prevState,
        {
          id: 'noInputError',
          type: 'error',
          children: 'Please enter your food\'s ingredients before pressing the "Analyse" button.',
        },
      ]);
      return;
    }

    setIsLoading(true);
    const data = await fetchData(encodeInput(inputData));
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
      400,
    ).onfinish = setTimeout(
      () =>
        setNotificationsArray([
          ...notificationsArray.filter((notification) => notification.id !== notificationId),
        ]),
      400,
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
