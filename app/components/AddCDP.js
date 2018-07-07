// @flow
import React, { Component } from 'react';
import styles from './Home.css';

type Props = {};

export default class AddCDP extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <p>Add CDP Here</p>
          <br />
          <input type="text" placeholder="Enter CPD" />
          <input type="button" value="Add CPD" />
        </div>
      </div>
    );
  }
}
