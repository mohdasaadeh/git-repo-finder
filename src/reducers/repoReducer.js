import _ from 'lodash';

import { CREATE_REPO, DELETE_REPO } from '../actions/types';

const repoReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REPO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_REPO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default repoReducer;
