import React, { Component } from 'react';
import { connect } from 'react-redux';
import Web3 from 'web3';
import { updateRate } from '../actions/oracle';
import { formatCurrency } from '../utils/cdp';

const medianizerAbi = require('../abi/medianizer.json');

const read = (contract, func, ...args) =>
  new Promise((resolve, reject) => {
    contract[func](
      ...args,
      (error, result) => (error ? reject(error) : resolve(result))
    );
  });

let web3;

class Medianizer extends Component {
  state = {
    value: null
  };

  componentDidMount() {
    web3 = new Web3(
      new Web3.providers.HttpProvider('https://api.myetherapi.com/eth')
    );
    const med = web3.eth
      .contract(medianizerAbi)
      .at('0x729D19f657BD0614b4985Cf1D82531c67569197B');
    this.loadMedianizer(med);
    setInterval(() => this.updateMedianizer(med), 30000);
  }

  loadMedianizer = async med => {
    this.updateMedianizer(med);
  };

  updateMedianizer = async med => {
    const result = await read(med, 'peek');
    const value = web3.fromWei(result[0]);
    this.setState({ value });

    this.props.updateRate(value); // eslint-disable-line
  };

  render() {
    if (!this.state.value) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h1>
          ETH/USD {formatCurrency(web3.toBigNumber(this.state.value), 'USD')}
        </h1>
      </div>
    );
  }
}

export default connect(null, { updateRate })(Medianizer);
