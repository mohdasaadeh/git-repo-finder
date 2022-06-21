import { CREATE_REPO, DELETE_REPO } from './types';

export const createRepo = repo => {
  return { type: CREATE_REPO, payload: repo };
};

export const deleteRepo = repo => {
  return { type: DELETE_REPO, payload: repo };
};
