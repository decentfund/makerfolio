// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const myNotification = new Notification('Yo', {
      body: 'New CDP Added'
    });
    myNotification.onclick = () => {
      console.log('Notification clicked');
    };
  }

  render() {
    return (
      <div>
        <div data-tid="backButton">
          <Link to="/">Back</Link>
        </div>
        <div data-tid="container">
          <p>Add CDP Here</p>
          <br />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter CDP"
            value={this.state.cpdId}
            onChange={e => this.setState({ cpdId: e.target.value })}
          />
          <input
            type="button"
            value="Add CDP"
            onClick={() => this.addCdpIdToUser()}
          />
        </div>
      </div>
    );
  }
}
