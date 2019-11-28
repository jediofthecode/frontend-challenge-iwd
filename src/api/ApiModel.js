import {API_URL} from 'settings';
import axios from 'axios';

/**
 * This is an abstract class, and should only be extended
 * For this use case, it is excessive, but this is to demonstrate
 * how to handle API requests at scale in the frontend
 * 
 * Here you can easily add any middleware that needs to be run on each request
 * eg. injecting an auth token
 */
class ApiModel {
  /**
   * @param  {string} - The endpoint you want to fetch
   * @return {Promise} A promise for the fetch request
   * 
   * This function is used to make API requests
   * In the future, this can be refactored into an abstraction to DRY things up
   */
  getUrl(endPoint) {
    return axios.get(`${API_URL}${endPoint}`);
  }
}

export default ApiModel;