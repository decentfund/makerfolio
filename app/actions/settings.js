// @flow
export const SET_LIQUIDATION_PRICE = 'SET_LIQUIDATION_PRICE';

export function setLiquidationPrice(liquidationPrice: string) {
  return {
    type: SET_LIQUIDATION_PRICE,
    liquidationPrice
  };
}
