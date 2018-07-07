// @flow
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class GraphQL extends Component<Props> {
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
    const cdpId = this.props.feedCDP.getCup.id;
    const cdpTime = this.props.feedCDP.getCup.time;
    return (
      <div>
        <p>GraphQL:</p>
        <p>ID: {cdpId}</p>
        <p>Time: {cdpTime}</p>
      </div>
    );
  }
}

export const FEED_CDP = gql`
  query feedCDP {
    getCup(id: 3) {
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

export default graphql(FEED_CDP, { name: 'feedCDP' })(GraphQL);
