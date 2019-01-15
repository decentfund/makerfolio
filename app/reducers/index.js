// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import transactions from './transactions';
import user from './user';
import settings from './settings';
import oracle from './oracle';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    oracle,
    settings,
    transactions,
    user
  });
}
