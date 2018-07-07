/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import AddCDPPage from './containers/AddCDPPage';
import CDPHistoryPage from './containers/CDPHistoryPage';
import CDPDetailPage from './containers/CDPDetailPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/cdpHistory" component={CDPHistoryPage} />
      <Route path="/cdpDetail" component={CDPDetailPage} />
      <Route path="/addCDP" component={AddCDPPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
