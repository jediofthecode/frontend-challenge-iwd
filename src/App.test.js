import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';
import SurveysApiMock from 'api/SurveysApi';

jest.mock('api/SurveysApi');

// standard app wide smoke test
it('renders without crashing', async () => {
  const {getByText} = render(<App />);
  const resolvedDoc = await waitForElement(() => getByText("Testing123"))
  expect(resolvedDoc).toHaveTextContent("Testing123");
});