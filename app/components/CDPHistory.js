// @flow
import React, { Component } from 'react';
import moment from 'moment';

type Props = {
  actions: Array<{
    act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
    arg: string,
    time: string,
    pip: string
  }>
};

export default class CDPHistory extends Component<Props> {
  props: Props;

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
              </tr>
            </thead>
            <tbody>
              {this.props.actions
                .filter(
                  a =>
                    ['OPEN', 'WIPE', 'DRAW', 'FREE', 'LOCK'].indexOf(a.act) >= 0
                )
                .map(action => (
                  <tr>
                    <td>{moment(action.time).format('DD-MM-YYYY HH:mm')}</td>
                    <td>{action.act}</td>
                    <td>{action.arg}</td>
                    <td>{action.pip} USD</td>
                    <td>
                      {['DRAW', 'WIPE'].indexOf(action.act) >= 0
                        ? action.arg
                        : parseFloat(action.arg) * parseFloat(action.pip)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
