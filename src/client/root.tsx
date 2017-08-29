import * as React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureRoutes from '../app/routes';
import configureStore from '../app/redux/store';
import {ReduxAsyncConnect} from 'redux-connect';


const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);
const routes = configureRoutes(store);
const connectedCmp = (props: any) => <ReduxAsyncConnect {...props} />;


const Root = () => (
  <Provider store={store} key="provider">
    <Router history={history} render={connectedCmp} >{routes}</Router>
  </Provider>
);
export default Root;