// @flow
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import Statistics from '../components/Statistics';
import {
  evaluatePETHPrice,
  getOperationPrices,
  marginReinvestment,
  getEthPriceForFreeDebt,
  getUserProfit
} from '../utils/prices';

type Props = {
  actions: {
    loading: boolean,
    error: ?Object,
    allCupActs?: {
      nodes: Array<{
        act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
        arg: ?string,
        time: string,
        pip: string,
        tx: string
      }>
    }
  },
  transactions: Object,
  art: string,
  style: Object
};

class CDPStatistics extends Component<Props> {
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

    const { transactions, style, art } = this.props;
    const { nodes: actions = [] } = this.props.actions.allCupActs;
    const mergedActions = actions.map(a => ({ ...a, ...transactions[a.tx] }));
    const lockCap = evaluatePETHPrice(
      mergedActions.filter(a => a.act === 'LOCK')
    );
    const lockCapByTime = getOperationPrices(
      mergedActions.filter(a => a.act === 'LOCK')
    );
    const margin = marginReinvestment(
      mergedActions.filter(a => a.act === 'LOCK')
    );
    const totalLock = mergedActions
      .filter(a => a.act === 'LOCK')
      .reduce((total, price) => total + parseFloat(price.arg), 0);
    const freePrice = getEthPriceForFreeDebt({
      art,
      totalLock,
      capLock: lockCap
    });
    const profit = getUserProfit({ art, totalLock, price: 502 });
    return (
      <Statistics
        lockCap={lockCap}
        lockCapByTime={lockCapByTime}
        margin={margin}
        freePrice={freePrice}
        profit={profit}
        style={style}
      />
    );
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
        ink
      }
    }
  }
`;

const mapStateToProps = state => ({ transactions: state.transactions });

export default connect(mapStateToProps)(
  graphql(ACTIONS, {
    name: 'actions',
    options: ({ id }) => ({ variables: { id: parseInt(id, 10) } })
  })(CDPStatistics)
);
