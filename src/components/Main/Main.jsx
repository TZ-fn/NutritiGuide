import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import MainContext from 'components/Context/MainContext';
import { handleDataFetching } from 'components/reducer/actions';
import NotificationsList from 'components/common/NotificationsList/NotificationsList';
import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';
import AnalysisOptions from './AnalysisOptions/AnalysisOptions';
import AnalysisResults from './AnalysisResults/AnalysisResults';

const StyledMainWrapper = styled.main`
  width: 100%;
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
  const { state, dispatch } = useContext(MainContext);

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
            placeholder='Enter your ingredients list...'
          />
          <Button
            onClick={() => handleDataFetching(state, dispatch, state.usedTableRows)}
            type='button'
          >
            Analyse!
          </Button>
          <AnalysisOptions />
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
