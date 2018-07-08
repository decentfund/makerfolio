// @flow
import { SET_LIQUIDATION_PRICE } from '../actions/settings';

export default function liquidationPrice(state = {}, action) {
  // set a breakpoint at this line
  switch (action.type) {
    case SET_LIQUIDATION_PRICE: {
      return { liquidationPrice: action.liquidationPrice };
    }
    default: {
      return state;
    }
  }
}
