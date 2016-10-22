import objectAssign from 'object-assign';

import * as types from '../constants/action.types';

const courseReducer = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [
        ...state,
        objectAssign({}, action.course)
      ];

    default:
      return state;
  }
};

export default courseReducer;
