export const getLiqPrice = ({ pip, ratio }) =>
  parseFloat(pip) / parseFloat(ratio) * 150;

export const getDaiToWithdraw = ({ tab, art }) =>
  parseFloat(tab) / 1.5 - parseFloat(art);

export const getPethToFree = ({ dai, pip }) => dai / parseFloat(pip) * 1.5;
