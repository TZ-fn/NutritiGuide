import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
  CLEAR_ERRORS,
  SET_LOADING,
  SET_INPUT_VALUE,
  SET_ANALYSIS_RESULTS_DATA,
  SET_CHECKED_INGREDIENTS,
  CHANGE_CHECKBOX_VALUE,
} from './actions';

function rootReducer(state, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case DELETE_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications.filter((notification) => notification.id !== action.payload),
        ],
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(
            (notification) => notification.type !== 'warning' && notification.type !== 'error',
          ),
        ],
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };

    case SET_ANALYSIS_RESULTS_DATA:
      return {
        ...state,
        analysisResultsData: { ...action.payload },
      };

    case SET_CHECKED_INGREDIENTS:
      return {
        ...state,
        usedTableRows: [...state.usedTableRows, ...action.payload],
      };

    case CHANGE_CHECKBOX_VALUE:
      return {
        ...state,
        usedTableRows: [
          ...(state.usedTableRows.includes(action.payload)
            ? [...state.usedTableRows.filter((ingredient) => ingredient !== action.payload)]
            : [...state.usedTableRows, action.payload]),
        ],
      };

    default:
      return state;
  }
}

export default rootReducer;
