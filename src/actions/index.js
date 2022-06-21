import { CREATE_REPO, DELETE_REPO } from './types';

export const createRepo = repo => dispatch => {
  dispatch({ type: CREATE_REPO, payload: repo });
};

export const deleteRepo = repo => dispatch => {
  dispatch({ type: DELETE_REPO, payload: repo });
};
