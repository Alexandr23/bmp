import * as React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

interface IRoot {
    store: any;
    history: any;
    routes: any;
}

const Root = ({store, history, routes}: IRoot) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);


export default Root;