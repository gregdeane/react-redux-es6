import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/course.actions';

class CourseComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="col-xs-12">
        <h1>Courses</h1>

        {this.props.courses.map(this.courseRow)}

        <h2>Add Course</h2>
        <form>
          <div className="form-group">
            <label htmlFor="course-name">Course Name</label>
            <input type="text"
                   className="form-control"
                   id="course-name"
                   onChange={this.onTitleChange} />
          </div>
          <button type="button"
                  className="btn btn-primary"
                  onClick={this.onClickSave}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

CourseComponent.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
)(CourseComponent);
