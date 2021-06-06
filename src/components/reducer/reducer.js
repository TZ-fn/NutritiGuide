import { ADD_NOTIFICATION, DELETE_NOTIFICATION, CLEAR_ERRORS, SET_LOADING } from './actions';

function rootReducer(state, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        notifications: [...state.notifications, action.payload],
      };
    case DELETE_NOTIFICATION:
      return {
        notifications: [
          ...state.notifications.filter((notification) => notification.id !== action.payload),
        ],
      };
    case CLEAR_ERRORS:
      return {
        notifications: [
          ...state.notifications.filter(
            (notification) => notification.type !== 'warning' && notification.type !== 'error',
          ),
        ],
      };
    case SET_LOADING:
      return {
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
}

export default rootReducer;
