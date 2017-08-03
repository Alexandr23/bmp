import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
//import {AppContainer} from 'react-hot-loader';
//import Root from './root';
import configureRoutes from './app/routes';
import configureStore from './app/redux/store';
import './app/styles/main.less';


const { ReduxAsyncConnect } = require('redux-connect');
import {Provider} from 'react-redux';
import {Router} from 'react-router';


const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);
const routes = configureRoutes(store);
const connectedCmp = (props: any) => <ReduxAsyncConnect {...props} />;

const render = () => {
  ReactDOM.render(
    <Provider store={store} key="provider">
      <Router history={history} render={connectedCmp} >{routes}</Router>
    </Provider>,
    document.getElementById('app')
  );
};


render();
/*if ((module as any).hot) {
    (module as any).hot.accept('./root', () => {render(Root);});
}*/
