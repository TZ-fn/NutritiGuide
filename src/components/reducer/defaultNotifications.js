export const initialNotification = {
  id: 'defaultNotification',
  type: 'info',
  children:
    'Enter your food\'s ingredients, each ingredient on a new line, then press the "Analyse" button.',
};

export const emptyInputNotification = {
  id: 'noInputWarning',
  type: 'warning',
  children: 'Please enter your food\'s ingredients before pressing the "Analyse" button.',
};

export const emptyResponseNotification = {
  id: 'invalidItemError',
  type: 'error',
  children:
    'Please check the ingredient spelling or if you have entered a quantities for the ingredients.',
};
