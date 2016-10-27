import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/about/AboutComponent';
import CourseContainer from './components/course/CourseContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="courses" component={CourseContainer} />
    <Route path="about" component={AboutComponent} />
  </Route>
);
