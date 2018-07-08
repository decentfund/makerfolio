// @flow
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CDPHistory from '../components/CDPHistory';

type Props = {
  actions: {
    loading: boolean,
    error: ?Object,
    allCupActs?: {
      nodes: Array<{
        act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
        arg: ?string,
        time: string,
        pip: string
      }>
    }
  }
};

class CDPHistoryPage extends Component<Props> {
  props: Props;

  render() {
    if (this.props.actions && this.props.actions.loading) {
      return <div>Loading</div>;
    }

    if (this.props.actions && this.props.actions.error) {
      return <div>Error</div>;
    }

    if (
      this.props.actions.allCupActs === null ||
      this.props.actions.allCupActs === undefined
    )
      return <div>Error</div>;

    const { nodes: actions = [] } = this.props.actions.allCupActs;
    return <CDPHistory actions={actions} />;
  }
}

export const ACTIONS = gql`
  query actions($id: Int!) {
    allCupActs(condition: { id: $id }) {
      nodes {
        act
        arg
        time
        tx
        pip
      }
    }
  }
`;

export default graphql(ACTIONS, {
  name: 'actions',
  options: ({ id }) => ({ variables: { id: parseInt(id, 10) } })
})(CDPHistoryPage);
