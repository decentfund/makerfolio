// @flow
import { ADD_CDP_ID_TO_USER, REMOVE_CDP_ID_FROM_USER } from '../actions/user';

export default function cpdIds(state = [], action) {
  // set a breakpoint at this line
  switch (action.type) {
    case ADD_CDP_ID_TO_USER: {
      if (!state.includes(action.cpdId)) {
        state.push(action.cpdId);
      }
      return state;
    }
    case REMOVE_CDP_ID_FROM_USER: {
      if (state.includes(action.cpdId)) {
        state.splice(state.indexOf(action.cpdId), 1);
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
