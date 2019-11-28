import React from 'react';
import QCMStats from './index';
import { render } from '@testing-library/react';

describe("<QCMStats />", () => {
  it("renders a progress bar, and a number when given data", () => {
    let data = {
      type: "qcm",
      label: "Testing QCM Data",
      "result": {
        "Test Product": 1,
        "Test Product 2": 3
      }
    };

    let {getByText, getAllByRole} = render(<QCMStats data={data} />);
    expect(getByText("1/4")).toBeInDocument;
    expect(getAllByRole("progressbar")).toBeInDocument;
  });
});