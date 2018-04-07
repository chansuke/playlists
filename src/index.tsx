import * as React from 'react';
import { render } from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import configuerStore from './store';

const history = createBrowserHistory();
const store = configuerStore([logger, routerMiddleware(history)]);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
