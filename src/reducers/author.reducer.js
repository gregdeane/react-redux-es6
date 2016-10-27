import * as types from '../constants/action.types';

import initialState from './state.initial';

const authorReducer = (state = initialState.authors, action) => {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
};

export default authorReducer;
