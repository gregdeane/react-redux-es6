import * as types from '../constants/action.types';
import courseApi from '../api/api.courses';

export const loadCoursesSuccess = (courses) => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const createCourseSuccess = (course) => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};

export const updateCourseSuccess = (course) => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

export const loadCourses = () => {
  return (dispatch) => {
    courseApi.getCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => {
        throw error;
      });
  };
};

export const saveCourse = (course) => {
  return (dispatch) => {
    courseApi.createCourse(course)
      .then(course => dispatch(createCourseSuccess(course)))
      .catch(error => {
        throw error;
      });
  };
};

export const updateCourse = (course) => {
  return (dispatch) => {
    courseApi.updateCourse(course)
      .then(course => dispatch(updateCourseSuccess(course)))
      .catch(error => {
        throw error;
      });
  };
};
