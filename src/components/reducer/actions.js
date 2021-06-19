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

export const RESET_CHECKED_INGREDIENTS = 'RESET_CHECKED_INGREDIENTS';
export const SET_CHECKED_INGREDIENTS = 'SET_CHECKED_INGREDIENTS';

export const CHANGE_CHECKBOX_VALUE = 'CHANGE_CHECKBOX_VALUE';

const MAIN_API = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=`;

export const handleDataFetching = async (state, dispatch) => {
  // remove all error and warning notifications, clear the ResultsTable
  dispatch({ type: CLEAR_ERRORS, payload: {} });
  dispatch({ type: SET_ANALYSIS_RESULTS_DATA, payload: {} });
  dispatch({ type: RESET_CHECKED_INGREDIENTS, payload: {} });

  // display an error when the input is empty
  if (!state.inputValue.trim()) {
    dispatch({
      type: ADD_NOTIFICATION,
      payload: emptyInputNotification,
    });
    dispatch({ type: SET_LOADING, payload: false });
    return;
  }

  // fetch for the data
  dispatch({ type: SET_LOADING, payload: true });
  let response = await fetch(`${MAIN_API}${encodeInput(state.inputValue)}`);
  if (response.status === 200) {
    dispatch({ type: SET_LOADING, payload: false });
    response = await response.json();
  } else {
    // on server error add a new notification
    response = await response.json();
    dispatch({ type: SET_LOADING, payload: false });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        id: 'error',
        type: 'error',
        children: `${response.error} ${response.message} Please try again.`,
      },
    });
  }

  // check for an empty response, the free version of the API won't send an error when any of the ingredients are invalid
  if (response?.totalWeight === 0) {
    dispatch({ type: ADD_NOTIFICATION, payload: emptyResponseNotification });
    dispatch({ type: SET_LOADING, payload: false });
    return;
  }

  // // filter the table ingredients by the there are any selected checkboxes
  // if (checkedIngredients.length > 0) {
  //   dispatch({ type: SET_CHECKED_INGREDIENTS, payload: checkedIngredients });
  // }

  dispatch({ type: SET_ANALYSIS_RESULTS_DATA, payload: response });
};
