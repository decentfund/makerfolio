export const USD = 'USD';
export const DAI = 'DAI';
export const ETH = 'ETH';

export const getLiqPrice = ({ pip, ratio }) =>
  parseFloat(pip) / parseFloat(ratio) * 150;

export const getDaiToWithdraw = ({ tab, art }) =>
  parseFloat(tab) / 1.5 - parseFloat(art);

export const getPethToFree = ({ dai, pip }) => dai / parseFloat(pip) * 1.5;

export function formatCurrency(value, currency, precision = 0) {
  let decimalPoints = precision;
  if (!precision) {
    switch (currency) {
      case USD:
      case DAI:
        decimalPoints = 2;
        break;
      case ETH:
        decimalPoints = 4;
        break;
      default:
        decimalPoints = 0;
    }
  }
  return parseFloat(
    Math.round(value * 10 ** decimalPoints) / 10 ** decimalPoints
  ).toFixed(decimalPoints);
}
