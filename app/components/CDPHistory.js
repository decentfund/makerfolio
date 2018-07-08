// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class CDPHistory extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container} data-tid="container">
          <p>CDP History</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Type of Operation</th>
                  <th>Value of Operation</th>
                  <th>Currency of Operation</th>
                  <th>Price of Ethereum(USD)</th>
                  <th>Sum of Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LOCK</td>
                  <td>10</td>
                  <td>PETH</td>
                  <td>10 USD</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>WIPE</td>
                  <td>20</td>
                  <td>DAI</td>
                  <td>10 USD</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>DRAW</td>
                  <td>15</td>
                  <td>PETH</td>
                  <td>10 USD</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>FREE</td>
                  <td>80</td>
                  <td>DAI</td>
                  <td>10 USD</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>BITE</td>
                  <td>10</td>
                  <td>PETH</td>
                  <td>10 USD</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
