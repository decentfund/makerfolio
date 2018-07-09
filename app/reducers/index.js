// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import transactions from './transactions';
import user from './user';
import settings from './settings';
import oracle from './oracle';

const rootReducer = combineReducers({
  oracle,
  router,
  settings,
  transactions,
  user
});

export default rootReducer;
