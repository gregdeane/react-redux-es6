import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CourseList from './CourseList';

class CourseContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-xs-12">
        <h1>Courses</h1>
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
