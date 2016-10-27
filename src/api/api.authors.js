import axios from 'axios';
import { url } from './environment';

class AuthorApi {

  static getAuthors() {
    return axios.get(`${url}/authors`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}

export default AuthorApi;
