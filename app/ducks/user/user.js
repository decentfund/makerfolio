import { combineReducers } from 'redux';
import { AddCdpId } from './ActionTypes';

const cdpIds = (state = [], action) => {
  switch (action.type) {
    case AddCdpId:
      return Array.from(Set(state).add(action.cdpId));
    default:
      return state;
  }
};

export default combineReducers({ cdpIds });
