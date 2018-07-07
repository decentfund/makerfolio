// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import { user } from '../ducks/user';

const rootReducer = combineReducers({
  user,
  counter,
  router
});

export default rootReducer;
