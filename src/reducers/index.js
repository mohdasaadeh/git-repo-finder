import { combineReducers } from 'redux';

import repoReducer from './repoReducer';

const reducers = combineReducers({
  repos: repoReducer
});

export default reducers;
