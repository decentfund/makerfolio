// @flow
export const ADD_CDP_ID_TO_USER = 'ADD_CDP_ID_TO_USER';

export function addCdpIdToUser(cpdId: string) {
  return {
    type: ADD_CDP_ID_TO_USER,
    cpdId
  };
}
