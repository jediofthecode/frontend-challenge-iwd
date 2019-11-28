import React from 'react';
import PropTypes from 'prop-types';

import SurveyCard from './components/SurveyCard';

function SurveyList(props) {
  const {surveys} = props;
  return (
    <div className="row row-cols-md-3">
      { surveys.map((survey, i) => <SurveyCard survey={survey} key={`survey-card-${i}`} />) }
    </div>
  );
}

SurveyList.propTypes = {
  surveys: PropTypes.array
};

export default SurveyList;