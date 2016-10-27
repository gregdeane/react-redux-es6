import axios from 'axios';
import { url } from './environment';

class CourseApi {

  static getCourses() {
    return axios.get(`${url}/courses`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  static addCourse(course) {
    return axios.post(`${url}/courses`, course)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  static updateCourse(course) {
    return axios.put(`${url}/courses/${course.id}`, course)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  static deleteCourse(course) {
    return axios.delete(`${url}/courses/${course.id}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

}

export default CourseApi;
