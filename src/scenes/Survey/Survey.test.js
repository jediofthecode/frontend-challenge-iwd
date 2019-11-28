import React from 'react';
import Survey from './index';
import {MemoryRouter} from "react-router-dom";
import { act, render, waitForElement } from '@testing-library/react';
import SurveysApiMock from 'api/SurveysApi';

jest.mock('api/SurveysApi');

// this page doesnt have any user interaction so doesn't require further testing, only that it renders the elements required
describe("<Survey />", () => {
  it('fetches data when loaded, and does not die', async () => {
    // when testing apps with react-router we need to use memory router
    // to simulate the routing system
    let app = (
      <MemoryRouter>
        <Survey />
      </MemoryRouter>
    )
    let {getByText} = render(app);
    const resolvedDoc = await waitForElement(() => getByText("What best sellers are available in your store?"))
    expect(resolvedDoc).toHaveTextContent("What best sellers are available in your store?");
  });
});