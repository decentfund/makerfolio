// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  liq: number,
  dai: number,
  peth: number,
  art: string,
  ink: string,
  onDeleteClick: () => void
};

export default class CDPDetail extends Component<Props> {
  props: Props;

  render() {
    const { liq, dai, peth, art, ink, onDeleteClick } = this.props;
    return (
      <div>
        <div data-tid="backButton">
          <Link to="/">Back</Link>
        </div>
        <div data-tid="container">
          <p>CDP Detail</p>
          <button onClick={onDeleteClick}>Delete</button>
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
