import { ADD_CDP_ID_TO_USER } from '../actions/user';

export default function cpdIds(state = [], action) {
  // set a breakpoint at this line
  switch (action.type) {
    case ADD_CDP_ID_TO_USER: {
      if (!state.includes(action.cpdId)) {
        state.push(action.cpdId);
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
