// @flow
import { ADD_CDP_ID_TO_USER } from '../actions/user';

export type counterStateType = {
  +counter: number
};

export default function cpdIds(state: [], action) {
  switch (action.type) {
    case ADD_CDP_ID_TO_USER:
      return Array.from(Set(state).add(action.cdpId));
    default:
      return state;
  }
}
