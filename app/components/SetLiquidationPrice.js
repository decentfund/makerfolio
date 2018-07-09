// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div data-tid="backButton">
          <Link to="/">Back</Link>
        </div>
        <div data-tid="container">
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
