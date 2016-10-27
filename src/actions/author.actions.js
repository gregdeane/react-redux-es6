import * as types from '../constants/action.types';
import authorApi from '../api/api.authors';

export const loadAuthorsSuccess = (authors) => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return (dispatch) => {
    authorApi.getAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors)))
      .catch(error => {
        throw error;
      });
  };
};
