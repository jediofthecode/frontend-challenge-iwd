import React from 'react';
import Header from './index';
import {MemoryRouter} from "react-router-dom";
import { render } from '@testing-library/react';

describe("<Header />", () => {
  it('fetches data when loaded, and does not die', () => {
    // when testing apps with react-router we need to use memory router
    // to simulate the routing system
    let app = (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    let {getByText} = render(app);
    expect(getByText("The Best Survey App")).toBeInDocument;
  });

  it("will render a back button when not on the home page", () => {
    // when testing apps with react-router we need to use memory router
    // to simulate the routing system
    let app = (
      <MemoryRouter initialEntries={['/survey/test/test']}>
        <Header />
      </MemoryRouter>
    )
    let {getByTestId} = render(app);
    expect(getByTestId("backButton")).toBeInDocument;
  })
});