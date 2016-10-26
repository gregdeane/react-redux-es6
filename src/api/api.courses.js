import axios from 'axios';
import { url, delay } from './environment';

class CourseApi {

  static getCourses() {
    return axios.get(`${url}/courses`)
      .then(response => response.data)
      .catch(error => error);
  }

}

export default CourseApi;
