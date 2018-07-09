// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CDPList from './CDPList';
import AddCDP from '../containers/AddCDPPage';

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <AddCDP />
        <CDPList />
        <Link to="/CDPList">CDP List</Link>
        <br />
        <Link to="/setLiquidationPrice">Set Liquidation Price</Link>
        <br />
        <Link to="/cdpDetail">CDP Detail</Link>
        <br />
        <Link to="/cdpHistory">CDP History</Link>
        <br />
        <Link to="/graphql">to GraphQL</Link>
      </div>
    );
  }
}
