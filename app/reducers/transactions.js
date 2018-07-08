import { MARK_MARGIN } from '../actions/transactions';

export default function transactions(state = {}, action) {
  // set a breakpoint at this line
  switch (action.type) {
    case MARK_MARGIN: {
      let margin = false;
      if (!state[action.tx] || !state[action.tx].margin) {
        margin = true;
      }
      return {
        ...state,
        [action.tx]: {
          ...state[action.tx],
          margin
        }
      };
    }
    default: {
      return state;
    }
  }
}
