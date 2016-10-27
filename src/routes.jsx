import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/about/AboutComponent';
import CourseContainer from './components/course/CourseContainer';
import ManageCourseContainer from './components/course/ManageCourseContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="courses" component={CourseContainer} />
    <Route path="course" component={ManageCourseContainer} />
    <Route path="course/:id" component={ManageCourseContainer} />
    <Route path="about" component={AboutComponent} />
  </Route>
);
