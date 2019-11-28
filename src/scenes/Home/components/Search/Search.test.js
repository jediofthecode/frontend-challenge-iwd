import React from 'react';
import Search from './index';
import { render, fireEvent, act } from "@testing-library/react";

const props = {
  onChangeTerm: jest.fn(),
  onChangeSearchType: jest.fn(),
  searchTerm: "",
  searchType: "name"
};

describe("<Search />", () => {
  it("can render on its own", () => {
    let {getByPlaceholderText} = render(<Search {...props} />);
    expect(getByPlaceholderText("Search")).toBeInDocument;
  })

  it("will dispatch a text change event", done => {
    let onChange = () => {
      done();
    }

    let {getByPlaceholderText} = render(<Search onChangeTerm={onChange} />);
    fireEvent.change(getByPlaceholderText("Search"), {target: {value: "Test"}});
  });

  it("will dispatch an event when clicking a filter option", done => {
    let onChange = () => {done()};
    let {getByText} = render(<Search onChangeSearchType={onChange} />);
    fireEvent.click(getByText("Code"));
  });
});