import React from 'react';
import DateStats from './index';
import { render } from '@testing-library/react';

describe("<DateStats />", () => {
  it("renders the title", () => {
    let data = {
      type: "date",
      label: "Testing Date Data",
      result: [
         "2016-02-28T11:04:50.000Z"
      ]
    };

    let {getByText} = render(<DateStats data={data} />);
    expect(getByText("Testing Date Data")).toBeInDocument;
  });

  it("correctly prints out a human friendly date", () => {
    let data = {
      type: "date",
      label: "Testing Date Data",
      result: [
         "2016-02-28T11:04:50.000Z"
      ]
    };

    let {getByText} = render(<DateStats data={data} />);
    expect(getByText("February 28, 2016")).toBeInDocument;
  });
});