// @flow
import React, { Component } from 'react';
import CDPHistoryRecord from './CDPHistoryRecord';

// eslint-disable-next-line prefer-destructuring
const shell = require('electron').shell;

type Props = {
  actions: Array<{
    act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
    arg: string,
    time: string,
    pip: string,
    tx: string
  }>
};

const getLink = tx => `https://etherscan.io/tx/${tx}`;

export default class CDPHistory extends Component<Props> {
  props: Props;

  handleTxClick = (event: any, tx: string) => {
    event.preventDefault();
    shell.openExternal(getLink(tx));
  };

  render() {
    return (
      <div data-tid="history">
        <p>CDP History</p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type of Operation</th>
                <th>Amount</th>
                <th>Price of Ethereum(USD)</th>
                <th>Sum of Operation(USD)</th>
                <th>Margin</th>
              </tr>
            </thead>
            <tbody>
              {this.props.actions
                .filter(
                  a =>
                    ['OPEN', 'WIPE', 'DRAW', 'FREE', 'LOCK'].indexOf(a.act) >= 0
                )
                .map(action => (
                  <CDPHistoryRecord
                    action={action}
                    onTxClick={this.handleTxClick}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
