// @flow
import React, { Component } from 'react';
import styles from './Home.css';

type Props = {
  addCdpIdToUser: (cpdId: string) => void
};

export default class AddCDP extends Component<Props> {
  props: Props;

  render() {
    const { addCdpIdToUser } = this.props;

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <p>Add CDP Here</p>
          <br />
          <br />
          <br />
          <input type="text" placeholder="Enter CPD" />
          <input
            type="button"
            value="Add CPD"
            onClick={() => addCdpIdToUser('abcd')}
          />
        </div>
      </div>
    );
  }
}
