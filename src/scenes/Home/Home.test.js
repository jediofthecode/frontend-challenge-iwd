import React from 'react';
import Home from './index';
import {MemoryRouter} from "react-router-dom";
import { act, render, waitForElement, fireEvent } from '@testing-library/react';
import SurveysApiMock from 'api/SurveysApi';
import { resolve } from 'dns';

jest.mock('api/SurveysApi');

// this is more if an e2e test, which covers multiple functions in the scene
// whereas the individual component tests just test the isolated functions of each
// component
describe("<Home />", () => {
  // standard smoke test
  it('fetches data when loaded, and does not die', async () => {
    // when testing apps with react-router we need to use memory router
    // to simulate the routing system
    let app = (
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    let {getByText} = render(app);
    const resolvedDoc = await waitForElement(() => getByText("Testing123"))
    expect(resolvedDoc).toHaveTextContent("Testing123");
  });

  it('filters results when inputting data into the search', async () => {
    // when testing apps with react-router we need to use memory router
    // to simulate the routing system
    let app = (
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    let {getByText, getByPlaceholderText} = render(app);

    let searchBox = getByPlaceholderText("Search");
    
    // wait for data to load
    await waitForElement(() => getByText("Testing123"))
    expect(getByText("Testing123")).toBeInTheDocument;
    
    // fire an artificial event
    let element = getByText("Testing123"); // get the elemeny and cache it to see if it's missing
    fireEvent.change(searchBox, {target: {value: "NotFound"}});
    expect(element).not.toBeInTheDocument;
  });

  it('navigates to a different page when clicking on an item', async () => {
    // when testing apps with react-router we need to use memory router
    // to simulate the routing system
    let app = (
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    let {getByText, getByPlaceholderText} = render(app);

    let searchBox = getByPlaceholderText("Search");
    
    // wait for data to load
    await waitForElement(() => getByText("Testing123"))
    const resolvedDoc = await waitForElement(() => getByText("Testing123"))
    
    fireEvent.click(resolvedDoc);
    expect(resolvedDoc).not.toBeInTheDocument;
  });
});