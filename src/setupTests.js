import '@testing-library/jest-dom';
import mockedApiResponse from 'data/mockedApiResponse';

// mock the fetch function before each test to return a dummy data
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockedApiResponse),
    }),
  );
});
