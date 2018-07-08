import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CDPListItem extends Component<Props> {
  props: Props;

  render() {
    if (this.props.feedCDP && this.props.feedCDP.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.feedCDP && this.props.feedCDP.error) {
      return <div>Error</div>;
    }

    // 3
    const {
      feedCDP: {
        getCup: { id, art, ink, ratio, pip, tab }
      }
    } = this.props;
    const liq = (pip / ratio) * 150;
    const dai = tab / 1.5 - art;
    const peth = (dai / pip) * 1.5;
    return (
      <div>
        <p>ID: {id}</p>
        <p>Debt: {art} DAI</p>
        <p>Locked: {ink} PETH</p>
        <p>Liquidation price: {liq}</p>
        <p>
          Dai to withdraw: {dai} Peth to free: {peth}
        </p>
      </div>
    );
  }
}

export const FEED_CDP = gql`
  query feedCDP($id: Int!) {
    getCup(id: $id) {
      art
      block
      deleted
      id
      idx
      guy
      ink
      ire
      lad
      pip
      per
      ratio
      tab
      time
      actions(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export default graphql(FEED_CDP, {
  name: 'feedCDP',
  options: ({ id }) => ({ variables: { id: parseInt(id, 10) } })
})(CDPListItem);
