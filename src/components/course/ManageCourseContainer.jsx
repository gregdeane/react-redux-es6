import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/course.actions';
import CourseForm from './CourseForm';

class ManageCourseContainer extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    }
  }

  onSave() {

  }

  onChange() {

  }

  render() {
    return (
      <CourseForm authors={[]}
                  course={this.state.course}
                  errors={this.state.errors}
                  onSave={this.onSave}
                  onChange={this.onChange} />
    )
  }
}

ManageCourseContainer.propTypes = {
  course: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  let course = { id: '', title: '', watchHref: '', authorId: '', length: '', category: '' };
  return {
    course: course
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
)(ManageCourseContainer);
