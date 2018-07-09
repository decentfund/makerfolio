// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CDPListItem from './CDPListItem';

type Props = {
  cdpIds: Array<string>
};

class Home extends Component<Props> {
  props: Props;

  render() {
    const { cdpIds } = this.props;

    return (
      <div data-tid="container">
        {cdpIds.map(id => <CDPListItem id={id} key={id} />)}
        <Link to="/addCDP">Add CDP</Link>
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

const mapStateToProps = state => ({
  cdpIds: state.user
});

export default connect(mapStateToProps)(Home);
