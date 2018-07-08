// @flow
export const MARK_MARGIN = 'MARK_MARGIN';

export function markMargin(tx: string) {
  return {
    type: MARK_MARGIN,
    tx
  };
}
