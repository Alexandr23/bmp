import './style.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';
import Root from './root';
import configureStore from '../app/redux/store';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('app')
);