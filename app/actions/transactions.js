// @flow
export const MARK_MARGIN = 'MARK_MARGIN';
export const CHANGE_PRICE = 'CHANGE_PRICE';

export function markMargin(tx: string) {
  return {
    type: MARK_MARGIN,
    tx
  };
}

export function changePrice(tx: string, value: string) {
  return {
    type: CHANGE_PRICE,
    tx,
    value
  };
}
