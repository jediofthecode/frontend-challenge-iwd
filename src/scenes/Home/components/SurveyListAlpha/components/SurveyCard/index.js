import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {Link} from 'react-router-dom';

import "./SurveyCard.css";

function SurveyCard(props) {
  const {name, code} = props.survey;
  return (
    <div className="col mb-4">
      <div className="card SurveyCard">
        <Link to={`/survey/${name}/${code}`}>
          <div className="card-body">
            <h5 className="card-title">{name || <Skeleton />}</h5>
            <h6 className="card-subtitle">{code || <Skeleton />}</h6>
          </div>
        </Link>
      </div>
    </div>
  )
}

SurveyCard.propTypes = {
  survey: PropTypes.object
};

export default SurveyCard;