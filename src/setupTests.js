import '@testing-library/jest-dom';
import { MAIN_API } from 'components/reducer/actions';
import mockedApiResponse from 'data/mockedApiResponse';

// mock the fetch function before each test to return a dummy data
beforeEach(() => {
  global.fetch = jest.fn((ApiQuery) => {
    switch (ApiQuery) {
      // happy path
      case `${MAIN_API}200g%20butter`:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockedApiResponse),
        });
      // invalid food entered
      case `${MAIN_API}1234asdf`:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ calories: 0, totalWeight: 0 }),
        });
      // server error
      case `${MAIN_API}SERVER_ERROR`:
        return Promise.resolve({
          status: 401,
          json: () => Promise.resolve({ response: 'Error', message: 'Server Error' }),
        });

      default:
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({}),
        });
    }
  });
});
