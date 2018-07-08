export function evaluatePETHPrice(prices) {
  return prices
    .filter(price => !price.margin)
    .reduce((total, price) => total + price.ink, 0);
}

export function getOperationPrices(operations) {
  return operations
    .filter(op => !op.margin)
    .reduce((total, op) => op.ink * op.pip + total, 0);
}
