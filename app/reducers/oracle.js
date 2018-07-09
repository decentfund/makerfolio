// @flow
import { UPDATE_RATE } from '../actions/oracle';

export default function oracle(state = 0, action) {
  switch (action.type) {
    case UPDATE_RATE: {
      return action.rate;
    }
    default: {
      return state;
    }
  }
}
