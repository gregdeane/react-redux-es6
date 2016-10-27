import * as types from '../constants/action.types';
import courseApi from '../api/api.courses';

export const createCourse = (course) => {
  return { type: types.CREATE_COURSE, course };
};

export const loadCoursesSuccess = (courses) => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const loadCourses = () => {
  return (dispatch) => {
    courseApi.getCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => console.log(error));
  };
};

// courseApi.getCourses().then(res => {
//   console.log(res);
//   console.log('......... adding');
//   courseApi.addCourse({
//     "id": "blah-blah",
//     "title": "Blah Title",
//     "watchHref": "http://www.pluralsight.com/courses/blah-blah",
//     "authorId": "blah-house",
//     "length": "5:10",
//     "category": "HTML5"
//   }).then(res => {
//     console.log('added!');
//     console.log(res);
//   });
// });
