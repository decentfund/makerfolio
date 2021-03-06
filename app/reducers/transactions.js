import { MARK_MARGIN, CHANGE_PRICE } from '../actions/transactions';

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
    case CHANGE_PRICE: {
      return {
        ...state,
        [action.tx]: {
          ...state[action.tx],
          price: action.value
        }
      };
    }
    default: {
      return state;
    }
  }
}
