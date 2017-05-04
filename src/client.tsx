import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {AppContainer} from 'react-hot-loader';
import Root from './root';
import configureRoutes from './app/routes';
import configureStore from './app/redux/store';
import './app/styles/main.less';


const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);
const routes = configureRoutes(store);

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history} routes={routes} store={store} />
    </AppContainer>,
    document.getElementById('app')
  );
};


render(Root);
if ((module as any).hot) {
    (module as any).hot.accept('./root', () => {render(Root);});
}

