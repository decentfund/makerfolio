// @flow
export const ADD_CDP_ID_TO_USER = 'ADD_CDP_ID_TO_USER';
export const REMOVE_CDP_ID_FROM_USER = 'REMOVE_CDP_ID_FROM_USER';

export function addCdpIdToUser(cpdId: string) {
  return {
    type: ADD_CDP_ID_TO_USER,
    cpdId
  };
}

export function removeCdpIdFromUser(cpdId: string) {
  return {
    type: REMOVE_CDP_ID_FROM_USER,
    cpdId
  };
}
