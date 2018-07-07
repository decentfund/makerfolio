import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, createStore} from 'redux'
import {user} from './ducks/user'
import {Map} from 'immutable'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux-immutable';
import {createBrowserHistory} from 'history'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const browserHistory = createBrowserHistory();
const routeMiddleware = routerMiddleware(browserHistory);
const middleware = [routeMiddleware];

const ui = (state = Map({}), action) => {
    return combineReducers(
        {
            user
        }
    )(state, action);
};

const store = createStore(
    combineReducers({
        ui,
        routing: routerReducer
    }), Map({}), composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render((
    <App store={store}/>
),document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
