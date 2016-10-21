import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/about/AboutComponent';
import CourseComponent from './components/course/CourseComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeComponent} />
    <Route path="courses" component={CourseComponent} />
    <Route path="about" component={AboutComponent} />
  </Route>
);
