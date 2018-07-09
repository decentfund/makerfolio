export function evaluatePETHPrice(prices) {
  return prices
    .filter(price => !price.margin)
    .reduce((total, price) => total + parseFloat(price.arg), 0);
}

export function getOperationPrices(operations) {
  return operations
    .filter(op => !op.margin)
    .reduce(
      (total, op) =>
        parseFloat(op.arg) * parseFloat(op.price || op.pip) + total,
      0
    );
}

export function marginReinvestment(operations) {
  return operations
    .filter(op => op.margin)
    .reduce((total, price) => total + parseFloat(price.arg), 0);
}

export const getEthPriceForFreeDebt = ({ art, gov = 0, totalLock, capLock }) =>
  (parseFloat(art) + gov) / (totalLock - capLock);

export const getUserProfit = ({ art, gov = 0, totalLock, price }) =>
  totalLock * price - art - gov;
