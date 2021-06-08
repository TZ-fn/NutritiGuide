import { initialNotification } from 'data/defaultNotifications';

const initialState = {
  inputValue: '',
  isLoading: false,
  notifications: [initialNotification],
  analysisResultsData: {},
};

export default initialState;
