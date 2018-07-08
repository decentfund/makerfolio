// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import transactions from './transactions';
import user from './user';
import settings from './settings';

const rootReducer = combineReducers({
  counter,
  router,
  settings,
  transactions,
  user
});

export default rootReducer;
