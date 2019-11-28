import React, { useState, useEffect } from 'react';
import filter from 'lodash/filter';

// bring in some components we need to use
import Intro from './components/Intro';
import SurveyList from './components/SurveyList';
import Search from './components/Search';

// OPTIONAL nicer looking survey list
//import SurveyListfrom './components/SurveyListAlpha';

// import API interfaces to fetch data
import SurveysApi from 'api/SurveysApi';

import "./Home.css";

function Home() {
  const [surveys, setSurveys] = useState([]);

  // setup state for the search function
  // we want to utilize the Home scene as the smart component
  // and leave the filtering and state out of the search component
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");

  // we only need to fetch the surveys on componentDidMount(ish)
  useEffect(() => {
    SurveysApi.surveyList()
      .then(resp => {
        setSurveys(resp.data);
      })

    document.title = `TBSA`; // normally i would use react-helmet in this situation to set document title
  }, [])

  /**
   * This function is used to get the list of surveys
   * it will check if they are being filtered by search
   * and return the appropriate dataset
   * Note: it might be more efficient to use an event handler here
   */
  const getSurveys = () => {
    if (surveys.length > 0 && searchTerm !== "") {
      return filter(surveys, (o) => {
        return o[searchType].includes(searchTerm);
      });
    }

    return surveys;
  }

  return (
    <div className="Home">
      <div className="container">
        <Intro />
        <Search 
          searchTerm={searchTerm}
          onChangeTerm={setSearchTerm}
          searchType={searchType}
          onChangeSearchType={setSearchType}
        />
        <SurveyList surveys={getSurveys()} />
      </div>
    </div>
  );
}

export default Home;