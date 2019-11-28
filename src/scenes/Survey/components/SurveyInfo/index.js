import React from 'react';
import PropTypes from 'prop-types';

function SurveyInfo({name, code}) {
  return (
    <div className="row">
      <div className="col-md">
        <h1>Survey {name} - {code}</h1>
        <p>Here you can find all of the data available for Survey {code}</p>
        <hr />
      </div>
    </div>
  );
}

SurveyInfo.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string
};

export default SurveyInfo;