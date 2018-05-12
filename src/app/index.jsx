import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';
import routes from './routes';

import 'bootstrap-social';

// for bundling your styles
import './bundle.scss';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxPromise),
))

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.querySelector('.react-root')
);
