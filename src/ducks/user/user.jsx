import {Set} from 'immutable'
import {combineReducers} from "redux-immutable";
import {AddCdpId} from './ActionTypes'

const cdpIds = (state = Set([]), action) => {
    switch (action.type) {
        case AddCdpId:
            return state.add(action.cdpId);
    }
    return state;
};

const user = combineReducers({cdpIds});

export {user}