import '@testing-library/jest-dom';
import mockedApiResponse from 'data/mockedApiResponse';

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

// mock the fetch function before each test to return a dummy data
beforeEach(() => {
  global.fetch = jest.fn((ApiQuery) => {
    switch (ApiQuery) {
      // happy path
      case `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=200g%20butter`:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockedApiResponse),
        });
      // invalid food entered path
      case `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=1234asdf`:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ calories: 0, totalWeight: 0 }),
        });
      // server error
      case `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=SERVERERROR`:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(),
        });

      default:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({}),
        });
    }
  });
});
