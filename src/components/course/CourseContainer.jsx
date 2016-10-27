import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import CourseList from './CourseList';
import ButtonInput from '../common/ButtonInput';

class CourseContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.showAddCourse = this.showAddCourse.bind(this);
  }

  showAddCourse() {
    browserHistory.push('/course');
  }

  render() {
    return (
      <div className="col-xs-12">
        <h1>Courses</h1>
        <ButtonInput type="submit"
                     label="Add Course"
                     onClick={this.showAddCourse} />
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CourseContainer.propTypes = {
  courses: PropTypes.array.isRequired
};

// `state.courses` because alias `courses` is used in `combineReducers` (reducers/index.js)
const mapStateToProps = (state) => {
  return {
    courses: state.courses
  };
};

export default connect(
  mapStateToProps
)(CourseContainer);
