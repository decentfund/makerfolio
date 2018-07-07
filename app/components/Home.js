// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home hello</h2>
          <Link to="/addCDP">Add CPD</Link>
          <br />
          <Link to="/cdpHistory">CDP History</Link>
        </div>
      </div>
    );
  }
}
