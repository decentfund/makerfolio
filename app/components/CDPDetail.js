// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class CDPHistory extends Component<Props> {
  props: Props;

  render() {
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
            <p>liquidation price (USD): 100$</p>
            <p>Amount of DAI user can withdraw: 100$</p>
            <p>Amount of PETH user can withdraw: 100$</p>
            <p>Amount of PETH that was already drawn: 10$</p>
            <p>Total amount of PETH stored as collateral: 20$</p>
          </div>
        </div>
      </div>
    );
  }
}
