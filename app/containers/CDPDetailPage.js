// @flow
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CDPHistory from './CDPHistoryPage';
import CDPStatistics from './CDPStatistics';

type Props = {
  feedCDP: {
    loading: boolean,
    error: ?Object,
    getCup?: {
      art: string,
      ink: string,
      ratio: string,
      pip: string,
      tab: string,
      id: number
    }
  }
};

class CDPDetailPage extends Component<Props> {
  props: Props;

  render() {
    if (this.props.feedCDP && this.props.feedCDP.loading) {
      return <div>Loading</div>;
    }

    if (this.props.feedCDP && this.props.feedCDP.error) {
      return <div>Error</div>;
    }

    if (
      this.props.feedCDP.getCup === null ||
      this.props.feedCDP.getCup === undefined
    )
      return <div>Error</div>;

    const { id } = this.props.feedCDP.getCup;
    return (
      <div>
        <CDPHistory id={id} />
        <CDPStatistics id={id} />
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
      actions {
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
  options: ({
    match: {
      params: { id }
    }
  }) => ({ variables: { id: parseInt(id, 10) || 2377 } })
})(CDPDetailPage);
