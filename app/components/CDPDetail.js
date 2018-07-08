// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {
  liq: number,
  dai: number,
  peth: number,
  art: string,
  ink: string
};

export default class CDPDetail extends Component<Props> {
  props: Props;

  render() {
    const { liq, dai, peth, art, ink } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container} data-tid="container">
          <p>CDP Detail</p>
          <div>
            <p>liquidation price: {liq} USD/ETH</p>
            <p>Amount of DAI user can withdraw: {dai} DAI</p>
            <p>Amount of PETH user can withdraw: {peth} PETH</p>
            <p>Amount of PETH that was already drawn: {art} DAI</p>
            <p>Total amount of PETH stored as collateral: {ink} PETH</p>
          </div>
        </div>
      </div>
    );
  }
}
