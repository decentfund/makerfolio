// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import persistState from 'redux-localstorage';
import createRootReducer from '../reducers';
// TODO: Add reducers type

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const stateLocalstorage = persistState();

const enhancer = compose(
  applyMiddleware(thunk, router),
  stateLocalstorage
);

function configureStore(initialState?: counterStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
