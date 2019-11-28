import React from 'react';
import { useHistory } from 'react-router-dom';

import "./SurveyList.css";

function SurveyList({surveys}) {
  let history = useHistory();

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        { surveys.map((survey, i) => (
          <tr key={`survey-row-${i}`} onClick={() => history.push(`/survey/${survey.name}/${survey.code}/`)}>
            <td>{survey.name}</td>
            <td>{survey.code}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default SurveyList;