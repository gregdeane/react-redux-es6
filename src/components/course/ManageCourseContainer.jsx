import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
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
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.id;
    let course = this.state.course;

    course[field] = event.target.value;

    return this.setState({ course })
  }

  saveCourse(event) {
    const courseId = this.props.course.id;
    let actions = this.props.actions;

    if (courseId) {
      actions.updateCourse(this.state.course);
    } else {
      actions.saveCourse(this.state.course);
    }

    browserHistory.push('/courses');
    event.preventDefault();
  }

  render() {
    return (
      <CourseForm authors={this.props.authors}
                  course={this.state.course}
                  errors={this.state.errors}
                  onSave={this.saveCourse}
                  onChange={this.updateCourseState} />
    )
  }
}

ManageCourseContainer.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// either get course based on `:id` in url or use initial
const getCourse = (courses, id) => {
  let initial = { id: '', title: '', watchHref: '', authorId: '', length: '', category: '' };
  let course = courses.filter(course => {
    return course.id === id;
  });

  return (course.length && course[0]) || initial;
};

const mapStateToProps = (state, ownProps) => {
  let course = getCourse(state.courses, +ownProps.params.id);  // ownProps.params.id from `/course/:id`
  return {
    course: course,
    authors: state.authors
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
