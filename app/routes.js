/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import GraphQL from './components/GraphQL';

const client = new ApolloClient({
  uri: 'https://graphql.makerdao.com/v1'
});

export default () => (
  <ApolloProvider client={client}>
    <App>
      <Switch>
        <Route path="/counter" component={CounterPage} />
        <Route path="/graphql" component={GraphQL} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  </ApolloProvider>
);
