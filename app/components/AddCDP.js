// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class AddCDP extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Add CDP Here</h2>
          <Link to="/counter">Add CPD here kanna</Link>
        </div>
      </div>
    );
  }
}
