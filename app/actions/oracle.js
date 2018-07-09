// @flow
export const UPDATE_RATE = 'UPDATE_RATE';

export function updateRate(rate: string) {
  return {
    type: UPDATE_RATE,
    rate
  };
}
