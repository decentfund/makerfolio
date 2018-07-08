import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';

const store = configureStore();

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    position: relative;
    color: #000;
    height: 100vh;
    background-color: #FFF;
    font-family: Roboto, Arial, Helvetica, Helvetica Neue, serif;
    overflow-y: hidden;
  }
`;

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
