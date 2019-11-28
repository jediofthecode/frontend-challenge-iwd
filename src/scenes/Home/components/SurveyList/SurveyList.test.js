import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from "react-router-dom";
import SurveyList from './index';
import { render } from '@testing-library/react';
import expectExport from 'expect';

const testData = [
  {name: "Test", code: "Test123"}
];

describe("<SurveyList", () => {
  it("renders a defined number of rows", () => {
    let app = (
      <MemoryRouter>
        <SurveyList surveys={testData} />
      </MemoryRouter>
    )
    const {getByText} = render(app); // here we must use mount because of the MemoryRouter problem
    expect(getByText("Test123")).toBeInDocument
  });
});