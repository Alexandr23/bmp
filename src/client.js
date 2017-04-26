import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './app/routes';
import configureStore from './app/redux/store';
import './app/styles/main.less';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);