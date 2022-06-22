import _ from 'lodash';

import { CREATE_REPO, DELETE_REPO } from '../actions/types';

const repoReducer = (state = {}, action) => {
  let repo;

  if (action.payload && typeof action.payload !== 'string') {
    repo = action.payload;

    repo['addedAt'] = Date.now();
  }

  switch (action.type) {
    case CREATE_REPO:
      return { ...state, [action.payload.id]: repo };
    case DELETE_REPO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default repoReducer;
