import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {AppContainer} from 'react-hot-loader';
import Root from './root';
import routes from './app/routes';
import configureStore from './app/redux/store';
import './app/styles/main.less';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history} routes={routes} store={store} />
    </AppContainer>,
    document.getElementById('app')
  );
};


render(Root);
// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./root', () => {
    const NewRoot = require('./root').default;

    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
      link.href = nextStyleHref;
    });

    render(NewRoot);
  });
}

