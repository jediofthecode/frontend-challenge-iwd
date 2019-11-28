import ApiModel from './ApiModel';

class SurveysApi extends ApiModel {
  /**
   * @return {Promise} A promise for the fetch request
   * 
   * This will fetch a list of all surveys and return the data
   */
  surveyList() {
    return this.getUrl('list.json');
  }

  /**
   * @param  {string} code
   * @return {Promise} A promise for the fetch request
   * 
   * This will return a specific survey by code
   */
  getSurvey(code) {
    return this.getUrl(`${code}.json`);
  }
}

export default new SurveysApi();