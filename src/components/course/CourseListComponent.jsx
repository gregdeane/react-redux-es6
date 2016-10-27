import React, { PropTypes } from 'react';

import CourseListRowComponent from './CourseListRowComponent';

const CourseListComponent = ({courses}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListRowComponent key={course.id} course={course} />
        )};
      </tbody>
    </table>
  );
};

CourseListComponent.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseListComponent;
