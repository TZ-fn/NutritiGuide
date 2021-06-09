import React, { useReducer } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';
import NotificationsList from 'components/common/NotificationsList/NotificationsList';
import initialState from 'data/initialState';
import rootReducer from 'components/reducer/reducer';
import { handleDataFetching } from 'components/reducer/actions';
import AnalysisResults from './AnalysisResults/AnalysisResults';

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
  const [state, dispatch] = useReducer(rootReducer, initialState);

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
          <Button onClick={() => handleDataFetching(state, dispatch)} type='button'>
            Analyse!
          </Button>
        </StyledInputAreaWrapper>
        <AnalysisResults
          analysisResultsData={state.analysisResultsData}
          isLoading={state.isLoading}
        />
      </StyledFlexWrapper>
    </StyledMainWrapper>
  );
};

export default Main;
