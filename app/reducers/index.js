// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import user from './user';
import settings from './settings';

const rootReducer = combineReducers({
  user,
  settings,
  counter,
  router
});

export default rootReducer;
