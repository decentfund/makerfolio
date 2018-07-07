// @flow
import { createStore, applyMiddleware, composeEnhancers } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import persistState from 'redux-localstorage';
import rootReducer from '../reducers';
import type { counterStateType } from '../reducers/counter';

const history = createHashHistory();
const router = routerMiddleware(history);
const stateLocalstorage = persistState();

const enhancer = composeEnhancers(
  applyMiddleware(thunk, router, stateLocalstorage),
  stateLocalstorage
);

function configureStore(initialState?: counterStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
