// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <h2>Home hello</h2>
        <Link to="/addCDP">Add CDP</Link>
        <br />
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
