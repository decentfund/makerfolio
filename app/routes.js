/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import AddCDPPage from './containers/AddCDPPage';
import SetLiquidationPricePage from './containers/SetLiquidationPricePage';
import CDPHistoryPage from './containers/CDPHistoryPage';
import CDPDetailPage from './containers/CDPDetailPage';

const client = new ApolloClient({
  uri: 'https://graphql.makerdao.com/v1'
});

export default () => (
  <ApolloProvider client={client}>
    <App>
      <Switch>
        <Route path="/counter" component={CounterPage} />
        <Route path="/cdpHistory" component={CDPHistoryPage} />
        <Route path="/cdpDetail" component={CDPDetailPage} />
        <Route path="/addCDP" component={AddCDPPage} />
        <Route path="/setLiquidationPrice" omponent={SetLiquidationPricePage} />
        <Route path="/cdp/:id" component={CDPDetailPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  </ApolloProvider>
);
