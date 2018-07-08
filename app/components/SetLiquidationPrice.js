// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {
  setLiquidationPrice: (liquidationPrice: string) => void,
  liquidationPrice: string
};

export default class SetLiquidationPrice extends Component<Props> {
  props: Props;

  state = {
    liquidationPrice: ''
  };

  setLiquidationPrice() {
    this.props.setLiquidationPrice(this.state.liquidationPrice);
  }

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container} data-tid="container">
          <p>Liquidation Price</p>
          <br />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Liquidation Price"
            value={this.props.liquidationPrice}
            onChange={e => this.setState({ liquidationPrice: e.target.value })}
          />
          <input
            type="button"
            value="Save"
            onClick={() => this.setLiquidationPrice()}
          />
        </div>
      </div>
    );
  }
}
