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

export const fetchNutritionData = async (inputData, dispatch) => {
  let response = await fetch(`${MAIN_API}${inputData}`);

  if (response.status === 200) {
    return response.json();
  }

  response = await response.json();
  return dispatch({
    type: 'ADD_NOTIFICATION',
    payload: {
      id: 'error',
      type: 'error',
      children: `${response.error} ${response.message} Please try again.`,
    },
  });
};

export const handleDataFetching = async (state, dispatch) => {
  // remove all error and warning notifications, clear the analysisResultsData
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

  dispatch({ type: 'SET_LOADING', payload: true });
  const data = await fetchNutritionData(encodeInput(state.inputValue), dispatch);

  // check for an empty response, the free version of the API won't send an error when any of the ingredients are invalid
  if (data?.totalWeight === 0) {
    dispatch({ type: 'ADD_NOTIFICATION', payload: emptyResponseNotification });
    dispatch({ type: 'SET_LOADING', payload: false });
    return;
  }

  dispatch({ type: 'SET_ANALYSIS_RESULTS_DATA', payload: data });
  dispatch({ type: 'SET_LOADING', payload: false });
};
