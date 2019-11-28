import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types';
import find from 'lodash/find';

import SurveysApi from 'api/SurveysApi';
import SurveyInfo from './components/SurveyInfo';
import QCMStats from './components/QCMStats';
import NumericStats from './components/NumericStats';
import DateStats from './components/DateStats';
import './Survey.css';

function Survey() {
  const [survey, setSurvey] = useState([]);
  const { code, name } = useParams();

  // set page title, only when survey object has been updated
  useEffect(() => { document.title = `TBSA | Survey ${code}`; }, [survey, code]);

  // Setup a compenentDidMount style effect
  useEffect(() => {
    SurveysApi.getSurvey(code)
      .then(resp => {
        setSurvey(resp.data);
      })
  }, [code]);

  /**
   * @param  {Collection} survey - the survey object to filter within
   * @param  {String} statType - the name of the stat you want to fetch
   * @return {Object} - The object that is found, will return an empty object if none is found
   * 
   * This function will filter through survey results and give you the 
   * data for the requested stat.
   */
  const getStats = (survey, statType) => {
    return find(survey, (o) => o.type === statType) || {};
  } 

  return (
    <div className="container Survey">
      <SurveyInfo code={code} name={name} />
      <QCMStats data={getStats(survey, "qcm")} />
      <NumericStats data={getStats(survey, "numeric")} />
      <DateStats data={getStats(survey, "date")} />
    </div>
  );
}

Survey.propTypes = {
  survey: PropTypes.array
};

export default Survey;