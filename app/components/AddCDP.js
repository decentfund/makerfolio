// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {
  addCdpIdToUser: (cpdId: string) => void
};

export default class AddCDP extends Component<Props> {
  props: Props;

  state = {
    cpdId: ''
  };

  addCdpIdToUser() {
    this.props.addCdpIdToUser(this.state.cpdId);
    this.setState({ cpdId: '' });
  }

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container} data-tid="container">
          <p>Add CDP Here</p>
          <br />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter CPD"
            value={this.state.cpdId}
            onChange={e => this.setState({ cpdId: e.target.value })}
          />
          <input
            type="button"
            value="Add CPD"
            onClick={() => this.addCdpIdToUser()}
          />
        </div>
      </div>
    );
  }
}
