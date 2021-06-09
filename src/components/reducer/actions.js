import encodeInput from 'components/utils/encodeInput';
import { emptyInputNotification, emptyResponseNotification } from 'data/defaultNotifications';

// API variables
const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ANALYSIS_RESULTS_DATA = 'SET_ANALYSIS_RESULTS_DATA';

const MAIN_API = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=`;

export const handleDataFetching = async (state, dispatch) => {
  // remove all error and warning notifications, clear the ResultsTable
  dispatch({ type: 'CLEAR_ERRORS', payload: {} });
  dispatch({ type: 'SET_ANALYSIS_RESULTS_DATA', payload: {} });

  // display an error when the input is empty
  if (!state.inputValue.trim()) {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: emptyInputNotification,
    });
    dispatch({ type: 'SET_LOADING', payload: false });
    return;
  }

  // fetch for the data
  dispatch({ type: 'SET_LOADING', payload: true });
  let response = await fetch(`${MAIN_API}${encodeInput(state.inputValue)}`);
  if (response.status === 200) {
    dispatch({ type: 'SET_LOADING', payload: false });
    response = await response.json();
  } else {
    // on server error add a new notification
    response = await response.json();
    dispatch({ type: 'SET_LOADING', payload: false });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: 'error',
        type: 'error',
        children: `${response.error} ${response.message} Please try again.`,
      },
    });
  }

  // check for an empty response, the free version of the API won't send an error when any of the ingredients are invalid
  if (response?.totalWeight === 0) {
    dispatch({ type: 'ADD_NOTIFICATION', payload: emptyResponseNotification });
    dispatch({ type: 'SET_LOADING', payload: false });
    return;
  }

  dispatch({ type: 'SET_ANALYSIS_RESULTS_DATA', payload: response });
};
