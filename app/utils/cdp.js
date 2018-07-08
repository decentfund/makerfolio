export const USD = 'USD';
export const DAI = 'DAI';
export const ETH = 'ETH';

export const getLiqPrice = ({ pip, ratio }) =>
  (parseFloat(pip) / parseFloat(ratio)) * 150;

export const getDaiToWithdraw = ({ tab, art }) =>
  parseFloat(tab) / 1.5 - parseFloat(art);

export const getPethToFree = ({ dai, pip }) => (dai / parseFloat(pip)) * 1.5;

export function formatCurrency(currency, value) {
  let decimalPoints;
  switch (currency) {
    case USD:
      decimalPoints = 2;
      break;
    case ETH:
    case DAI:
      decimalPoints = 8;
      break;
    default:
      decimalPoints = 0;
  }
  return String.format(
    parseFloat(Math.round(value * 100) / 100).toFixed(decimalPoints),
    ' ',
    currency
  );
}
