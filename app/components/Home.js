// @flow
import React, { Component } from 'react';
import CDPList from './CDPList';
import AddCDP from '../containers/AddCDPPage';
import Oracle from './Oracle';

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <Oracle />
        <AddCDP />
        <CDPList />
      </div>
    );
  }
}
