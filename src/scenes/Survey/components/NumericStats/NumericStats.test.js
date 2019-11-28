
import React from 'react';
import Numeric from './index';
import { render } from '@testing-library/react';

describe("<Numeric />", () => {
  it("renders the title", () => {
    let data = {
      type: "numeric",
      label: "Testing Numeric Data",
      result: 684.5
    };

    let {getByText} = render(<Numeric data={data} />);
    expect(getByText("Testing Numeric Data")).toBeInDocument;
  });

  it("correctly rounds the number", () => {
    let data = {
      type: "numeric",
      label: "Testing Numeric Data",
      result: 684.5
    };

    let {getByText} = render(<Numeric data={data} />);
    expect(getByText("685")).toBeInDocument;
  });
});