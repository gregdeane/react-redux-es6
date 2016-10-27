import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import objectAssign from 'object-assign';
Object.assign = objectAssign;

import configureStore from './store/configure.store';
import routes from './routes';
import { loadCourses } from './actions/course.actions';
import { loadAuthors } from './actions/author.actions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
