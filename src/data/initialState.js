import { initialNotification } from 'data/defaultNotifications';

const initialState = {
  inputValue: '',
  isLoading: false,
  notifications: [initialNotification],
  // default table rows
  usedTableRows: [
    'FAT',
    'FASAT',
    'FAMS',
    'FAPU',
    'FATRN',
    'CHOLE',
    'NA',
    'CHOCDF',
    'FIBTG',
    'SUGAR',
    'PROCNT',
  ],
  analysisResultsData: {},
};

export default initialState;
