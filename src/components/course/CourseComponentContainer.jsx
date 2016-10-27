import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/course.actions';
import CourseListComponent from './CourseListComponent';

class CourseComponentContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-xs-12">
        <h1>Courses</h1>
        <CourseListComponent courses={this.props.courses} />
      </div>
    );
  }
}

CourseComponentContainer.propTypes = {
  courses: PropTypes.array.isRequired
};

// `state.courses` because alias `courses` is used in `combineReducers` (reducers/index.js)
const mapStateToProps = (state) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseComponentContainer);
