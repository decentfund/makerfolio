import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  lockCap: PropTypes.string,
  lockCapByTime: PropTypes.string,
  margin: PropTypes.string,
  freePrice: PropTypes.string,
  profit: PropTypes.string
};

const Statistics = ({
  lockCap,
  lockCapByTime,
  margin,
  freePrice,
  profit
}: Props) => (
  <div>
    <h2>That is you statistics</h2>
    <div>
      <div>Locked capital investments: {lockCap} USD</div>
      <div>
        Locked capital investments by moment of investment: {lockCapByTime} USD
      </div>
      <div>Margin reinvested: {margin} PETH</div>
      <div>Ethereum price to get debt for free: {freePrice} USD/ETH</div>
      <div>Profit: {profit} USD</div>
    </div>
  </div>
);

export default Statistics;
