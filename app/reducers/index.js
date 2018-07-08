// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import transactions from './transactions';
import user from './user';

const rootReducer = combineReducers({
  counter,
  router,
  transactions,
  user
});

export default rootReducer;
